"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              <span className="text-purple-500">J</span>
              <span className="text-pink-500">T</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-gray-400"
            >
              Loading portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
