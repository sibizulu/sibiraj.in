import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
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
    default: 'Sibiraj PR – AI Product Builder & Founder',
    template: '%s | Sibiraj PR'
  },
  description:
    "Hi, I'm Sibiraj – an AI product builder and founder. I turn AI ideas into products people use, and the strategy behind them.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Sibiraj PR – AI Product Builder & Founder',
    description:
      'Explore my AI products, startups, and ventures. Turning AI ideas into products people use.',
    url: SITE_URL,
    siteName: 'Sibiraj PR',
    images: [
      {
        url: `${SITE_URL}/profile.jpeg`,
        width: 800,
        height: 800,
        alt: 'Sibiraj PR – AI Product Builder & Founder'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Sibiraj PR – AI Product Builder & Founder',
    description:
      "Hi, I'm Sibiraj – building AI products and turning ideas into strategy.",
    images: [`${SITE_URL}/profile.jpeg`]
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
