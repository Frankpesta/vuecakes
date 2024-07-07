"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiUser, CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between py-[30px] px-[75px] bg-white shadow-md z-30">
			<div className=""></div>
			<nav className="flex gap-[40px]">
				<Link
					href="/"
					className="text-light_gray text-[20px] hover:text-pink-700">
					Home
				</Link>
				<Link href="/shop" className="text-gray-800 hover:text-pink-700">
					Shop
				</Link>
				<Link href="/contact" className="text-gray-800 hover:text-pink-700">
					Contact
				</Link>
			</nav>
			<div className="flex items-center gap-[24px]">
				<div className="flex items-center justify-center gap-[8px]">
					<CiSearch className="w-12 h-12 relative left-[2rem] pl-6" />
					<input
						type="text"
						placeholder="Search for cakes"
						className="px-8 py-3 border-none outline-none rounded-[8px] bg-light_gray"
					/>
				</div>

				<CiHeart className="w-6 h-6" />
				<CiUser className="w-6 h-6" />
				<div className="relative">
					<MdOutlineShoppingCart className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
