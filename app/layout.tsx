import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-nunito",
});

export const metadata: Metadata = {
	title: "Vuecakes",
	description:
		"A project built for the submission of HNG task two by @Pesta and Designed by @",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable}`}>
				<Provider store={store}>
					<Navbar />
					{children}
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
