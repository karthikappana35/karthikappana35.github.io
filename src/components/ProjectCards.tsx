"use client"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardsProps {
  projects: Project[]
}

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <div key={project.title} className="bg-amber-50 border border-black p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-black mb-3">{project.title}</h3>
          
          <p className="text-black mb-4 text-sm leading-relaxed">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium text-black mb-2">Technologies:</h4>
            <p className="text-black text-sm">{project.technologies.join(", ")}</p>
          </div>
          
          <div className="flex gap-2">
            {idx === 0 ? (
              <span
                className="flex-1 text-center border border-black px-3 py-2 text-black bg-gray-200 opacity-60 cursor-not-allowed text-sm"
                aria-disabled="true"
              >
                In progress..
              </span>
            ) : (
              project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-black px-3 py-2 text-black hover:bg-black hover:text-amber-50 transition-colors text-sm"
                >
                  View Code
                </a>
              )
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-black px-3 py-2 text-black hover:bg-black hover:text-amber-50 transition-colors text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards


