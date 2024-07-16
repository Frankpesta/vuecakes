import { useDispatch } from "react-redux";
import {
	addItem,
	removeItem,
	clearCart,
	incrementQuantity,
	decrementQuantity,
	addProduct,
} from "../slices/cartSlice";
import { ProductsProps, ProductInput, ProductDetailsProps } from "@/lib";
import { toast } from "react-hot-toast";

const getNGNPrice = (current_price: any): number => {
	if (Array.isArray(current_price)) {
		const priceArray = current_price[0]?.NGN;
		return priceArray && typeof priceArray[0] === "number" ? priceArray[0] : 0;
	}
	return current_price;
};

export const useAddToCart = () => {
	const dispatch = useDispatch();

	const handleAddToCart =
		(product: ProductsProps) =>
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			dispatch(addItem(product));
			toast.success("Item added successfully");
		};

	return handleAddToCart;
};

export const useAddProductToCart = () => {
	const dispatch = useDispatch();

	const handleAddToCart =
		(product: ProductDetailsProps) =>
		(event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();

			const productToAdd: ProductsProps = {
				...product,
				unique_id: product.id, // or generate a unique id
				quantity: 1, // default quantity
				price: getNGNPrice(product.current_price),
			};

			dispatch(addProduct(product));
			toast.success("Item added successfully");
		};

	return handleAddToCart;
};

export const useRemoveFromCart = () => {
	const dispatch = useDispatch();

	const handleRemoveFromCart =
		(productId: string) =>
		(
			event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement>
		) => {
			event.preventDefault();
			dispatch(removeItem(productId));
			toast.success("Item removed successfully");
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

export const useIncrementQuantity = () => {
	const dispatch = useDispatch();

	const handleIncrementQuantity =
		(productId: string) =>
		(
			event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement>
		) => {
			event.preventDefault();
			dispatch(incrementQuantity(productId));
		};

	return handleIncrementQuantity;
};

export const useDecrementQuantity = () => {
	const dispatch = useDispatch();

	const handleDecrementQuantity =
		(productId: string) =>
		(
			event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<SVGElement>
		) => {
			event.preventDefault();
			dispatch(decrementQuantity(productId));
		};

	return handleDecrementQuantity;
};
