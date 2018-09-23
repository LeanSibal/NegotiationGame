import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Aux';
import firebase from '../../firebase';

class Joinplayer  extends Component {

    constructor(props){
        super(props)

        this.joinPlayerIntoGame = this.joinPlayerIntoGame.bind(this);
        this.isPlayerAlreadyAdded = this.isPlayerAlreadyAdded.bind(this);
    }

    joinPlayerIntoGame() {

        let isReady = 1;
        let playerId = this.props.playerId;
        let playerName = this.props.playerName;
        let playerPhoto = this.props.playerPhoto;
        let playerEmail = this.props.playerEmail;

        let playerData = {};
        playerData = {
            'player_id' : playerId,
            'display_name' : playerName,
            'email' : playerEmail,
            'photo_url' : playerPhoto,
            'is_ready' : isReady
        };

        var propState = this;
        firebase.database().ref('games/'+this.props.gameId+'/players').push(playerData).then(function(snapshot) {
            var key = snapshot.key;

            if(key !== null) {
                propState.props.updatePlayerList(playerData, key);
                propState.props.updatePlayerGameId(playerId, propState.props.gameId);
            }
        });

    }

    isPlayerAlreadyAdded(playerId)  {
        var result = function(player){
            return player.player_id === playerId;
        };
      return  Object.values(this.props.players).some(result);
    }

    render() {
        return (
            <Aux>
                {this.isPlayerAlreadyAdded(this.props.playerId) ?
                    <button disabled>Delete</button> :
                    <button onClick={this.joinPlayerIntoGame}>Add</button>
                }
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        players: state.players
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updatePlayerList: (playerData, key) => dispatch(actions.updatePlayerList(playerData, key)),
        updatePlayerGameId: (userId, gameId) => dispatch(actions.updatePlayerGameId(userId, gameId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Joinplayer)