export default (state,action) => {
    if(state == undefined ){
        state = { "v" : 112 , "a":1 }
    }
    
    switch (action.type) {
        case 'ZENGJIA':
            return { ...state , "v" : state.v + 1}
            break;
        case 'JIANSHAO':
            return { ...state , "v" : state.v - 1}
            break;
        default:
            return state
            break;
    }
}