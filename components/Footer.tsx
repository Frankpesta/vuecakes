import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-primary-lighter text-gray-800 py-12 px-4 lg:px-24">
			<div className="container mx-auto flex flex-col md:flex-wrap lg:flex-row gap-8 lg:justify-between items-start lg:items-center ">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold text-primary-darker">VUECAKES</h2>
					<div className="flex space-x-4 mt-8">
						<FaFacebook className="text-primary-main" size="24" />
						<FaTwitter className="text-primary-main" size="24" />
						<FaInstagram className="text-primary-main" size="24" />
					</div>
				</div>
				<div className="spacey-y4">
					<h3 className="font-bold text-[30px]">Working Hours</h3>
					<p className="text-[20px] font-bold">Open</p>
					<p className="text-[20px]">Mondays - Saturday</p>
					<p className="text-[20px]">8:00AM to 5:00PM</p>
					<p className="font-bold text-[20px]">Closed</p>
					<p className="text-[20px]">Sunday</p>
				</div>
				<div>
					<h3 className="font-bold text-[30px]">Useful Links</h3>
					<ul className="mt-2 space-y-4 text-[20px]">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Shop</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold text-[30px]">Support</h3>
					<ul className="mt-2 space-y-4 text-[20px]">
						<li>
							<a href="#">Location</a>
						</li>
						<li>
							<a href="#">Delivery</a>
						</li>
						<li>
							<a href="#">Refund Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
