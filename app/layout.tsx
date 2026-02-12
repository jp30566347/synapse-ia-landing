import './globals.css'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
import ChatWidget from '@/components/ChatWidget'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: "SynapsIA - Intelligent Automation Consulting",
  description: "Scale your business with AI. SynapsIA helps modern enterprises automate repetitive processes and optimize operations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-[#020617] text-slate-300 font-sans selection:bg-accent-500 selection:text-white overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
