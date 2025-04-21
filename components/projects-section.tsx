"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X } from "lucide-react"
import Link from "next/link"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live?: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "EzyKart – E-Commerce Website",
      description:
        "A fully functional e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["React", "CSS", "JSX", "MongoDB"],
      github: "https://github.com/janhavitak18/EzyKart-Ecom",
      live: "https://ezykart-ecom.vercel.app",
    },
    {
      id: 2,
      title: "Trendify – Blog Website",
      description:
        "A modern blogging platform with content management, user authentication, comments, and responsive design.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["HTML", "CSS", "JS", "NodeJS", "MongoDB"],
      github: "https://github.com/janhavitak18/trendify",
      live: "https://trendify-blog.vercel.app",
    },
    {
      id: 3,
      title: "Hospital Management System",
      description:
        "A comprehensive hospital management system with patient records, appointment scheduling, and billing management.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
      github: "https://github.com/janhavitak18/HMS.git",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my skills, projects, and experience with modern design and animations.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/janhavitak18/portfolio",
    },
    {
      id: 5,
      title: "Weather App",
      description: "A real-time weather application with location detection, forecast, and interactive weather maps.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["React", "API Integration", "CSS", "JavaScript"],
      github: "https://github.com/janhavitak18/weather-app",
    },
    {
      id: 6,
      title: "Task Management App",
      description: "A productivity application with task organization, reminders, and progress tracking features.",
      image: "/placeholder.svg?height=800&width=1200",
      tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
      github: "https://github.com/janhavitak18/task-manager",
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
          My <span className="text-purple-500">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col hover:border-purple-500 transition-colors group">
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-gray-400 mb-4 line-clamp-3">{project.description}</CardDescription>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-800 text-purple-400 border-purple-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-2 border-t border-gray-800">
                <Button variant="outline" size="sm" onClick={() => setSelectedProject(project)}>
                  Details
                </Button>

                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>

                  {project.live && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl w-full bg-gray-900 rounded-lg z-50 overflow-auto max-h-[90vh]"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">{selectedProject.title}</h3>

                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>

                  {selectedProject.live && (
                    <Button asChild variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
                      <Link href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
