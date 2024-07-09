"use client";
import CartTotal from "@/components/CartTotal";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
	const products = [
		{
			id: 1,
			name: "Red velvet single layer cake 10 inches",
			price: 15000,
			quantity: 2,
			imageUrl: "/cake-flower.jpeg",
		},
		{
			id: 2,
			name: "Vanilla 3-layer cake 10 inches",
			price: 15000,
			quantity: 1,
			imageUrl: "/cake-choco.jpeg",
		},
	];

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-[30px] font-bold text-center text-pink-600 mb-8">
				Cart
			</h1>
			<div className="bg-white shadow-sm rounded-lg p-2 lg:p-4">
				<table className="min-w-full">
					<thead>
						<tr>
							<th className="px-2 lg:px-6 py-3 text-sm lg:text-[20px] text-left"></th>
							<th className="px-2 lg:px-3 py-3 text-sm lg:text-[20px] text-left">
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
						{products.map((product) => (
							<tr key={product.id}>
								<td className="px-2 lg:px-6 py-4 text-lg">
									<div className="flex items-center gap-4">
										<div className="flex flex-col items-center gap-6 mr-6">
											<input type="checkbox" className="w-4 h-4 accent-black" />
											<FaTrashAlt className="w-4 h-4 text-black" />
										</div>
										<img
											src={product.imageUrl}
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
										N {product.price.toLocaleString()}
									</p>
								</td>
								<td className="px-2 lg:px-6 py-4">
									<div className="flex items-center space-x-4">
										<button className="bg-pink-600 text-white text-xs lg:text-xl rounded p-1">
											<FiMinus />
										</button>
										<p className="w-4 lg:w-8 text-center text-xs lg:text-xl">
											{product.quantity}
										</p>
										<button className="bg-pink-600 text-white text-xs lg:text-xl rounded p-1">
											<FiPlus />
										</button>
									</div>
								</td>
								<td className="px-2 lg:px-6 py-4 ">
									<p className="text-xs lg:text-xl">
										N {(product.price * product.quantity).toLocaleString()}
									</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="my-6 flex items-center justify-center">
				<CartTotal />
			</div>
		</div>
	);
};

export default Cart;
