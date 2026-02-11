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
  title: "SynapseIA - L'Agence IA de Québec",
  description: "SynapseIA aide les PME de Lévis et Québec à automatiser leurs processus répétitifs avec l'intelligence artificielle.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-[#020617] text-slate-300 font-sans selection:bg-accent-500 selection:text-white overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
