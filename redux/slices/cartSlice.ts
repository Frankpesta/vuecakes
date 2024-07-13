"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a cart item
interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

// Define the shape of the cart state
interface CartState {
	items: CartItem[];
	total: number;
}

// Define the initial state
const initialState: CartState = {
	items: [],
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity++;
			} else {
				state.items.push({ ...newItem, quantity: 1 });
			}
			state.total += newItem.price;
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				if (existingItem.quantity === 1) {
					state.items = state.items.filter((item) => item.id !== id);
				} else {
					existingItem.quantity--;
				}
				state.total -= existingItem.price;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.total = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
