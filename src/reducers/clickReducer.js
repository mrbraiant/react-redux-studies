export const clickReducer = (state = {msg: ''}, action) => {
    switch(action.type){
    case 'CLICK':
        return {...state, msg: action.msg }
    break;
    default:
        return state;
    }
}