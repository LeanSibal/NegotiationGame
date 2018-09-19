import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SelectorUi from './SelecorUi';
import firebase from '../../firebase';


class creategame extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            gameType: null
        }
        this.submitGameType = this.submitGameType.bind(this);
    }

    selector() {
        var selector = $('.selector');
        var propState = this;
        selector.on('change', function () {
            let $this = $(this);
            selector.removeClass('selected');
            $this.addClass('selected');
            propState.setState({
                gameType: $this.find('input').val()
            })
        });
    };


    componentDidMount() {
        this.selector();
    };

    submitGameType(){

        let isReady = 1;
        let playerData = {};
        playerData[this.props.userId] = {
            'player_id' : this.props.userId,
            'display_name' : this.props.displayName,
            'email' : this.props.userEmail,
            'photo_url' : this.props.userPhoto,
            'is_ready' : isReady
        };
        var gameData = {
            'player_count' : this.state.gameType,
            'status' : 'waiting',
            'players' : playerData,
            'messages' : {
            }
        };
       
        var propState = this;
       firebase.database().ref('games').push(gameData).then(function(snapshot) {
            var key = snapshot.key;

            if(key !== null){
                propState.props.sendGameType(propState.state.gameType, key, playerData);
                propState.props.updatePlayerGameId(propState.props.userId,key);
            }
        });
    };

    render() {
        return (
            <Aux>
                <div className="create-game">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <img src="https://dummyimage.com/100x100/000/fff"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 heading"><h3><strong>Set up new game</strong></h3></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <SelectorUi value="3" ClassName="selector three-p" />
                        </div>
                        <div className="col-md-6">
                            <SelectorUi value="5" ClassName="selector five-p" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 heading">
                            <button className="start-game" onClick={this.submitGameType}>START GAME</button>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        userId: state.userId,
        displayName: state.displayName,
        userPhoto: state.userPhoto,
        userEmail: state.userEmail
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendGameType : (value, gameId, playerData) => dispatch(actions.gameTypeSelected(value, gameId, playerData)),
        updatePlayerGameId : (userId,gameId) => dispatch(actions.updatePlayerGameId(userId,gameId))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(creategame);