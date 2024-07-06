import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";

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
			<body className={`${nunito.variable}`}>{children}</body>
		</html>
	);
}
