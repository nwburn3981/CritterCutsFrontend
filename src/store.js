import { configureStore } from '@reduxjs/toolkit'
import jwtSlice from './features/jwtSlice'

export const store = configureStore({
    reducer: {
        jwt: jwtSlice,
    }
})