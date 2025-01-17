'use client'

import { motion } from 'framer-motion'

const contactInfo = [
  { label: 'Name', value: 'Gobi' },
  { label: 'Email', value: 'gobidreamer@gmail.com' },
  { label: 'Location', value: 'TIRUPUR, India 641608' },
]

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Contact Me
        </motion.h2>
        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.p
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <strong>{info.label}:</strong> {info.value}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <strong>LinkedIn:</strong>{' '}
            <motion.a
              href="https://www.linkedin.com/in/gobi-s-7b1a52242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Gobi
            </motion.a>
          </motion.p>
        </div>
      </motion.div>
    </main>
  )
}

