import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const ShopCard = () => {
	const numbers = [1, 2, 3, 5, 5];
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(12)].map((_, index) => (
					<div key={index} className="bg-white p-8 rounded">
						<Image
							src="/cake-dough.jpg"
							width={100}
							height={100}
							alt="Cake"
							className="w-full h-[14rem] object-cover rounded"
						/>
						<div className="flex items-center justify-between gap-4">
							<h3 className="mt-4 text-[20px] md:text-[27px] font-bold">
								Name of Cake
							</h3>
							<CiHeart className="text-[20px] text-primary-main font-bold" />
						</div>
						<p className="text-black text-[18px] lg:text-[24px] font-bold">
							N 35,000
						</p>
						<div className="flex items-center justify-between mt-4 gap-4 lg:gap-0">
							<button className="w-full lg:w-fit bg-primary-main text-white py-2 px-12 rounded-md text-sm">
								Buy Now
							</button>
							<button className="border border-primary-main text-primary-main py-2 px-4 rounded">
								<MdOutlineShoppingCart />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center gap-4 my-8">
				{numbers.map((index, number) => (
					<button
						className="border border-primary-main text-white bg-primary-main py-2 px-4 rounded"
						key={index}>
						{number}
					</button>
				))}
			</div>
		</>
	);
};

export default ShopCard;
