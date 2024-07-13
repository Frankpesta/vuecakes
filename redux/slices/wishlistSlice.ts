import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a wishlist item
interface WishlistItem {
	id: string;
	name: string;
	price: number;
	// Add any other properties that a wishlist item might have
}

// Define the shape of the wishlist state
interface WishlistState {
	items: WishlistItem[];
}

// Define the initial state
const initialState: WishlistState = {
	items: [],
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
			const newItem = action.payload;
			if (!state.items.some((item) => item.id === newItem.id)) {
				state.items.push(newItem);
			}
		},
		removeFromWishlist: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
		},
		clearWishlist: (state) => {
			state.items = [];
		},
	},
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
	wishlistSlice.actions;
export default wishlistSlice.reducer;
