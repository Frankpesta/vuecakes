import React, { useState } from "react";
import { CiHome, CiHeart, CiUser, CiPhone } from "react-icons/ci";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const MobileNav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<div className="relative">
			{/* Hamburger Menu Icon */}
			<div className="sm:hidden" onClick={toggleNav}>
				{isNavOpen ? (
					<IoMdClose className="block lg:hidden w-6 h-6" />
				) : (
					<IoMdMenu className="block lg:hidden w-6 h-6" />
				)}
			</div>

			{/* Mobile Navigation Menu */}
			{isNavOpen && (
				<div className="fixed top-0 right-0 mt-16 mr-5 w-2/4 bg-white p-4 rounded-xl z-50 shadow-lg sm:hidden">
					<div className="flex flex-col space-y-4">
						<div className="flex items-center gap-4">
							<CiHome className="text-gray-800 w-5 h-5" />
							<span className="text-gray-800">Home</span>
						</div>
						<div className="flex items-center gap-4">
							<CiHeart className="text-gray-800 w-5 h-5" />
							<span className="text-gray-800">Wishlist</span>
						</div>
						<div className="flex items-center gap-4">
							<CiUser className="text-gray-800 w-5 h-5" />
							<span className="text-gray-800">Account</span>
						</div>
						<div className="flex items-center gap-4">
							<CiPhone className="text-gray-800 w-5 h-5" />
							<span className="text-gray-800">Contact</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
