"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Home } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useState } from "react"

export default function Footer() {
  const [activeLink, setActiveLink] = useState(null)

  const handleLinkClick = (link) => {
    setActiveLink(link)
    setTimeout(() => setActiveLink(null), 500)
  }

  const footerLinks = {
    "Rent a Flat": ["Browse listings", "Pricing", "Reviews", "Success stories"],
    "Buy a Flat": ["Search properties", "Financing options"],
    Services: ["Property management", "Tenant screening", "Rental assistance"],
    About: ["Company", "How it works", "Contact", "Investors"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    Resources: ["Blog", "Guides", "FAQ", "Help Center"],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="w-full py-8 bg-white border-t">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Logo */}
          <motion.div className="col-span-2 md:col-span-3 lg:col-span-1" variants={item}>
            <Link href="/" className="flex items-center group">
              <div className="h-8 w-8 rounded-md bg-purple-600 flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-purple-700">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                Tenord
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Your trusted partner for renting and buying premium flats in the best locations.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div key={category} className="col-span-1" variants={item}>
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href="#"
                            className={`text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm relative ${activeLink === link ? "text-purple-600 font-medium" : ""}`}
                            onClick={() => handleLinkClick(link)}
                          >
                            <span className="relative">
                              {link}
                              <span
                                className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 ${activeLink === link ? "w-full" : "group-hover:w-full"}`}
                              />
                            </span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Explore {link.toLowerCase()}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="my-6" />

        {/* Bottom section with copyright and social icons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-500 text-xs">©2025 Tenord. All rights reserved</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Instagram, name: "Instagram" },
              { icon: Twitter, name: "Twitter" },
              { icon: Linkedin, name: "LinkedIn" },
            ].map((social) => (
              <HoverCard key={social.name}>
                <HoverCardTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2">
                  <p className="text-xs">Follow us on {social.name}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
