import jwt from 'jsonwebtoken';
import axios from 'axios';

export function setCurrentUser(user){
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export function userLoginRequest(data){
    return dispatch => {
        return axios.post('/api/auth', data).then(res =>{
            localStorage.setItem('jwtToken', res.data.access_token);
            dispatch(setCurrentUser(res.data));
        });
    }
}

export function userLogoutRequest(){
    return dispatch=> {
        localStorage.removeItem('jwtToken');
        dispatch(setCurrentUser({}));
    }
}
