"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  testimonial: string
  image: string
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "CTO",
      company: "TechSolutions Inc.",
      testimonial:
        "Working with Janhavi was a pleasure. Her attention to detail and technical expertise helped us deliver our project ahead of schedule. I highly recommend her for any web development project.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Sarah Miller",
      position: "Product Owner",
      company: "InnovateTech",
      testimonial:
        "Janhavi is an exceptional developer who consistently delivers high-quality work. She has a deep understanding of modern web technologies and is always ready to tackle complex challenges.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "UI/UX Director",
      company: "DesignCraft",
      testimonial:
        "Janhavi has an eye for design that sets her apart. She not only implemented our designs perfectly but also suggested improvements that enhanced user experience. A true professional!",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Emily Chen",
      position: "Startup Founder",
      company: "NexGen Apps",
      testimonial:
        "As a startup, we needed someone who could wear multiple hats. Janhavi exceeded our expectations by handling everything from front-end development to database design with remarkable skill.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        next()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, current])

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
          Client <span className="text-purple-500">Testimonials</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden shadow-xl shadow-purple-900/5">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 blur"></div>
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={200}
                            height={200}
                            className="rounded-full object-cover border-2 border-purple-500 relative"
                          />
                        </motion.div>
                      </div>

                      <div className="flex-grow">
                        <Quote className="h-10 w-10 text-purple-500 opacity-20 mb-4" />

                        <p className="text-lg text-gray-300 italic mb-6">"{testimonial.testimonial}"</p>

                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">
                            {testimonial.position} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-gray-700 hover:bg-purple-900/20 hover:border-purple-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 p-0 rounded-full ${
                  current === index ? "bg-purple-500" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-gray-700 hover:bg-purple-900/20 hover:border-purple-500"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
