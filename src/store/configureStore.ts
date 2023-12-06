import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './redux_slices/auth.slice';
import userReducer from './redux_slices/user.slice'
const reducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

const store = configureStore({ reducer })

export default store

export type RootState = ReturnType<typeof store.getState>
