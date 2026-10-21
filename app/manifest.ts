import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sibiraj PR',
    short_name: 'Sibiraj',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    description:
      'The personal website of Sibiraj PR — showcasing projects, ideas, and more.',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    lang: 'en',
    orientation: 'portrait-primary'
  }
}
