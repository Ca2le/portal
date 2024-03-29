import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})



export const { isAuth } = authSlice.actions

export default authSlice.reducer