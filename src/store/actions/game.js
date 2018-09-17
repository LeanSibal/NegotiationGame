import * as actionType from './actionTypes';
import axios from 'axios';

export const gameTypeSelect = (value) => {
   return {
       type : actionType.GAME_TYPE_SELECTED,
       noOfPlayer : value
   };
};

export const gameTypeSelected = (value, gameId) => {

    return dispatch => {
       dispatch(gameTypeSelect(value));
        localStorage.setItem('gameId', gameId);
    }
};

export const waitingRoom = (gameId, players, gameState, playerCount) => {
    return {
        type: actionType.GAME_STATE_WAITING,
        noOfPlayer:playerCount,
        gameState: gameState,
        gameId: gameId,
        players:players
    }
};


export const searchPlayer = (terms) => {
    return dispatch => {
        console.log(terms);
    }
};

export const removePlayer = (gameId,playerKey) => {
    console.log(playerKey);
    return dispatch => {

        let firebaseUrl = 'https://negotiation-game.firebaseio.com';
        let refPlayer = '/players/' + playerKey + '/current_game_id.json';
        let refGame = '/games/' + gameId + '/players/' + playerKey + '.json';

        axios.delete(firebaseUrl + refPlayer).then(res =>{
            axios.delete(firebaseUrl + refGame).then(res => {

            }).catch(error => {

            });
        }).catch(error => {

        });
    }
}

export const checkGame = (gameId, snapshot) => {
    return dispatch => {

        var gameState = snapshot.child('status').val();
        var players = snapshot.child('players').val();
        var playerCount = snapshot.child('player_count').val();

        dispatch(waitingRoom(gameId, players, gameState, playerCount))
    }
};