"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

type Certification = {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  link: string
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "React.js Expert Certification",
      issuer: "Meta",
      date: "January 2024",
      description: "Advanced React development including hooks, context API, and performance optimization.",
      link: "#cert-1",
    },
    {
      id: 2,
      title: "Frontend Developer Nanodegree",
      issuer: "Udacity",
      date: "November 2023",
      description: "Comprehensive program covering HTML, CSS, JavaScript, and modern frontend frameworks.",
      link: "#cert-2",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2023",
      description: "Certification in modern responsive design principles and CSS frameworks.",
      link: "#cert-3",
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "June 2023",
      description: "Advanced JavaScript programming including algorithms, data structures, and functional programming.",
      link: "#cert-4",
    },
    {
      id: 5,
      title: "Full-Stack Web Development",
      issuer: "Udemy",
      date: "April 2023",
      description: "Comprehensive course on building full-stack applications with React, Node.js, and MongoDB.",
      link: "#cert-5",
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "February 2023",
      description: "User interface design principles, user experience fundamentals, and design thinking.",
      link: "#cert-6",
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
          My <span className="text-purple-500">Certifications</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full overflow-hidden hover:border-purple-500 transition-colors group">
              <CardHeader className="border-b border-gray-800 bg-gray-950 pb-3">
                <div className="flex items-center space-x-3">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 12 }}
                    className="rounded-full bg-purple-500/20 p-2 text-purple-400"
                  >
                    <Award className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold group-hover:text-purple-400 transition-colors line-clamp-1">
                      {cert.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4 flex-grow">
                <Badge className="mb-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30">
                  {cert.issuer}
                </Badge>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </CardContent>

              <CardFooter className="pt-2 border-t border-gray-800">
                <Button asChild variant="ghost" size="sm" className="hover:text-purple-400 hover:bg-purple-950/30">
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
