"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export default function Resume() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Resume</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">My Resume</h3>
          <p className="text-muted-foreground mb-8">
            Download my resume to learn more about my education, skills, and experience. Feel free to reach out if you
            have any questions or would like to discuss potential opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="rounded-full">
  <a href="/resume.pdf" download="My_Resume.pdf">
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </a>
</Button>

            <Button variant="outline" className="rounded-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Online
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            className="relative w-full max-w-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-muted">
                  <img
                    src="/resume.png?height=600&width=450"
                    alt="Resume Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <motion.div
              className="absolute inset-0 bg-primary/80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button asChild variant="secondary" className="rounded-full">
    <a href="/resume.pdf" download="My_Resume.pdf">
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </a>
  </Button>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

