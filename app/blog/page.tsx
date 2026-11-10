import type { Metadata } from 'next'
import Link from 'next/link'
import PostList from '@/components/blog/post-list'
import { getAllPosts, getAllTags } from '@/lib/posts'

const description =
  'Writing on AI, cybersecurity, and building tech products: explainers, practical guides, and opinion from an AI product builder.'

export const metadata: Metadata = {
  title: 'Blog: AI, Security & Tech',
  description,
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/rss.xml' }
  },
  openGraph: {
    title: 'Blog: AI, Security & Tech | Sibiraj PR',
    description,
    url: '/blog',
    type: 'website'
  }
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map(({ tag, slug, count }) => (
              <li key={slug}>
                <Link
                  href={`/tags/${slug}`}
                  className="text-sm px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
                  #{tag} <span className="text-gray-500">({count})</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
      <PostList posts={posts} />
    </main>
  )
}
