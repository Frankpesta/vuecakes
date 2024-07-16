"use client";
import CartTotal from "@/components/CartTotal";
import React, { useMemo } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
	useRemoveFromCart,
	useIncrementQuantity,
	useDecrementQuantity,
	useClearCart,
} from "@/redux/hooks/carthooks";

const Cart = () => {
	const items = useSelector((state: RootState) => state.cart.items);
	const removeFromCart = useRemoveFromCart();
	const incrementQuantity = useIncrementQuantity();
	const decrementQuantity = useDecrementQuantity();
	const cleartCart = useClearCart();

	const getNGNPrice = (current_price: any): number => {
		if (Array.isArray(current_price) && current_price.length > 0) {
			const priceArray = current_price[0]?.NGN;
			return Array.isArray(priceArray) && typeof priceArray[0] === "number"
				? priceArray[0]
				: 0;
		}
		return 0;
	};

	const calculatedTotal = useMemo(() => {
		return items.reduce((total, item) => {
			const price = getNGNPrice(item.current_price);
			return total + price * (item.quantity || 1);
		}, 0);
	}, [items]);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-[30px] font-bold text-center text-pink-600 mb-8">
				Cart
			</h1>
			<div className="mt-4 flex items-end justify-end">
				<button
					className="py-2 px-6 outline-none border border-primary-main bg-primary-main text-white hover:shadow-sm rounded-md"
					onClick={(e) => cleartCart(e)}>
					Clear Cart
				</button>
			</div>
			<div className="bg-white shadow-sm rounded-lg p-2 lg:p-4">
				<table className="min-w-full">
					<thead>
						<tr>
							<th className="px-0 lg:px-6 py-3 text-sm lg:text-[20px] text-left"></th>
							<th className="px-0 lg:px-3 py-3 text-sm lg:text-[20px] text-left">
								Product
							</th>
							<th className="px-2 lg:px-6 py-3 text-sm lg:text-[20px] text-left">
								Price
							</th>
							<th className="px-2 lg:px-6 py-3 text-sm lg:text-[20px] text-left">
								Quantity
							</th>
							<th className="px-2 lg:px-6 py-3 text-sm lg:text-[20px] text-left">
								Subtotal
							</th>
						</tr>
					</thead>
					<tbody>
						{items.length > 0 ? (
							items.map((product) => (
								<tr key={product.id}>
									<td className="px-2 lg:px-6 py-4 text-lg">
										<div className="flex items-center gap-4">
											<div className="flex flex-col items-center gap-6 mr-6">
												<input
													type="checkbox"
													className="w-4 h-4 accent-black"
												/>
												<FaTrashAlt
													className="w-4 h-4 text-black"
													onClick={(e) => removeFromCart(product.id)(e)}
												/>
											</div>
											<img
												src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
												alt={product.name}
												className="hidden lg:block w-32 h-32 rounded-md object-cover"
											/>
										</div>
									</td>
									<td className="px-2 lg:px-3 py-4 text-xs lg:text-lg ">
										<div>
											<p className="font-semibold text-xs lg:text-xl">
												{product.name}
											</p>
										</div>
									</td>
									<td className="px-2 lg:px-6 py-4">
										<p className="text-xs lg:text-xl">
											N {getNGNPrice(product.current_price)}
										</p>
									</td>
									<td className="px-2 lg:px-6 py-4">
										<div className="flex items-center space-x-1 lg:space-x-4">
											<button
												className="bg-pink-600 text-white text-xs lg:text-xl rounded p-1"
												onClick={(e) => decrementQuantity(product.id)(e)}>
												<FiMinus />
											</button>
											<p className="w-4 lg:w-8 text-center text-xs lg:text-xl">
												{product.quantity}
											</p>
											<button
												className="bg-pink-600 text-white text-xs lg:text-xl rounded p-1"
												onClick={(e) => incrementQuantity(product.id)(e)}>
												<FiPlus />
											</button>
										</div>
									</td>
									<td className="px-2 lg:px-6 py-4">
										<p className="text-xs lg:text-xl">
											N {getNGNPrice(product.current_price) * product.quantity}
										</p>
									</td>
								</tr>
							))
						) : (
							<tr className="text-center">
								<td colSpan={5} className="text-lg py-6">
									No items in your cart. Please return to{" "}
									<Link href={"/"} className="text-primary-main font-bold">
										Shop
									</Link>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			<div className="my-6 flex items-center justify-center">
				{items.length > 0 && <CartTotal total={calculatedTotal} />}
			</div>
		</div>
	);
};

export default Cart;
