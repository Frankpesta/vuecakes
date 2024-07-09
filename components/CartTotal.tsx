"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CartTotal = () => {
	const router = useRouter();
	const [deliveryOption, setDeliveryOption] = useState("quick");
	const subtotal = 30000;
	const deliveryCost = deliveryOption === "quick" ? 5000 : 0;
	const total = subtotal + deliveryCost;

	return (
		<div className="p-4 lg:p-12 bg-primary-lighter rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
			<h2 className="text-lg lg:text-[30px] font-bold text-pink-600 mb-4">
				Cart Total
			</h2>
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm lg:text-lg">Subtotal</p>
				<p className="text-sm lg:*:text-lg">N {subtotal.toLocaleString()}</p>
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

						<span className="block text-right text-sm lg:text-lg">5,000</span>
					</div>
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
				<p className="text-sm lg:text-lg">Address</p>
				<div>
					<p className="text-sm lg:text-lg">Banex Plaza, Wuse</p>
					<a href="#" className="text-pink-600 hover:underline">
						Change Address
					</a>
				</div>
			</div>
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm lg:text-lg font-bold">Total</p>
				<p className="text-sm lg:text-lg font-bold">
					N {total.toLocaleString()}
				</p>
			</div>
			<button
				onClick={() => router.push("/checkout")}
				className="w-full bg-pink-600 text-white py-2 rounded-md">
				Checkout
			</button>
		</div>
	);
};

export default CartTotal;
