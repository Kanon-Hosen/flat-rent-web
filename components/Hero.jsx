"use client";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Shield,
  Star,
  Building2,
  KeyRound,
} from "lucide-react";
import PropertyButtons from "./PropertyButtons";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const carouselImages = [
  {
    src: "/img1.jpg",
    alt: "Modern apartment exterior",
  },
  {
    src: "/img2.jpg",
    alt: "Luxury flat interior",
  },
  {
    src: "/img3.jpg",
    alt: "Premium apartment living room",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3500);
    };

    startCarousel();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleSlideChange = (direction) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    } else {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
    }
  };

  return (
    <section className="relative w-full overflow-hidden md:px-8 py-16 md:py-24">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: "linear-gradient(120deg, #7065f0 0%, #a8edea 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
          minHeight: "100%",
        }}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-4 md:px-0">
        {/* Hero Content */}
        <div className="flex-1 max-w-xl space-y-8 md:space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <Building2 className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">
                Dhaka's Leading Flat Rental Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Find Your Perfect Flat in Dhaka
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Discover premium flats and apartments in Dhaka's most sought-after
              neighborhoods.
              <span className="inline-block font-semibold px-3 py-1.5 rounded-lg bg-white/20 text-white backdrop-blur-sm mt-2">
                Zero Commission
              </span>
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <div className="p-2 bg-white/20 rounded-lg">
                <KeyRound className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-medium text-white">
                Verified Properties
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-medium text-white">
                Secure Rental Process
              </p>
            </div>
          </div>

          <PropertyButtons />
        </div>

        {/* Image Carousel */}
        <div className="flex-1 w-full max-w-lg">
          <Card className="shadow-2xl rounded-2xl overflow-hidden border-2 border-white/20 bg-white/90 backdrop-blur-sm group">
            <CardContent className="p-0 relative">
              <div className="relative h-72 md:h-96 overflow-hidden">
                {/* Carousel Images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      currentSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    )}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 85%, 75% 95%, 50% 100%, 25% 95%, 0 85%)",
                      }}
                    />
                  </div>
                ))}

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 left-4 -translate-y-1/2 z-20 shadow-lg bg-white/90 hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => handleSlideChange("prev")}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 z-20 shadow-lg bg-white/90 hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => handleSlideChange("next")}
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </Button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <Button
                      key={index}
                      variant={currentSlide === index ? "default" : "secondary"}
                      size="icon"
                      className={cn(
                        "rounded-full w-3 h-3 p-0 border border-white/30 transition-all duration-200",
                        currentSlide === index
                          ? "scale-110 bg-white"
                          : "opacity-60 bg-white/50"
                      )}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span className="sr-only">Go to slide {index + 1}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
