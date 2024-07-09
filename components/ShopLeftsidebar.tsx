import React from "react";
import SidebarCard from "./SidebarCard";
import SidebarBadge from "./SidebarBadge";
import { event, layers, icing } from "@/constants";

const ShopLeftsidebar = () => {
	return (
		<aside className="hidden lg:flex flex-col items-center justify-center gap-[40px] w-1/2">
			<SidebarCard heading="Event" items={event} />
			<SidebarCard heading="Layers" items={layers} />
			<SidebarBadge />
			<SidebarCard heading="Icing" items={icing} />
		</aside>
	);
};

export default ShopLeftsidebar;
