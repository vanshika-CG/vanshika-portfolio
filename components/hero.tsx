"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const bubblesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bubblesRef.current) return

    const bubbleCount = 10
    const container = bubblesRef.current

    // Clear existing bubbles
    container.innerHTML = ""

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div")
      bubble.className = "bubble"

      // Random size between 50px and 200px
      const size = Math.random() * 150 + 50
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`

      // Random position
      bubble.style.top = `${Math.random() * 100}%`
      bubble.style.left = `${Math.random() * 100}%`

      // Random animation delay
      bubble.style.animationDelay = `${Math.random() * 5}s`

      // Random opacity
      bubble.style.opacity = `${Math.random() * 0.5 + 0.1}`

      container.appendChild(bubble)
    }
  }, [])

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div ref={bubblesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <div className="relative mb-8 mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 p-1 bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/80 to-purple-400/80 flex items-center justify-center text-4xl font-bold text-white">
              VJ
            </div>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-primary">Vanshika Jangam</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 h-12"
        >
          <TypeAnimation
            sequence={["Full-Stack Developer", 2000, "Web Designer", 2000, "UI/UX Enthusiast", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-muted-foreground"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex space-x-4 justify-center mb-12"
        >
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <Button
            className="rounded-full px-8"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

