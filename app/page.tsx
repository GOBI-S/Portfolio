'use client'

import { motion } from 'framer-motion'
import TechSticker from './components/TechSticker'

const technologies = [
  { name: 'React', color: 'bg-blue-500 text-white' },
  { name: 'Node.js', color: 'bg-green-500 text-white' },
  { name: 'Express', color: 'bg-gray-700 text-white' },
  { name: 'MongoDB', color: 'bg-green-600 text-white' },
  { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
  { name: 'TypeScript', color: 'bg-blue-600 text-white' },
  { name: 'HTML5', color: 'bg-orange-500 text-white' },
  { name: 'CSS3', color: 'bg-blue-400 text-white' },
  { name: 'Tailwind', color: 'bg-teal-400 text-white' },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl"
      >
        <motion.h1 
          className="text-5xl font-bold mb-4 text-blue-400"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Hi, I'm Gobi
        </motion.h1>
        <motion.h2 
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MERN Stack Developer
        </motion.h2>
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Motivated Full Stack Developer with hands-on experience in developing web
          applications using React, Node.js, MongoDB and Express.js. Eager to apply my skills in
          JavaScript & TypeScript front-end development, and API integrations to contribute to dynamic and
          innovative projects while continuously learning new technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200, damping: 10 }}
            >
              <TechSticker name={tech.name} color={tech.color} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}

