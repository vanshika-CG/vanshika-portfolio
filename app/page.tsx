"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Certificates from "@/components/certificates"
import Resume from "@/components/resume"
import ThemeToggle from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import Contact from "@/components/contact"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <div className="fixed bottom-8 right-8 z-50">
        <ThemeToggle />
      </div>
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="hero" className="min-h-screen py-20">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>

        <section id="tech-stack" className="min-h-screen py-20">
          <TechStack />
        </section>

        <section id="certificates" className="min-h-screen py-20">
          <Certificates />
        </section>

        <section id="resume" className="min-h-screen py-20">
          <Resume />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}

