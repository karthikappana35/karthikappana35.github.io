"use client"

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Github, Calendar, Users } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "F1Tenth Maze Solver",
      description: "An autonomous racing car that navigates complex mazes using advanced computer vision and path planning algorithms. The system combines SLAM techniques with real-time decision making to achieve optimal navigation through challenging environments.",
      longDescription: "This project represents a comprehensive autonomous navigation system built for the F1Tenth racing competition. The car uses a combination of LiDAR, cameras, and IMU sensors to build a real-time map of its environment and plan optimal paths through complex mazes. The system implements advanced algorithms including A* path planning, dynamic obstacle avoidance, and predictive control for high-speed navigation.",
      technologies: ["ROS2", "Python", "OpenCV", "C++", "Gazebo", "PCL", "Eigen", "CMake"],
      githubUrl: "https://github.com/karthikappana/f1tenth-maze-solver",
      liveUrl: "https://youtube.com/watch?v=demo",
      image: "/api/placeholder/600/400",
      status: "Completed",
      duration: "6 months",
      teamSize: "3 members",
      index: 0
    },
    {
      title: "Hand Gesture Mouse Control",
      description: "A Raspberry Pi-based system that controls computer mouse using hand gestures detected through computer vision. The system provides an intuitive, contactless interface for computer interaction.",
      longDescription: "This innovative project uses MediaPipe and OpenCV to detect hand landmarks in real-time and translate specific gestures into mouse movements and clicks. The system runs on a Raspberry Pi with a camera module, processing video streams at 30 FPS while maintaining low latency. It includes gesture recognition for left-click, right-click, scrolling, and cursor movement with customizable sensitivity settings.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "MediaPipe", "PyAutoGUI", "NumPy"],
      githubUrl: "https://github.com/karthikappana/gesture-mouse",
      liveUrl: "https://youtube.com/watch?v=demo2",
      image: "/api/placeholder/600/400",
      status: "Completed",
      duration: "3 months",
      teamSize: "Solo project",
      index: 1
    },
    {
      title: "Custom RISC-V Unix OS",
      description: "A minimal Unix-like operating system built from scratch for RISC-V architecture. Features memory management, process scheduling, and basic system calls.",
      longDescription: "This ambitious project involved building a complete operating system from the ground up for the RISC-V architecture. The OS includes a custom kernel with memory management using paging, a round-robin process scheduler, basic system calls, and a simple shell. The system boots from scratch, initializes hardware, and provides a minimal but functional Unix-like environment. All development was done in C and assembly, with extensive use of QEMU for testing and debugging.",
      technologies: ["C", "Assembly", "RISC-V", "QEMU", "GDB", "Make", "GCC"],
      githubUrl: "https://github.com/karthikappana/riscv-os",
      liveUrl: "https://youtube.com/watch?v=demo3",
      image: "/api/placeholder/600/400",
      status: "In Progress",
      duration: "8 months",
      teamSize: "Solo project",
      index: 2
    },
    {
      title: "Autonomous Drone Swarm",
      description: "A coordinated swarm of autonomous drones that can perform collaborative tasks including formation flying, object tracking, and distributed sensing.",
      longDescription: "This project explores the challenges of multi-agent coordination in autonomous systems. The drone swarm uses a distributed control algorithm to maintain formation while avoiding obstacles and performing collaborative tasks. Each drone runs ROS2 and communicates with others through a mesh network, enabling real-time coordination and decision making. The system includes computer vision for object detection and tracking, as well as path planning algorithms optimized for swarm behavior.",
      technologies: ["ROS2", "Python", "OpenCV", "Pixhawk", "MAVLink", "Gazebo", "PCL"],
      githubUrl: "https://github.com/karthikappana/drone-swarm",
      liveUrl: "https://youtube.com/watch?v=demo4",
      image: "/api/placeholder/600/400",
      status: "In Progress",
      duration: "4 months",
      teamSize: "4 members",
      index: 3
    },
    {
      title: "Smart Agriculture Monitoring System",
      description: "An IoT-based system for monitoring soil conditions, weather, and crop health in real-time using embedded sensors and machine learning.",
      longDescription: "This comprehensive agricultural monitoring system combines IoT sensors, edge computing, and machine learning to provide farmers with real-time insights into their fields. The system monitors soil moisture, temperature, pH levels, and weather conditions, then uses machine learning algorithms to predict optimal irrigation schedules and detect early signs of disease or pest infestation. Data is collected by distributed sensor nodes and processed locally before being transmitted to a central dashboard.",
      technologies: ["Python", "Arduino", "ESP32", "TensorFlow", "MQTT", "React", "PostgreSQL"],
      githubUrl: "https://github.com/karthikappana/smart-agriculture",
      liveUrl: "https://youtube.com/watch?v=demo5",
      image: "/api/placeholder/600/400",
      status: "Completed",
      duration: "5 months",
      teamSize: "2 members",
      index: 4
    },
    {
      title: "Real-time Object Detection for Robotics",
      description: "A high-performance object detection system optimized for robotics applications, featuring custom YOLO architecture and real-time inference.",
      longDescription: "This project focuses on developing a lightweight but accurate object detection system specifically designed for robotics applications. The system uses a custom YOLO architecture optimized for edge devices, achieving real-time inference on embedded hardware while maintaining high accuracy. The model is trained on a custom dataset of common objects found in indoor and outdoor environments, with special attention to objects relevant to autonomous navigation and manipulation tasks.",
      technologies: ["Python", "PyTorch", "OpenCV", "TensorRT", "CUDA", "Docker", "YOLO"],
      githubUrl: "https://github.com/karthikappana/robotics-detection",
      liveUrl: "https://youtube.com/watch?v=demo6",
      image: "/api/placeholder/600/400",
      status: "Completed",
      duration: "4 months",
      teamSize: "Solo project",
      index: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
            
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Featured <span className="text-blue-600">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exploring the intersection of robotics, computer vision, and embedded systems 
                through hands-on projects and innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
              <p className="text-lg text-gray-600">
                A collection of projects showcasing technical skills and innovative thinking
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: project.index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {project.image && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.teamSize}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Categories</h2>
              <p className="text-lg text-gray-600">
                Diverse projects spanning multiple domains of engineering and technology
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robotics & Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Projects focusing on autonomous navigation, robot control, and intelligent systems.
                </p>
                <div className="space-y-2">
                  {["F1Tenth Maze Solver", "Autonomous Drone Swarm", "Real-time Object Detection"].map((project) => (
                    <div key={project} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision & AI</h3>
                <p className="text-gray-600 mb-4">
                  Applications of machine learning and computer vision in real-world scenarios.
                </p>
                <div className="space-y-2">
                  {["Hand Gesture Mouse Control", "Smart Agriculture Monitoring", "Object Detection System"].map((project) => (
                    <div key={project} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-600">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Systems & Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Low-level systems programming and infrastructure development projects.
                </p>
                <div className="space-y-2">
                  {["Custom RISC-V Unix OS", "IoT Monitoring Systems", "Embedded Systems"].map((project) => (
                    <div key={project} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600">{project}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Collaborating?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and explore innovative solutions. 
                Let's discuss how we can build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open('mailto:karthik.appana@gmail.com')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://github.com/karthikappana')}
                  className="px-8 py-3"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
