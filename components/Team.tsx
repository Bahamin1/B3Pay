"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
	{
		name: "Behrad Deylami",
		role: "Founder, Senior FullStack Specialist Developer Web3 and Web2",
		image: "/images/Behrad.png",
	},
	{
		name: "Bahamin Deylami",
		role: "Blockchain Smart Contracts Web3 Specialist and Web Developer",
		image: "/images/Bahamin.jpg",
	},
	{
		name: "Ali Farahmand",
		role: "Data Scientist and AI programming",
		image: "/images/Ali.png",
	},
	{
		name: "Saber MirBagheri",
		role: "Web Developer and robotics programming",
		image: "/images/Saber.png",
	},
];

const Team = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.3 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
				duration: 0.5,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section id="team" className="py-20 px-4 relative overflow-hidden">
			<div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>
			<motion.div
				ref={containerRef}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="max-w-7xl mx-auto relative z-10"
			>
				<motion.h2
					variants={itemVariants}
					className="text-4xl font-bold mb-12 text-center text-green-500"
				>
					Our Team
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							variants={itemVariants}
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm"
						>
							<motion.img
								src={member.image}
								alt={member.name}
								className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
								whileHover={{
									rotate: 360,
									transition: { duration: 1, ease: "easeInOut" },
								}}
							/>
							<h3 className="text-xl font-semibold mb-2">{member.name}</h3>
							<p className="text-green-400">{member.role}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Team;
