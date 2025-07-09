import { Linkedin, Github, Mail, Twitter } from 'lucide-react' // Specific imports
import profileData from '@/data/profile.json'
import Link from 'next/link'

export default function Profile() {
  const icons = {
    Linkedin,
    Github,
    Mail,
    Twitter
  }

  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="text-center mb-10">
        <img
          src={profileData.image}
          alt={profileData.name}
          className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{profileData.name}</h1>
        <p className="text-lg text-gray-500">{profileData.title}</p>
        <p className="text-sm mt-2 text-gray-400">{profileData.tagline}</p>
      </div>

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
                          className="text-blue-600 hover:underline">
                          {project.name}
                        </Link>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-blue-600 hover:underline">
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
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Notable Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            {profileData.projects.map((project, index) => (
              <li key={index}>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                  target="_blank">
                  {project.name}
                </a>{' '}
                – {project.description}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect With Me</h2>
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
                    className="flex items-center hover:underline space-x-2">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-gray-700" />
                    )}
                    <span className="text-blue-600">{social.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
