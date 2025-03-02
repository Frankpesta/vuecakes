"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface CartTotalProps {
	total: number;
}

const CartTotal = ({ total }: CartTotalProps) => {
	const router = useRouter();
	const [deliveryOption, setDeliveryOption] = useState("quick");
	const deliveryCost = deliveryOption === "quick" ? 5000 : 0;
	const overallTotal = total + deliveryCost;

	const handleCheckout = () => {
		const queryParams = new URLSearchParams({
			total: overallTotal.toString(),
			deliveryOption: deliveryOption,
		}).toString();

		router.push(`/checkout?${queryParams}`);
	};

	return (
		<div className="p-4 lg:p-12 bg-primary-lighter rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
			<h2 className="text-lg lg:text-[30px] font-bold text-pink-600 py-6 text-center">
				Cart Total
			</h2>
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm lg:text-lg">Subtotal</p>
				<p className="text-sm lg:text-lg">N {total}</p>
			</div>
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm lg:text-lg">Delivery</p>
				<div className="flex flex-col gap-3">
					<div className="flex items-center mb-2">
						<input
							type="radio"
							id="quickDelivery"
							name="delivery"
							value="quick"
							checked={deliveryOption === "quick"}
							onChange={() => setDeliveryOption("quick")}
							className="mr-2 accent-black"
						/>
						<label htmlFor="quickDelivery" className="text-sm lg:text-lg">
							Quick Delivery:
						</label>
					</div>
					<span className="block text-right text-sm font-bold lg:text-lg mt-[-1rem]">
						N 5,000
					</span>
					<div className="flex items-center gap-3">
						<input
							type="radio"
							id="storePickup"
							name="delivery"
							value="store"
							checked={deliveryOption === "store"}
							onChange={() => setDeliveryOption("store")}
							className="mr-2 accent-black"
						/>
						<label htmlFor="storePickup" className="text-sm lg:text-lg">
							Store pick up
						</label>
					</div>
				</div>
			</div>
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm lg:text-lg font-bold">Total</p>
				<p className="text-sm lg:text-lg font-bold">N {overallTotal}</p>
			</div>
			<button
				onClick={handleCheckout}
				className="w-full bg-pink-600 text-white py-3 rounded-md mt-2">
				Checkout
			</button>
		</div>
	);
};

export default CartTotal;
