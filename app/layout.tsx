import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muzzo — Le top 1% des chasseurs de têtes, sélectionné pour vous',
  description:
    "Lancez votre mission de recrutement, rencontrez des talents rares et payez uniquement à l'acceptation du poste. Aucun acompte, aucun abonnement.",
  openGraph: {
    title: 'Muzzo — Recrutez le top 1% sans acompte',
    description: 'Plus de 2 000 chasseurs de têtes sélectionnés par la data. Premiers candidats en 48h.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="noise-bg">
        {children}
      </body>
    </html>
  )
}
