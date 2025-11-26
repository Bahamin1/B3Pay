"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Code, Cpu, Database, Globe, Layers, Rocket, Shield } from "lucide-react";
import { useRef, useState } from "react";

const services = [
	{
		title: "Web Development",
		description: "Full-stack web applications with modern frameworks and best practices.",
		detailedDescription: "We build scalable, responsive web applications using React, Next.js, and Node.js. From concept to deployment, we handle everything.",
		icon: Code,
		technologies: ["React", "Next.js", "TypeScript", "Node.js"],
		color: "from-blue-500/20 to-cyan-500/20",
	},
	{
		title: "Blockchain & Web3",
		description: "Decentralized applications and smart contract development.",
		detailedDescription: "Expert in Solidity, Ethereum, and Web3 technologies. We create secure smart contracts and DeFi applications.",
		icon: Shield,
		technologies: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
		color: "from-purple-500/20 to-pink-500/20",
	},
	{
		title: "AI & Machine Learning",
		description: "Intelligent solutions powered by cutting-edge AI technology.",
		detailedDescription: "We develop AI models for computer vision, NLP, and predictive analytics using TensorFlow and PyTorch.",
		icon: Brain,
		technologies: ["TensorFlow", "PyTorch", "Python", "NLP"],
		color: "from-green-500/20 to-emerald-500/20",
	},
];

const Services = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.3 });
	const [flippedCard, setFlippedCard] = useState<number | null>(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
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
		<section id="services" className="py-24 px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
						OUR SERVICES
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
						Cutting-edge solutions across Web2, Web3, and AI technologies.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							variants={itemVariants}
							className="relative h-[400px] perspective-1000"
							onMouseEnter={() => setFlippedCard(index)}
							onMouseLeave={() => setFlippedCard(null)}
						>
							<motion.div
								className="relative w-full h-full transition-transform duration-700 transform-style-3d"
								animate={{
									rotateY: flippedCard === index ? 180 : 0,
								}}
								style={{ transformStyle: "preserve-3d" }}
							>
								{/* Front of Card */}
								<div
									className="absolute inset-0 glass-card p-8 rounded-2xl border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-500 backface-hidden"
									style={{ backfaceVisibility: "hidden" }}
								>
									<div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
									
									<div className="relative z-10 flex flex-col items-center text-center h-full">
										<div className="w-20 h-20 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
											<service.icon className="h-10 w-10 text-green-500" />
										</div>
										
										<h3 className="text-2xl font-bold mb-4 font-orbitron tracking-wide text-white">
											{service.title}
										</h3>

										<p className="text-gray-300 mb-6 font-light leading-relaxed flex-grow">
											{service.description}
										</p>

										<div className="text-green-400 text-sm font-orbitron tracking-wider">
											HOVER TO LEARN MORE →
										</div>
									</div>
								</div>

								{/* Back of Card */}
								<div
									className="absolute inset-0 glass-card p-8 rounded-2xl border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)] backface-hidden"
									style={{
										backfaceVisibility: "hidden",
										transform: "rotateY(180deg)",
									}}
								>
									<div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 rounded-2xl`}></div>
									
									<div className="relative z-10 h-full flex flex-col">
										<h3 className="text-xl font-bold mb-4 font-orbitron tracking-wide text-green-400">
											{service.title}
										</h3>

										<p className="text-gray-200 mb-6 font-light leading-relaxed text-sm">
											{service.detailedDescription}
										</p>

										<div className="mb-4">
											<h4 className="text-sm font-bold text-white mb-3 font-orbitron">TECHNOLOGIES:</h4>
											<div className="flex flex-wrap gap-2">
												{service.technologies.map((tech) => (
													<span
														key={tech}
														className="px-3 py-1 text-xs font-medium text-green-300 bg-green-500/20 rounded-full border border-green-500/30"
													>
														{tech}
													</span>
												))}
											</div>
										</div>

										<button className="mt-auto px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-orbitron tracking-wider rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300">
											GET STARTED
										</button>
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Services;
