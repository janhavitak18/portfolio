"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-950 pt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="relative h-8 w-8 rounded-full border-2 border-t-purple-500 border-r-pink-500 border-b-purple-500 border-l-pink-500 flex items-center justify-center"
              >
                <span className="text-lg font-bold">
                  <span className="text-purple-500">J</span>
                  <span className="text-pink-500">T</span>
                </span>
              </motion.div>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Janhavi Tak
              </span>
            </Link>

            <p className="text-gray-400 mb-4 max-w-md">
              A passionate Full-Stack Developer specializing in creating beautiful, responsive, and user-friendly web
              applications.
            </p>

            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Link href="https://github.com/janhavitak18" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Link href="https://linkedin.com/janhavitak18/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Link href="https://leetcode.com/u/Janhavitak/" target="_blank" rel="noopener noreferrer">
                  <Code className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: janhavitak2004@gmail.com</li>
              <li>Phone: +91-8079007548</li>
              <li>Location: Punjab, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Janhavi Tak. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full border-gray-700 hover:bg-purple-500 hover:text-white hover:border-purple-500"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
