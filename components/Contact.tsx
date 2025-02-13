"use client";

import { motion } from "framer-motion";
import { Send, Upload } from "lucide-react";
import { useState } from "react";

const Contact = () => {
	const [file, setFile] = useState<File | null>(null);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [feedback, setFeedback] = useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSending(true);
		setFeedback(null);

		const formData = new FormData();
		formData.append("email", email);
		formData.append("message", message);
		if (file) {
			formData.append("file", file);
		}

		try {
			const response = await fetch("https://formspree.io/f/xkgozyap", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				setFeedback("✅ Your message has been sent successfully!");
				setEmail("");
				setMessage("");
				setFile(null);
			} else {
				setFeedback("❌ Failed to send message. Please try again.");
			}
		} catch (error) {
			setFeedback("❌ An error occurred. Please try again.");
		} finally {
			setIsSending(false);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section id="contact" className="py-20 px-4 relative overflow-hidden">
			<div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900 opacity-70"></div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="max-w-3xl mx-auto relative z-10"
			>
				<motion.h2
					variants={itemVariants}
					className="text-4xl font-bold mb-8 text-center text-green-500"
				>
					Contact Us
				</motion.h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<motion.div variants={itemVariants}>
						<label className="block text-sm font-medium text-gray-300">
							Email
						</label>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</motion.div>
					<motion.div variants={itemVariants}>
						<label className="block text-sm font-medium text-gray-300">
							Message
						</label>
						<textarea
							rows={4}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
						></textarea>
					</motion.div>
					<motion.div variants={itemVariants}>
						<label className="block text-sm font-medium text-gray-300">
							Upload Resume (Optional)
						</label>
						<div className="mt-1 flex items-center">
							<input
								type="file"
								id="resume"
								name="resume"
								onChange={handleFileChange}
								className="hidden"
								accept=".pdf,.doc,.docx"
							/>
							<label
								htmlFor="resume"
								className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							>
								<Upload className="mr-2 -ml-1 h-5 w-5" />
								Choose File
							</label>
							{file && (
								<span className="ml-3 text-sm text-gray-400">{file.name}</span>
							)}
						</div>
					</motion.div>
					{feedback && (
						<motion.div
							variants={itemVariants}
							className={`text-center font-semibold ${
								feedback.includes("✅") ? "text-green-400" : "text-red-400"
							}`}
						>
							{feedback}
						</motion.div>
					)}
					<motion.div variants={itemVariants}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="submit"
							disabled={isSending}
							className={`w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${
								isSending
									? "bg-gray-500 cursor-not-allowed"
									: "bg-green-500 hover:bg-green-600"
							} text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}
						>
							{isSending ? "Sending..." : "Send Message"}
							<Send className="ml-2 -mr-1 h-5 w-5" />
						</motion.button>
					</motion.div>
				</form>
			</motion.div>
		</section>
	);
};

export default Contact;
