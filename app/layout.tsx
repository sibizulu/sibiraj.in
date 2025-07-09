import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    default: 'Sibiraj PR – Full Stack Developer & AI Innovator',
    template: '%s | Sibiraj PR'
  },
  description:
    "Hi, I'm Sibiraj – a full stack developer building future-ready digital experiences and AI-driven products.",
  metadataBase: new URL('https://sibiraj.in'),
  openGraph: {
    title: 'Sibiraj PR – Full Stack Developer & AI Innovator',
    description:
      'Explore my projects, startups, and AI-driven tools. Tech meets creativity.',
    url: 'https://sibiraj.in',
    siteName: 'Sibiraj PR',
    images: [
      {
        url: 'https://sibiraj.in/profile.jpeg',
        width: 800,
        height: 800,
        alt: 'Sibiraj PR – Full Stack Developer & AI Innovator'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sibiraj PR – Full Stack Developer & AI Innovator',
    description: "Hi, I'm Sibiraj – building full stack apps and future tech.",
    images: ['https://sibiraj.in/profile.jpeg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
