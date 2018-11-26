import { createStore } from "redux";

// initial state
var defaultState = {
    originAmount : '0.00'
}
// increment by 1
function amount(state = defaultState,action) {
  console.log(`state ${ JSON.stringify(state)}`)
    if(action.type == 'CHANGE_ORIGIN_AMOUNT'){
        return {
            ...state,
            originAmount : action.data
        }
        
    }
    
    return state
}
var store = createStore(amount)


export default store