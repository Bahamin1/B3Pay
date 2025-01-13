import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "B3Pay App",
	description: "Created with B3",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/logo (2).ico" type="image/x-icon" />

			<body>{children}</body>
		</html>
	);
}
