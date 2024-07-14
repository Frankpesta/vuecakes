"use client";
import ShopCard from "@/components/ShopCard";
import React, { useState, useEffect } from "react";
import ShopHeader from "@/components/ShopHeader";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import ShopLeftsidebar from "@/components/ShopLeftsidebar";
import { ProductsProps } from "@/lib";

interface ProductsResponse {
	size: number;
	total: number;
	items: ProductsProps[];
}

const Page = () => {
	const [products, setProducts] = useState<ProductsResponse | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const response = await fetch("/api/products");
			const data = await response.json();
			setLoading(false);
			setProducts(data);
			console.log(data);
		}
		fetchData();
	}, []);

	return (
		<>
			<ShopHeader />
			<main className="my-8 px-[0.5rem] flex items-start justify-start gap-2">
				<ShopLeftsidebar />
				<div className="grid grid-cols-12 gap-4 w-full ">
					<main className="col-span-12">
						<div className="flex justify-between items-center mb-4">
							<h2 className="hidden lg:block text-xl font-semibold px-4">
								Showing 1 - {products?.size} of {products?.total} items
							</h2>
							<div className="flex items-center justify-center gap-4 lg:hidden px-3">
								<Select>
									<SelectTrigger className="w-[150px] outline-none border-2 border-primary-main focus:outline-none focus:outline-offset-0 text-primary-main">
										<SelectValue
											placeholder="Categories"
											className="text-primary-main text-lg placeholder:text-primary-main placeholder:text-md"
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="wedding">Wedding</SelectItem>
										<SelectItem value="birthday">Birthday</SelectItem>
										<SelectItem value="cupacake">Cupcake</SelectItem>
									</SelectContent>
								</Select>

								<Select>
									<SelectTrigger className="w-[150px] outline-none border-2 border-primary-main focus:outline-none focus:outline-offset-0 text-primary-main">
										<SelectValue
											placeholder="Sort By"
											className="text-primary-main text-lg placeholder:text-primary-main placeholder:text-md"
										/>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="wedding">Wedding</SelectItem>
										<SelectItem value="birthday">Birthday</SelectItem>
										<SelectItem value="cupcake">Cupcake</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<ShopCard items={products?.items || []} />
					</main>
				</div>
			</main>
		</>
	);
};

export default Page;
