"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
// import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animated-wrapper"
// import { motion, AnimatePresence } from "framer-motion"

const galleryProjects = [
  {
    id: "nondon-estate",
    name: "Nondon Estate",
    description: "Luxury residential development with modern amenities",
    status: "Multiple Phases",
    vision: [
      {
        image: "/images/3d-renders/3D RENDER 4  BEDROOM DUPLEX PHASE 3.jpeg",
        title: "Modern Duplex Design",
        description: "Contemporary architectural excellence",
      },
      {
        image: "/images/3d-renders/3D RENDER SMART HOME (1).jpg",
        title: "Smart Home Innovation",
        description: "Technology-enabled luxury living",
      },
      {
        image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
        title: "Aerial View Design",
        description: "Overall estate visualization",
      },
    ],
    reality: [
      {
        image: "/images/phases/phase-1.jpg",
        title: "Phase 1 Completion",
        description: "Successfully delivered luxury homes",
      },
      {
        image: "/images/phases/PHASE 3/PHASE 3 (1).jpg",
        title: "Phase 3 Real Construction",
        description: "4 & 5-bedroom luxury duplexes under construction",
      },
      {
        image: "/images/phases/PHASE 3/PHASE 3 (2).jpg",
        title: "Phase 3 Progress",
        description: "Active construction in progress",
      },
    ],
  },
  {
    id: "nondon-apartments",
    name: "Nondon Luxury Apartments",
    description: "Premium serviced apartments with smart home technology",
    status: "Ongoing Construction",
    vision: [
      {
        image: "/images/3d-renders/nondon-apartments-3d.jpeg",
        title: "Luxury Apartment Exterior Design",
        description: "Modern architectural visualization",
      },
      {
        image: "/images/3d-renders/nondon-apartments-3d.jpeg",
        title: "3D Apartment Complex View",
        description: "Multi-story apartment development",
      },
      {
        image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
        title: "3D Aerial Apartment View",
        description: "Bird's eye view of luxury apartments",
      },
    ],
    reality: [
      {
        image: "/images/apartments/APARTMENTS (1).jpg",
        title: "Real Apartment Interior",
        description: "Actual luxury living space",
      },
      {
        image: "/images/apartments/APARTMENTS (2).jpg",
        title: "Completed Living Spaces",
        description: "Real apartment layouts",
      },
      {
        image: "/images/apartments/APARTMENTS (3).jpg",
        title: "Apartment Construction Progress",
        description: "Multi-story development in progress",
      },
      {
        image: "/images/apartments/APARTMENTS (4).jpg",
        title: "Interior Finishing",
        description: "Premium quality construction",
      },
      {
        image: "/images/apartments/APARTMENTS (5).jpg",
        title: "Amenity Areas",
        description: "Luxury common facilities",
      },
    ],
  },
  {
    id: "smart-homes",
    name: "Nondon Smart Homes",
    description: "Fully automated luxury homes with cutting-edge technology",
    status: "Sales Ongoing - ₦235M-₦250M",
    vision: [
      {
        image: "/images/3d-renders/3D RENDER SMART HOME (1).jpg",
        title: "Smart Home Exterior",
        description: "Modern automated luxury living",
      },
      {
        image: "/images/3d-renders/3D RENDER SMART HOME (2).jpg",
        title: "Smart Technology Integration",
        description: "Voice-controlled home automation",
      },
      {
        image: "/images/3d-renders/3D RENDER SMART HOME (3).jpg",
        title: "Luxury Interior Design",
        description: "Premium smart home finishes",
      },
    ],
    reality: [
      {
        image: "/images/smart-homes/nodon-smart-homes-9.jpeg",
        title: "Smart Home Construction",
        description: "Active development progress",
      },
    ],
  },
  {
    id: "bungalows",
    name: "Nondon Almonds Bungalows",
    description: "Premium luxury bungalows in Centenary City, Enugu",
    status: "Now Selling - ₦135M",
    vision: [
      {
        image: "/images/bungalows/BUNGALOW (1).jpg",
        title: "Luxury Bungalow Design",
        description: "Elegant single-story living",
      },
      {
        image: "/images/bungalows/BUNGALOW (2).jpg",
        title: "Premium Finishing",
        description: "State-of-the-art kitchen and bathrooms",
      },
      {
        image: "/images/bungalows/BUNGALOW (3).jpg",
        title: "Modern Architecture",
        description: "Contemporary bungalow aesthetics",
      },
    ],
    reality: [
      {
        image: "/images/bungalows/BUNGALOWS (1).PNG",
        title: "Bungalow Construction",
        description: "Active development progress",
      },
      {
        image: "/images/bungalows/BUNGALOWS (2).PNG",
        title: "Interior Finishing",
        description: "Premium quality construction",
      },
      {
        image: "/images/bungalows/BUNGALOWS (3).PNG",
        title: "Exterior Completion",
        description: "Final construction stages",
      },
    ],
  },
  {
    id: "nondon-crest-luxury",
    name: "Nondon Crest Luxury",
    description: "Premium luxury development coming soon to Enugu",
    status: "Coming Soon",
    vision: [
      {
        image: "/images/coming-soon/coming-soon-1.jpg",
        title: "Nondon Crest Luxury",
        description: "Premium luxury development coming soon to Enugu",
      },
    ],
    reality: [
      {
        image: "/images/coming-soon/coming-soon-1.jpg",
        title: "Site Planning",
        description: "Development planning and site preparation",
      },
    ],
  },
  {
    id: "nondon-luxury-apartment-asaba",
    name: "Nondon Luxury Apartment Asaba",
    description: "Expanding our luxury apartment offerings to Asaba",
    status: "Coming Soon",
    vision: [
      {
        image: "/images/coming-soon/coming-soon-2.jpg",
        title: "Nondon Luxury Apartment Asaba",
        description: "Expanding our luxury apartment offerings to Asaba",
      },
    ],
    reality: [
      {
        image: "/images/coming-soon/coming-soon-2.jpg",
        title: "Location Assessment",
        description: "Strategic location planning in Asaba, Delta State",
      },
    ],
  },
]

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [activeTab, setActiveTab] = useState<"vision" | "reality">("vision")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const currentProject = galleryProjects[selectedProject]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/3d-renders/nondon-real-estate-3d-aerial.jpeg"
            alt="Nondon Real Estate Gallery"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-amber-900/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 sm:px-8 max-w-5xl mx-auto">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* Luxury Brand Accent */}
              <div className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm font-light tracking-widest uppercase backdrop-blur-sm bg-white/10 mb-8">
                Project Gallery
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-6">
                <span className="font-thin whitespace-nowrap">Witness the transformation from</span>
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Vision to Reality
                </span>
              </h1>
              
              {/* Elegant Divider */}
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8"></div>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-balance opacity-90 max-w-4xl mx-auto font-light">
                Explore our projects through detailed 3D renders and actual construction progress. 
                See how we bring architectural visions to life.
              </p>
              
              {/* Vision vs Reality Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Vision (3D Renders)</span>
              </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Reality (Construction)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryProjects.map((project, index) => (
              <div key={project.id} className="animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedProject === index ? "ring-2 ring-red-500 shadow-lg" : ""
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <Badge className="bg-red-100 text-red-700 border-red-200">{project.status}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision vs Reality Toggle */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentProject.name}</h2>
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border hover:scale-105 transition-transform duration-200">
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "vision" ? "bg-blue-500 text-white shadow-sm" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                The Vision (3D Renders)
              </button>
              <button
                onClick={() => setActiveTab("reality")}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "reality" ? "bg-green-500 text-white shadow-sm" : "text-gray-600 hover:text-green-600"
                }`}
              >
                The Reality (Construction)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "vision" ? currentProject.vision : currentProject.reality).map((item, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    activeTab === "vision" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                  }`}
                >
                  {activeTab === "vision" ? "Vision" : "Reality"}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Stats */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">From Vision to Reality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fadeInUp" style={{animationDelay: '100ms'}}>
              <div className="text-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-2 animate-scaleIn" style={{animationDelay: '200ms'}}>
                  8+
                </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            </div>
            <div className="animate-fadeInUp" style={{animationDelay: '100ms'}}>
              <div className="text-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-2 animate-scaleIn" style={{animationDelay: '400ms'}}>
                  500+
                </div>
              <div className="text-gray-600">Properties Delivered</div>
            </div>
            </div>
            <div className="animate-fadeInUp" style={{animationDelay: '100ms'}}>
              <div className="text-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-bold text-red-600 mb-2 animate-scaleIn" style={{animationDelay: '600ms'}}>
                  100%
                </div>
              <div className="text-gray-600">Vision Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Ready to Turn Your Vision into Reality?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-balance">
            Experience the Nondon difference. From concept to completion, we deliver exactly what we promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="animate-fadeInUp hover:scale-105 active:scale-95 transition-transform duration-200">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            </div>
            <div className="animate-fadeInUp hover:scale-105 active:scale-95 transition-transform duration-200">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-200 text-red-600 hover:bg-red-50 px-8 bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
