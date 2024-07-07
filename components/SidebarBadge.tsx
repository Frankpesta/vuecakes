import React from "react";

const SidebarBadge = () => {
	const sizes = ["8 Inch", "10 Inch", "12 Inch", "16 Inch", "Cupcakes"];
	return (
		<div className="bg-light_gray pl-2 pt-4 rounded-lg w-[80%] pb-[-4px]">
			<div className="mb-8">
				<h2 className="font-bold text-lg mb-2">Sizes</h2>
				<div className="flex flex-wrap items-center gap-x-2 gap-y-6">
					{sizes.map((size, index) => (
						<button
							key={index}
							className="border border-primary-main text-primary-main py-1 px-4 rounded-md text-md">
							{size}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default SidebarBadge;
