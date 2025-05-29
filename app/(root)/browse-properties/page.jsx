"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropertyCardV2 from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import {
  Search,
  SlidersHorizontal,
  Home,
  Building2,
  Building,
  Hotel,
  MapPin,
  DollarSign,
  BedDouble,
  Bath,
  Square,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export default function BrowseProperties() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [beds, setBeds] = useState("any");
  const [baths, setBaths] = useState("any");
  const [showFilters, setShowFilters] = useState(false);

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
      name: "Luxury Apartment in City Center",
      address: "123 Main Street, Downtown",
      beds: 3,
      baths: 2,
      area: "5x7",
      category: "apartment",
    },
    {
      id: 2,
      imageUrl: "/flat 2.jpeg",
      price: "1,850",
      name: "Modern House with Garden",
      address: "456 Park Avenue, Suburbs",
      beds: 2,
      baths: 2,
      area: "6x7",
      category: "house",
    },
    {
      id: 3,
      imageUrl: "/flat 3.jpeg",
      price: "2,700",
      name: "Premium Villa with Pool",
      address: "789 Beach Road, Waterfront",
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
      name: "Penthouse Suite",
      address: "321 Sky Tower, Business District",
      beds: 5,
      baths: 3,
      area: "9x12",
      category: "apartment",
    },
    {
      id: 5,
      imageUrl: "/flat 2.jpeg",
      price: "1,950",
      name: "Cozy Family Home",
      address: "654 Oak Street, Residential Area",
      beds: 2,
      baths: 1,
      area: "4x6",
      category: "house",
    },
    {
      id: 6,
      imageUrl: "/flat 3.jpeg",
      price: "2,450",
      name: "Luxury Villa Estate",
      address: "987 Hillside Drive, Uptown",
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

  const bedOptions = [
    { value: "any", label: "Any" },
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
    { value: "5", label: "5+" },
  ];

  const bathOptions = [
    { value: "any", label: "Any" },
    { value: "1", label: "1+" },
    { value: "2", label: "2+" },
    { value: "3", label: "3+" },
    { value: "4", label: "4+" },
  ];

  const filteredProperties = properties.filter((property) => {
    const categoryMatch =
      selectedCategory === "all" || property.category === selectedCategory;
    const priceMatch =
      parseInt(property.price.replace(/,/g, "")) >= priceRange[0] &&
      parseInt(property.price.replace(/,/g, "")) <= priceRange[1];
    const bedsMatch =
      beds === "any" || parseInt(property.beds) >= parseInt(beds);
    const bathsMatch =
      baths === "any" || parseInt(property.baths) >= parseInt(baths);
    return categoryMatch && priceMatch && bedsMatch && bathsMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col gap-6 mb-8">
        <motion.h1
          className="text-3xl font-bold text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse Properties
        </motion.h1>

        {/* Search and Filter Bar */}
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
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors duration-200"
              onClick={() => alert("Search functionality would go here!")}
            >
              <Search className="h-5 w-5" />
            </button>
          </motion.div>

          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Category Pills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
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
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Filter Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">Price Range</h3>
                  </div>
                  <Slider
                    defaultValue={priceRange}
                    max={5000}
                    step={100}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Beds */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">Bedrooms</h3>
                  </div>
                  <Select value={beds} onValueChange={setBeds}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select beds" />
                    </SelectTrigger>
                    <SelectContent>
                      {bedOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Baths */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">Bathrooms</h3>
                  </div>
                  <Select value={baths} onValueChange={setBaths}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select baths" />
                    </SelectTrigger>
                    <SelectContent>
                      {bathOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">Property Type</h3>
                  </div>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
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
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredProperties.length} properties
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Property Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {filteredProperties.map((property) => (
          <motion.div
            key={property.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="w-full max-w-sm"
          >
            <PropertyCardV2 {...property} isLoading={isLoading} />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {filteredProperties.length > 0 && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            className="bg-primary text-white px-8 py-6 rounded-xl font-medium text-lg flex items-center gap-2 hover:bg-primary/90 transition-all duration-300"
            size="lg"
            onClick={() => alert("Loading more properties!")}
          >
            Load More Properties
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
      )}

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Properties Found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to find what you're looking for.
          </p>
        </motion.div>
      )}
    </div>
  );
}
