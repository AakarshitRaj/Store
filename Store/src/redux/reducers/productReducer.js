import {ActionTypes} from "../constants/actionTypes"
const initialState={
    products:[
        {
            id:1,
            title:"Aakarshit",
            category:"Raj",
    },
]
}
export const productReducer=(state=initialState,{type,payload})=>{
switch(type){
    case ActionTypes.SET_PRODUCTS:
        return state;
        default:
            return state;
}
}