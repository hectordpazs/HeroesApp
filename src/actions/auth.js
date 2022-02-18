import {types} from '../types/types';

export const login = (name)=>({
    type: types.login,
    payload: {
        user: name
    }
})

export const logout = ()=>({
    type: types.logout
})
