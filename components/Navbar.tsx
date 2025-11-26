"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ key: "services", label: "Services", href: "#services" },
		{ key: "technologies", label: "Technologies", href: "#technologies" },
		{ key: "projects", label: "Projects", href: "#projects" },
		{ key: "team", label: "Team", href: "#team" },
		{ key: "contact", label: "Contact", href: "#contact" },
	];

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-white/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex-shrink-0"
					>
						<span className="text-2xl font-bold font-orbitron text-green-500 tracking-wider text-glow">B3Pay</span>
					</motion.div>
					<div className="hidden md:flex md:items-center md:gap-4">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={menuVariants}
							className="flex items-baseline space-x-4"
						>
							{menuItems.map((item) => (
								<motion.a
									key={item.key}
									variants={itemVariants}
									whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(34, 197, 94)" }}
									whileTap={{ scale: 0.95 }}
									href={item.href}
									className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium font-orbitron tracking-wide transition-all duration-300"
								>
									{item.label}
								</motion.a>
							))}
						</motion.div>
					</div>
					<div className="md:hidden flex items-center gap-2">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</motion.button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card border-t border-white/10">
							{menuItems.map((item) => (
								<motion.a
									key={item.key}
									whileHover={{ scale: 1.05, x: 10 }}
									whileTap={{ scale: 0.95 }}
									href={item.href}
									className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium font-orbitron"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
