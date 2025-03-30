"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech", href: "#tech-stack" },
  { name: "Certificates", href: "#certificates" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300",
        scrolled ? "bg-background/80 shadow-lg" : "bg-transparent",
      )}
    >
      <ul className="flex space-x-1 sm:space-x-2 md:space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-primary",
                activeSection === item.href.substring(1) ? "text-primary bg-primary/10" : "text-muted-foreground",
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

