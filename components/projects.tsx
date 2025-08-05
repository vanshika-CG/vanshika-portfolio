import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Filter } from "lucide-react"

const projects = [
  {
  id: 1,
  title: "Triivya",
  description: "A full-stack e-commerce clothing website built with real-client requirements, featuring secure authentication, product filtering, cart functionality, and seamless checkout experience.",
  image: "/triivya.png",
  tags: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
  category: "Full Stack",
  demoLink: "https://triivya.com/",
  githubLink: "https://github.com/vanshika-CG/triivya-clothing", 
},
  {
    id: 2,
    title: "CodeChisel",
    description: "A coding education platform with interactive exercises and challenges for beginners.",
    image: "/codechisel.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    demoLink: "https://codechisel-24.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/codechisel",
  },
  {
    id: 3,
    title: "Image Explorer",
    description: "Unsplash API-based app for discovering and downloading high-quality images.",
    image: "/unsplash.png",
    tags: ["React", "Unsplash API", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "https://image-explore.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/unsplash_api",
  },
  {
    id: 4,
    title: "Multi-Category Web",
    description: "Explore meal and cocktail recipes with this interactive application.",
    image: "/router.png",
    tags: ["React", "API Integration", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "https://multi-category.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/react-router-task",
  },
  {
    id: 5,
    title: "Amul Clone",
    description: "Modern redesign of the Amul website with enhanced user experience.",
    image: "/amul.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    demoLink: "https://amulclone.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/amulwebsite",
  },
  {
    id: 6,
    title: "YouTube Clone",
    description: "React-based YouTube clone with video playback and search features.",
    image: "/youtube.png",
    tags: ["React", "YouTube API", "CSS", "Firebase"],
    category: "Frontend",
    demoLink: "https://utubee-clonee.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/react-youtube",
  },
  {
    id: 7,
    title: "Spotify Clone",
    description: "React-based Spotify clone with music playback and playlist features.",
    image: "/spotify.png",
    tags: ["React", "CSS"],
    category: "Frontend",
    demoLink: "https://spotifye-clone.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/react-spotify",
  },
  {
    id: 8,
    title: "Tic-Tac-Toe",
    description: "Classic Tic-Tac-Toe game built with React for two players.",
    image: "/tictac.png",
    tags: ["React", "CSS"],
    category: "Fungame",
    demoLink: "https://tictacc-toe.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/TicTacToe",
  },
  {
    id: 9,
    title: "Connect Four",
    description: "Interactive Connect Four game with strategic gameplay.",
    image: "/connect.png",
    tags: ["React", "CSS"],
    category: "Fungame",
    demoLink: "https://connet-game.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/connect-four-game",
  },
  {
    id: 10,
    title: "Calculator",
    description: "Stylish calculator app built with HTML, CSS, and JavaScript.",
    image: "/cal.png",
    tags: ["Html", "CSS"],
    category: "Small-Projects",
    demoLink: "https://calculatorrq.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/calculator",
  },
  {
    id: 11,
    title: "Chess",
    description: "Interactive chessboard with drag-and-drop piece movement.",
    image: "/chess.png",
    tags: ["Html", "CSS"],
    category: "Small-Projects",
    demoLink: "https://chessey.netlify.app/",
    githubLink: "https://github.com/vanshika-CG/chess",
  },
  {
    id: 12,
    title: "CrimeShield",
    description: "UI/UX design for a security-focused application.",
    image: "/crime.png",
    tags: ["Figma"],
    category: "Figma",
    demoLink: "https://www.figma.com/design/ADRfcncMzSKA30LYryBmmg/Untitled?node-id=19-23&t=Lq3s8jzVswcHaHG1-1",
  },
  {
    id: 13,
    title: "Elite Style",
    description: "Fashion-focused UI/UX design prototype.",
    image: "/elite.png",
    tags: ["Figma"],
    category: "Figma",
    demoLink: "https://www.figma.com/design/Oa1gKqYgu7LzPwcV8zbFQT/Elite-Style?node-id=203-4&t=VjQ35KUnQyNWSjcp-1",
  },
  {
    id: 14,
    title: "Dual Sense",
    description: "Gaming interface design with dynamic interactions.",
    image: "/game.png",
    tags: ["Figma"],
    category: "Figma",
    demoLink: "https://www.figma.com/design/UFM5eX0WPNkmk1oOz4HZKr/Untitled?node-id=0-1&t=wO0kzhAmr6YckSTC-1",
  },
]

const categories = ["All", "Frontend", "Full Stack", "Small-Projects", "Fungame", "Figma"]

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

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, () => ({
      size: Math.random() * 120 + 60,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.3 + 0.2,
    }))
    setBubbles(newBubbles)
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(filteredProjects.length - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, filteredProjects.length])

  return (
    <div className="container mx-auto relative py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              opacity: bubble.opacity,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          My Projects
        </h2>
        <div className="h-1 w-32 bg-primary/50 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mb-16 relative z-10"
      >
        <div className="bg-background/90 backdrop-blur-md p-3 rounded-full border border-primary/30 shadow-xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`rounded-full px-5 py-2 text-sm font-medium button-glow ${
                  activeCategory === category ? "bg-primary/90" : "hover:bg-primary/20"
                }`}
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

      <div className="relative h-[650px] mb-16 overflow-hidden perspective">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/90 backdrop-blur-md border-primary/30 button-glow"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/90 backdrop-blur-md border-primary/30 button-glow"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div ref={carouselRef} className="w-full h-full flex items-center justify-center">
          {filteredProjects.map((project, index) => {
            const distance = Math.abs(currentIndex - index)
            const isActive = index === currentIndex

            let xPosition = 0
            let scale = 1
            let opacity = 1
            let zIndex = 10

            if (distance > 0) {
              xPosition = (index < currentIndex ? -150 : 150) * Math.min(distance, 2)
              scale = 1 - 0.25 * Math.min(distance, 2)
              opacity = 1 - 0.5 * Math.min(distance, 2)
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
                  rotateY: index < currentIndex ? 20 : index > currentIndex ? -20 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-full max-w-4xl"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => isActive && setSelectedProject(project.id)}
              >
                <Card className={`card-glow bg-background/90 backdrop-blur-md ${isActive ? "border-primary/60" : "border-transparent"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-8 flex flex-col">
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-3 text-sm">{project.category}</Badge>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex gap-4">
                        <Button className="rounded-full flex-1 button-glow" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" className="rounded-full flex-1 button-glow" asChild>
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-150" : "bg-primary/40 hover:bg-primary/60"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-8 relative z-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-glow bg-background/90 backdrop-blur-md">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">{project.category}</Badge>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button className="rounded-full flex-1 button-glow" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full flex-1 button-glow" size="sm" asChild>
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

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="relative w-full max-w-5xl bg-card rounded-2xl shadow-2xl overflow-hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full button-glow"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 md:h-auto bg-muted">
                  <img
                    src={projects[selectedProject - 1].image || "/placeholder.svg"}
                    alt={projects[selectedProject - 1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge variant="outline" className="mb-3 text-sm">{projects[selectedProject - 1].category}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{projects[selectedProject - 1].title}</h3>
                  <p className="text-muted-foreground mb-6">{projects[selectedProject - 1].description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject - 1].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button className="rounded-full button-glow" asChild>
                      <a href={projects[selectedProject - 1].demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="rounded-full button-glow" asChild>
                      <a href={projects[selectedProject - 1].githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}