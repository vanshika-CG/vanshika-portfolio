"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Rai University",
    period: "2024-2028",
    details: "CGPA: 9.29",
  },
  {
    degree: "Higher Secondary",
    institution: "LP Savani International School",
    period: "Completed",
    details: "JEE 88 percentile",
  },
]

const skills = [
  "React.js",
  "JavaScript",
  "HTML & CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "Postman",
  "Figma",
]

export default function About() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Education Journey</h3>
          <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[25px] h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <div className="flex justify-between mt-2">
                      <Badge variant="outline">{item.period}</Badge>
                      <Badge>{item.details}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Skills</h3>
          <div className="relative h-[400px]">
            {skills.map((skill, index) => {
              // Calculate position in a circular pattern
              const angle = (index / skills.length) * Math.PI * 2
              const radius = 150
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={skill}
                  className="absolute tech-bubble transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 10,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 whitespace-nowrap">
                    {skill}
                  </div>
                </motion.div>
              )
            })}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

