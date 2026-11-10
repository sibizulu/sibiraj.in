import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import profileData from '@/data/profile.json'
import { formatDate, getAllPosts, getPost, tagSlug } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE_URL],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@sibizulu'
    }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      name: profileData.name,
      url: SITE_URL
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-blue-600 underline underline-offset-4">
          ← All posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-[2rem] md:text-[2.75rem] font-bold leading-[1.15]">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mt-3">
            By{' '}
            <Link
              href="/"
              className="underline underline-offset-4">
              {profileData.name}
            </Link>{' '}
            · <time dateTime={post.date}>{formatDate(post.date)}</time> ·{' '}
            {post.readingTime}
          </p>
          {post.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-3">
              {post.tags.map(tag => (
                <li key={tag}>
                  <Link
                    href={`/tags/${tagSlug(tag)}`}
                    className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </header>

        <div
          className="article-body prose prose-gray max-w-none prose-headings:font-heading prose-a:text-blue-700 prose-headings:scroll-mt-6 prose-pre:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <aside className="mt-12 border-t pt-6 text-gray-600">
        <p>
          I write about AI, security, and building products. Follow along on{' '}
          <a
            href="https://www.linkedin.com/in/sibizulu/"
            className="text-blue-700 underline underline-offset-4">
            LinkedIn
          </a>
          ,{' '}
          <a
            href="https://x.com/sibizulu"
            className="text-blue-700 underline underline-offset-4">
            X
          </a>
          , or via{' '}
          <a
            href="/rss.xml"
            className="text-blue-700 underline underline-offset-4">
            RSS
          </a>
          .
        </p>
      </aside>
    </main>
  )
}
