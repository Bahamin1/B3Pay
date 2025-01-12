'use client'

import { motion } from 'framer-motion'
import { GitlabIcon as GitHub, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-black bg-opacity-70 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-400">&copy; 2023 B3Pay. All rights reserved.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex space-x-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#fff' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <GitHub className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#fff' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#fff' }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

