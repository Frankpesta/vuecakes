import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../slices/cartSlice";
import { ProductsProps } from "@/lib";

export const useAddToCart = () => {
	const dispatch = useDispatch();

	const handleAddToCart =
		(product: ProductsProps) =>
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			dispatch(addItem(product));
		};

	return handleAddToCart;
};

export const useRemoveFromCart = () => {
	const dispatch = useDispatch();

	const handleRemoveFromCart =
		(productId: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			dispatch(removeItem(productId));
		};

	return handleRemoveFromCart;
};

export const useClearCart = () => {
	const dispatch = useDispatch();

	const handleClearCart = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(clearCart());
	};

	return handleClearCart;
};
