const palette =  (state,action) => {
    if(state == undefined ){
        state = { "r" : 30 , "g":30 , "b" : 20}
    }
    
    switch (action.type) {
        case 'RGB_UPDATE':
            for (const key in state) {
                if (state.hasOwnProperty(action.mykey)) {
                    state[key] = action.value
                }
            }
            console.log(JSON.stringify(state)+"不知道有没有改变");
            return state;
            break;
        default:
            return state
            break;
    }
}
export default palette;