'use client'

import { motion } from 'framer-motion'
import TechSticker from '../components/TechSticker'
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { link } from 'fs'

const projects = [
  {
    name: 'Email Temperature System',
    description: 'Developed a system that sends daily temperature updates to users via email based on their chosen location.',
    tech: [
      { name: 'HTML', color: 'bg-orange-500 text-white' },
      { name: 'CSS', color: 'bg-blue-400 text-white' },
      { name: 'React', color: 'bg-yellow-400 text-black' },
      { name: 'Express.js', color: 'bg-gray-700 text-white' },
      { name: 'Node.js', color: 'bg-green-500 text-white' },
      { name: 'MongoDB', color: 'bg-green-600 text-white' },
    ],
    link: 'https://weatherremainder.gobidev.site'
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
    description: 'Developed a web application that allows users to post rooms for rent and search for rooms to rent. it is resposive for all devices and has a user-friendly interface.',
    tech: [
      { name: 'Node.js', color: 'bg-green-500 text-white' },
      { name: 'MongoDB', color: 'bg-green-600 text-white' },
      { name: 'React', color: 'bg-blue-500 text-white' },
      { name: 'Vite', color: 'bg-purple-500 text-white' },
      { name: 'Tailwind CSS', color: 'bg-teal-400 text-white' },
      { name: 'Express.js', color: 'bg-gray-700 text-white' },
      { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    ],
    link: 'https://roomrentwebmern.gobidev.site/'
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
                className="flex flex-wrap gap-2 mb-4"
              >
                {project.tech.map((tech) => (
                  <TechSticker key={tech.name} name={tech.name} color={tech.color} />
                ))}
              </motion.div>
              {project.link && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    Visit Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

