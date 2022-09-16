import { configureStore } from '@reduxjs/toolkit'
import jwtSlice from './features/jwtSlice'
import userSlice from './features/userSlice'

export const store = configureStore({
    reducer: {
        jwt: jwtSlice,
        userArr: userSlice
    }
})