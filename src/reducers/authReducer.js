import { types } from "../types/types";

const user = localStorage.getItem('user')||null;

export const authReducer = (state={user}, action )=>{
    switch(action.type){
        case types.login:
            return {...action.payload, logged: true}
        case types.logout:
            return {logged:false}
        default: 
            return state;
    }
}

