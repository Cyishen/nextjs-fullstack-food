import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DB food',
  description: 'Best Burgers and Donuts for everyone',
  keywords: ['burger', 'donut', 'cyi', 'DB food'],
  other: {
    "theme-color": "#ffffff",
    "twitter:image": "/share.png",
    "twitter:card": "summary_large_image",
    "og:title": "DB food",
    "og:description": "Best Burgers and Donuts",
    "og:url": "",
    "og:image": "/share.png",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
            <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
