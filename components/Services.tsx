'use client'

import { motion } from 'framer-motion'
import { Globe, Database, Brain } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Create responsive and user-friendly websites and web applications.',
    icon: Globe,
  },
  {
    title: 'Blockchain',
    description: 'Develop secure and scalable decentralized applications and smart contracts.',
    icon: Database,
  },
  {
    title: 'Data Science & ML',
    description: 'Leverage data science and machine learning for predictive modeling and insights.',
    icon: Brain,
  },
]

const Services = () => {
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
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900 opacity-70"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-green-500"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="h-16 w-16 text-green-500 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              </motion.div>
              <p className="text-gray-400 text-center mt-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services

