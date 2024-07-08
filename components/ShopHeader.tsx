import React from "react";
import Image from "next/image";

const ShopHeader = () => {
	return (
		<div className="relative h-[40vh] lg:h-screen bg-gray-900 text-white">
			<Image
				src="/hero.svg"
				alt="Hero background"
				fill
				objectFit="cover"
				quality={100}
			/>
			{/* <div className="absolute inset-0">
				
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div> */}
			{/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
				<h1 className="text-5xl font-bold">Shop</h1>
				<p className="mt-4 text-xl">A World of Flavour In Every Bite</p>
				<div className="hidden lg:flex mt-8 gap-[75px]">
					{["Birthday cakes", "Wedding cake", "Desserts", "Cupcakes"].map(
						(item) => (
							<div
								key={item}
								className="relative flex flex-col items-center justify-center w-24 h-24">
								<Image
									src="/cake-icing.jpeg"
									alt={item}
									fill
									objectFit="cover"
									className="cake-rounded"
								/>

								<span className="mt-[9rem] text-sm relative">{item}</span>
							</div>
						)
					)}
				</div>
			</div> */}
		</div>
	);
};

export default ShopHeader;
