// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import persistCartMiddleware from "./persistCartMiddleware";

export const makeStore = () => {
	return configureStore({
		reducer: {
			cart: cartSlice,
			wishlist: wishlistSlice,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(persistCartMiddleware),
	});
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
