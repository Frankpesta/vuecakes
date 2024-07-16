import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store"; // Adjust the import according to your store's location

const persistCartMiddleware: Middleware<{}, any> =
	(store) => (next) => (action) => {
		const result = next(action);
		const state = store.getState();
		localStorage.setItem("cart", JSON.stringify(state.cart));
		return result;
	};

export default persistCartMiddleware;
