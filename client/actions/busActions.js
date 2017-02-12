import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

export function addBusMessage(message){
    return {
        type: 'ADD_BUS_MESSAGE',
        message
    }
}

export function addRouteMessage(msg){
    return {
        type: 'ADD_ROUTE_MESSAGE',
        msg
    }
}

export function busMessagesRequest(token){
    return dispatch => {
        const jwtToken = localStorage.getItem('jwtToken');
        return axios.post('/api/docs', {token: jwtToken});
    }
}

export function routeMessageRequest(){
    return dispatch => {
        const jwtToken = localStorage.getItem('jwtToken');
        return axios.post('/api/docs', {token: jwtToken, myReq: 0}).then(res=>{
            dispatch(addRouteMessage(res.data));
        })
    }
}