"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
	{
		name: "Bahamin Dehpour",
		role: "Blockchain Smart Contracts Web3 Specialist and Web Developer",
		image: "/images/Bahamin.jpg",
	},
	{
		name: "Behrad Dehpour",
		role: "Founder, Senior FullStack Specialist Developer Web3 and Web2",
		image: "/images/Behrad.png",
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
					className="text-4xl md:text-5xl font-bold mb-16 text-center text-green-500 font-orbitron tracking-wider text-glow"
				>
					Our Team
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							variants={itemVariants}
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							className="glass-card p-6 rounded-xl border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 text-center group"
						>
							<div className="relative w-32 h-32 mx-auto mb-6">
								<div className="absolute inset-0 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/40 transition-all duration-300"></div>
								<motion.img
									src={member.image}
									alt={member.name}
									className="w-32 h-32 rounded-full object-cover relative z-10 border-2 border-green-500/30 group-hover:border-green-500 transition-colors duration-300"
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.3 },
									}}
								/>
							</div>
							<h3 className="text-lg font-bold mb-2 font-orbitron tracking-wide text-white group-hover:text-green-400 transition-colors duration-300">{member.name}</h3>
							<p className="text-sm text-gray-400 font-light leading-relaxed">{member.role}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Team;
