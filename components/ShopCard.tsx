import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const ShopCard = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{[...Array(12)].map((_, index) => (
				<div key={index} className="bg-white p-8 rounded shadow">
					<Image
						src="/cake-dough.jpeg"
						width={100}
						height={192}
						alt="Cake"
						objectFit="cover"
						className="w-full h-48 object-cover rounded"
					/>
					<div className="flex items-center justify-between gap-4">
						<h3 className="mt-4 text-[30px] font-bold">Name of Cake</h3>
						<CiHeart className="text-[20px] text-primary-main font-bold" />
					</div>
					<p className="text-black text-[24px] font-bold">N 35,000</p>
					<div className="flex items-center justify-between mt-4">
						<button className="bg-primary-main text-white py-2 px-12 rounded-md text-sm">
							Buy Now
						</button>
						<button className="border border-primary-main text-primary-main py-2 px-4 rounded">
							<MdOutlineShoppingCart />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ShopCard;
