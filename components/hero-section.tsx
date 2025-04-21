"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileDown, Mail, PlayCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const phrases = ["Passionate Developer 💻", "Problem Solver 🧠", "UI/UX Enthusiast 🎨"]

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[index]
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.substring(0, text.length + 1))
      } else {
        // Pause at the end of the phrase before moving to the next one
        setTimeout(() => {
          setText("")
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, 1000)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [text, index, phrases])

  return (
    <div className="min-h-screen flex items-center bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(128, 90, 213, 0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-medium text-purple-400 mb-4"
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
          >
            Janhavi Tak
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6"
          >
            Full-Stack Developer
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="h-10 mb-8"
          >
            <span className="text-lg sm:text-xl text-gray-300">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
              <Link href="/resume.pdf" download>
                <FileDown className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>

            <Button asChild variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
              <Link href="#resume">
                <PlayCircle className="mr-2 h-4 w-4" /> Watch Video CV
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 hidden sm:block"
          >
            <div className="flex items-center">
              <div className="h-px w-16 bg-gray-600"></div>
              <span className="text-gray-400 text-sm px-4">Scroll Down</span>
              <div className="h-px w-16 bg-gray-600"></div>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="mt-4 flex justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-2xl opacity-20"></div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="relative bg-gray-900 rounded-full p-2 border-2 border-purple-500/50 shadow-xl shadow-purple-900/20 overflow-hidden"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50"></div>
                <Image
                  src="/placeholder2.jpg?height=400&width=400"
                  alt="Janhavi Tak"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
