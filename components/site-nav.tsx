import Link from 'next/link'

export default function SiteNav() {
  return (
    <nav
      aria-label="Main"
      className="max-w-4xl mx-auto px-6 pt-6 flex items-center justify-between text-sm">
      <Link
        href="/"
        className="font-heading font-semibold text-gray-900">
        Sibiraj PR
      </Link>
      <ul className="flex gap-5 text-gray-600">
        <li>
          <Link
            href="/blog"
            className="hover:text-gray-900">
            Blog
          </Link>
        </li>
        <li>
          <a
            href="/rss.xml"
            className="hover:text-gray-900">
            RSS
          </a>
        </li>
      </ul>
    </nav>
  )
}
