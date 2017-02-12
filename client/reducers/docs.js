const initialState = {
    route:{}
}
export default (state = initialState, action = {}) => {
    switch(action.type){
        case 'ADD_ROUTE_MESSAGE':
            return {
                route: action.msg
            }
        default: return state
    }
    return state;
}