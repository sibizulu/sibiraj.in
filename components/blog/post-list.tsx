import Link from 'next/link'
import { formatDate, tagSlug, type PostMeta } from '@/lib/posts'

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-gray-600">No posts yet. Check back soon.</p>
  }

  return (
    <ul className="space-y-8">
      {posts.map(post => (
        <li key={post.slug}>
          <article>
            <h3 className="text-xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-700 hover:underline underline-offset-4">
                {post.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              <time dateTime={post.date}>{formatDate(post.date)}</time> ·{' '}
              {post.readingTime}
            </p>
            <p className="text-gray-600 mt-2">{post.description}</p>
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
          </article>
        </li>
      ))}
    </ul>
  )
}
