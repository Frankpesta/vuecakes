import ShopHeader from "@/components/ShopHeader";
import ShopLeftsidebar from "@/components/ShopLeftsidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ShopHeader />
			<main className="my-8 px-[0.5rem] flex items-start justify-start gap-2">
				<ShopLeftsidebar />
				{children}
			</main>
		</>
	);
};

export default Layout;
