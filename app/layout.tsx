import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '$AB Token - Build, Deploy, and Earn',
  description: 'The token to build, deploy, and improve your crypto journey. Stake, trade, and earn with $AB Token.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

