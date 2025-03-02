import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import product, { addToCart, deleteProduct, productDecrement, productIncrement, totalPrice } from './slices/addToCart'
import { loadState, saveState } from '../config/storage'



const setTotalPrice = createListenerMiddleware();

setTotalPrice.startListening({
  matcher: isAnyOf(addToCart, deleteProduct, productIncrement, productDecrement, totalPrice),
  effect: (_, listenerApi) => {
    listenerApi.dispatch(totalPrice());
  },
});

export const store = configureStore({
  reducer: {
    product,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(setTotalPrice.middleware),
})

store.subscribe(() => {
  saveState("products", store.getState()?.product);
})