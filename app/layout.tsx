import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import SiteNav from '@/components/site-nav'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap'
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
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
    canonical: '/',
    types: { 'application/rss+xml': '/rss.xml' }
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
