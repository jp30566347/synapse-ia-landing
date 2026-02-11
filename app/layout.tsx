import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
