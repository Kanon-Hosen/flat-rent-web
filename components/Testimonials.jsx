"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    quote:
      "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
    name: "Mira Culos",
    role: "Renter",
    avatar: "/img1.svg",
  },
  {
    id: 2,
    quote:
      "As a property manager, Estatery has simplified my workflow tremendously. The interface is intuitive and the customer support is exceptional.",
    name: "Alex Johnson",
    role: "Property Manager",
    avatar: "/img2.svg",
  },
  {
    id: 3,
    quote:
      "I've been a landlord for over 10 years and Estatery is by far the best platform I've used. It's helped me find reliable tenants quickly and efficiently.",
    name: "Sam Rodriguez",
    role: "Landlord",
    avatar: "/img3.svg",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleAvatarClick = (index) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="py-16 bg-[#f5f3ff] overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our property managers, landlords, and tenants have to say
          </p>
        </motion.div>

        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors">
                    {testimonials[activeIndex].role}
                  </Badge>
                  <blockquote className="text-center">
                    <p className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <footer className="flex items-center justify-center">
                      <span className="font-semibold">{testimonials[activeIndex].name},</span>
                      <span className="text-gray-500 ml-1">{testimonials[activeIndex].role}</span>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-purple-100 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-purple-100 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative cursor-pointer group"
              onClick={() => handleAvatarClick(index)}
            >
              <div
                className={`
                  w-16 h-16 rounded-full overflow-hidden transition-all duration-300
                  ${
                    index === activeIndex
                      ? "border-2 border-purple-500 p-0.5 scale-110"
                      : "border border-transparent opacity-70 hover:opacity-100"
                  }
                `}
              >
                <Avatar className="w-full h-full">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              {index === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
