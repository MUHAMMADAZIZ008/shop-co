import { createReducer, createSlice } from "@reduxjs/toolkit";





const initialState = {
    subTotal: 0,
    discount: 0,
    total: 0,
    products: [],
    deliveryFee: 0,
    productCount: 0,
}

const cerateReducerCart = createSlice({
    name: 'productCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const currentProduct = state.products.find(
                (item) => item.id === action.payload.id
            );

            if (!currentProduct) {
                return {
                    ...state,
                    productCount: state.productCount + 1,
                    products: [
                        ...state.products,
                        {
                            ...action.payload,
                            viewCount: 1,
                            viewPrice: action.payload.price,
                            count: action.payload.count - 1,
                        }]
                }
            }
            return state
        },
        productIncrement: (state, action) => {
            const newProduct = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        viewCount: item.viewCount + 1,
                        viewPrice: (item.viewCount + 1) * item.price,
                        count: item.count - 1
                    }
                }
                return item
            })
            return { ...state, products: newProduct }
        },

        productDecrement: (state, action) => {
            const newProduct = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        viewCount: item.viewCount - 1,
                        viewPrice: (item.viewCount - 1) * item.price,
                        count: item.count + 1
                    }
                }
                return item
            })
            return { ...state, products: newProduct }
        },
        deleteProduct: (state, action) => {
            const newProduct = state.products.filter((item) => {
                if (item.id !== action.payload.id) {
                    return item
                }
            })

            return { ...state, productCount: state.productCount - 1, products: newProduct }
        },
        totalPrice: (state) => {
            return {
                ...state,
                subTotal: state.products.reduce((a, b) => a + b.viewPrice, 0),
                deliveryFee: 2 * state.products.length,
                total: (state.subTotal + state.deliveryFee) - state.discount,
            };
        },
    }
})

export default cerateReducerCart.reducer
export const { addToCart, productIncrement, productDecrement, deleteProduct, totalPrice} = cerateReducerCart.actions