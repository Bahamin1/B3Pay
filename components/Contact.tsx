"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, Sparkles, Users } from "lucide-react";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [isSending, setIsSending] = useState(false);
	const [feedback, setFeedback] = useState<string | null>(null);
	const [showConfetti, setShowConfetti] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSending(true);
		setFeedback(null);

		try {
			const response = await fetch("https://formspree.io/f/xkgozyap", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setFeedback("✅ Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
				setShowConfetti(true);
				setTimeout(() => setShowConfetti(false), 3000);
			} else {
				setFeedback("❌ Failed to send. Please try again.");
			}
		} catch (error) {
			console.error("Submission Error:", error);
			setFeedback("❌ An error occurred. Please try again.");
		} finally {
			setIsSending(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const contactMethods = [
		{
			icon: Mail,
			title: "Email",
			value: "info@b3pay.io",
			link: "mailto:info@b3pay.io",
			color: "from-blue-500/20 to-cyan-500/20",
		},
		{
			icon: MessageCircle,
			title: "Online Chat",
			value: "Chat on WhatsApp",
			link: "https://wa.me/989354706897",
			color: "from-green-500/20 to-emerald-500/20",
		},
	];

	return (
		<section id="contact" className="py-24 px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
			</div>

			{/* Confetti Effect */}
			{showConfetti && (
				<div className="fixed inset-0 pointer-events-none z-50">
					{[...Array(50)].map((_, i) => (
						<motion.div
							key={i}
							initial={{ y: -20, x: Math.random() * window.innerWidth, opacity: 1 }}
							animate={{
								y: window.innerHeight + 20,
								x: Math.random() * window.innerWidth,
								opacity: 0,
								rotate: Math.random() * 360,
							}}
							transition={{ duration: 2 + Math.random() * 2, ease: "linear" }}
							className="absolute w-3 h-3 bg-green-500 rounded-full"
							style={{
								left: Math.random() * 100 + "%",
							}}
						/>
					))}
				</div>
			)}

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold mb-6 text-green-500 font-orbitron tracking-wider text-glow">
						GET IN TOUCH
					</h2>
					<p className="text-gray-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
						Ready to transform your ideas into reality? Let's collaborate and build something extraordinary together.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* About Us Section */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<div className="glass-card p-8 rounded-2xl border border-white/10">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
									<Users className="w-8 h-8 text-green-500" />
								</div>
								<h3 className="text-2xl font-bold font-orbitron text-white">ABOUT US</h3>
							</div>
							<p className="text-gray-300 leading-relaxed mb-4">
								We're B3Pay - two brothers, Bahamin and Behrad Dehpour, who decided a few years back to work on what we genuinely love: software development and emerging tech.
							</p>
							<p className="text-gray-300 leading-relaxed mb-4">
								We started with blockchain and Web3, but now we tackle anything challenging - from smart contracts to AI systems and complex web applications.
							</p>
							<p className="text-gray-300 leading-relaxed">
								If you've got a project that needs a team that's both technically solid and actually cares about the work, we'd be happy to collaborate.
							</p>
						</div>

						{/* Contact Methods */}
						<div className="space-y-4">
							{contactMethods.map((method, index) => (
								<motion.a
									key={method.title}
									href={method.link}
									target={method.link.startsWith("http") ? "_blank" : undefined}
									rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.02, x: 10 }}
									className="glass-card p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 flex items-center gap-4 group"
								>
									<div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center border border-white/10 group-hover:border-green-500/50 transition-all duration-300`}>
										<method.icon className="w-7 h-7 text-green-500" />
									</div>
									<div className="flex-1">
										<h4 className="text-sm font-bold font-orbitron text-gray-400 mb-1">
											{method.title}
										</h4>
										<p className="text-white font-medium group-hover:text-green-400 transition-colors">
											{method.value}
										</p>
									</div>
									<motion.div
										initial={{ x: 0 }}
										whileHover={{ x: 5 }}
										className="text-green-500"
									>
										→
									</motion.div>
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.form
						onSubmit={handleSubmit}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="glass-card p-8 rounded-2xl border border-white/10 space-y-6"
					>
						<h3 className="text-2xl font-bold font-orbitron text-white mb-6">SEND MESSAGE</h3>

						{/* Name Field */}
						<div className="relative">
							<input
								type="text"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-4 bg-black/40 border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300 backdrop-blur-sm peer"
								placeholder="Your Name"
							/>
							<label className="absolute -top-3 left-4 bg-black px-2 text-xs text-green-500 font-orbitron">
								NAME
							</label>
						</div>

						{/* Email Field */}
						<div className="relative">
							<input
								type="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-4 bg-black/40 border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300 backdrop-blur-sm peer"
								placeholder="your.email@example.com"
							/>
							<label className="absolute -top-3 left-4 bg-black px-2 text-xs text-green-500 font-orbitron">
								EMAIL
							</label>
						</div>

						{/* Message Field */}
						<div className="relative">
							<textarea
								name="message"
								required
								rows={5}
								value={formData.message}
								onChange={handleChange}
								className="w-full px-4 py-4 bg-black/40 border-2 border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all duration-300 backdrop-blur-sm peer resize-none"
								placeholder="Tell us about your project..."
							></textarea>
							<label className="absolute -top-3 left-4 bg-black px-2 text-xs text-green-500 font-orbitron">
								MESSAGE
							</label>
						</div>

						{/* Feedback Message */}
						{feedback && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className={`text-center font-semibold p-4 rounded-lg ${
									feedback.includes("✅")
										? "bg-green-900/20 text-green-400 border border-green-500/30"
										: "bg-red-900/20 text-red-400 border border-red-500/30"
								}`}
							>
								{feedback}
							</motion.div>
						)}

						{/* Submit Button */}
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							type="submit"
							disabled={isSending}
							className={`w-full px-8 py-4 rounded-lg font-orbitron tracking-widest text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
								isSending
									? "bg-gray-600 cursor-not-allowed"
									: "bg-green-600 hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
							} text-white`}
						>
							{isSending ? (
								<>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
									>
										<Sparkles className="w-5 h-5" />
									</motion.div>
									SENDING...
								</>
							) : (
								<>
									<Send className="w-5 h-5" />
									SEND MESSAGE
								</>
							)}
						</motion.button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
