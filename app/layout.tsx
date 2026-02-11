import './globals.css'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'

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
  title: 'Synapse IA | Optimisation de processus par l\'IA à Lévis et Québec',
  description: 'Synapse IA aide les PME de Lévis et Québec à automatiser leurs processus répétitifs avec l\'intelligence artificielle.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-[#020617] text-slate-300 selection:bg-accent-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
