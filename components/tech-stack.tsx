import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "React", color: "#61DAFB", icon: "⚛️", description: "JavaScript library for building user interfaces" },
  { name: "JavaScript", color: "#F7DF1E", icon: "𝗝𝗦", description: "Programming language that powers the web" },
  { name: "HTML", color: "#E34F26", icon: "🌐", description: "Standard markup language for web pages" },
  { name: "CSS", color: "#1572B6", icon: "🎨", description: "Style sheet language for designing web pages" },
  { name: "Node.js", color: "#339933", icon: "📦", description: "JavaScript runtime built on Chrome's V8 engine" },
  { name: "Express", color: "#000000", icon: "🚂", description: "Web application framework for Node.js" },
  { name: "MongoDB", color: "#47A248", icon: "🍃", description: "NoSQL database for modern applications" },
  { name: "Git", color: "#F05032", icon: "📝", description: "Distributed version control system" },
  { name: "GitHub", color: "#181717", icon: "🐙", description: "Platform for hosting and collaborating on code" },
  { name: "Postman", color: "#FF6C37", icon: "📮", description: "API development and testing tool" },
  { name: "Figma", color: "#F24E1E", icon: "🎭", description: "Collaborative interface design tool" },
  { name: "Tailwind", color: "#06B6D4", icon: "🌊", description: "Utility-first CSS framework" },
]

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

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
          Tech Stack
        </h2>
        <div className="h-1 w-32 bg-primary/50 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: `${Math.random() * 0.3 + 0.2}`,
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative z-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Card
                className={`card-glow h-full bg-background/90 backdrop-blur-md border-2 ${
                  hoveredTech === tech.name ? "border-primary/60" : "border-transparent"
                }`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 text-3xl shadow-md"
                    style={{
                      backgroundColor: `${tech.color}22`,
                      border: `2px solid ${tech.color}`,
                    }}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{tech.name}</h3>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredTech === tech.name ? 1 : 0,
                      height: hoveredTech === tech.name ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}