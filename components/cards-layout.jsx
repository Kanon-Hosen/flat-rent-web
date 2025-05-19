"use client"

import { useState, useEffect } from "react"
import PropertyCardV2 from "@/components/PropertyCard"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CardsLayout() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Property data with an additional row
  const properties = [
    // First row
    {
      id: 1,
      imageUrl: "/flat 3.jpeg",
      price: "2,095",
      name: "goriber bari 1",
      address: "borolok 1 er barir pase",
      beds: 3,
      baths: 2,
      area: "5x7",
    },
    {
      id: 2,
      imageUrl: "/flat 2.jpeg",
      price: "1,850",
      name: "goriber bari 2",
      address: "borolok 2 er barir pase",
      beds: 2,
      baths: 2,
      area: "6x7",
    },
    {
      id: 3,
      imageUrl: "/flat 3.jpeg",
      price: "2,700",
      name: "goriber bari 3",
      address: "borolok 3 er barir pase",
      beds: 4,
      baths: 3,
      area: "8x10",
    },
    // Second row
    {
      id: 4,
      imageUrl: "/flat 3.jpeg",
      price: "3,200",
      name: "goriber bari 4",
      address: "borolok 4 er barir pase",
      beds: 5,
      baths: 3,
      area: "9x12",
    },
    {
      id: 5,
      imageUrl: "/flat 2.jpeg",
      price: "1,950",
      name: "goriber bari 5",
      address: "borolok 5 er barir pase",
      beds: 2,
      baths: 1,
      area: "4x6",
    },
    {
      id: 6,
      imageUrl: "/flat 3.jpeg",
      price: "2,450",
      name: "goriber bari 6",
      address: "borolok 6 er barir pase",
      beds: 3,
      baths: 2,
      area: "7x8",
    },
  ]

  const handleShowMore = (id) => {
    alert(`Showing more details about property ${id}!`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container mt-9 mx-auto px-4 py-8">
      {/* Header with Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <motion.h1
          className="text-3xl font-bold text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Your Home
        </motion.h1>

        <motion.div
          className="relative w-full md:w-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            type="text"
            placeholder="Search properties..."
            className="pl-10 pr-4 py-2 w-full md:w-64 lg:w-80 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
            onClick={() => alert("Search functionality would go here!")}
          >
            <Search className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Property Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {properties.map((property) => (
          <motion.div key={property.id} variants={itemVariants}>
            <PropertyCardV2 {...property} isLoading={isLoading} onShowMore={() => handleShowMore(property.id)} />
          </motion.div>
        ))}
      </motion.div>

      {/* Browse More Flats Button */}
      <motion.div
        className="flex justify-center mt-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button
          className="bg-primary text-white px-8 py-4 rounded-md font-medium text-lg flex items-center gap-2 hover:bg-gray-800 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => alert("Browsing more flats!")}
        >
          Browse More Flats
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}
