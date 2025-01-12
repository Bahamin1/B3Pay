import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "B3 App",
	description: "Created with B3",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
