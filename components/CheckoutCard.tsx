"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CheckoutCard = () => {
	const router = useRouter();
	return (
		<div className="max-w-md lg:max-w-full mx-auto bg-white p-6 rounded-lg shadow-md">
			<h2 className="text-3xl font-bold text-primary-main mb-4 text-center">
				Checkout
			</h2>
			<div className="flex flex-col gap-6">
				<div className="mb-2 flex gap-6 items-center justify-between">
					<span className="font-semibold">Order Number:</span> 437848948
				</div>
				<div className="mb-2 flex gap-6 items-center justify-between">
					<span className="font-semibold">Date:</span> DD/MM/YYYY
				</div>
				<div className="mb-2 flex gap-6 items-center justify-between">
					<span className="font-semibold">Payment Method:</span> Bank transfer
				</div>
				<div className="mb-2 flex gap-6 items-center justify-between">
					<span className="font-semibold">Total:</span> N 35,000
				</div>
			</div>
			<p className="mb-4">
				Thank you for your order, please click the button below to pay with
				Paystack.
			</p>
			<button
				onClick={() => router.push("/success")}
				className="bg-primary-main text-white py-4 px-6 rounded-lg w-full">
				Pay Now
			</button>
		</div>
	);
};

export default CheckoutCard;
