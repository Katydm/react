const ADD ='ADD';
const REDUCE='REDUCE';
export function auth(state=0,action){
    switch(action.type){
        case ADD:
            return state+1
        case REDUCE:
            return state-1
        default:
            return state
    }
}

export function Add(){
    return {type:ADD}
}
export function Reduce(){
    return {type:REDUCE}
}