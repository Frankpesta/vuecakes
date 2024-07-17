import React, { Suspense } from "react";
import CheckoutContent from "@/components/CheckoutContent";

const page = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CheckoutContent />
		</Suspense>
	);
};

export default page;
