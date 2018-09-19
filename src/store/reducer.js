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
    players: null,
    playerCollection: null
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
                userId: state.userId
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
        default:
            return state;
    }


};

export default reducer; 