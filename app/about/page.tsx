'use client'

import { motion } from 'framer-motion'
import TechSticker from '../components/TechSticker'

const skills = [
  { name: 'GitHub', color: 'bg-gray-800 text-white' },
  { name: 'React.js', color: 'bg-blue-500 text-white' },
  { name: 'HTML5', color: 'bg-orange-500 text-white' },
  { name: 'Vite', color: 'bg-purple-500 text-white' },
  { name: 'Express.js', color: 'bg-gray-700 text-white' },
  { name: 'MongoDB', color: 'bg-green-600 text-white' },
  { name: 'TypeScript', color: 'bg-blue-600 text-white' },
  { name: 'Linux', color: 'bg-yellow-600 text-white' },
  { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
  { name: 'CSS', color: 'bg-blue-400 text-white' },
  { name: 'Node.js', color: 'bg-green-500 text-white' },
  { name: 'APIs', color: 'bg-red-500 text-white' },
  { name: 'Tailwind CSS', color: 'bg-teal-400 text-white' },
]

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          As a fresher in the field of web development, I am passionate about creating efficient and 
          user-friendly applications. My expertise lies in the MERN stack, and I'm always eager to 
          learn and adapt to new technologies. I pride myself on my ability to easily adapt to any 
          programming language and my commitment to delivering high-quality code.
        </motion.p>
        <motion.h3 
          className="text-2xl font-bold mb-4 text-blue-400"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        >
          Skills
        </motion.h3>
        <motion.div 
          className="flex flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              <TechSticker name={skill.name} color={skill.color} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}

