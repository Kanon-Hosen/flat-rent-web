"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { BedDouble, Bath, Square, ExternalLink } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function PropertyCardV2({
  imageUrl,
  price,
  priceUnit = "/month",
  name,
  address,
  beds,
  baths,
  area,
  areaUnit = "m²",
  onShowMore,
  isLoading = false,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleShowMore = () => {
    setIsClicked(true)

    // Visual feedback before executing callback
    setTimeout(() => {
      setIsClicked(false)
      if (onShowMore) {
        onShowMore()
      }
    }, 300)
  }

  // Loading skeleton state
  if (isLoading) {
    return (
      <Card className="overflow-hidden max-w-sm w-full bg-white rounded-xl shadow-md">
        <div className="relative h-56 w-full bg-gray-200">
          <Skeleton className="h-full w-full" />
        </div>
        <CardContent className="p-4 space-y-3">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center gap-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card
      className={cn(
        "overflow-hidden max-w-sm w-full bg-white rounded-xl transition-all duration-300",
        isHovered ? "shadow-xl ring-2 ring-purple-200" : "shadow-md hover:shadow-lg",
        isClicked && "scale-98",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Property Image */}
        <motion.div
          className="relative h-56 w-full overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={imageUrl || "/placeholder.svg?height=224&width=384"}
            alt={name}
            fill
            className={cn("object-cover transition-all duration-500", isHovered && "filter brightness-[0.95]")}
          />

          {/* Show More Button */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="default"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg"
              onClick={handleShowMore}
            >
              <span>Show more</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Dark overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <CardContent className="p-5 transition-all duration-300">
        {/* Price */}
        <motion.p
          className="text-primary text-2xl font-bold"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          ${price}
          <span className="text-sm font-normal">{priceUnit}</span>
        </motion.p>

        {/* Property Name */}
        <h3 className="text-xl font-bold text-gray-900 mt-1 transition-all duration-300">{name}</h3>

        {/* Address */}
        <p className="text-gray-500 text-sm mt-1">{address}</p>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center gap-4">
        {/* Property Details */}
        <motion.div
          className="flex items-center gap-1 text-gray-600 transition-all duration-200"
          whileHover={{ scale: 1.05, color: "#9333ea" }}
        >
          <BedDouble className="h-5 w-5 text-primary" />
          <span className="text-sm">{beds} Beds</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-1 text-gray-600 transition-all duration-200"
          whileHover={{ scale: 1.05, color: "#9333ea" }}
        >
          <Bath className="h-5 w-5 text-primary" />
          <span className="text-sm">{baths} Bathrooms</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-1 text-gray-600 transition-all duration-200"
          whileHover={{ scale: 1.05, color: "#9333ea" }}
        >
          <Square className="h-5 w-5 text-primary" />
          <span className="text-sm">
            {area}×{areaUnit}
          </span>
        </motion.div>
      </CardFooter>
    </Card>
  )
}
