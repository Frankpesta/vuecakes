import React from "react";

interface SidebarProps {
	heading: string;
}

const SidebarCard = ({ heading }: SidebarProps) => {
	return (
		<div className="bg-light_gray pl-4 w-[80%] pt-4 rounded-lg">
			<div className="mb-8">
				<h2 className="font-bold text-lg mb-2">{heading}</h2>
				<ul className="space-y-2">
					<li className="text-pink-600">All</li>
					<li className="text-black">Wedding</li>
					<li className="text-black">Birthday</li>
					<li className="text-black">Anniversary</li>
					<li className="text-black">Desserts</li>
				</ul>
			</div>
		</div>
	);
};

export default SidebarCard;
