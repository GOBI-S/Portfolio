"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

const contactInfo = [
  { label: "Name", value: "Gobi" },
  { label: "Email", value: "gobidreamer@gmail.com" },
  { label: "Location", value: "TIRUPUR, India 641608" },
]

export default function Contact() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:gobidreamer@gmail.com?subject=Contact from Website&body=${encodeURIComponent(message)}`
  }

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
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <strong>LinkedIn:</strong>{" "}
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
        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Contact by email"
            className="w-full p-2 border bg-transparent border-gray-300 rounded-md"
            rows={4}
          />
          <motion.button
            type="submit"
            className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.button>
        </motion.form>
      </motion.div>
    </main>
  )
}

