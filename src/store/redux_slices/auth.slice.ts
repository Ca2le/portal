import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})

authSlice.actions.setAuth(true)

export const { setAuth } = authSlice.actions

export default authSlice.reducer