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
					<h2 className="hidden md:block text-xl font-semibold px-4">
						Showing 1 - 12 of 45 items
					</h2>
					<div className="flex items-center justify-center gap-4 px-8 lg:hidden">
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
							</SelectContent>
						</Select>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Theme" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="light">Light</SelectItem>
								<SelectItem value="dark">Dark</SelectItem>
								<SelectItem value="system">System</SelectItem>
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
