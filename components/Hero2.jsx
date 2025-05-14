// components/Hero2.jsx

'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BadgeCheck, Home } from 'lucide-react'

export default function Hero2() {
  const [selected, setSelected] = useState('tenants')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Dynamic content
  const heading =
    selected === 'tenants'
      ? 'We make it easy for tenants.'
      : 'We make it easy for landlords.'
  const description =
    selected === 'tenants'
      ? 'Whether it’s finding a new rental, securing financing, or streamlining the process, we make it efficient. The best part? You’ll save money and time with our services.'
      : 'Whether it’s listing your property, finding tenants, or managing rentals, we make it efficient. The best part? You’ll save money and time with our services.'
  const buttonText =
    selected === 'tenants' ? 'Find Home' : 'Find Tenants'

  return (
    <motion.section
      ref={ref}
      className="w-full bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        {/* Left: big image with overlay cards */}
        <motion.div
          className="relative w-full aspect-[4/3] rounded-xl overflow-visible shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/flat.png"
            alt="Home"
            fill
            quality={100}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover rounded-3xl"
          />

          {/* Top-left badge */}
          <Card className="absolute top-[-16px] left-[-32px] shadow-lg w-48">
            <CardContent className="flex items-center gap-3 py-3 px-4">
              <BadgeCheck className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm font-semibold">Virtual home tour</p>
                <p className="text-xs text-muted-foreground">
                  We provide you with virtual tour
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom-right badge */}
          <Card className="absolute bottom-[-16px] right-[-32px] shadow-lg w-48">
            <CardContent className="flex items-center gap-3 py-3 px-4">
              <Home className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm font-semibold">Find the best deal</p>
                <p className="text-xs text-muted-foreground">
                  Browse thousands of properties
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: text, toggle & CTA */}
        <motion.div className="flex flex-col gap-6" whileHover={{ scale: 1.01 }}>
          {/* Custom Toggle */}
          <div className="flex border rounded-lg overflow-hidden w-fit">
            {['tenants', 'landlords'].map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  selected === opt
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {opt === 'tenants' ? 'For tenants' : 'For landlords'}
              </button>
            ))}
          </div>

          {/* Dynamic heading & description */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {heading}
          </h2>
          <p className="text-sm sm:text-base max-w-md text-gray-600">
            {description}
          </p>

          {/* Dynamic CTA button */}
          <Button className="w-fit">
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2">
              {buttonText}
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
