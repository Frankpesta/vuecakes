import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	ProductInput,
	CurrentPrice,
	ProductsProps,
	PhotoProps,
	ProductDetailsProps,
} from "@/lib";

const getNGNPrice = (current_price: CurrentPrice[] | number): number => {
	if (Array.isArray(current_price)) {
		const priceArray = current_price[0]?.NGN;
		return priceArray && typeof priceArray[0] === "number" ? priceArray[0] : 0;
	}
	return current_price;
};

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

interface CartState {
	items: CartItem[];
	total: number;
}

const initialState: CartState = {
	items: [],
	total: 0,
};

// Type guard for ProductDetailsProps
function isProductDetailsProps(
	product: ProductInput
): product is ProductDetailsProps {
	return !(
		"unique_id" in product &&
		"quantity" in product &&
		"price" in product
	);
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ProductsProps>) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity++;
			} else {
				const itemToAdd: CartItem = {
					...newItem,
					unique_id: newItem.unique_id,
					quantity: 1,
					price: newItem.price,
				};
				state.items.push(itemToAdd);
			}
			state.total += newItem.price;
		},
		addProduct: (state, action: PayloadAction<ProductDetailsProps>) => {
			const newProduct = action.payload;
			const itemToAdd: CartItem = {
				...newProduct,
				unique_id: newProduct.id, // or generate a unique id
				quantity: 1, // default quantity
				price: getNGNPrice(newProduct.current_price),
			};
			state.items.push(itemToAdd);
			state.total += itemToAdd.price;
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
		incrementQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				item.quantity++;
				state.total += item.price;
			}
		},
		decrementQuantity: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item && item.quantity > 1) {
				item.quantity--;
				state.total -= item.price;
			}
		},
	},
});

export const {
	addItem,
	addProduct,
	removeItem,
	clearCart,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
