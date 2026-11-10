import fs from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Blog post by Sibiraj PR'

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export default async function Image({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getAllPosts().find(p => p.slug === slug)
  const title = post?.title ?? 'Sibiraj PR'
  const tags = post?.tags.slice(0, 3) ?? []

  // Satori needs TTF/OTF/WOFF (not WOFF2), so load the fontsource WOFF files
  const fontDir = path.join(
    process.cwd(),
    'node_modules/@fontsource/space-grotesk/files'
  )
  const [medium, bold] = await Promise.all([
    fs.readFile(path.join(fontDir, 'space-grotesk-latin-500-normal.woff')),
    fs.readFile(path.join(fontDir, 'space-grotesk-latin-700-normal.woff'))
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          color: 'white',
          fontFamily: 'Space Grotesk'
        }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {tags.map(tag => (
            <div
              key={tag}
              style={{
                fontSize: 26,
                padding: '6px 18px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                color: '#bfdbfe'
              }}>
              {`#${tag}`}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1.5
          }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 28,
            color: '#cbd5e1'
          }}>
          <span>Sibiraj PR · AI Product Builder</span>
          <span>sibiraj.in</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Grotesk', data: medium, weight: 500, style: 'normal' },
        { name: 'Space Grotesk', data: bold, weight: 700, style: 'normal' }
      ]
    }
  )
}
