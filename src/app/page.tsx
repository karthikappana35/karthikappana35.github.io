"use client"

import Navbar from '@/components/Navbar'
import SimpleTimeline from '@/components/SimpleTimeline'
import ProjectCards from '@/components/ProjectCards'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: "F1Tenth Maze Solver",
      description: "Developed an autonomous stack in ROS2 for a F1Tenth car to traverse tight mazes using complex maneuvers. Integrated Hybrid-A* with Reeds-Shepp heuristics and bidirectional control for smooth trajectories.",
      technologies: ["ROS2", "C++", "Python", "OpenCV", "LiDAR", "SLAM"],
      githubUrl: "https://github.com/karthikappana/f1tenth-maze-solver",
      index: 0
    },
    {
      title: "Hand Gesture Mouse Control using Raspberry Pi",
      description: "Built a real-time hand detection system using TensorFlow, OpenCV, and Raspberry Pi to control the mouse via gestures. Quantized a custom model and deployed it with Coral TPU for sub-10ms latency.",
      technologies: ["TensorFlow", "OpenCV", "Python", "Raspberry Pi", "Coral TPU", "USB HID"],
      githubUrl: "https://github.com/karthikappana35/RPI-HandTracking",
      index: 1
    },
    {
      title: "Custom RISC-V Unix OS",
      description: "Developed a Unix-style operating system from scratch in C for RISC-V with virtual memory, process management, file system, and syscalls. Implemented ELF loader, pipes, and page table management.",
      technologies: ["C", "Assembly", "RISC-V", "QEMU", "GDB"],
      githubUrl: "https://github.com/karthikappana35/RISC-V_Unix",
      index: 2
    }
  ]

  const experiences = [
    {
      company: "John Deere ISG",
      position: "Robotics Engineer Intern – Automation & Autonomy",
      duration: "Aug 2025 – Present",
      description: "Migrated depth perception from laser sensing to monocular point cloud estimation, reducing hardware cost. Developed an image segmentation model to classify furrow debris, improving depth pipeline robustness.",
      achievements: [
        "Implemented Python automation scripts in Unreal Engine SIL simulations for CVML model validation.",
        "Reduced perception cost by transitioning from LiDAR-based to monocular estimation.",
        "Enhanced model robustness through synthetic dataset augmentation."
      ],
      technologies: ["Python", "CVML", "Unreal Engine", "ROS2", "OpenCV"],
      index: 0
    },
    {
      company: "John Deere ISG",
      position: "Embedded Systems Intern – Dynamic System Modeling",
      duration: "May 2025 – Aug 2025",
      description: "Designed and validated a skid steer plant model for Machine-in-the-Loop simulation using MATLAB, Simulink, and C++ for automation testing.",
      achievements: [
        "Developed CI/CD metrics to detect oscillatory behavior in guidance systems, improving reliability.",
        "Integrated improved 2D tire model based on manufacturer specs, enhancing simulation fidelity."
      ],
      technologies: ["MATLAB", "Simulink", "C++", "Python", "Automation"],
      index: 1
    },
    {
      company: "Morehouse Engineering Inc.",
      position: "Systems Engineer Intern",
      duration: "May 2024 – Aug 2024",
      description: "Installed industrial wireless IO modules and debugged ControlLogix PLCs for water reclamation facilities. Analyzed filtration performance and designed AutoCAD Electrical schematics.",
      achievements: [
        "Configured wireless IO to transmit analog sensor data.",
        "Improved system diagnostics through PLC reimaging and field testing.",
        "Developed process schematics to optimize control workflows."
      ],
      technologies: ["Allen Bradley PLC", "AutoCAD Electrical", "Wireless IO", "Instrumentation"],
      index: 2
    },
    {
      company: "FIRST Robotics Team 293 SPIKE",
      position: "Volunteer Mentor",
      duration: "Oct 2023 – Present",
      description: "Mentored students in integrating IMU, encoder, and vision-based odometry using AprilTags and OpenCV, achieving sub-6 inch localization accuracy.",
      achievements: [
        "Implemented custom kinematic models with sensor fusion for high-precision navigation.",
        "Guided Agile-based design and fabrication workflows, reducing build time by 10%.",
        "Supported SPI, I2C, and CAN sensor integration into robot control systems."
      ],
      technologies: ["Python", "C++", "OpenCV", "AprilTags", "Embedded Systems"],
      index: 3
    },
    {
      company: "Illini Motorsports FSAE",
      position: "Software Team Member",
      duration: "Aug 2023 – May 2025",
      description: "Migrated a MATLAB-based lap time simulator to Python for cross-platform use. Developed CAN parsing and STM32 IMU interface software.",
      achievements: [
        "Improved telemetry analysis by integrating CAN parsing tools.",
        "Supported simulation-to-hardware correlation for testing.",
        "Enabled IMU communication through STM32 microcontroller drivers."
      ],
      technologies: ["Python", "C", "STM32", "CAN Bus", "MATLAB"],
      index: 4
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
                 I&apos;m a Computer Engineering student at the University of Illinois Urbana-Champaign, passionate about robotics, computer vision, and embedded systems. My journey began in FIRST Robotics and evolved into a focus on autonomous systems and intelligent machines.
                 </p>
              <p className="text-lg text-black mb-8">
                I&apos;ve interned at John Deere ISG and Morehouse Engineering, where I worked on dynamic system modeling, embedded software, and robotic autonomy. My work spans simulation, control systems, and CVML applications for real-world automation.
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
                    C++, Python, MATLAB, ROS2, TensorFlow, OpenCV, Embedded Systems, Simulink, CVML, Control Systems
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-black mb-4">Contact Info</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-black text-sm">Urbana-Champaign, IL</span>
                    </div>
                    <div>
                      <span className="text-black text-sm">Expected Graduation: Dec 2026</span>
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
            Exploring the intersection of robotics, control systems, and computer vision
          </p>
          <ProjectCards projects={projects} />
        </div>
      </section>
    </div>
  )
}
