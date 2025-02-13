"use client";

import { motion } from "framer-motion";
import { Send, Trash2, Upload } from "lucide-react";
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

	const removeFile = () => {
		setFile(null);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSending(true);
		setFeedback(null);

		try {
			const response = await fetch("https://formspree.io/f/xkgozyap", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, message }), // 🚀 Ignores file
			});

			if (response.ok) {
				setFeedback("✅ Your message has been sent successfully!");
				setEmail("");
				setMessage("");
				setFile(null);
			} else {
				setFeedback(
					"❌ Failed to send message. Please check the form and try again."
				);
			}
		} catch (error) {
			console.error("Submission Error:", error);
			setFeedback("❌ An error occurred. Please try again.");
		} finally {
			setIsSending(false);
		}
	};

	return (
		<section id="contact" className="py-20 px-4 relative overflow-hidden">
			<div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900 opacity-70"></div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { staggerChildren: 0.2 } }}
				className="max-w-3xl mx-auto relative z-10"
			>
				<motion.h2 className="text-4xl font-bold mb-8 text-center text-green-500">
					Contact Us
				</motion.h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Email Field */}
					<motion.div>
						<label className="block text-sm font-medium text-gray-300">
							Email *
						</label>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
					</motion.div>

					{/* Message Field */}
					<motion.div>
						<label className="block text-sm font-medium text-gray-300">
							Message *
						</label>
						<textarea
							rows={4}
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
						></textarea>
					</motion.div>

					{/* File Upload */}
					<motion.div>
						<label className="block text-sm font-medium text-gray-300">
							Upload Resume (Optional)
						</label>
						<div className="mt-1 flex items-center space-x-3">
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
								<div className="flex items-center space-x-2">
									<span className="text-sm text-gray-400">{file.name}</span>
									<button
										type="button"
										onClick={removeFile}
										className="text-red-500 hover:text-red-700 focus:outline-none"
									>
										<Trash2 className="h-5 w-5" />
									</button>
								</div>
							)}
						</div>
					</motion.div>

					{/* Feedback Message */}
					{feedback && (
						<motion.div
							className={`text-center font-semibold ${
								feedback.includes("✅") ? "text-green-400" : "text-red-400"
							}`}
						>
							{feedback}
						</motion.div>
					)}

					{/* Submit Button */}
					<motion.div>
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
