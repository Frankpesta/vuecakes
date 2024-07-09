"use client";
import React from "react";
import { useRouter } from "next/navigation";
import router from "next/router";

const Page = () => {
	const router = useRouter();
	return (
		<div className="bg-slate-50 p-4 lg:p-12">
			<div className="max-w-full md:max-w-5xl mx-auto p-4 lg:p-12 bg-white rounded-lg shadow-none md:shadow-md">
				<h1 className="text-4xl font-bold text-center mb-6 text-pink-600">
					Checkout
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-14">
					<div className="flex flex-col gap-2">
						<label className="block text-black text-[20px]">
							Delivery or pickup?
						</label>
						<select className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm">
							<option className="text-lg">Quick delivery</option>
						</select>
						<label className="block text-gray-700">Delivery date</label>
						<input
							type="date"
							className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
						/>
						<label className="block text-gray-700">Delivery Time</label>
						<select className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm">
							<option>1:00 PM</option>
						</select>
						<div className="mt-4">
							<h2 className="text-lg font-bold text-pink-600">
								Billing Address
							</h2>
							<div className="mt-2">
								<label className="block text-gray-700">
									Receiver&rsquo;s Name
								</label>
								<input
									type="text"
									className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
								/>
							</div>
							<div className="mt-2">
								<label className="block text-gray-700">
									Receiver&rsquo;s Name
								</label>
								<input
									type="text"
									className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
								/>
							</div>
							<div className="mt-2">
								<label className="block text-gray-700">
									Receiver&rsquo;s Name
								</label>
								<input
									type="text"
									className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
								/>
							</div>
							<div className="mt-2">
								<label className="block text-gray-700">
									Receiver&rsquo;s Name
								</label>
								<input
									type="text"
									className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
								/>
							</div>
							<div className="mt-2">
								<label className="block text-gray-700">
									Receiver&rsquo;s Name
								</label>
								<input
									type="text"
									className="mt-1 block w-full p-4 border border-slate-300 rounded-lg shadow-sm"
								/>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg shadow-md border-2 border-primary-main h-fit">
						<h2 className="text-lg font-bold text-pink-600 mb-4">Your Order</h2>
						<div className="flex justify-between mb-2">
							<span>Red velvet single layer cake 10 inches</span>
							<span>X 2</span>
						</div>
						<div className="flex justify-between mb-2">
							<span>Subtotal</span>
							<span>N 30,000</span>
						</div>
						<div className="flex justify-between mb-2">
							<span>Delivery</span>
							<span>Quick Delivery: N5,000</span>
						</div>
						<div className="flex justify-between font-bold text-lg mt-4">
							<span>Total</span>
							<span>N 35,000</span>
						</div>
						<button
							onClick={() => router.push("/checkout/pay")}
							className="mt-6 w-full bg-primary-light text-white p-2 rounded-md shadow-md">
							Order Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
