import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
    name?: string,
    imageURL?: string,
}

const initialState: IUser = {
    name: '',
    imageURL: '',

}
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            const payload = action.payload
            state.name = payload
        },
        setImage(state, action: PayloadAction<string>) {
            const payload = action.payload
            state.imageURL = payload
        }
    }
})

export default user.reducer

export const { setName, setImage } = user.actions