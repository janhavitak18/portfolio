"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { AtSign, CheckCircle, Github, Linkedin, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSuccess(true)

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setFormSuccess(false)
      }, 3000)
    }, 1500)

    // In a real implementation, you would use something like EmailJS:
    // try {
    //   await emailjs.send(
    //     "service_id",
    //     "template_id",
    //     formData,
    //     "user_id"
    //   );
    //   setIsSubmitting(false);
    //   setFormSuccess(true);
    //   toast({
    //     title: "Message sent!",
    //     description: "Thanks for reaching out. I'll get back to you soon.",
    //   });
    // } catch (error) {
    //   setIsSubmitting(false);
    //   toast({
    //     title: "Error sending message",
    //     description: "Please try again later or contact me directly via email.",
    //     variant: "destructive",
    //   });
    // }
  }

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone",
      value: "+91-8079007548",
      link: "tel:+918079007548",
    },
    {
      icon: <AtSign className="h-4 w-4" />,
      label: "Email",
      value: "janhavitak2004@gmail.com",
      link: "mailto:janhavitak2004@gmail.com",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Location",
      value: "Delhi, India",
      link: "https://maps.google.com/?q=Delhi,India",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/janhavitak18",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/janhavitak18/",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any inquiries, project discussions, or just to say hello. I'm always open
              to new opportunities and collaborations.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    className="flex items-center space-x-4 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gray-800 p-3 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="font-medium group-hover:text-purple-400 transition-colors">{item.value}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg text-white hover:bg-purple-500 transition-colors flex items-center space-x-2"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.05313967705!2d76.76357065438654!3d28.643795352991304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1650439789073!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <Card className="bg-gray-900 border-gray-800 shadow-lg shadow-purple-900/5">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 focus:border-purple-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 focus:border-purple-500 min-h-32"
                    placeholder="Hi Janhavi, I'd like to talk about..."
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full bg-purple-600 hover:bg-purple-700 ${formSuccess ? "bg-green-600 hover:bg-green-700" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </div>
                  ) : formSuccess ? (
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </div>
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
