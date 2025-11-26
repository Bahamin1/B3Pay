"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 500);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<footer className="relative overflow-hidden">
			{/* Wave Divider */}
			<div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
				<svg
					className="relative block w-full h-24"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-black/50"
					></path>
				</svg>
			</div>

			<div className="glass-card border-t border-white/10 py-12 relative z-10 mt-24">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
				>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
						{/* Brand */}
						<motion.div variants={itemVariants}>
							<h3 className="text-2xl font-bold font-orbitron text-green-500 mb-4 text-glow">
								B3Pay
							</h3>
							<p className="text-gray-400 font-light leading-relaxed">
								Building the future with cutting-edge Web3, AI, and full-stack solutions.
							</p>
						</motion.div>

						{/* Quick Links */}
						<motion.div variants={itemVariants}>
							<h4 className="text-lg font-bold font-orbitron text-white mb-4">QUICK LINKS</h4>
							<ul className="space-y-2">
								{["Services", "Technologies", "Projects", "Team", "Contact"].map((link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase()}`}
											className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-light"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Social */}
						<motion.div variants={itemVariants}>
							<h4 className="text-lg font-bold font-orbitron text-white mb-4">CONNECT</h4>
							<div className="flex gap-4">
								{[
									{ icon: Github, url: "https://github.com/B3Pay", label: "GitHub" },
									{ icon: Linkedin, url: "https://www.linkedin.com/company/b3pay", label: "LinkedIn" },
									{ icon: Twitter, url: "https://X.com/B3Pay", label: "Twitter" },
								].map((social) => (
									<motion.a
										key={social.label}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{
											scale: 1.2,
											rotate: 5,
											textShadow: "0 0 8px rgb(34, 197, 94)",
										}}
										className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300"
										aria-label={social.label}
									>
										<social.icon className="w-5 h-5" />
									</motion.a>
								))}
							</div>
						</motion.div>
					</div>

					{/* Bottom Bar */}
					<motion.div
						variants={itemVariants}
						className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
					>
						<p className="text-gray-400 font-light text-sm flex items-center gap-2">
							© 2024 <span className="text-green-500 font-orbitron">B3Pay</span>. Made with{" "}
							<Heart className="w-4 h-4 text-red-500 fill-current" /> by Bahamin & Behrad Dehpour
						</p>
						<p className="text-gray-500 text-xs font-orbitron">
							POWERED BY NEXT.JS & FRAMER MOTION
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Back to Top Button */}
			<AnimatePresence>
				{showBackToTop && (
					<motion.button
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
						aria-label="Back to top"
					>
						<ArrowUp className="w-6 h-6" />
					</motion.button>
				)}
			</AnimatePresence>
		</footer>
	);
};

// Add AnimatePresence import
import { AnimatePresence } from "framer-motion";

export default Footer;
