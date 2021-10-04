export const clickReducer = (state = {msg: ''}, action) => {
    switch(action.type){
    case 'CLICK':
        return {...state, msg: 'Primeira Msg' }
    break;
    default:
        return state;
    }
}