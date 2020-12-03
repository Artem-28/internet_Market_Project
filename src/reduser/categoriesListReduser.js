import { GET_GATEGORIES_LIST } from "../action/actionType"

export default function categoryListReduser (state, action){
    switch(action.type){
        case GET_GATEGORIES_LIST:
           return {
               state, ...action.payload
           }
            
        default:
            return state
    }
}