import type { MetadataRoute } from 'next'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.date,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    ...posts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated ?? post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    })),
    ...getAllTags().map(({ slug }) => ({
      url: `${SITE_URL}/tags/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.5
    })),
    {
      url: `${SITE_URL}/founders-are-hiring`,
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ]
}
