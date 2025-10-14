"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center snap-start ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {children}
      </div>
    </motion.section>
  )
}

export default Section
