import axios from 'axios';
import * as actionType from './actionTypes';

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
};

export const authSuccess = (userToken, userId) => {
    return {
        type : actionType.AUTH_SUCCESS,
        userToken: userToken,
        userId: userId
    }
};

export const authFail = (errResponse) => {
    return {
        type : actionType.AUTH_FAIL,
        error : 'error',
        errorMessage: errResponse
    }
};

export const logout = () => {
    return {
        type: actionType.AUTH_LOGOUT
    }
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const apiKey = 'AIzaSyBNtHeWML1zkAMRzaoVytTpX5dzIpChoIg';
        const requestUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + apiKey;

        axios.post(requestUrl,authData)
            .then(res => {

                const idToken = res.data.idToken;
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('userToken', idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
            })
            .catch(res => {
                dispatch(authFail(res));
            });

    };
};

export const authCheckState = () => {
    return dispatch => {
        const userToken = localStorage.getItem('userToken');
        if(!userToken){
            dispatch(logout());
        }else{
            const expirationDate = localStorage.getItem('expirationDate');
            if(expirationDate <= new Date()) {
                dispatch(logout());
            }else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(userToken,userId));
            }
        }
    };
};