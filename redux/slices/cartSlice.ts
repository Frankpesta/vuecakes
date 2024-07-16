import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps, CurrentPrice, ProductDetailsProps } from "@/lib";

interface CartItem extends ProductsProps {
	quantity: number;
	price: number;
}

interface CartState {
	items: CartItem[];
	total: number | 0;
}

const getNGNPrice = (current_price: CurrentPrice[]): number => {
	const priceArray = current_price[0]?.NGN;
	const price =
		priceArray && typeof priceArray[0] === "number" ? priceArray[0] : 0;
	return isNaN(price) ? 0 : price;
};

const loadCartFromLocalStorage = (): CartState => {
	try {
		const serializedState = localStorage.getItem("cart");
		if (serializedState === null) {
			return { items: [], total: 0 };
		}
		const parsedState = JSON.parse(serializedState);
		return {
			...parsedState,
			total: Number(parsedState.total) || 0,
		};
	} catch (err) {
		return { items: [], total: 0 };
	}
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ProductsProps>) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			const itemPrice = getNGNPrice(newItem.current_price);

			if (existingItem) {
				existingItem.quantity = (existingItem.quantity || 0) + 1;
			} else {
				state.items.push({
					...newItem,
					quantity: 1,
					price: itemPrice,
				});
			}

			state.total = state.items.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
		},
		addProduct: (state, action: PayloadAction<ProductDetailsProps>) => {
			const newProduct = action.payload;
			const itemPrice = getNGNPrice(newProduct.current_price);
			const itemToAdd: CartItem = {
				...newProduct,
				unique_id: newProduct.id,
				quantity: 1,
				price: itemPrice,
			};
			state.items.push(itemToAdd);
			state.total = Number(state.total) + itemPrice;
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				const itemTotal = Number(existingItem.price) * existingItem.quantity;
				state.total = Math.max(0, Number(state.total) - itemTotal);
				state.items = state.items.filter((item) => item.id !== id);
				localStorage.setItem("cart", JSON.stringify(state));
			}
		},
		incrementQuantity: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) {
				item.quantity += 1;
				state.total += item.price;
				localStorage.setItem("cart", JSON.stringify(state));
			}
		},
		decrementQuantity: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
				state.total -= item.price;
				localStorage.setItem("cart", JSON.stringify(state));
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.total = 0;
			localStorage.removeItem("cart");
		},
	},
});

export const {
	addItem,
	removeItem,
	incrementQuantity,
	decrementQuantity,
	clearCart,
	addProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
