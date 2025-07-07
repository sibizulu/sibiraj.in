import profileData from '@/data/profile.json'

export default function Profile() {
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
          <h2 className="text-xl font-semibold mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-gray-600">
            {profileData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

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
          <h2 className="text-xl font-semibold mb-2">Personal Interests</h2>
          <p className="text-gray-600">{profileData.interests}</p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {profileData.currentProjects &&
          profileData.currentProjects.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
              <ul className="space-y-4 text-gray-700">
                {profileData.currentProjects.map((project, index) => (
                  <li key={index}>
                    <h3 className="font-medium text-lg">
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-blue-600 hover:underline">
                        {project.name}
                      </a>
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
          <h2 className="text-xl font-semibold mb-2">Connect With Me</h2>
          <ul className="space-y-2 text-blue-600">
            {profileData.socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  className="hover:underline">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
