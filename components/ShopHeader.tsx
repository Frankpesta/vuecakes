"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ShopHeader = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="relative h-[50vh] lg:h-[80vh] bg-gray-900 text-white">
			{isMobile ? (
				<Image
					src="/hero-section-m.svg"
					alt="Hero background"
					fill
					objectFit="cover"
					quality={100}
				/>
			) : (
				<Image
					src="/hero-section.svg"
					alt="Hero background"
					fill
					objectFit="cover"
					quality={100}
				/>
			)}

			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
				<h1 className="text-[3rem] lg:text-[5rem] font-bold">Shop</h1>
				<p className="mt-4 text-[1rem] lg:text-[2rem]">
					A World of Flavour In Every Bite
				</p>
			</div>
		</div>
	);
};

export default ShopHeader;
