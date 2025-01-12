'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Innovators in Technology
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Providing services in Web Development, Blockchain, and AI Integrated Applications.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-600 transition-colors duration-300"
        >
          Get Started
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
        </motion.a>
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </section>
  )
}

export default Hero

