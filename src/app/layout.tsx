import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dean Caloracan',
  description: 'Portfolio of and by Engr. Deanna Jeanne Caloracan 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white px-10 text-black' >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
