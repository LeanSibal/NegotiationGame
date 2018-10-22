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

export const updatePlayerList = (playerData, key) => {
    return  {
        type : actionType.UPDATE_PLAYER_LIST,
        playerData: playerData,
        key: key
    }
}

export const removePlayer = (gameId,playerKey, playerId) => {
    return dispatch => {
        let firebaseUrl = firebaseConfig.config.databaseURL;
        let refPlayer = '/users/' + playerId + '/current_game_id.json';
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

export const updateGameState = (player) =>{
    return {
        type: actionType.UPDATE_GAME_STATE,
        gameScore: player.score
    }
}

export const updateGameAction = (gameActions) => {
    return {
        type: actionType.UPDATE_GAME_ACTION,
        gameActions: gameActions
    }
}

export const updateGameRound = (gameRound,roundTimer) => {
    return{
        type : actionType.NEXT_ROUND,
        gameRound: gameRound,
        roundTimer:roundTimer
    }
}

export const updateChatMessage = (chatMessage) => {
    return{
        type : actionType.UPDATE_CHAT_MESSAGE,
        chatMessage : chatMessage
    }
}

export const checkGame = (gameId, snapshot) => {
    return dispatch => {
        let userId = localStorage.getItem('userId');
        var players = snapshot.child('players').val();
        var gameActions = snapshot.child('rounds').val();
        var gameRound = snapshot.child('current_round').val();
        var serverId = snapshot.child('server_uid').val();
        var roundTimer = snapshot.child('round_timer').val();
        var chatMessage = snapshot.child('chat_messages').val();
        Object.values(players).filter(function(player){
            if(player.player_id === userId){
                dispatch(updateGameState(player));
                dispatch(updateGameAction(gameActions));
                dispatch(updateGameRound(gameRound,roundTimer));
                dispatch(updateChatMessage(chatMessage));
            }
        });


        var gameState = snapshot.child('status').val();
        var playerCount = snapshot.child('player_count').val();
        dispatch(waitingRoom(gameId, players, gameState, playerCount,serverId))
    }
};

export const waitingRoom = (gameId, players, gameState, playerCount,serverId) => {
    
    let firstPlayerId = serverId;
    return {
        type: actionType.GAME_STATE_WAITING,
        noOfPlayer:playerCount,
        gameState: gameState,
        gameId: gameId,
        players:players,
        firstPlayerId: firstPlayerId
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

export const startGame = (gameId, roundData) => {
        return dispatch => {

            let refPlayer = ['/games',gameId, 'rounds.json' ];
            let firebaseUrl = firebaseConfig.config.databaseURL;
            axios.patch(firebaseUrl + refPlayer.join('/'), roundData).then(res =>{
                let status = {"status" : "playing","current_round" : 1};
                let statusRef = ['/games/' + gameId + '.json' ];
                axios.patch(firebaseUrl + statusRef, status).then(res =>{})
            })
        }
}

export const submitGameAction = (gameId, userId, round, action) => {
    return dispatch => {

        let actionData = {};
         actionData = {
             'action': action,
             'player_id' : userId
         };

        let refPlayer = ['/games',gameId, 'rounds', round, userId + '.json' ];
        let firebaseUrl = firebaseConfig.config.databaseURL;
        axios.patch(firebaseUrl + refPlayer.join('/'), actionData).then(res =>{
        }).catch(error => {

        });
    }
}

export const sendChatMessage = (gameId, message) => {
    return dispatch => {

        let chatMessageRef = ['/games',gameId, 'chat_messages' + '.json' ];
        let firebaseUrl = firebaseConfig.config.databaseURL;
        axios.post(firebaseUrl + chatMessageRef.join('/'), message).then(res =>{
        }).catch(error => {

        });
    }
}