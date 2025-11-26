"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, X } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
	{
		title: "DeFi Exchange Protocol",
		category: "Web3",
		description: "A decentralized exchange platform with automated market making and yield farming capabilities.",
		image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832",
		tags: ["Solidity", "React", "Web3.js", "Ethereum"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
	{
		title: "AI Analytics Dashboard",
		category: "AI/ML",
		description: "Real-time data visualization dashboard powered by machine learning algorithms for predictive analytics.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940",
		tags: ["Python", "TensorFlow", "D3.js", "Next.js"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
	{
		title: "Metaverse NFT Marketplace",
		category: "Web3",
		description: "Immersive 3D marketplace for trading virtual assets and NFTs within a metaverse environment.",
		image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=2808",
		tags: ["Three.js", "Next.js", "IPFS", "Smart Contracts"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
	{
		title: "Enterprise SaaS Platform",
		category: "Web Development",
		description: "Full-stack enterprise solution with real-time collaboration and advanced analytics.",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2815",
		tags: ["React", "Node.js", "PostgreSQL", "AWS"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
	{
		title: "Computer Vision System",
		category: "AI/ML",
		description: "Advanced object detection and recognition system using deep learning models.",
		image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=2832",
		tags: ["PyTorch", "OpenCV", "Python", "TensorFlow"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
	{
		title: "Blockchain Supply Chain",
		category: "Web3",
		description: "Transparent supply chain management system built on blockchain technology.",
		image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2832",
		tags: ["Solidity", "Hyperledger", "React", "Node.js"],
		links: { demo: "https://github.com/B3Pay", github: "https://github.com/B3Pay" },
	},
];

const categories = ["All", "Web3", "AI/ML", "Web Development"];

const Projects = () => {
	const containerRef = useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.2 });
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

	const filteredProjects = selectedCategory === "All" 
		? projects 
		: projects.filter(p => p.category === selectedCategory);

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
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section id="projects" className="py-24 px-4 relative overflow-hidden">
			<div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
			
			<motion.div
				ref={containerRef}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="max-w-7xl mx-auto relative z-10"
			>
				<motion.div variants={itemVariants} className="text-center mb-16">
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-green-500 font-orbitron tracking-wider text-glow">
						FEATURED PROJECTS
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto text-lg font-light mb-8">
						A showcase of our technical prowess and creative innovation.
					</p>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<motion.button
								key={category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-orbitron tracking-wide transition-all duration-300 ${
									selectedCategory === category
										? "bg-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]"
										: "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
								}`}
							>
								{category}
							</motion.button>
						))}
					</div>
				</motion.div>

				<AnimatePresence mode="wait">
					<motion.div
						key={selectedCategory}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.title}
								variants={itemVariants}
								whileHover={{ y: -10 }}
								onClick={() => setSelectedProject(project)}
								className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-green-500/50 transition-all duration-500 cursor-pointer"
							>
								{/* Image Container */}
								<div className="relative h-64 overflow-hidden">
									<div className="absolute inset-0 bg-green-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<motion.img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
										<a 
											href={project.links.github} 
											target="_blank" 
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2 bg-black/70 backdrop-blur-md rounded-full text-white hover:text-green-400 hover:bg-black/90 transition-colors border border-white/10"
										>
											<Github className="w-5 h-5" />
										</a>
										<a 
											href={project.links.demo} 
											target="_blank" 
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2 bg-black/70 backdrop-blur-md rounded-full text-white hover:text-green-400 hover:bg-black/90 transition-colors border border-white/10"
										>
											<ExternalLink className="w-5 h-5" />
										</a>
									</div>
								</div>

								{/* Content */}
								<div className="p-6 relative">
									<div className="text-green-500 text-xs font-bold tracking-widest uppercase mb-3 font-orbitron">
										{project.category}
									</div>
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 font-orbitron">
										{project.title}
									</h3>
									<p className="text-gray-400 mb-4 line-clamp-2 font-light leading-relaxed text-sm">
										{project.description}
									</p>
									
									{/* Tags */}
									<div className="flex flex-wrap gap-2">
										{project.tags.slice(0, 3).map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-xs font-medium text-green-300 bg-green-500/10 rounded-full border border-green-500/20"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Lightbox Modal */}
				<AnimatePresence>
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedProject(null)}
							className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								onClick={(e) => e.stopPropagation()}
								className="glass-card p-8 rounded-2xl border border-green-500/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
							>
								<div className="flex justify-between items-start mb-6">
									<div>
										<div className="text-green-500 text-sm font-bold tracking-widest uppercase mb-2 font-orbitron">
											{selectedProject.category}
										</div>
										<h3 className="text-3xl font-bold text-white font-orbitron">
											{selectedProject.title}
										</h3>
									</div>
									<button
										onClick={() => setSelectedProject(null)}
										className="p-2 hover:bg-white/10 rounded-full transition-colors"
									>
										<X className="w-6 h-6 text-white" />
									</button>
								</div>

								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="w-full h-64 object-cover rounded-xl mb-6"
								/>

								<p className="text-gray-300 mb-6 leading-relaxed">
									{selectedProject.description}
								</p>

								<div className="mb-6">
									<h4 className="text-white font-bold mb-3 font-orbitron">TECHNOLOGIES:</h4>
									<div className="flex flex-wrap gap-2">
										{selectedProject.tags.map((tag) => (
											<span
												key={tag}
												className="px-4 py-2 text-sm font-medium text-green-300 bg-green-500/20 rounded-full border border-green-500/30"
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								<div className="flex gap-4">
									<a
										href={selectedProject.links.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-orbitron tracking-wider rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 text-center flex items-center justify-center gap-2"
									>
										<ExternalLink className="w-5 h-5" />
										LIVE DEMO
									</a>
									<a
										href={selectedProject.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-orbitron tracking-wider rounded-lg border border-white/20 transition-all duration-300 text-center flex items-center justify-center gap-2"
									>
										<Github className="w-5 h-5" />
										VIEW CODE
									</a>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</section>
	);
};

export default Projects;
