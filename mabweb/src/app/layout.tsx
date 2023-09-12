import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MAB SOLUTION',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    

    <html lang="en">
      
      <body className={inter.className}>{children}</body>
      <link rel="icon" type="image/png" href="/logo.png"/>
    </html>
  )
}
