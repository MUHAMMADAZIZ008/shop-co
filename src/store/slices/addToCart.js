import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    subTotal: 0,
    discount: 0,
    total: 0,
    products: [],
    deliveryFee: 0,
    productCount: 0
}

const cerateReducerCart = createSlice({
    name: 'productCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const currentProduct = state.products.map((item) => item.id === action.payload.id)
            if (!currentProduct) {
                return {
                    ...state,
                    products: [...state.products, {
                        ...action.payload
                    }]
                }
            }
        }
    }
})