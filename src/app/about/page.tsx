"use client"

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Calendar, GraduationCap, Award, Code } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { category: "Programming Languages", items: ["C++", "Python", "C", "JavaScript", "Java", "Assembly"] },
    { category: "Robotics & AI", items: ["ROS2", "OpenCV", "TensorFlow", "PyTorch", "Gazebo", "SLAM"] },
    { category: "Embedded Systems", items: ["Arduino", "Raspberry Pi", "CAN Bus", "I2C", "SPI", "UART"] },
    { category: "Development Tools", items: ["Git", "Docker", "MATLAB", "GDB", "QEMU", "Linux"] },
    { category: "Hardware", items: ["3D Printing", "CAD", "Electronics", "Sensors", "Actuators", "Microcontrollers"] }
  ]

  const timeline = [
    {
      year: "2025",
      title: "Expected Graduation",
      description: "Bachelor of Science in Computer Engineering, University of Illinois at Urbana-Champaign",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Robotics Engineer Intern",
      description: "John Deere ISG - Developed autonomous navigation systems for agricultural machinery",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Embedded Systems Intern",
      description: "John Deere ISG - Worked on embedded systems for precision agriculture equipment",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Software Development Intern",
      description: "Morehouse Engineering - Built automation tools and data visualization dashboards",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "FIRST Robotics Mentor",
      description: "Started mentoring high school students in robotics and engineering",
      icon: <Award className="w-6 h-6" />
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
                About <span className="text-blue-600">Karthik</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A passionate Computer Engineering student dedicated to advancing autonomous systems 
                and bridging the gap between hardware and intelligent software.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Personal Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
                <p className="text-lg text-gray-600 mb-6">
                  My passion for engineering began in high school through FIRST Robotics, where I discovered 
                  the thrill of building autonomous systems that could navigate complex environments. This 
                  experience sparked my interest in robotics and computer vision, leading me to pursue 
                  Computer Engineering at UIUC.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  At UIUC, I've immersed myself in coursework covering embedded systems, computer vision, 
                  machine learning, and robotics. My internships at John Deere have given me hands-on 
                  experience with real-world autonomous systems, from precision agriculture to field mapping.
                </p>
                <p className="text-lg text-gray-600">
                  I believe that the future lies in intelligent systems that can operate autonomously 
                  while working alongside humans. My goal is to contribute to this future by developing 
                  robust, efficient, and safe autonomous systems.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Urbana-Champaign, IL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Expected Graduation: May 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Computer Engineering, UIUC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Dean's List, 3.8+ GPA</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
              <p className="text-lg text-gray-600">
                A comprehensive toolkit for building autonomous systems
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline</h2>
              <p className="text-lg text-gray-600">
                Key milestones in my engineering journey
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-600">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities in robotics, computer vision, 
                and autonomous systems. Let's build something amazing together!
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
