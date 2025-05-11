"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("")

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? "" : item)
    setIsMenuOpen(false)
    if (item === "seller" || item === "buyer") {
      alert("Please sign up to access this feature")
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f5f4ff] shadow-sm transition-shadow hover:shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#7065f0] text-white transition-all duration-300 group-hover:bg-[#5a4fd1] group-hover:shadow-lg">
            <Home className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#1e293b] transition-colors duration-300 group-hover:text-[#7065f0]">
            Tenord
          </span>
        </Link>

        {/* Desktop / Tablet Nav (lg and up) */}
        <div className="hidden lg:flex flex-wrap items-center gap-8">
          {["rent", "buy"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={cn(
                "relative px-2 py-1 text-[#1e293b] transition-colors duration-300 hover:text-[#7065f0] text-sm md:text-base lg:text-lg",
                activeItem === item && "text-[#7065f0]"
              )}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 bg-[#7065f0] transition-all duration-300",
                  activeItem === item ? "w-full" : "hover:w-full"
                )}
              />
            </Link>
          ))}

          {["seller", "buyer"].map((item) => (
            <button
              key={item}
              className={cn(
                "relative px-2 py-1 text-[#1e293b] transition-colors duration-300 hover:text-[#7065f0] text-sm md:text-base lg:text-lg",
                activeItem === item && "text-[#7065f0]"
              )}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} Dashboard
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 bg-[#7065f0] transition-all duration-300",
                  activeItem === item ? "w-full" : "hover:w-full"
                )}
              />
            </button>
          ))}
        </div>

        {/* Auth Buttons + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="outline"
            className="border-[#7065f0] text-[#1e293b] text-sm md:text-base transition-all duration-300 hover:bg-[#2dd4bf] hover:border-[#2dd4bf] hover:text-white active:scale-95"
          >
            Login
          </Button>
          <Button className="bg-[#7065f0] text-white text-sm md:text-base transition-all duration-300 hover:bg-[#5a4fd1] active:scale-95">
            Sign up
          </Button>

          {/* Hamburger on lg-down */}
          <button
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-md text-[#1e293b] transition-colors duration-300 hover:bg-[#7065f0] hover:text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (below lg) */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-64 bg-white p-6 shadow-xl transform transition-transform duration-300 lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isMenuOpen}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-900"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col space-y-6 pt-16">
          {["rent", "buy"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={cn(
                "text-lg font-medium text-[#1e293b] transition-colors duration-300 hover:text-[#7065f0] md:text-xl",
                activeItem === item && "text-[#7065f0]"
              )}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {["seller", "buyer"].map((item) => (
            <button
              key={item}
              className={cn(
                "text-left text-lg font-medium text-[#1e293b] transition-colors duration-300 hover:text-[#7065f0] md:text-xl",
                activeItem === item && "text-[#7065f0]"
              )}
              onClick={() => handleItemClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)} Dashboard
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
    </nav>
)
}
