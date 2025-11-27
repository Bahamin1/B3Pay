import type { Metadata } from "next";
import { Inter, Orbitron, Vazirmatn } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
});

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
	title: "B3Pay - Blockchain, AI & Web3 Solutions",
	description: "Building the future with cutting-edge technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${orbitron.variable} ${vazirmatn.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}
