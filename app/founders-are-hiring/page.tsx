import Link from 'next/link'
import profileData from '@/data/profile.json'

export const metadata = {
  title: 'FoundersAreHiring | Sibiraj PR',
  description:
    'Connecting early-stage startup founders with passionate collaborators, job seekers, and freelancers.'
}

export default function FoundersAreHiring() {
  // Find the FoundersAreHiring project data from the profile
  const foundersAreHiringData = profileData.currentProjects.find(
    project => project.name === 'FoundersAreHiring'
  )

  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="mb-4">
        <Link
          href="/"
          className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">FoundersAreHiring</h1>
        <p className="text-lg text-gray-500">
          Connecting early-stage startup founders with passionate collaborators
        </p>
        {foundersAreHiringData && (
          <a
            href={foundersAreHiringData.link}
            target="_blank"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white  hover:bg-blue-700 transition-colors">
            Visit FoundersAreHiring
          </a>
        )}
      </div>

      <article className="prose lg:prose-lg max-w-4xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          My Co-Founder Pulled Me Into This—and I'm Glad He Did
        </h2>

        <p className="text-gray-600 mb-4">
          When Nik first told me about the idea behind FoundersAreHiring (FAH),
          I didn't jump in immediately. At the time, I was buried in backend
          work—debugging infra issues, scaling systems, improving developer
          tooling. Hiring felt like a necessary pain, not something I wanted to
          fix.
        </p>

        <p className="text-gray-600 mb-4">
          But Nik kept bringing it up. We've built a lot together, so when he's
          stuck on an idea for weeks, I pay attention.
        </p>

        <p className="text-gray-600 mb-4">
          Then it happened—I had to screen over a dozen resumes for a role we
          posted. All the resumes looked good. None of the candidates could
          explain what they actually did. That's when it hit me: hiring doesn't
          work the way we work.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          I'm a Builder at Heart
        </h3>

        <p className="text-gray-600 mb-4">
          I've spent most of my time building infrastructure and backend
          systems. Crypto platforms, internal tools, financial services—you name
          it.
        </p>

        <p className="text-gray-600 mb-4">
          I like logs. I like systems that don't go down. But even the best code
          falls apart if you have the wrong people on the team.
        </p>

        <p className="text-gray-600 mb-4">
          Hiring became a problem I couldn't ignore.
        </p>

        <p className="text-gray-600 mb-4">
          I tried automating resume filters. I wrote test challenges. I asked
          technical questions. Still, I'd lose hours talking to candidates who
          didn't care, didn't fit, or just wanted to check a box.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Nik Saw It Coming. I Helped Build the Fix.
        </h3>

        <p className="text-gray-600 mb-4">
          He was ahead of me on this one. Nik had been dealing with the same
          issues—but from a founder's seat.
        </p>

        <p className="text-gray-600 mb-4">
          He didn't want another bloated job portal or an ATS with 50 fields. He
          wanted a simple, clean, and honest way to connect with the right
          people.
        </p>

        <p className="text-gray-600 mb-4">
          So we built it. No roadmap deck. No pitch. Just real frustration
          turned into a working product.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          What We Built—and Why
        </h3>

        <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-6 pl-2">
          <li className="font-medium">
            Founders and candidates talk directly
            <p className="ml-7 font-normal">
              No recruiters. No waiting. Just straight conversation from day
              one.
            </p>
          </li>

          <li className="font-medium">
            Weekly curated drops, no spam
            <p className="ml-7 font-normal">
              You don't scroll endlessly. You get a short list of high-signal
              roles or candidates once a week.
            </p>
          </li>

          <li className="font-medium">
            Focus on real-world fit
            <p className="ml-7 font-normal">
              Job posts and profiles highlight work style, ambiguity comfort,
              equity logic—things that matter more than buzzwords.
            </p>
          </li>

          <li className="font-medium">
            Filters that actually work
            <p className="ml-7 font-normal">
              We block low-intent, copy-paste applications. The backend
              literally removes junk so you don't have to.
            </p>
          </li>
        </ol>

        <p className="text-gray-600 mb-4">
          I didn't plan to build a hiring platform. But now I can't imagine
          working without it.
        </p>

        <p className="text-gray-600 mb-4">
          If you're a founder or operator tired of wasting time and energy on
          broken hiring flows, check out FAH.
        </p>

        <p className="text-gray-600 mb-6">
          We built it for ourselves. You might just find it useful too.
        </p>

        {foundersAreHiringData && (
          <div className="mt-8 mb-12 text-center">
            <a
              href={foundersAreHiringData.link}
              target="_blank"
              className="inline-block px-6 py-3 bg-blue-500 text-white  hover:bg-blue-700 transition-colors font-medium">
              Try FoundersAreHiring →
            </a>
            <p className="text-gray-500 mt-2">
              Let us know what you think. We're listening.
            </p>
          </div>
        )}
      </article>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sibiraj PR
          </p>
        </div>
      </div>
    </section>
  )
}
