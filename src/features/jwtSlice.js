import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jwt: '',
    isAuthenticated: false,
}

const jwtSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        addJwt: (state, action) => {
            state.jwt = action.payload;
        },
        removeJwt: (state) => {
            state.jwt = '';
        },
        notAuthenticated: (state, action) => {
            state.isAuthenticated = false;
        },
        Authenticated: (state, action) => {
            state.isAuthenticated = true;
        }
    }
})

export const { addJwt, removeJwt, notAuthenticated, Authenticated } = jwtSlice.actions;

export default jwtSlice.reducer;