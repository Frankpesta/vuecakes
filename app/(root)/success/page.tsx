"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderConfirmation = () => {
	const router = useRouter();

	return (
		<div className="flex items-center justify-center bg-slate-100 p-4 lg:p-24">
			<div className="p-6 bg-white rounded-md shadow-md text-center flex flex-col items-center justify-center gap-5">
				<h1 className="text-[50px] font-extrabold text-primary-main">Yay!!</h1>
				<p className="mt-6 text-[20px]">
					Your order with order number{" "}
					<span className="font-semibold">437848948</span> has been placed
					successfully
				</p>
				<button
					className="w-full lg:w-1/2 mt-6 px-6 py-4 bg-primary-main text-white font-semibold rounded-md hover:bg-pink-700 transition duration-300"
					onClick={() => router.push("/")}>
					Go to Homepage
				</button>
			</div>
		</div>
	);
};

export default OrderConfirmation;
