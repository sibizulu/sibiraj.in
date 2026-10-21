import { Linkedin, Github, Mail, Twitter, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import profileData from '@/data/profile.json'

const icons: Record<string, LucideIcon> = {
  Linkedin,
  Github,
  Mail,
  Twitter
}

export default function Profile() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <header className="text-center mb-10">
        <Image
          src={profileData.image}
          alt={profileData.name}
          width={128}
          height={128}
          priority
          unoptimized
          className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{profileData.name}</h1>
        <p className="text-lg text-gray-500">{profileData.title}</p>
        <p className="text-sm mt-2 text-gray-600">{profileData.tagline}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">{profileData.about}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Personal Interests</h2>
          <p className="text-gray-600">{profileData.interests}</p>
        </div>

        {profileData.currentProjects &&
          profileData.currentProjects.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
              <ul className="space-y-4 text-gray-700">
                {profileData.currentProjects.map((project, index) => (
                  <li key={index}>
                    <h3 className="font-medium text-lg">
                      {project.localLink ? (
                        <Link
                          href={project.localLink}
                          className="text-blue-600 underline underline-offset-4">
                          {project.name}
                        </Link>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline underline-offset-4">
                          {project.name}
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        <div>
          <h2 className="text-xl font-semibold mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-gray-600">
            {profileData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">Connect With Me</h2>
          <ul className="space-y-2">
            {profileData.socials.map((social, index) => {
              const IconComponent = icons[social.icon]
              return (
                <li
                  key={index}
                  className="flex items-center space-x-2">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2">
                    {IconComponent && (
                      <IconComponent
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-700"
                      />
                    )}
                    <span className="text-blue-600 underline underline-offset-4">
                      {social.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </main>
  )
}
