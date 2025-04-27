"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Resume() {
  const [showVideo, setShowVideo] = useState(false)

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
          My <span className="text-purple-500">Resume</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Education</h3>

            <div className="space-y-6">
              {[
                {
                  degree: "Bachelor of Technology in Computer Science",
                  institution: "Lovely Professional University",
                  duration: "2022 - 2026",
                  description: "Specialized in web development and data structures",
                },
                {
                  degree: "High School Diploma",
                  institution: "Sanskar Public School",
                  duration: "2020 - 2021",
                  description: "Graduated with distinction and received the Excellence in Computer Science award",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500"
                >
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-purple-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Experience</h3>

            <div className="space-y-6">
              {[
                {
                  position: "Frontend Developer",
                  company: "TechSolutions Inc.",
                  duration: "June 2023 - Present",
                  description:
                    "Developing responsive web applications using React.js and Next.js, implementing UI components with Tailwind CSS, and collaborating with UX designers to improve user experience.",
                },
                {
                  position: "Web Development Intern",
                  company: "InnovateTech",
                  duration: "Jan 2023 - May 2023",
                  description:
                    "Assisted in developing company website, implemented responsive designs, and gained experience with modern JavaScript frameworks and version control systems.",
                },
                {
                  position: "Freelance Web Developer",
                  company: "Self-employed",
                  duration: "2021 - 2022",
                  description:
                    "Designed and developed websites for small businesses, focusing on responsive design, SEO optimization, and custom WordPress themes.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="bg-gray-900 p-6 rounded-lg border-l-4 border-pink-500"
                >
                  <h4 className="text-xl font-bold mb-1">{exp.position}</h4>
                  <p className="text-pink-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div> */}

          <div className="flex justify-center pt-6">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/resume1.pdf" download>
                <FileDown className="mr-2 h-4 w-4" /> Download Full Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="sticky top-24">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Video CV</h3>

            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl shadow-purple-900/10 border border-gray-800">
              {!showVideo ? (
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                    <Button
                      onClick={() => setShowVideo(true)}
                      className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 flex items-center justify-center"
                    >
                      <Play className="h-8 w-8 text-white fill-current" />
                    </Button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-lg font-bold">My Professional Journey</h4>
                    <p className="text-gray-300 text-sm">Watch my video resume to learn more about me and my work</p>
                  </div>
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="#"
                    title="Video CV"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Languages</h3>
              <div className="space-y-3">
                {[
                  { language: "English", level: "Professional", percent: 95 },
                  { language: "Hindi", level: "Native", percent: 100 },
                  // { language: "Marwadi", level: "Basic", percent: 80 },
                ].map((lang, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{lang.language}</span>
                      <span className="text-gray-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className={`h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
