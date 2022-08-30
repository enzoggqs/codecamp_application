import { createSlice } from "@reduxjs/toolkit";

const authorization = createSlice({
    name: 'user',
    initialState: {
        username: '',
        isLogged: false
    },
    reducers: {
        login (state, { payload }){
            return { ...state, isLogged: true, username: payload }
        },
        logout(state){
            return { ...state, isLogged: false, username: ''}
        }
    }
})

export const { login, logout } = authorization.actions
export default authorization.reducer;