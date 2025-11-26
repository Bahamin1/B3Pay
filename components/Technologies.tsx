"use client";

import { motion, useInView } from "framer-motion";
import {
	Cpu,
	Database,
	Globe,
	Layers,
	Layout,
	Server,
	Smartphone,
	Terminal,
} from "lucide-react";
import { useRef } from "react";

const techCategories = [
	{
		title: "Frontend & UI",
		icon: Layout,
		skills: [
			"React.js",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Three.js",
		],
	},
	{
		title: "Backend & Cloud",
		icon: Server,
		skills: [
			"Node.js",
			"Python",
			"Django",
			"PostgreSQL",
			"AWS",
			"Docker",
		],
	},
	{
		title: "Web3 & Blockchain",
		icon: Globe,
		skills: [
			"Solidity",
			"Ethereum",
			"Smart Contracts",
			"Web3.js",
			"Hardhat",
			"IPFS",
		],
	},
	{
		title: "AI & Data Science",
		icon: Cpu,
		skills: [
			"TensorFlow",
			"PyTorch",
			"Scikit-learn",
			"NLP",
			"Computer Vision",
			"Data Analysis",
		],
	},
];

const Technologies = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section id="technologies" className="py-24 px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<motion.div
				ref={containerRef}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="max-w-7xl mx-auto relative z-10"
			>
				<motion.div variants={itemVariants} className="text-center mb-20">
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-green-500 font-orbitron tracking-wider text-glow">
						CORE TECHNOLOGIES
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
						We leverage the most advanced stack to build scalable, secure, and
						intelligent solutions.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{techCategories.map((category, index) => (
						<motion.div
							key={category.title}
							variants={itemVariants}
							whileHover={{ y: -10 }}
							className="glass-card p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500 group relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							
							<div className="relative z-10">
								<div className="w-16 h-16 bg-black/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
									<category.icon className="h-8 w-8 text-green-500 group-hover:text-white transition-colors duration-300" />
								</div>
								
								<h3 className="text-xl font-bold mb-6 font-orbitron tracking-wide text-white group-hover:text-green-400 transition-colors duration-300">
									{category.title}
								</h3>

								<ul className="space-y-3">
									{category.skills.map((skill, i) => (
										<li key={skill} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
											<span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>
											<span className="text-sm font-medium tracking-wide">{skill}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Technologies;
