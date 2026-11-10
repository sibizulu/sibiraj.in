import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  tags: string[]
  readingTime: string
}

export type Post = PostMeta & { html: string }

function slugFromFile(file: string) {
  return file.replace(/\.md$/, '')
}

export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function readPostFile(file: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
  const { data, content } = matter(raw)

  for (const field of ['title', 'description', 'date'] as const) {
    if (!data[field]) {
      throw new Error(`Post "${file}" is missing frontmatter field "${field}"`)
    }
  }

  const meta: PostMeta = {
    slug: slugFromFile(file),
    title: String(data.title),
    description: String(data.description),
    date: new Date(data.date).toISOString(),
    updated: data.updated ? new Date(data.updated).toISOString() : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTime(content).text
  }

  return { meta, content, draft: data.draft === true }
}

/** Published posts, newest first. Drafts are only shown in `next dev`. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const showDrafts = process.env.NODE_ENV === 'development'

  return fs
    .readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md'))
    .map(readPostFile)
    .filter(post => showDrafts || !post.draft)
    .map(post => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug: string): Promise<Post | undefined> {
  if (!getAllPosts().some(post => post.slug === slug)) return undefined

  const { meta, content } = readPostFile(`${slug}.md`)
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(content)

  return { ...meta, html: String(html) }
}

export function getAllTags(): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, { tag: string; count: number }>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag)
      const entry = counts.get(slug) ?? { tag, count: 0 }
      entry.count += 1
      counts.set(slug, entry)
    }
  }
  return [...counts.entries()]
    .map(([slug, { tag, count }]) => ({ tag, slug, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}
