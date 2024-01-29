import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IconName } from "../../library/icons.library";

interface LinkSelect {
    [key: string]: boolean;
    dashboard: boolean;
    users: boolean;
    statistics: boolean;
    recipes: boolean;
    filesystem: boolean;
    affiliate: boolean;
    settings: boolean;
    signout: boolean;
}

const initialState: LinkSelect = {
    dashboard: true,
    users: false,
    statistics: false,
    recipes: false,
    filesystem: false,
    affiliate: false,
    settings: false,
    signout: false
}


const linkSelectSlice = createSlice({
    name: 'linkSelect',
    initialState,
    reducers: {
        linkSelect(state, action: PayloadAction<IconName>) {
            for (const key in initialState) {
                state[key] = false
            }
            state[action.payload] = true
        }
    }
})


export const { linkSelect } = linkSelectSlice.actions

export default linkSelectSlice.reducer