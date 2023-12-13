import { createStore } from "redux";    

const reducerFxn = (state = {value:10},action) => {
    if(action.type==='inc') return {...state,value:state.value+action.payload};
    return state;
}

export default createStore(reducerFxn);