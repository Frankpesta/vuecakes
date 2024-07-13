"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";

interface ProductsProps {
	id: string;
	name: string;
	categories: [];
	current_price: [];
	photos: PhotoProps[];
	unique_id: string;
}

interface PhotoProps {
	file_rename: boolean;
	filename: string;
	is_featured: boolean;
	is_public: boolean;
	model_id: string;
	model_name: string;
	organization_id: string;
	position: number;
	save_as_jpg: boolean;
	url: string;
}

interface ShopCardProps {
	items: ProductsProps[];
}

const ShopCard = ({ items }: ShopCardProps) => {
	const numbers = ["1", "2", "3", "4"];
	const router = useRouter();
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
				{items.map((item) => (
					<div key={item.id} className="bg-white p-8 rounded">
						<Image
							src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
							width={100}
							height={100}
							alt="Cake"
							className="w-full h-[14rem] object-cover rounded"
						/>
						<div className="flex items-center justify-between gap-4 mt-2">
							<h3 className="mt-4 text-[18px] md:text-[20px] font-semibold">
								{item.name}
							</h3>
							<CiHeart className="w-7 h-7 text-[20px] text-primary-main font-bold" />
						</div>
						{/* <p className="text-black text-[18px] font-bold">
							N {item?.current_price[0]?.NGN[0]}

						</p> */}
						<div className="flex items-center justify-between mt-6 gap-4 lg:gap-0">
							<button
								onClick={() => router.push("/cart")}
								className="w-full lg:w-fit bg-primary-main text-white py-2 px-12 rounded-md text-sm">
								Buy Now
							</button>
							<button
								onClick={() => router.push(`/${item.id}`)}
								className="border border-primary-main text-primary-main py-2 px-4 rounded">
								<MdOutlineShoppingCart />
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center gap-4 my-8">
				{numbers.map((number, index) => (
					<button
						className={`border py-2 px-4 rounded ${
							index === 0
								? "bg-primary-main text-white"
								: "text-primary-main border-primary-main bg-white"
						}`}
						key={index}>
						{number}
					</button>
				))}
			</div>
		</>
	);
};

export default ShopCard;
