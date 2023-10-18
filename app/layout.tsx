import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

// components


export const metadata: Metadata = {
  title: 'Eazy Ride',
  description: 'Car rental app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative bg-light'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
