

export default (state = [], action = {}) => {
    //console.log(action);
    switch (action.type) {
        case 'ADD_LOG_MESSAGE':
            return [
                ...state,
                {
                    type: action.msg.type,
                    text: action.msg.text
                }
                
            ]
        default: return state;
    }    
}