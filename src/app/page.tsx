"use client"

import Navbar from '@/components/Navbar'
import SimpleTimeline from '@/components/SimpleTimeline'
import ProjectCards from '@/components/ProjectCards'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: "F1Tenth Maze Solver",
      description: "Autonomous racing car that navigates complex mazes using ROS2, computer vision, and path planning algorithms.",
      technologies: ["ROS2", "Python", "OpenCV", "C++", "Gazebo"],
      githubUrl: "https://github.com/karthikappana/f1tenth-maze-solver",
      index: 0
    },
    {
      title: "Hand Gesture Mouse Control",
      description: "Raspberry Pi-based system that controls computer mouse using hand gestures detected through computer vision.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "MediaPipe", "PyAutoGUI"],
      githubUrl: "https://github.com/karthikappana/gesture-mouse",
      index: 1
    },
    {
      title: "Custom RISC-V Unix OS",
      description: "A minimal Unix-like operating system built from scratch for RISC-V architecture with memory management and process scheduling.",
      technologies: ["C", "Assembly", "RISC-V", "QEMU", "GDB"],
      githubUrl: "https://github.com/karthikappana/riscv-os",
      index: 2
    }
  ]

  const experiences = [
    {
      company: "John Deere ISG",
      position: "Robotics Engineer Intern",
      duration: "Summer 2024",
      description: "Developed autonomous navigation systems for agricultural machinery using ROS2 and computer vision.",
      achievements: [
        "Implemented SLAM algorithms for field mapping",
        "Optimized path planning for autonomous tractors",
        "Reduced navigation errors by 30% through sensor fusion"
      ],
      technologies: ["ROS2", "Python", "C++", "OpenCV", "Gazebo"],
      index: 0
    },
    {
      company: "John Deere ISG",
      position: "Embedded Systems Intern",
      duration: "Summer 2023",
      description: "Worked on embedded systems for precision agriculture equipment and sensor integration.",
      achievements: [
        "Developed CAN bus communication protocols",
        "Implemented real-time sensor data processing",
        "Created automated testing frameworks for embedded systems"
      ],
      technologies: ["C", "Embedded C", "CAN Bus", "MATLAB", "Arduino"],
      index: 1
    },
    {
      company: "Morehouse Engineering",
      position: "Software Development Intern",
      duration: "Summer 2022",
      description: "Contributed to engineering software solutions and automation tools for manufacturing processes.",
      achievements: [
        "Built data visualization dashboards",
        "Automated quality control processes",
        "Improved system efficiency by 25%"
      ],
      technologies: ["Python", "JavaScript", "SQL", "React", "Docker"],
      index: 2
    },
    {
      company: "FIRST Robotics",
      position: "Mentor & Team Lead",
      duration: "2021 - Present",
      description: "Mentoring high school students in robotics, programming, and engineering principles.",
      achievements: [
        "Led team to regional championships",
        "Developed curriculum for robotics education",
        "Mentored 50+ students in STEM fields"
      ],
      technologies: ["Java", "LabVIEW", "CAD", "3D Printing", "Electronics"],
      index: 3
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
     

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-black mb-8">About Me</h2>
              <p className="text-lg text-black mb-6">
                I&apos;m a Computer Engineering student at the University of Illinois at Urbana-Champaign, 
                passionate about robotics, computer vision, and embedded systems. My journey in engineering 
                began with FIRST Robotics in high school and has evolved into a deep fascination with 
                autonomous systems and intelligent machines.
              </p>
              <p className="text-lg text-black mb-8">
                I believe in the power of technology to solve real-world problems, from precision agriculture 
                to autonomous navigation. My experience spans from embedded systems development to computer 
                vision algorithms, always with a focus on practical applications.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="flex justify-center mb-8">
                <div className="w-64 h-64 relative">
                  <Image
                    src="/unnamed.png"
                    alt="Karthik Appana Profile Picture"
                    fill
                    className="object-cover border-2 border-black rounded-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-4">Skills</h3>
                  <p className="text-black text-sm">
                    C++, Python, ROS2, OpenCV, MATLAB, TensorFlow, Embedded Systems, Computer Vision
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-black mb-4">Contact Info</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-black text-sm">Urbana-Champaign, IL</span>
                    </div>
                    <div>
                      <span className="text-black text-sm">Expected Graduation: May 2025</span>
                    </div>
                    <div>
                      <span className="text-black text-sm">karthik.appana@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">Experience</h2>
          
          
          <SimpleTimeline items={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">Featured Projects</h2>
          <p className="text-lg text-black mb-12 text-center max-w-2xl mx-auto">
            Exploring the intersection of robotics, computer vision, and embedded systems
          </p>
          
          <ProjectCards projects={projects} />
        </div>
      </section>

    </div>
  )
}
