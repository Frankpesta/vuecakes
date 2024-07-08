import React from "react";
import SidebarCard from "./SidebarCard";
import SidebarBadge from "./SidebarBadge";

const ShopLeftsidebar = () => {
	return (
		<aside className="hidden lg:flex flex-col items-center justify-center gap-[40px] w-1/2">
			<SidebarCard heading="Event" />
			<SidebarCard heading="Categories" />
			<SidebarBadge />
			<SidebarCard heading="Icing" />
		</aside>
	);
};

export default ShopLeftsidebar;
