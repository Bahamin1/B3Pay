import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoadingScreen from "../components/LoadingScreen";
import MatrixBackground from "../components/MatrixBackground";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Team from "../components/Team";
import Technologies from "../components/Technologies";
import AIChat from "../components/AIChat";

export default function Home() {
	return (
		<>
			<LoadingScreen />
			<AIChat />
			<main className="flex min-h-screen flex-col bg-black text-white overflow-hidden relative">
				<MatrixBackground />
				<div className="relative z-10 w-full">
					<Navbar />
					<Hero />
					<Services />
					<Technologies />
					<Projects />
					<Team />
					<Contact />
					<Footer />
				</div>
			</main>
		</>
	);
}
