

"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Blog = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  link: string
}

type Category = "All" | "Web Development" | "UI/UX" | "JavaScript" | "Career"

export default function Blogs() {
  const [filter, setFilter] = useState<Category>("All")

  const blogs: Blog[] = [
    {
      id: 1,
      title: "10 Tips for Clean React Code",
      excerpt:
        "Learn the best practices for writing maintainable and clean React code that scales well for large projects.",
      image: "/cleancode.avif?height=600&width=800",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      link: "#blog-post-1",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      excerpt: "A comprehensive guide to React Hooks and how they can simplify your functional components.",
      image: "/reacthooks.jpeg?height=600&width=800",
      date: "Apr 28, 2024",
      readTime: "8 min read",
      category: "JavaScript",
      link: "#blog-post-2",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Explore the latest CSS features and techniques that can transform your web designs.",
      image: "/moderncss.png?height=600&width=800",
      date: "Apr 10, 2024",
      readTime: "6 min read",
      category: "UI/UX",
      link: "#blog-post-3",
    },
    {
      id: 4,
      title: "Getting Started with Next.js",
      excerpt: "A beginner's guide to building fast and SEO-friendly websites with Next.js framework.",
      image: "/nextjs.jpg?height=600&width=800",
      date: "Mar 22, 2024",
      readTime: "7 min read",
      category: "Web Development",
      link: "#blog-post-4",
    },
    {
      id: 5,
      title: "How to Ace Technical Interviews",
      excerpt: "Tips and strategies for preparing for and succeeding in technical job interviews for developers.",
      image: "/ACEinterview.png?height=600&width=800",
      date: "Mar 8, 2024",
      readTime: "9 min read",
      category: "Career",
      link: "#blog-post-5",
    },
    {
      id: 6,
      title: "Creating Accessible Web Applications",
      excerpt:
        "Best practices for building web applications that are accessible to all users, including those with disabilities.",
      image: "/web.png?height=600&width=800",
      date: "Feb 15, 2024",
      readTime: "10 min read",
      category: "UI/UX",
      link: "#blog-post-6",
    },
  ]

  const filteredBlogs = filter === "All" ? blogs : blogs.filter((blog) => blog.category === filter)

  const categories: Category[] = ["All", "Web Development", "UI/UX", "JavaScript", "Career"]

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
          My <span className="text-purple-500">Blog</span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
      </motion.div>

      <div className="flex justify-center mb-10 overflow-x-auto pb-4">
        <div className="flex space-x-2">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-gray-700 hover:border-purple-500 hover:bg-purple-900/20"
                }
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col hover:border-purple-500 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500/80 hover:bg-purple-500 text-white">{blog.category}</Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{blog.title}</h3>

                <div className="flex items-center text-gray-400 text-sm space-x-4 mt-2">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-400 line-clamp-3">{blog.excerpt}</p>
              </CardContent>

              <CardFooter className="pt-2 border-t border-gray-800">
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto hover:bg-transparent text-purple-400 hover:text-purple-300"
                >
                  <Link href={blog.link}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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
