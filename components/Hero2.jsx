// components/Hero2.jsx

"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Home } from "lucide-react";

const content = {
  tenants: {
    heading: "Find Your Perfect Flat in Dhaka",
    description:
      "Browse through our extensive collection of flats and apartments. From affordable studios to premium penthouses, find your ideal home in Dhaka's best neighborhoods. Enjoy zero commission and instant property viewing.",
    buttonText: "Find Flats",
    icon: BadgeCheck,
    badgeTitle: "Verified Flats",
    badgeDescription: "All properties are verified",
  },
  landlords: {
    heading: "Rent Out Your Flat Easily",
    description:
      "List your flat on Dhaka's fastest-growing rental platform. We handle property verification, tenant screening, and secure payments. Get your flat rented quickly with our extensive network of verified tenants.",
    buttonText: "List Flat",
    icon: Home,
    badgeTitle: "Quick Rental",
    badgeDescription: "Find tenants fast",
  },
};

export default function Hero2() {
  const [selected, setSelected] = useState("tenants");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentContent = content[selected];

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
        {/* Left: Image with overlay cards */}
        <motion.div
          className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {/* Main Image with Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent" />
          <Image
            src="/flat.png"
            alt="Modern apartment interior"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BadgeCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Verified Flats
                      </p>
                      <p className="text-xs text-gray-600">
                        All properties are verified
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-primary">1000+</p>
                <p className="text-xs text-gray-600">Active Listings</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Home className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Quick Rental
                      </p>
                      <p className="text-xs text-gray-600">Find tenants fast</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-primary">24/7</p>
                <p className="text-xs text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content section */}
        <motion.div
          className="flex flex-col gap-8 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Toggle Buttons */}
          <div className="flex border border-gray-200 rounded-xl overflow-hidden w-fit bg-white shadow-sm">
            {Object.keys(content).map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  selected === opt
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {opt === "tenants" ? "Looking to Rent" : "Want to List"}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {currentContent.heading}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            className="w-fit bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            size="lg"
          >
            {currentContent.buttonText}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
