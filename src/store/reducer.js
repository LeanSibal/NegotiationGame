import * as actionType from './actions/actionTypes';

const initialState = {
    userToken: null,
    userId: null,
    displayName: null,
    localId: null,
    errorMessage: null,
    loading: false,
    gameType : null,
    gameId : null,
    gameState : null,
    players: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.AUTH_FAIL:
        return {
            errorMessage : action.errorMessage
        }
        case actionType.AUTH_SUCCESS:
            return {
                userToken : action.userToken,
                userId : action.userId
            }
        case actionType.GAME_TYPE_SELECTED:
            return {
            gameType: action.noOfPlayer,
            gameState: actionType.GAME_STATE_WAITING
        }
        case actionType.GAME_STATE_WAITING:
            return {
                gameType: action.noOfPlayer,
                gameState: action.gameState,
                gameId: action.gameId,
                players: action.players,
                userId: state.userId
            }
    }
   
    return state;
};

export default reducer; 