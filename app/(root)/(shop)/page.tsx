import ShopCard from "@/components/ShopCard";
import React from "react";

const page = () => {
	return (
		<div className="grid grid-cols-12 gap-4 w-full ">
			<main className="col-span-12">
				<div className="flex justify-between items-center mb-4">
					<h2 className="hidden md:block text-xl font-semibold">
						Showing 1 - 12 of 45 items
					</h2>
				</div>
				<ShopCard />
			</main>
		</div>
	);
};

export default page;
