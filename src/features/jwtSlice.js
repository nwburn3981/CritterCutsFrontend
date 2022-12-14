import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: '',
    isAuthenticated: false,
}

const jwtSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        addJwt: (state, action) => {
            state.token = action.payload;
        },
        removeJwt: (state) => {
            state.token = '';
        },
        notAuthenticated: (state) => {
            state.isAuthenticated = false;
        },
        Authenticated: (state) => {
            state.isAuthenticated = true;
        }
    }
})

export const { addJwt, removeJwt, notAuthenticated, Authenticated } = jwtSlice.actions;

export default jwtSlice.reducer;