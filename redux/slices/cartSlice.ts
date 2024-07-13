import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	id: string;
	name: string;
	categories: any[];
	current_price: CurrentPrice[];
	photos: PhotoProps[];
	unique_id: string;
	quantity: number;
	price: number; // Ensure price is included for each item
}

interface PhotoProps {
	file_rename: boolean;
	filename: string;
	is_featured: boolean;
	is_public: boolean;
	model_id: string;
	model_name: string;
	organization_id: string;
	position: number;
	save_as_jpg: boolean;
	url: string;
}

interface CurrentPrice {
	NGN: (number | null | any[])[];
}

interface CartState {
	items: CartItem[];
	total: number;
}

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
			console.log("Added item:", newItem);
			console.log("Current cart state:", state);
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
