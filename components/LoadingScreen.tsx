"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		// Simulate loading progress
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setTimeout(() => setIsLoading(false), 500);
					return 100;
				}
				return prev + 10;
			});
		}, 150);

		return () => clearInterval(interval);
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
				>
					<div className="text-center">
						{/* Logo/Title */}
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-6xl md:text-8xl font-bold font-orbitron text-green-500 mb-8 text-glow"
						>
							B3PAY
						</motion.h1>

						{/* Matrix Rain Effect */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="mb-8"
						>
							<div className="flex justify-center gap-2">
								{[...Array(10)].map((_, i) => (
									<motion.div
										key={i}
										initial={{ height: 0 }}
										animate={{
											height: [0, 60, 0],
										}}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											delay: i * 0.1,
											ease: "easeInOut",
										}}
										className="w-1 bg-green-500 rounded-full"
									/>
								))}
							</div>
						</motion.div>

						{/* Progress Bar */}
						<div className="w-64 mx-auto">
							<div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: `${progress}%` }}
									className="h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
								/>
							</div>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-green-500 font-orbitron text-sm tracking-wider"
							>
								INITIALIZING... {progress}%
							</motion.p>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default LoadingScreen;
