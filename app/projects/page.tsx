'use client'

import { motion } from 'framer-motion'
import TechSticker from '../components/TechSticker'

const projects = [
  {
    name: 'Email Temperature System',
    description: 'Developed a system that sends daily temperature updates to users via email based on their chosen location.',
    tech: [
      { name: 'HTML', color: 'bg-orange-500 text-white' },
      { name: 'CSS', color: 'bg-blue-400 text-white' },
      { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
      { name: 'Express.js', color: 'bg-gray-700 text-white' },
      { name: 'Node.js', color: 'bg-green-500 text-white' },
      { name: 'MongoDB', color: 'bg-green-600 text-white' },
    ]
  },
  {
    name: 'Diffusion Analysis in Data Science',
    description: 'Created an ML Model using the Monkey Dataset to predict next year\'s death data using the ARIMA AI Model.',
    tech: [
      { name: 'Machine Learning', color: 'bg-purple-500 text-white' },
      { name: 'Data Science', color: 'bg-blue-500 text-white' },
      { name: 'ARIMA Model', color: 'bg-green-500 text-white' },
    ]
  },
  {
    name: 'Room Rent Web App',
    description: 'Currently developing a full-fledged website for room rentals with separate profiles for owners and users.',
    tech: [
      { name: 'Node.js', color: 'bg-green-500 text-white' },
      { name: 'MongoDB', color: 'bg-green-600 text-white' },
      { name: 'React', color: 'bg-blue-500 text-white' },
      { name: 'Vite', color: 'bg-purple-500 text-white' },
      { name: 'Tailwind CSS', color: 'bg-teal-400 text-white' },
      { name: 'Express.js', color: 'bg-gray-700 text-white' },
      { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    ]
  }
]

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer"
            >
              <motion.h3 
                className="text-2xl font-bold mb-2 text-blue-400"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                {project.name}
              </motion.h3>
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.4 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                {project.tech.map((tech) => (
                  <TechSticker key={tech.name} name={tech.name} color={tech.color} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

