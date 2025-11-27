"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
	id: number;
	text: string;
	sender: "user" | "bot";
	timestamp: Date;
}

const AIChat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			id: 1,
			text: "Hi! 👋 I'm B3Pay AI Assistant. I can help you learn about our services, technologies, and answer any questions you have. What would you like to know?",
			sender: "bot",
			timestamp: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const getSmartResponse = (userMessage: string): string => {
		const msg = userMessage.toLowerCase();

		// Greetings
		if (msg.match(/^(hi|hello|hey|salam|سلام)/)) {
			return "Hello! 👋 Great to meet you! I'm here to help you learn about B3Pay. We specialize in cutting-edge Web3, Blockchain, and AI solutions. What interests you most?";
		}

		// Services - General
		if (msg.includes("service") || msg.includes("what do you do") || msg.includes("خدمات")) {
			return "We offer three main services:\n\n🌐 **Web Development** - Full-stack applications with React, Next.js, and Node.js\n\n⛓️ **Blockchain & Web3** - Smart contracts, DeFi, and decentralized apps\n\n🤖 **AI & Machine Learning** - Computer vision, NLP, and predictive analytics\n\nWhich one would you like to know more about?";
		}

		// Blockchain/Web3
		if (msg.includes("blockchain") || msg.includes("web3") || msg.includes("smart contract") || msg.includes("defi") || msg.includes("crypto")) {
			return "Our blockchain expertise is quite extensive! 🔗\n\nWe build:\n• Smart contracts using Solidity\n• DeFi applications on Ethereum\n• NFT marketplaces and minting platforms\n• Web3 integrations with wallets\n• Decentralized applications (dApps)\n\nWe've worked on projects ranging from token launches to complex DeFi protocols. Need something specific built?";
		}

		// Web Development
		if (msg.includes("web") || msg.includes("website") || msg.includes("app") || msg.includes("react") || msg.includes("next")) {
			return "We create modern, high-performance web applications! 💻\n\nOur stack:\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Express\n• Database: PostgreSQL, MongoDB\n• Cloud: AWS, Vercel\n\nWe handle everything from simple landing pages to complex enterprise applications. What kind of project do you have in mind?";
		}

		// AI/ML
		if (msg.includes("ai") || msg.includes("machine learning") || msg.includes("ml") || msg.includes("artificial intelligence") || msg.includes("هوش مصنوعی")) {
			return "Our AI capabilities are pretty exciting! 🤖\n\nWe specialize in:\n• Computer Vision - Object detection, image recognition\n• Natural Language Processing - Chatbots, sentiment analysis\n• Predictive Analytics - Forecasting, pattern recognition\n• Deep Learning - Custom neural networks\n\nUsing TensorFlow, PyTorch, and cutting-edge models. What AI problem are you trying to solve?";
		}

		// Pricing
		if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("budget") || msg.includes("قیمت")) {
			return "Great question! 💰\n\nOur pricing depends on:\n• Project complexity\n• Timeline requirements\n• Technology stack\n• Ongoing support needs\n\nWe offer flexible pricing models (fixed price, hourly, or retainer). Most projects start from $5,000 and go up based on scope.\n\nWant a free consultation? Contact us and we'll give you a detailed quote!";
		}

		// Contact
		if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("whatsapp") || msg.includes("تماس")) {
			return "Let's connect! 📞\n\n📧 Email: info@b3pay.io\n💬 WhatsApp: +989354706897\n\nWe typically respond within 24 hours. Looking forward to hearing about your project!";
		}

		// Team
		if (msg.includes("team") || msg.includes("who") || msg.includes("founder") || msg.includes("تیم")) {
			return "We're B3Pay! 👥\n\nFounded by two brothers, Bahamin and Behrad Dehpour, who are passionate about technology and innovation.\n\nWe started with blockchain and Web3, but now we tackle any challenging tech problem - from smart contracts to AI systems. We genuinely care about the work we do and the clients we serve.";
		}

		// Technologies
		if (msg.includes("tech") || msg.includes("stack") || msg.includes("tool") || msg.includes("framework")) {
			return "We work with cutting-edge technologies! ⚡\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Python, Express\n**Blockchain:** Solidity, Ethereum, Web3.js, IPFS\n**AI/ML:** TensorFlow, PyTorch, OpenCV\n**Database:** PostgreSQL, MongoDB, Redis\n**Cloud:** AWS, Vercel, Docker\n\nWe're always learning and adapting to new tech!";
		}

		// Portfolio/Projects
		if (msg.includes("project") || msg.includes("portfolio") || msg.includes("work") || msg.includes("example")) {
			return "We've built some amazing projects! 🚀\n\nRecent highlights:\n• DeFi Exchange Protocol with AMM\n• AI Analytics Dashboard with real-time predictions\n• NFT Marketplace with 3D metaverse integration\n• Enterprise SaaS platform with collaboration features\n\nCheck out our Projects section on the website to see more details and live demos!";
		}

		// Process/How it works
		if (msg.includes("process") || msg.includes("how") || msg.includes("work together") || msg.includes("start")) {
			return "Our process is simple and transparent! 📋\n\n1️⃣ **Discovery Call** - We discuss your needs and goals\n2️⃣ **Proposal** - Detailed scope, timeline, and pricing\n3️⃣ **Development** - Regular updates and demos\n4️⃣ **Testing** - Thorough QA and your feedback\n5️⃣ **Launch** - Deployment and training\n6️⃣ **Support** - Ongoing maintenance if needed\n\nReady to start? Let's schedule a call!";
		}

		// Timeline
		if (msg.includes("time") || msg.includes("long") || msg.includes("duration") || msg.includes("when")) {
			return "Timeline varies by project! ⏱️\n\n• Simple websites: 2-4 weeks\n• Web applications: 1-3 months\n• Blockchain projects: 2-4 months\n• AI/ML systems: 3-6 months\n\nWe can work with urgent deadlines too! Tell us about your timeline and we'll see what we can do.";
		}

		// Help/Capabilities
		if (msg.includes("help") || msg.includes("can you") || msg.includes("able to")) {
			return "I can help you with:\n\n✅ Learning about our services\n✅ Understanding our tech stack\n✅ Getting pricing information\n✅ Connecting you with our team\n✅ Answering technical questions\n✅ Sharing project examples\n\nWhat specific question do you have?";
		}

		// Thank you
		if (msg.includes("thank") || msg.includes("thanks") || msg.includes("متشکر")) {
			return "You're very welcome! 😊 Is there anything else you'd like to know about B3Pay or our services? I'm here to help!";
		}

		// Default - Contextual
		const responses = [
			"That's an interesting question! While I can help with general information about B3Pay's services, technologies, and pricing, for specific technical details or custom requirements, I'd recommend chatting directly with our team.\n\n📧 info@b3pay.io\n💬 WhatsApp: +989354706897\n\nIs there something specific about our services I can help clarify?",
			"I'd love to give you a detailed answer! For the most accurate information about that, our technical team would be the best resource.\n\nMeanwhile, I can tell you about:\n• Our core services (Web, Blockchain, AI)\n• Technologies we use\n• General pricing\n• How to get started\n\nWhat would you like to explore?",
			"Great question! While I have general knowledge about B3Pay, for specifics like that, connecting with our team directly would be best.\n\nYou can reach us at:\n📧 info@b3pay.io\n💬 +989354706897 (WhatsApp)\n\nIn the meantime, is there anything about our services or approach you'd like to know?",
		];

		return responses[Math.floor(Math.random() * responses.length)];
	};

	const handleSend = async () => {
		if (!inputValue.trim()) return;

		const userMessage: Message = {
			id: messages.length + 1,
			text: inputValue,
			sender: "user",
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		const currentInput = inputValue;
		setInputValue("");
		setIsTyping(true);

		try {
			const response = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					messages: [...messages, userMessage].map(m => ({
						text: m.text,
						sender: m.sender
					}))
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch response");
			}

			const data = await response.json();
			
			const botResponse: Message = {
				id: messages.length + 2,
				text: data.response,
				sender: "bot",
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, botResponse]);
		} catch (error) {
			console.error("Error fetching chat response:", error);
			// Fallback to local smart response if API fails
			const fallbackResponse: Message = {
				id: messages.length + 2,
				text: getSmartResponse(currentInput),
				sender: "bot",
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, fallbackResponse]);
		} finally {
			setIsTyping(false);
		}
	};

	const quickQuestions = [
		"What services do you offer?",
		"Tell me about blockchain",
		"How can I contact you?",
		"Show me your projects",
	];

	const isFarsi = (text: string) => {
		const farsiRegex = /[\u0600-\u06FF]/;
		return farsiRegex.test(text);
	};

	return (
		<>
			{/* Floating Chat Button */}
			<motion.button
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-600 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] flex items-center justify-center transition-all duration-300 border-2 border-green-400/30"
			>
				<AnimatePresence mode="wait">
					{isOpen ? (
						<motion.div
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
						>
							<X className="w-7 h-7 text-white" />
						</motion.div>
					) : (
						<motion.div
							key="chat"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
						>
							<MessageCircle className="w-7 h-7 text-white" />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			{/* Chat Window */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 100, scale: 0.8 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 100, scale: 0.8 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="fixed bottom-24 right-6 z-50 w-96 h-[600px] glass-card rounded-2xl border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.3)] flex flex-col overflow-hidden"
					>
						{/* Header */}
						<div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center gap-3">
							<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
								<Bot className="w-6 h-6 text-white" />
							</div>
							<div className="flex-1">
								<h3 className="font-orbitron font-bold text-white">B3Pay AI Assistant</h3>
								<div className="flex items-center gap-2">
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="w-2 h-2 bg-green-300 rounded-full"
									/>
									<span className="text-xs text-green-100 flex items-center gap-1">
										<Sparkles className="w-3 h-3" />
										Smart AI
									</span>
								</div>
							</div>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
							{messages.map((message) => {
								const isMsgFarsi = isFarsi(message.text);
								return (
									<motion.div
										key={message.id}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
									>
										<div
											className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
												message.sender === "user" ? "bg-blue-600" : "bg-green-600"
											}`}
										>
											{message.sender === "user" ? (
												<User className="w-5 h-5 text-white" />
											) : (
												<Bot className="w-5 h-5 text-white" />
											)}
										</div>
										<div
											className={`max-w-[70%] p-3 rounded-2xl ${
												message.sender === "user"
													? "bg-blue-600 text-white rounded-tr-none"
													: "bg-white/10 text-gray-200 rounded-tl-none border border-white/10"
											}`}
										>
											<p 
												className={`text-sm whitespace-pre-line ${isMsgFarsi ? "font-vazirmatn text-right" : "text-left"}`}
												dir={isMsgFarsi ? "rtl" : "ltr"}
											>
												{message.text}
											</p>
											<span className="text-xs opacity-60 mt-1 block text-left">
												{message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
											</span>
										</div>
									</motion.div>
								);
							})}

							{isTyping && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="flex gap-2"
								>
									<div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
										<Bot className="w-5 h-5 text-white" />
									</div>
									<div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/10">
										<div className="flex gap-1">
											{[0, 1, 2].map((i) => (
												<motion.div
													key={i}
													animate={{ y: [0, -5, 0] }}
													transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
													className="w-2 h-2 bg-green-500 rounded-full"
												/>
											))}
										</div>
									</div>
								</motion.div>
							)}
							<div ref={messagesEndRef} />
						</div>

						{/* Quick Questions */}
						{messages.length === 1 && (
							<div className="p-3 border-t border-white/10 bg-black/20">
								<p className="text-xs text-gray-400 mb-2 font-orbitron">Quick Questions:</p>
								<div className="flex flex-wrap gap-2">
									{quickQuestions.map((question) => (
										<motion.button
											key={question}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => {
												setInputValue(question);
												setTimeout(handleSend, 100);
											}}
											className="text-xs px-3 py-1.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-full border border-green-500/30 transition-colors"
										>
											{question}
										</motion.button>
									))}
								</div>
							</div>
						)}

						{/* Input */}
						<div className="p-4 border-t border-white/10 bg-black/30">
							<div className="flex gap-2">
								<input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyPress={(e) => e.key === "Enter" && handleSend()}
									placeholder="Type your message..."
									className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
								/>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={handleSend}
									disabled={isTyping}
									className="bg-green-600 hover:bg-green-500 p-2 rounded-lg transition-colors disabled:opacity-50"
								>
									<Send className="w-5 h-5 text-white" />
								</motion.button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default AIChat;
