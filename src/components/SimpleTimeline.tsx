"use client"

interface ExperienceItem {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface SimpleTimelineProps {
  items: ExperienceItem[]
}

const SimpleTimeline = ({ items }: SimpleTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black"></div>
      
      <div className="space-y-8">
        {items.map((item) => (
          <div key={`${item.company}-${item.position}`} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-8 h-8 bg-amber-50 border-2 border-black rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-black rounded-full"></span>
              </div>
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1 pb-8">
              <div className="bg-amber-50 p-6 border border-black">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-black">{item.position}</h3>
                  <p className="text-lg text-black font-medium">{item.company}</p>
                  <p className="text-sm text-black">{item.duration}</p>
                </div>
                
                <p className="text-black mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-black mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-black text-sm">• {achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-black mb-2">Technologies:</h4>
                  <p className="text-black text-sm">{item.technologies.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimpleTimeline

