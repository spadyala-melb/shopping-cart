import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "./features/productsApiSlice";
import { authApiSlice } from "./features/authApiSlice";
import { stripeApi } from "./features/stripeApi";
import { paypalApi } from "./features/paypalApi";
import authReducer from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [stripeApi.reducerPath]: stripeApi.reducer,
    [paypalApi.reducerPath]: paypalApi.reducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApiSlice.middleware,
      authApiSlice.middleware,
      stripeApi.middleware,
      paypalApi.middleware,
    ]),
});

setupListeners(store.dispatch);
