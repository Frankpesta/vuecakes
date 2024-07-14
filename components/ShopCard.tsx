"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useAddToCart } from "@/redux/hooks/carthooks";
import { ProductsProps, CurrentPrice } from "@/lib";
import Pagination from "./Pagination";

interface ShopCardProps {
	items: ProductsProps[];
	nextPage: string | undefined;
	size: number | undefined;
	total: number | undefined;
	page: number | undefined;
	onPageChange: (page: number) => void;
}
const ShopCard = ({
	items,
	nextPage,
	size,
	total,
	page,
	onPageChange,
}: ShopCardProps) => {
	const numbers = ["1", "2", "3", "4"];
	const router = useRouter();
	const addToCart = useAddToCart();

	const getNGNPrice = (current_price: CurrentPrice[]): number | null => {
		const priceArray = current_price[0]?.NGN;
		return priceArray ? (priceArray[0] as number) : null;
	};

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
							onClick={() => router.push(`/${item.id}`)}
						/>
						<div className="flex items-center justify-between gap-4 mt-2">
							<h3
								className="mt-4 text-[18px] md:text-[20px] font-semibold"
								onClick={() => router.push(`/${item.id}`)}>
								{item.name}
							</h3>
							<CiHeart className="w-7 h-7 text-[20px] text-primary-main font-bold" />
						</div>
						<p className="text-black text-[18px] font-bold">
							N {getNGNPrice(item.current_price)}
						</p>
						<div className="flex items-center justify-between mt-6 gap-4 lg:gap-0">
							<button
								onClick={() => router.push("/cart")}
								className="w-full lg:w-fit bg-primary-main text-white py-2 px-12 rounded-md text-sm">
								Buy Now
							</button>
							<button
								onClick={addToCart(item)}
								className="border border-primary-main text-primary-main py-2 px-4 rounded">
								<MdOutlineShoppingCart />
							</button>
						</div>
					</div>
				))}
			</div>
			<Pagination
				currentPage={page}
				totalItems={total}
				itemsPerPage={size}
				onPageChange={onPageChange}
			/>
		</>
	);
};

export default ShopCard;
