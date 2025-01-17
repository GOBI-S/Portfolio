'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
      <ul className="flex justify-center space-x-4 p-4">
        {navItems.map((item) => (
          <motion.li key={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href={item.href}>
              <motion.span 
                className={`text-lg ${pathname === item.href ? 'text-blue-400 font-bold' : 'text-gray-300'}`}
                whileHover={{ color: "#60A5FA" }}
              >
                {item.label}
              </motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

