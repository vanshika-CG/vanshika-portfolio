import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"


export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.send(
        "service_3tys936",
        "template_u7ttqb8",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Xi9hF2ufaPNky0Pyf"
      )

      toast({
        title: "Message Sent!",
        description: "I'll get back to you soon.",
        className: "bg-primary/90 text-white",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
          Let's Connect
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
          <h3 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h3>
          <p className="text-muted-foreground mb-10 text-lg">
            I'm excited to hear about your projects, ideas, or just to have a chat. Reach out, and let's create something amazing together!
          </p>
          <div className="space-y-8">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-muted-foreground">vanshika.jangamcg@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-muted-foreground">Gujarat, India</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="card-glow bg-background/90 backdrop-blur-md border-primary/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg bg-background/50 border-primary/30 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg bg-background/50 border-primary/30 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-lg bg-background/50 border-primary/30 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] rounded-lg bg-background/50 border-primary/30 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-lg button-glow text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}