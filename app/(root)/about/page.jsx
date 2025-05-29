"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Home,
  Users,
  Award,
  Heart,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Properties Listed", value: "500+" },
    { label: "Happy Clients", value: "1000+" },
    { label: "Years Experience", value: "10+" },
    { label: "Cities Covered", value: "25+" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client First",
      description:
        "We prioritize our clients' needs and satisfaction above everything else.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your security and trust are our top priorities in every transaction.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service delivery.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/flat 3.jpeg",
      bio: "With over 15 years of experience in real estate, Sarah leads our company with vision and passion.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/flat 2.jpeg",
      bio: "Michael ensures smooth operations and exceptional service delivery across all departments.",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Property Consultant",
      image: "/flat 3.jpeg",
      bio: "Emily brings expertise in property valuation and market analysis to help clients make informed decisions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/flat 3.jpeg"
            alt="About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-1">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Transforming the way people find their perfect home through
            innovation and trust
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl">
                    Our Mission
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Making property search and rental process seamless and
                    enjoyable
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">
                    We are dedicated to making the property search and rental
                    process seamless, transparent, and enjoyable for everyone.
                    Our platform combines cutting-edge technology with
                    personalized service to help you find your perfect home.
                  </p>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-gray-600">
                        Providing access to quality properties across prime
                        locations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-gray-600">
                        Making home finding process simple and stress-free
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-gray-600">
                        Building lasting relationships with our clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/flat 2.jpeg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver
              exceptional service to our clients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to helping you
              find your perfect property
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-primary border-none">
              <CardContent className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied clients who found their perfect
                  property through our platform
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
