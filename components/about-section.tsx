"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, Briefcase, Coffee, HeartHandshake, Lightbulb, Users } from "lucide-react"

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

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
          About <span className="text-purple-500">Me</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-lg transform -rotate-6"></div>
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-lg transform rotate-6"></div>

          <div className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-xl shadow-purple-900/20 bg-gray-900">
            <div className="absolute inset-0 bg-gray-900 mix-blend-overlay"></div>
            <Image
              src="/placeholder.jpg?height=600&width=600"
              alt="Janhavi Tak"
              width={600}
              height={600}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-2xl font-bold mb-2 text-white">Janhavi Tak</h3>
                <p className="text-gray-300">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-purple-400">Who am I?</h3>

          <div className="space-y-6 text-gray-300">
            <p>
              I am a passionate <span className="text-purple-400 font-semibold">Full-Stack Developer</span> with a focus
              on creating beautiful, responsive, and user-friendly web applications. With a strong foundation in modern
              web technologies, I bring ideas to life through elegant code.
            </p>

            <p>
              My journey in web development started with a curiosity about how websites work, and it has evolved into a
              deep passion for crafting engaging digital experiences that solve real-world problems.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4 text-purple-400">Soft Skills</h3>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <HeartHandshake className="h-5 w-5" />, skill: "Communication" },
              { icon: <Users className="h-5 w-5" />, skill: "Team Leadership" },
              { icon: <Lightbulb className="h-5 w-5" />, skill: "Problem Solving" },
              { icon: <Coffee className="h-5 w-5" />, skill: "Adaptability" },
              { icon: <Briefcase className="h-5 w-5" />, skill: "Time Management" },
              { icon: <BookOpen className="h-5 w-5" />, skill: "Continuous Learning" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-3 border border-gray-700"
              >
                <div className="text-purple-500">{item.icon}</div>
                <span>{item.skill}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400 text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
