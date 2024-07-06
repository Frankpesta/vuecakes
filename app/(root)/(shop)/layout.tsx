import ShopHeader from "@/components/ShopHeader";
import ShopLeftsidebar from "@/components/ShopLeftsidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ShopHeader />
			<main>
				<ShopLeftsidebar />
				<div>{children}</div>
			</main>
		</>
	);
};

export default Layout;
