import * as actionType from './actions/actionTypes';

const initialState = {
    userToken: null,
    userId: null,
    displayName: null,
    userPhoto: null,
    userEmail: null,
    localId: null,
    errorMessage: null,
    loading: false,
    gameType : null,
    gameId : null,
    gameState : null,

    gameScore: 500,
    gameRound: 5,
    gameActions: null,
    
    players: null,
    playerCollection: null,
    firstPlayerId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_FAIL:
        return {
            ...state,
            errorMessage : action.errorMessage
        }
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                userToken : action.userToken,
                userId : action.userId
            }
        case actionType.GAME_TYPE_SELECTED:
            return {
                ...state,
            gameType: action.noOfPlayer,
            gameState: 'waiting',
            gameId: action.gameId,
            players: action.players
        }
        case actionType.GAME_STATE_WAITING:
            return {
                ...state,
                gameType: action.noOfPlayer,
                gameState: action.gameState,
                gameId: action.gameId,
                players: action.players,
                userId: state.userId,
                firstPlayerId: action.firstPlayerId
            }
        case actionType.UPDATE_GAME_STATE:
            return {
                ...state,
                gameScore: action.gameScore
            }
        case actionType.UPDATE_GAME_ACTION:
            return {
                ...state,
                gameActions: action.gameActions
            }
        case actionType.PLAYER_PROFILE:
            return {
                ...state,
                displayName: action.displayName,
                userPhoto: action.thumbnail,
                userEmail: action.userEmail,
                gameId: action.currentGameId
            }
        case actionType.PLAYER_COLLECTION:
            return {
                ...state,
                playerCollection: action.playerCollection
            }
        case actionType.UPDATE_PLAYER_LIST:

            let newData = {};
            let key = action.key;
            let playerData = action.playerData;
             newData[key] = playerData;
            return {
                ...state,
                players: Object.assign(state.players, newData,)

            }
        default:
            return state;
    }


};

export default reducer; 