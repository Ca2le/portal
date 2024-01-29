import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LanguageType = 'en'



const initialState: {
    language: LanguageType

} = {
    language: 'en',
}
const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguageTo(state, action: PayloadAction<LanguageType>) {
            state.language = action.payload
        }
    }
})



export const { changeLanguageTo } = languageSlice.actions

export default languageSlice.reducer