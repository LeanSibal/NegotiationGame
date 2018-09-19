import * as actionType from './actionTypes';
import axios from 'axios';
import * as  firebaseConfig from '../../firebaseConfig';

export const gameTypeSelect = (value, gameId, playerData) => {
   return {
       type : actionType.GAME_TYPE_SELECTED,
       noOfPlayer : value,
       gameId: gameId,
       players: playerData
   };
};

export const gameTypeSelected = (value, gameId, playerData) => {
    return dispatch => {
       dispatch(gameTypeSelect(value, gameId, playerData));
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
    }
};

export const removePlayer = (gameId,playerKey) => {
    return dispatch => {

        let firebaseUrl = firebaseConfig.config.databaseURL;
        let refPlayer = '/users/' + playerKey + '/current_game_id.json';
        let refGame = '/games/' + gameId + '/players/' + playerKey + '.json';

        axios.delete(firebaseUrl + refPlayer).then(res =>{
            axios.delete(firebaseUrl + refGame).then(res => {

            }).catch(error => {

            });
        }).catch(error => {

        });
    }
}

export const updatePlayerGameId = (userId, gameId) => {
    return dispatch => {
        let firebaseUrl = firebaseConfig.config.databaseURL;
        let refPlayer = '/users/' + userId + '.json';

        let data = {
            'current_game_id':gameId
        };

        axios.patch(firebaseUrl + refPlayer, data).then(res =>{
        }).catch(error => {

        });
    }
};

export const checkGame = (gameId, snapshot) => {
    return dispatch => {

        var gameState = snapshot.child('status').val();
        var players = snapshot.child('players').val();
        var playerCount = snapshot.child('player_count').val();
        dispatch(waitingRoom(gameId, players, gameState, playerCount))
    }
};


export const actionPlayerCollection = (result ) => {

    let collection = [];
    Object.values(result).map(function(values){
       collection.push(values);
    });
    return {
        type: actionType.PLAYER_COLLECTION,
        playerCollection: collection
    }
}

export const getPlayerCollection = () => {
    return dispatch => {
        axios.get(firebaseConfig.config.databaseURL + '/users.json')
            .then(res => {
                dispatch(actionPlayerCollection(res.data));
            });
    }
};