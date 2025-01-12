'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Jane Smith',
    role: 'Blockchain Specialist',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Mike Johnson',
    role: 'Data Scientist',
    image: '/placeholder.svg?height=200&width=200',
  },
]

const Team = () => {
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
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>
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
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg text-center backdrop-blur-sm"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-green-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Team

