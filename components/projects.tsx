"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Filter } from "lucide-react"


const projects = [
  {
    id: 1,
    title: "CodeChisel",
    description:
      "A coding education platform designed to help beginners learn programming through interactive exercises and challenges.",
    image: "/codechisel.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/codechisel",
  },
  {
    id: 2,
    title: "Image Explorer",
    description:
      "An Unsplash API-based search application that allows users to discover and download high-quality images.",
    image: "/unsplash.png",
    tags: ["React", "Unsplash API", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/unsplash_api",
  },
  {
    id: 3,
    title: "Amul Clone",
    description: "A reimagined website for Amul with modern design and improved user experience.",
    image: "/amul.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/amulwebsite",
  },
  {
    id: 4,
    title: "Multi-Category Web",
    description: "A meal and cocktail explorer application that allows users to discover recipes and ingredients.",
    image: "/router.png",
    tags: ["React", "API Integration", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/react-router-task",
  },
  {
    id: 5,
    title: "YouTube Clone",
    description: "A React-based YouTube clone with video playback, search, and recommendation features.",
    image: "/youtube.png",
    tags: ["React", "YouTube API", "CSS", "Firebase"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/react-youtube",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description: "A React-based YouTube clone with video playback, search, and recommendation features.",
    image: "/spotify.png",
    tags: ["React", "CSS"],
    category: "Frontend",
    demoLink: "#",
    githubLink: "https://github.com/vanshika-CG/react-spotify",
  },
]

const categories = ["All", "Frontend", "Full Stack", "Backend"]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [bubbles, setBubbles] = useState<
    Array<{
      size: number
      top: number
      left: number
      delay: number
      opacity: number
    }>
  >([])

  // Generate random bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, () => ({
      size: Math.random() * 150 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setBubbles(newBubbles)
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the beginning
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(filteredProjects.length - 1) // Loop to the end
    }
  }

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, filteredProjects.length])

  return (
    <div className="container mx-auto relative">
      {/* Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              opacity: bubble.opacity,
              backgroundColor: "rgba(123, 97, 255, 0.2)",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12 relative z-10"
      >
        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full border border-primary/20 shadow-lg">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`rounded-full px-4 py-2 ${activeCategory === category ? "" : "hover:text-primary"}`}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentIndex(0)
                }}
              >
                {index === 0 && <Filter className="mr-2 h-4 w-4" />}
                {category}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3D Carousel */}
      <div className="relative h-[600px] mb-12 overflow-hidden">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div ref={carouselRef} className="w-full h-full flex items-center justify-center perspective">
          {filteredProjects.map((project, index) => {
            // Calculate position and z-index for 3D carousel effect
            const distance = Math.abs(currentIndex - index)
            const isActive = index === currentIndex

            // Different positions based on distance from current
            let xPosition = 0
            let scale = 1
            let opacity = 1
            let zIndex = 10

            if (distance > 0) {
              xPosition = (index < currentIndex ? -120 : 120) * Math.min(distance, 2)
              scale = 1 - 0.2 * Math.min(distance, 2)
              opacity = 1 - 0.4 * Math.min(distance, 2)
              zIndex = 10 - distance
            }

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: xPosition,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex,
                  rotateY: index < currentIndex ? 15 : index > currentIndex ? -15 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-full max-w-3xl"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card
                  className={`overflow-hidden transition-all duration-300 shadow-xl ${
                    isActive ? "border-primary/50" : "border-transparent"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-square md:aspect-auto md:h-full overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="mb-2">
                        <Badge variant="outline" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-6">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-auto flex space-x-4">
                        <Button className="rounded-full flex-1" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" className="rounded-full flex-1" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Grid (Mobile Fallback) */}
      <div className="md:hidden grid grid-cols-1 gap-6 relative z-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex space-x-4">
                <Button className="rounded-full flex-1" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full flex-1" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="relative w-full max-w-4xl bg-card rounded-xl shadow-2xl overflow-hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {selectedProject !== null && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-muted">
                    <img
                      src={projects[selectedProject - 1].image || "/placeholder.svg"}
                      alt={projects[selectedProject - 1].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-2">
                      {projects[selectedProject - 1].category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{projects[selectedProject - 1].title}</h3>
                    <p className="text-muted-foreground mb-6">{projects[selectedProject - 1].description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[selectedProject - 1].tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button className="rounded-full" asChild>
                        <a href={projects[selectedProject - 1].demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full" asChild>
                        <a href={projects[selectedProject - 1].githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

