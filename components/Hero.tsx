"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
					className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
				/>
			</div>

			<div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8"
					>
						<Sparkles className="w-4 h-4 text-green-500" />
						<span className="text-green-400 text-sm font-orbitron tracking-wider">WELCOME TO THE FUTURE</span>
					</motion.div>

					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-4xl md:text-6xl lg:text-8xl font-bold font-orbitron mb-6 tracking-wider text-white glitch"
						data-text="B3PAY"
					>
						<span className="text-green-500">B3</span>PAY
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light"
					>
						<span className="text-green-400 font-semibold">Blockchain</span>, <span className="text-blue-400 font-semibold">AI</span>, <span className="text-purple-400 font-semibold">Web3</span>, <span className="text-red-400 font-semibold">Full Stack</span>, <span className="text-yellow-400 font-semibold">Smart Contracts</span>, <span className="text-pink-400 font-semibold">DeFi</span>, <span className="text-orange-400 font-semibold">NFT</span>
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light"
					>
						We transform complex challenges into elegant solutions. From smart contracts to AI systems, we build what others can't imagine.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<motion.a
							href="#contact"
							whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}
							whileTap={{ scale: 0.95 }}
							className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-orbitron tracking-widest px-8 py-4 text-base md:text-lg rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 border border-green-400/30"
						>
							START YOUR PROJECT
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								<ArrowRight className="w-5 h-5" />
							</motion.div>
						</motion.a>

						<motion.a
							href="#projects"
							whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-green-500/50 font-orbitron tracking-widest px-8 py-4 text-base md:text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
						>
							VIEW OUR WORK
						</motion.a>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
					>
						{[
							{ value: "60+", label: "Projects" },
							{ value: "5+", label: "Years Experience" },
							{ value: "100%", label: "Success Projects" },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.4 + index * 0.1 }}
								className="text-center"
							>
								<div className="text-2xl md:text-4xl font-bold text-green-500 font-orbitron mb-1">
									{stat.value}
								</div>
								<div className="text-sm md:text-base text-gray-400 font-light">
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, y: [0, 10, 0] }}
					transition={{
						opacity: { delay: 2, duration: 0.8 },
						y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
					}}
					className="mt-12 flex flex-col items-center gap-2"
				>
					<span className="text-gray-500 text-sm font-orbitron tracking-wider">SCROLL TO EXPLORE</span>
					<div className="w-6 h-10 border-2 border-green-500/30 rounded-full flex justify-center p-2">
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
							className="w-1.5 h-1.5 bg-green-500 rounded-full"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
