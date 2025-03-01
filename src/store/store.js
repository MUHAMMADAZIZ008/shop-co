import { configureStore } from '@reduxjs/toolkit'
import product from './slices/addToCart'

export const store = configureStore({
  reducer: {
    product,
  },
})

