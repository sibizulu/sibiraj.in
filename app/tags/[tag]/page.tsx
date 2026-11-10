import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PostList from '@/components/blog/post-list'
import { getAllPosts, getAllTags, tagSlug } from '@/lib/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllTags().map(({ slug }) => ({ tag: slug }))
}

type Props = { params: Promise<{ tag: string }> }

function findTag(slug: string) {
  return getAllTags().find(t => t.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  const found = findTag(tag)
  if (!found) return {}
  const description = `Posts about ${found.tag} by Sibiraj PR.`
  return {
    title: `#${found.tag}`,
    description,
    alternates: { canonical: `/tags/${found.slug}` },
    openGraph: { description, url: `/tags/${found.slug}` }
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const found = findTag(tag)
  if (!found) notFound()

  const posts = getAllPosts().filter(post =>
    post.tags.some(t => tagSlug(t) === found.slug)
  )

  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-blue-600 underline underline-offset-4">
          ← All posts
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Posts tagged #{found.tag}</h1>
      <PostList posts={posts} />
    </main>
  )
}
