import ShopCard from "@/components/ShopCard";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const page = () => {
	return (
		<div className="grid grid-cols-12 gap-4 w-full ">
			<main className="col-span-12">
				<div className="flex justify-between items-center mb-4">
					<h2 className="hidden lg:block text-xl font-semibold px-4">
						Showing 1 - 12 of 45 items
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
				<ShopCard />
			</main>
		</div>
	);
};

export default page;
