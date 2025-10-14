"use client"

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ExperienceCard from '@/components/ExperienceCard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, MapPin, Building } from 'lucide-react'

export default function ExperiencePage() {
  const experiences = [
    {
      company: "John Deere ISG",
      position: "Robotics Engineer Intern",
      duration: "Summer 2024",
      location: "Moline, IL",
      description: "Developed autonomous navigation systems for agricultural machinery using ROS2 and computer vision. Worked on cutting-edge precision agriculture technology that helps farmers optimize their operations through intelligent automation.",
      achievements: [
        "Implemented SLAM (Simultaneous Localization and Mapping) algorithms for real-time field mapping",
        "Optimized path planning algorithms for autonomous tractors, reducing fuel consumption by 15%",
        "Reduced navigation errors by 30% through advanced sensor fusion techniques",
        "Developed computer vision pipelines for crop detection and row following",
        "Collaborated with cross-functional teams to integrate robotics solutions into existing farm equipment"
      ],
      technologies: ["ROS2", "Python", "C++", "OpenCV", "Gazebo", "PCL", "Eigen", "CMake"],
      index: 0
    },
    {
      company: "John Deere ISG",
      position: "Embedded Systems Intern",
      duration: "Summer 2023",
      location: "Moline, IL",
      description: "Worked on embedded systems for precision agriculture equipment and sensor integration. Focused on developing robust communication protocols and real-time data processing systems for agricultural machinery.",
      achievements: [
        "Developed CAN bus communication protocols for inter-device communication in agricultural equipment",
        "Implemented real-time sensor data processing algorithms for soil moisture and crop health monitoring",
        "Created automated testing frameworks for embedded systems, reducing testing time by 40%",
        "Designed and implemented power management systems for battery-operated field sensors",
        "Optimized memory usage in embedded systems, improving performance by 25%"
      ],
      technologies: ["C", "Embedded C", "CAN Bus", "MATLAB", "Arduino", "STM32", "I2C", "SPI"],
      index: 1
    },
    {
      company: "Morehouse Engineering",
      position: "Software Development Intern",
      duration: "Summer 2022",
      location: "Remote",
      description: "Contributed to engineering software solutions and automation tools for manufacturing processes. Worked on data visualization and process optimization systems that improved manufacturing efficiency.",
      achievements: [
        "Built interactive data visualization dashboards using React and D3.js for manufacturing metrics",
        "Automated quality control processes, reducing manual inspection time by 60%",
        "Improved system efficiency by 25% through database optimization and query tuning",
        "Developed RESTful APIs for data integration between manufacturing systems",
        "Created automated reporting tools that generated daily production reports"
      ],
      technologies: ["Python", "JavaScript", "SQL", "React", "Docker", "PostgreSQL", "D3.js", "FastAPI"],
      index: 2
    },
    {
      company: "FIRST Robotics",
      position: "Mentor & Team Lead",
      duration: "2021 - Present",
      location: "Champaign, IL",
      description: "Mentoring high school students in robotics, programming, and engineering principles. Leading a competitive robotics team and developing educational curriculum for STEM outreach programs.",
      achievements: [
        "Led team to regional championships and qualified for state competitions",
        "Developed comprehensive curriculum for robotics education covering programming, mechanics, and electronics",
        "Mentored 50+ students in STEM fields, with 80% pursuing engineering degrees",
        "Organized workshops and training sessions for other FIRST Robotics teams",
        "Created documentation and best practices guides for robot design and programming"
      ],
      technologies: ["Java", "LabVIEW", "CAD", "3D Printing", "Electronics", "SolidWorks", "Fusion 360"],
      index: 3
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
                Professional <span className="text-blue-600">Experience</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building the future of autonomous systems through hands-on engineering experience 
                in robotics, embedded systems, and software development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
              <p className="text-lg text-gray-600">
                A journey through cutting-edge technology and real-world problem solving
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.company + exp.position}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: exp.index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
              <p className="text-lg text-gray-600">
                Skills developed through hands-on experience in industry and research
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robotics & AI</h3>
                <div className="space-y-2">
                  {["ROS2", "OpenCV", "SLAM", "Path Planning", "Computer Vision", "Sensor Fusion"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600">{skill}</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Embedded Systems</h3>
                <div className="space-y-2">
                  {["C/C++", "CAN Bus", "I2C/SPI", "Real-time Systems", "Microcontrollers", "Power Management"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-600">{skill}</span>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Software Development</h3>
                <div className="space-y-2">
                  {["Python", "JavaScript", "React", "Docker", "Git", "API Development"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600">{skill}</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm passionate about applying my experience in robotics and embedded systems 
                to solve complex challenges. Let's discuss how we can work together!
              </p>
              <Button
                size="lg"
                onClick={() => window.open('mailto:karthik.appana@gmail.com')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
