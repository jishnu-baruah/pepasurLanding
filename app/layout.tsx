import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pepasur 🐸 | On-Chain Mafia Game",
  description: "An on-chain Mafia game powered by U2U Blockchain. Built for U2U Vietbuidl Hackathon 2025",
  generator: "v0.app",
  icons: {
    icon: "/images/PepasurLogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
