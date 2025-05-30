

"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Maximize,
  ChefHat,
  MapPin,
  Home,
  Mail,
  Star,
  Play,
  Zap,
  Camera,
  Users,
  Eye,
  MapIcon,
  Heart,
  Share2,
  Building,
  TreePine,
  Wifi,
  Car,
  ShieldCheck,
  Gamepad2,
  Music,
  Dumbbell,
  Waves,
  CookingPotIcon as KitchenIcon,
  Wind,
  Coffee,
  Tv,
  Flame,
  Snowflake,
  Computer,
  Utensils,
  Sofa,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// Mock property data
const propertyData = {
  id: "123",
  title: "Luxury 3-Bedroom Apartment with Ocean View",
  rentBDT: "৳3,52,000",
  period: "month",
  location: "Gulshan 2, Dhaka, Bangladesh",
  images: [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ],
  stats: {
    bedrooms: 3,
    bathrooms: 2,
    verandas: 2,
    kitchens: 1,
    diningRooms: 1,
    drawingRooms: 1,
    totalSize: "1,850 sq ft",
  },
  description: `
    <div class="space-y-4">
      <p>Experience luxury living in this stunning 3-bedroom apartment located in the heart of Gulshan 2. This modern residence offers breathtaking views and premium amenities that cater to your every need.</p>
      
      <p>The spacious living area features floor-to-ceiling windows that flood the space with natural light, creating an airy and welcoming atmosphere. The open-plan design seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining.</p>
      
      <p>Each bedroom is thoughtfully designed with built-in wardrobes and large windows. The master suite includes an en-suite bathroom with premium fixtures and a private balcony overlooking the city skyline.</p>
      
      <p>The modern kitchen is equipped with high-end appliances, granite countertops, and ample storage space. The apartment also features a dedicated dining area and comfortable verandas perfect for morning coffee or evening relaxation.</p>
      
      <p>Located in one of Dhaka's most prestigious neighborhoods, you'll have easy access to shopping centers, restaurants, schools, and major business districts. The building offers 24/7 security, elevator access, and dedicated parking.</p>
    </div>
  `,
  amenities: [
    { name: "High-Speed Wi-Fi", icon: Wifi, color: "blue" },
    { name: "Parking Space", icon: Car, color: "green" },
    { name: "Air Conditioning", icon: Wind, color: "cyan" },
    { name: "Washing Machine", icon: Waves, color: "blue" },
    { name: "Modern Kitchen", icon: KitchenIcon, color: "orange" },
    { name: "Gym Access", icon: Dumbbell, color: "red" },
    { name: "24/7 Security", icon: ShieldCheck, color: "green" },
    { name: "Rooftop Cafe", icon: Coffee, color: "amber" },
    { name: "Smart TV", icon: Tv, color: "purple" },
    { name: "Heating System", icon: Flame, color: "red" },
    { name: "Refrigerator", icon: Snowflake, color: "blue" },
    { name: "High-Speed Internet", icon: Computer, color: "yellow" },
    { name: "Gaming Zone", icon: Gamepad2, color: "indigo" },
    { name: "Music System", icon: Music, color: "pink" },
    { name: "Garden Area", icon: TreePine, color: "green" },
    { name: "Building Elevator", icon: Building, color: "gray" },
  ],
  coordinates: {
    lat: 23.7808875,
    lng: 90.4142273,
  },
  ownerId: "owner-456",
  owner: {
    name: "Sarah Johnson",
    profileImage: "/placeholder.svg?height=80&width=80",
  },
}
const colorClasses = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  green: "bg-green-50 text-green-700 border-green-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-red-50 text-red-700 border-red-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  pink: "bg-pink-50 text-pink-700 border-pink-200",
  gray: "bg-gray-50 text-gray-700 border-gray-200",
}
export default function PropertyDetailsPage() {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [viewCount, setViewCount] = useState(247)
  useEffect(() => {
    const timer = setTimeout(() => {
      setViewCount((prev) => prev + 1)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === propertyData.images.length - 1 ? 0 : prev + 1))
  }
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? propertyData.images.length - 1 : prev - 1))
  }
  const handleContactOwner = () => {
    router.push(`/owner/${propertyData.ownerId}`)
  }
  const loadMap = () => {
    setMapLoaded(true)
  }
  const handleLike = () => {
    setIsLiked(!isLiked)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Listings</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                <Eye className="h-4 w-4" />
                <span className="font-medium">{viewCount} views</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className={`transition-colors duration-200 ${isLiked ? "bg-red-50 border-red-200 text-red-600" : ""}`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                {isLiked ? "Saved" : "Save"}
              </Button>
              <Button variant="outline" size="sm" className="transition-colors duration-200 hover:bg-blue-50">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        {/* Image Carousel */}
        <Card className="overflow-hidden mb-6 shadow-md">
          <div className="relative aspect-[16/10] bg-gray-200">
            <Image
              src={propertyData.images[currentImageIndex] || "/placeholder.svg"}
              alt={`Property image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
            {/* Desktop Arrow Controls */}
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              <Camera className="inline h-4 w-4 mr-1" />
              {currentImageIndex + 1} / {propertyData.images.length}
            </div>
            {/* Mobile Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 md:hidden">
              {propertyData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
            {/* View All Photos Button */}
            <button className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              <Eye className="inline h-4 w-4 mr-1" />
              View All Photos
            </button>
          </div>
        </Card>
        {/* Property Statistics */}
        <Card className="mb-6 shadow-md">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                  <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-blue-600">{propertyData.stats.bedrooms}</p>
                  <p className="text-xs text-gray-600">Bedrooms</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                  <Bath className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-green-600">{propertyData.stats.bathrooms}</p>
                  <p className="text-xs text-gray-600">Bathrooms</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
                  <Maximize className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-purple-600">{propertyData.stats.verandas}</p>
                  <p className="text-xs text-gray-600">Verandas</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                  <ChefHat className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-orange-600">{propertyData.stats.kitchens}</p>
                  <p className="text-xs text-gray-600">Kitchen</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-pink-100 p-2 sm:p-3 rounded-lg">
                  <Utensils className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-pink-600">{propertyData.stats.diningRooms}</p>
                  <p className="text-xs text-gray-600">Dining</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="bg-teal-100 p-2 sm:p-3 rounded-lg">
                  <Sofa className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-teal-600">{propertyData.stats.drawingRooms}</p>
                  <p className="text-xs text-gray-600">Drawing</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 col-span-2 sm:col-span-1">
                <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg">
                  <Home className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-indigo-600">{propertyData.stats.totalSize}</p>
                  <p className="text-xs text-gray-600">Total Size</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Title, Price & Location */}
        <div className="space-y-4 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{propertyData.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-2xl sm:text-3xl font-bold text-green-600">
              {propertyData.rentBDT}
              <span className="text-base sm:text-lg text-gray-600 font-normal">/{propertyData.period}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-red-500" />
              <span className="text-base sm:text-lg font-medium">{propertyData.location}</span>
            </div>
          </div>
        </div>
        {/* Description */}
        <Card className="mb-6 shadow-md">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-blue-600">
              <Users className="h-6 w-6 mr-3" />
              Property Description
            </h2>
            <div
              className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: propertyData.description }}
            />
          </CardContent>
        </Card>
        {/* Amenities */}
        <Card className="mb-6 shadow-md">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center text-yellow-600">
              <Star className="h-6 w-6 mr-3" />
              Amenities & Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {propertyData.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors duration-200 hover:shadow-sm ${
                    colorClasses[amenity.color]
                  }`}
                >
                  <amenity.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Map and Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Google Map */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-green-600">
                  <MapIcon className="h-6 w-6 mr-3" />
                  Location & Neighborhood
                </h2>
                <div className="aspect-[16/9] rounded-lg overflow-hidden">
                  {!mapLoaded ? (
                    <div
                      onClick={loadMap}
                      className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center cursor-pointer hover:from-blue-200 hover:to-green-200 transition-colors duration-300"
                    >
                      <div className="bg-white rounded-full p-6 shadow-lg">
                        <Play className="h-12 w-12 text-blue-600" />
                      </div>
                      <p className="mt-4 text-lg font-semibold text-gray-700">Click to Load Interactive Map</p>
                      <p className="text-sm text-gray-500 mt-2 text-center px-4">
                        View exact location and nearby amenities
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0977!2d${propertyData.coordinates.lng}!3d${propertyData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzUxLjIiTiA5MMKwMjQnNTEuMiJF!5e0!3m2!1sen!2sbd!4v1234567890123`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Property Location"
                      className="rounded-lg"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Owner Profile */}
            <Card className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={propertyData.owner.profileImage || "/placeholder.svg"}
                    alt={propertyData.owner.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover ring-2 ring-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">{propertyData.owner.name}</h3>
                    <p className="text-sm text-gray-600">Property Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Contact Owner */}
            <Card className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <Button
                  onClick={handleContactOwner}
                  className="w-full text-base py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  size="lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Owner
                </Button>
              </CardContent>
            </Card>
            {/* Quick Stats */}
            <Card className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-blue-600">
                  <Home className="h-5 w-5 mr-2" />
                  Quick Details
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Monthly Rent", value: propertyData.rentBDT, icon: "৳" },
                    { label: "Total Size", value: propertyData.stats.totalSize, icon: "📐" },
                    { label: "Bedrooms", value: propertyData.stats.bedrooms, icon: "🛏️" },
                    { label: "Bathrooms", value: propertyData.stats.bathrooms, icon: "🚿" },
                    { label: "Verandas", value: propertyData.stats.verandas, icon: "🌿" },
                    { label: "Kitchen", value: propertyData.stats.kitchens, icon: "👨‍🍳" },
                    { label: "Dining Room", value: propertyData.stats.diningRooms, icon: "🍽️" },
                    { label: "Drawing Room", value: propertyData.stats.drawingRooms, icon: "🛋️" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-600 flex items-center text-sm">
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </span>
                      <span className="font-semibold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Featured Amenities */}
            <Card className="shadow-md">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-yellow-600">
                  <Zap className="h-5 w-5 mr-2" />
                  Key Features
                </h3>
                <div className="space-y-2">
                  {propertyData.amenities.slice(0, 8).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <amenity.icon className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}