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
    <div className="container mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          About Me
        </h2>
        <div className="h-1 w-32 bg-primary/50 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-primary">Education Journey</h3>
          <div className="relative pl-10 border-l-4 border-primary/40 space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[22px] h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-primary"></div>
                </div>
                <Card className="card-glow bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                    <p className="text-muted-foreground mb-4">{item.institution}</p>
                    <div className="flex justify-between gap-4">
                      <Badge variant="outline" className="text-sm">{item.period}</Badge>
                      <Badge className="text-sm">{item.details}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-primary">Skills</h3>
          <div className="relative h-[450px] circular-grid">
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2
              const radius = 180
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
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-background/90 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-3 text-sm font-medium shadow-md">
                    {skill}
                  </div>
                </motion.div>
              )
            })}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-primary/40 to-purple-400/40 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/50"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}