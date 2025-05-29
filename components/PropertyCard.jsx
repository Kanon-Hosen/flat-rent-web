"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BedDouble,
  Bath,
  Square,
  ExternalLink,
  Building,
  Building2,
  Hotel,
  MapPin,
  Calendar,
  Star,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function PropertyCardV2({
  id,
  imageUrl,
  price,
  priceUnit = "/month",
  name,
  address,
  beds,
  baths,
  area,
  areaUnit = "m²",
  category,
  onShowMore,
  isLoading = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Category configuration
  const categoryConfig = {
    apartment: {
      icon: Building,
      label: "Luxury Apartment",
      color: "bg-blue-100 text-blue-700",
    },
    house: {
      icon: Building2,
      label: "Modern House",
      color: "bg-green-100 text-green-700",
    },
    villa: {
      icon: Hotel,
      label: "Premium Villa",
      color: "bg-purple-100 text-purple-700",
    },
  };

  const currentCategory = categoryConfig[category] || categoryConfig.apartment;

  const handleExploreClick = (e) => {
    e.preventDefault();
    router.push(`/explore/${id}`);
  };

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
    );
  }

  return (
    <Card
      className={cn(
        "overflow-hidden max-w-sm w-full bg-white rounded-xl transition-all duration-300",
        isHovered
          ? "shadow-xl ring-2 ring-primary/20"
          : "shadow-md hover:shadow-lg"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Property Image */}
        <motion.div
          className="relative h-52 w-full overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={imageUrl || "/placeholder.svg?height=224&width=384"}
            alt={name}
            fill
            className={cn(
              "object-cover transition-all duration-500",
              isHovered && "filter brightness-[0.95]"
            )}
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={cn(
                "flex items-center gap-1 px-2 py-1 text-xs font-medium",
                currentCategory.color
              )}
            >
              <currentCategory.icon className="h-3.5 w-3.5" />
              {currentCategory.label}
            </Badge>
          </div>

          {/* Price Tag */}
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-black/80 text-white px-2 py-1 text-base font-semibold">
              ${price}
              <span className="text-xs font-normal ml-0.5">{priceUnit}</span>
            </Badge>
          </div>

          {/* Show More Button */}
          <motion.div
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="default"
              className="bg-black hover:bg-gray-800 text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-lg text-sm"
              onClick={handleExploreClick}
            >
              <span>Explore Property</span>
              <ExternalLink className="h-3.5 w-3.5" />
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

      <CardContent className="p-4 space-y-3">
        {/* Property Name and Rating */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 truncate max-w-[200px]">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1.5 rounded-md shrink-0">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-yellow-700">4.9</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
            <p className="text-sm truncate">Prime Location: {address}</p>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500 shrink-0">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>Available Now</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="flex flex-col items-center justify-center gap-0.5 p-2 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <BedDouble className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{beds}</span>
            </div>
            <span className="text-xs text-gray-500 text-center">
              Spacious Rooms
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-0.5 p-2 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Bath className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{baths}</span>
            </div>
            <span className="text-xs text-gray-500 text-center">
              Modern Bathrooms
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-0.5 p-2 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <Square className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
            <span className="text-xs text-gray-500 text-center">
              Living Space
            </span>
          </div>
        </div>

        {/* Status and Actions */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 min-w-0">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200 text-xs px-2 py-0.5 whitespace-nowrap"
            >
              Premium Property
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-0.5 whitespace-nowrap"
            >
              Featured
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80 hover:bg-primary/5 h-7 px-2 shrink-0"
          >
            <Heart className="h-3.5 w-3.5 mr-1" />
            <span className="whitespace-nowrap">Save to Wishlist</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
