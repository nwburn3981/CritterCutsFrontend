import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: -1,
    role: ''
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setID: (state, action) => {
            state.id = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        resetUser: (state) => {
            state.id = -1;
            state.role = ''
        },
    }

})

export const { setID, setRole, resetUser } = userSlice.actions;

export default userSlice.reducer;