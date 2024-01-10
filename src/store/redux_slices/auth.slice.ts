import { PayloadAction, ThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import axios from "../../utils/axios";

export interface authState {
    isAuth: boolean,
    isLoading: boolean
    currentUser: IUser | null,
    error: null | Error,
    success: boolean
}

const initialState = {
    isAuth: false,
    isLoading: false,
    currentUser: null,
    error: null,
    success: true
}

const loginUser = createAsyncThunk('auth/signIn', () => {
    return async ({ email, password }: IUser) => {
        const respone = await axios.post('/login', { email, password })
       respone.data
        
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        isLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },

    }
})

authSlice.actions.setAuth(true)

export const { setAuth } = authSlice.actions

export default authSlice.reducer