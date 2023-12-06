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
        updateUser(state, action: PayloadAction<IUser>) {
            const payload = action.payload
            return { ...state, ...payload };
        }
    }
})

export default user.reducer

export const { updateUser } = user.actions