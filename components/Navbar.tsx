"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Input } from "@/components/ui/input";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const [active, setActive] = useState("shop");
	return (
		<div className="flex items-center justify-between py-[30px] px-8 lg:px-[75px] bg-white z-30">
			<Link href={"/"} className="">
				<h2 className="text-lg md:text-2xl font-bold text-primary-darker">
					VUECAKES
				</h2>
			</Link>
			<nav className="hidden lg:flex gap-[40px]">
				<Link
					href="/shop"
					className="text-gray-800 text-[20px] hover:text-pink-700">
					Home
				</Link>
				<Link
					href="/"
					className={`text-gray-800 text-[20px] hover:text-pink-700 ${
						active &&
						"border-b-2 border-primary-main border-spacing-3 text-primary-main"
					}`}>
					Shop
				</Link>
				<Link
					href="/contact"
					className="text-gray-800 text-[20px] hover:text-pink-700">
					Contact
				</Link>
			</nav>
			<div className="flex items-center gap-[24px]">
				<div className="hidden bg-slate-100 relative lg:flex min-h-[46px] grow items-center gap-1 rounded-xl px-4">
					<CiSearch className="w-8 h-8" />

					<Input
						type="text"
						placeholder="Search for cakes"
						className="paragraph-regular no-focus placeholder border-none shadow-none outline-none"
					/>
				</div>

				<CiHeart className="hidden lg:block w-6 h-6" />
				<CiUser className="hidden lg:block w-6 h-6" />
				<Link
					href={"/cart"}
					className="relative flex items-center gap-4 lg:gap-1">
					<p className="hidden lg:block text-lg font-bold">Cart</p>
					<CiSearch className="block md:hidden w-6 h-6" />
					<CiUser className="block md:hidden w-6 h-6" />
					<div className="flex items-center gap-1">
						<MdOutlineShoppingCart className="w-6 h-6" />
						<span className="hidden lg:block text-white text-sm rounded-full bg-red-600 p-1">
							10+
						</span>
					</div>
				</Link>
				<MobileNav />
			</div>
		</div>
	);
};

export default Navbar;
