import * as actionType from './actionTypes';
import axios from 'axios';
import * as  firebaseConfig from '../../firebaseConfig';


export const nextRound = (int) => {
    return {
        type : actionType.NEXT_ROUND,
        gameRound: int
    }
}

export const moveNextRound = (gameId,newRound) => {
    return dispatch => {
        dispatch(nextRound(newRound));
        let currentDate = new Date();
        let firebaseUrl = firebaseConfig.config.databaseURL;
            let refGameRound = '/games/' + gameId + '.json';
            let data = {
                'current_round' : newRound,
                'round_timer' : currentDate
            };
            axios.patch(firebaseUrl + refGameRound, data).then(res =>{
            }).catch(error => {

             });
    }
}