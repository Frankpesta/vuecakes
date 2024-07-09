import React from "react";

interface SidebarProps {
	heading: string;
	items: string[];
}

const SidebarCard = ({ heading, items }: SidebarProps) => {
	return (
		<div className="bg-light_gray pl-4 w-[80%] pt-4 rounded-lg">
			<div className="mb-8">
				<h2 className="font-bold text-lg mb-2">{heading}</h2>
				<ul className="space-y-2">
					{items.map((item, i) => (
						<li
							key={i}
							className={`${i === 0 ? "text-primary-main" : "text-black"}`}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SidebarCard;
