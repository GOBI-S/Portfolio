'use client'

import { motion } from 'framer-motion'

interface TechStickerProps {
  name: string
  color: string
}

export default function TechSticker({ name, color }: TechStickerProps) {
  return (
    <motion.div
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${color}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {name}
    </motion.div>
  )
}

