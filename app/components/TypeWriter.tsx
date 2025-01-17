'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface TypeWriterProps {
  text: string
  delay?: number
}

export default function TypeWriter({ text, delay = 100 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
        controls.start({ opacity: 1 })
      }
    }, delay)

    return () => clearInterval(timer)
  }, [text, delay, controls])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  )
}

