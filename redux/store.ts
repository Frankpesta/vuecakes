// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			cart: cartSlice,
			wishlist: wishlistSlice,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					// Ignore these action types
					ignoredActions: ["auth/setVerificationDetails"],
					// Ignore these field paths in all actions
					ignoredActionPaths: ["payload.license"],
					// Ignore these paths in the state
					// ignoredPaths: ["items.dates"],
				},
			}),
	});
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
