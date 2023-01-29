import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const ProductsSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProducts: (state, actions) => {
            return state = actions.payload
        }
    }
});

export const { addProducts } = ProductsSlice.actions

export default ProductsSlice.reducer