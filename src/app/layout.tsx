import { Inter } from 'next/font/google'
import './globals.css'
import Header from 'src/components/header'
import Footer from 'src/components/footer'
import Script from 'next/script'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoppy Scan',
  description: 'Spend Wisely',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1262441687811052"
          crossOrigin="anonymous"
        />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
