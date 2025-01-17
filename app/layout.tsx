import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gobi-Portfolio',
  description: 'Portfolio of Gobi, a Full Stack Developer specializing in MERN stack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-200 min-h-screen`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

