import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import firebase from '../../firebase';
import PlayerList from './PlayerList';
import SearchPlayer from './SearchPlayer';

class room extends  Component {

    constructor(props) {
        super(props);

        this.database = firebase.database();

    }

    componentDidMount() {
        var $root = this;
        this.database.ref('games/' + $root.props.gameId).on('value', function (snapshot) {
            if(snapshot.hasChild('status')){
                $root.props.checkGame($root.props.gameId, snapshot);
            }
        })
        
    }

    render() {
        return (
            <Aux>
                <div className="game-room">
                    <div className="row">
                        <div className="col-md-12 heading">
                            <img src="https://dummyimage.com/60x60/000/fff"/>
                            <h5>Choose Players</h5>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.isServer &&
                            <SearchPlayer />
                        }
                    </div>
                    <div className="row">
                        <PlayerList />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center text-uppercase">
                            {this.props.isServer &&
                                <button className="start-game" disabled={!this.props.enableStartGameButton}>START GAME</button>
                            }
                            </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToPros = state => {

    return {
        enableStartGameButton: Object.keys(state.players).length == state.gameType,
        isServer: state.firstPlayerId === state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkGame: (gameId, snapshot) => dispatch(actions.checkGame(gameId,  snapshot))
    };
};

export default connect(mapStateToPros, mapDispatchToProps)(room);