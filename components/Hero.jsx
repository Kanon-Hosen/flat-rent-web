"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropertyButtons from './PropertyButtons'
import { cn } from "@/lib/utils"
const carouselImages = [
  {
    src: "/img1.jpg",
    alt: "Modern house exterior",
  },
  {
    src: "/img2.jpg",
    alt: "Luxury apartment interior",
  },
  {
    src: "/img3.jpg",
    alt: "Cozy family home",
  },
]
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef(null)
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
  }
  useEffect(() => {
    if (isPlaying) {
      startAutoplay()
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    setIsPlaying(false)
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsPlaying(false)
  }
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Find your next home in Dhaka!</h1>
            <p className="hero-description">
              A great platform to buy, sell, or rent flats in Dhaka for rent,<br />
              <span className="text-[#7065f0]">Without any commissions</span>.
            </p>
            <div className="your-container">
              <PropertyButtons />
            </div>
          </div>
          <div className="carousel-container">
            <div className="carousel-controls">
              <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft size={24} />
              </button>
              <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="carousel-slides">
              {carouselImages.map((item, index) => (
                <div
                  key={index}
                  className={cn("carousel-slide", currentSlide === index ? "active" : "")}
                  style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                >
                  <img  src={item.src} alt={item.alt} className="carousel-media" />
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={cn("carousel-indicator", currentSlide === index ? "active" : "")}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsPlaying(false)
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
