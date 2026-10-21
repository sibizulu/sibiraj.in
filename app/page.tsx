import Profile from '@/components/user/profile'
import profileData from '@/data/profile.json'
import { SITE_URL } from '@/lib/site'

export default function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    url: SITE_URL,
    image: `${SITE_URL}${profileData.image}`,
    description: profileData.tagline,
    sameAs: profileData.socials
      .filter(social => !social.link.startsWith('mailto:'))
      .map(social => social.link)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Profile />
    </>
  )
}
