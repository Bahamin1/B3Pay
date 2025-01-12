import MatrixBackground from '../components/MatrixBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden relative">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

