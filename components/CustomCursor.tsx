"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
	const [isHovering, setIsHovering] = useState(false);
	const [cursorVariant, setCursorVariant] = useState("default");
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 700 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);
		};

		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.tagName === "BUTTON" ||
				target.tagName === "A" ||
				target.closest("button") ||
				target.closest("a")
			) {
				setIsHovering(true);
				setCursorVariant("hover");
			} else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
				setIsHovering(false);
				setCursorVariant("text");
			} else {
				setIsHovering(false);
				setCursorVariant("default");
			}
		};

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseover", handleMouseOver);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseover", handleMouseOver);
		};
	}, [cursorX, cursorY]);

	return (
		<>
			{/* Main Cursor - Arrow Shape */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
				style={{
					x: cursorXSpring,
					y: cursorYSpring,
				}}
			>
				<motion.svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					animate={{
						scale: cursorVariant === "hover" ? 1.5 : cursorVariant === "text" ? 0.8 : 1,
						rotate: cursorVariant === "text" ? 90 : 0,
					}}
					transition={{ duration: 0.2 }}
				>
					{/* Outer Glow */}
					<motion.path
						d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
						fill="rgba(34, 197, 94, 0.3)"
						animate={{
							scale: cursorVariant === "hover" ? [1, 1.2, 1] : 1,
						}}
						transition={{
							duration: 1,
							repeat: cursorVariant === "hover" ? Infinity : 0,
						}}
					/>
					{/* Main Arrow */}
					<motion.path
						d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
						fill="url(#cursorGradient)"
						stroke="#22c55e"
						strokeWidth="1"
						animate={{
							fill: cursorVariant === "hover" 
								? "url(#cursorGradientHover)" 
								: "url(#cursorGradient)",
						}}
					/>
					{/* Inner Highlight */}
					<path
						d="M5 5L9 15L10.5 10.5L15 9L5 5Z"
						fill="rgba(255, 255, 255, 0.3)"
					/>
					
					{/* Gradients */}
					<defs>
						<linearGradient id="cursorGradient" x1="3" y1="3" x2="19.97" y2="19.97">
							<stop offset="0%" stopColor="#22c55e" />
							<stop offset="100%" stopColor="#16a34a" />
						</linearGradient>
						<linearGradient id="cursorGradientHover" x1="3" y1="3" x2="19.97" y2="19.97">
							<stop offset="0%" stopColor="#4ade80" />
							<stop offset="100%" stopColor="#22c55e" />
						</linearGradient>
					</defs>
				</motion.svg>
			</motion.div>

			{/* Cursor Trail Effect */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9998]"
				style={{
					x: cursorXSpring,
					y: cursorYSpring,
				}}
			>
				<motion.div
					className="w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-green-500/30"
					animate={{
						scale: cursorVariant === "hover" ? 2 : 1,
						opacity: cursorVariant === "hover" ? 0.5 : 0.2,
					}}
					transition={{ duration: 0.3 }}
				/>
			</motion.div>

			{/* Particle Effect on Hover */}
			{isHovering && (
				<motion.div
					className="fixed top-0 left-0 pointer-events-none z-[9997]"
					style={{
						x: cursorXSpring,
						y: cursorYSpring,
					}}
				>
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-green-500 rounded-full"
							initial={{ x: 0, y: 0, opacity: 1 }}
							animate={{
								x: Math.cos((i * Math.PI * 2) / 6) * 20,
								y: Math.sin((i * Math.PI * 2) / 6) * 20,
								opacity: 0,
							}}
							transition={{
								duration: 0.6,
								repeat: Infinity,
								repeatDelay: 0.2,
							}}
						/>
					))}
				</motion.div>
			)}
		</>
	);
};

export default CustomCursor;
