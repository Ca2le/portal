import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IndexProps {
    countries: number;
    categories: number;
    nutritions: number;
    manufactorers: number;
    suppliers: number;
    producers: number;
    products: number;
    sub_categories: number;
    [key: string]: number
}

const initialState = {
    countries: 0,
    categories: 0,
    nutritions: 0,
    manufactorers: 0,
    suppliers: 0,
    producers: 0,
    products: 0,
    sub_categories: 0,
}
const productIndexsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateAllIndexesWith(state, action: PayloadAction<IndexProps>) {
            const payload = action.payload;
            state.countries = payload.countries;
            state.categories = payload.categories;
            state.nutritions = payload.nutritions;
            state.manufactorers = payload.manufactorers;
            state.suppliers = payload.suppliers;
            state.producers = payload.producers;
            state.products = payload.products;
            state.sub_categories = payload.sub_categories;
        },
        updateCategoryIndex(state, action: PayloadAction<number>) {

            state.countries = action.payload
        },
        updateCountryIndex(state, action: PayloadAction<number>) {

            state.categories = action.payload
        },
        updateNutritionIndex(state, action: PayloadAction<number>) {

            state.nutritions = action.payload
        },
        updateSupplierIndex(state, action: PayloadAction<number>) {

            state.manufactorers = action.payload
        },
        updateManufactorerIndex(state, action: PayloadAction<number>) {

            state.suppliers = action.payload
        },
        updateProducerIndex(state, action: PayloadAction<number>) {

            state.producers = action.payload
        },
        updateProductIndex(state, action: PayloadAction<number>) {

            state.products = action.payload
        },
        updateSubCategoryIndex(state, action: PayloadAction<number>) {

            state.sub_categories = action.payload
        },

    }
})

export const {
    updateAllIndexesWith,
    updateCategoryIndex,
    updateCountryIndex,
    updateNutritionIndex,
    updateSupplierIndex,
    updateManufactorerIndex,
    updateProducerIndex,
    updateProductIndex,
    updateSubCategoryIndex,
} = productIndexsSlice.actions

export default productIndexsSlice.reducer