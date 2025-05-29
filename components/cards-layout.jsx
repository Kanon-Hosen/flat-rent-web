"use client";

import { useState, useEffect } from "react";
import PropertyCardV2 from "@/components/PropertyCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Search,
  SlidersHorizontal,
  Home,
  Building2,
  Building,
  Hotel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardsLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Property data with categories
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
      category: "apartment",
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
      category: "house",
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
      category: "villa",
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
      category: "apartment",
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
      category: "house",
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
      category: "villa",
    },
  ];

  const categories = [
    { id: "all", label: "All Properties", icon: Home },
    { id: "apartment", label: "Apartments", icon: Building },
    { id: "house", label: "Houses", icon: Building2 },
    { id: "villa", label: "Villas", icon: Hotel },
  ];

  const priceRanges = [
    { id: "all", label: "All Prices" },
    { id: "under-2000", label: "Under $2,000" },
    { id: "2000-3000", label: "$2,000 - $3,000" },
    { id: "over-3000", label: "Over $3,000" },
  ];

  const handleShowMore = (id) => {
    alert(`Showing more details about property ${id}!`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      selectedCategory === "all" || property.category === selectedCategory;
    const priceMatch =
      priceRange === "all" ||
      (priceRange === "under-2000" &&
        parseInt(property.price.replace(/,/g, "")) < 2000) ||
      (priceRange === "2000-3000" &&
        parseInt(property.price.replace(/,/g, "")) >= 2000 &&
        parseInt(property.price.replace(/,/g, "")) <= 3000) ||
      (priceRange === "over-3000" &&
        parseInt(property.price.replace(/,/g, "")) > 3000);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="container mt-9 mx-auto px-4 sm:px-8 py-8">
      {/* Header with Search and Filters */}
      <div className="flex flex-col gap-6 mb-8">
        <motion.h1
          className="text-3xl font-bold text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find Your Dream Home
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <motion.div
            className="relative w-full md:w-auto flex-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="text"
              placeholder="Search properties..."
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
              onClick={() => alert("Search functionality would go here!")}
            >
              <Search className="h-5 w-5" />
            </button>
          </motion.div>

          <div className="flex gap-4 w-full md:w-auto">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" />
                      {category.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.id} value={range.id}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <motion.div
        className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className="flex items-center gap-2"
            onClick={() => setSelectedCategory(category.id)}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </motion.div>

      {/* Property Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProperties.map((property) => (
          <motion.div
            key={property.id}
            variants={itemVariants}
            className="w-full max-w-sm"
          >
            <PropertyCardV2
              {...property}
              isLoading={isLoading}
              onShowMore={() => handleShowMore(property.id)}
            />
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
        <Button
          className="bg-primary text-white px-8 py-6 rounded-xl font-medium text-lg flex items-center gap-2 hover:bg-primary/90 transition-all duration-300"
          size="lg"
          onClick={() => alert("Browsing more flats!")}
        >
          Browse More Properties
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </motion.div>
    </div>
  );
}
