import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './redux_slices/auth.slice';
import userReducer from './redux_slices/user.slice';
import indexReducer from './redux_slices/index.slice'
import linkSelectReducer from './redux_slices/linkSelect.slice';
import languageReducer from './redux_slices/language.slice';

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    indexes: indexReducer,
    linkSelect: linkSelectReducer,
    currentLanguage: languageReducer
})

const store = configureStore({ reducer })

export default store

export type RootState = ReturnType<typeof store.getState>
