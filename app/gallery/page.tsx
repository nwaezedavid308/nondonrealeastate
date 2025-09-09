"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const galleryProjects = [
  {
    id: "nondon-estate",
    name: "Nondon Estate",
    description: "Luxury residential development with modern amenities",
    status: "Multiple Phases",
    vision: [
      {
        image: "/images/3d-renders/nondon-real-estate-3d-6.jpeg",
        title: "Modern Townhouse Design",
        description: "Contemporary architectural vision",
      },
      {
        image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
        title: "Residential Complex Overview",
        description: "Complete estate development plan",
      },
      {
        image: "/images/3d-renders/smarthomes-3d.jpeg",
        title: "Smart Home Integration",
        description: "Technology-enabled luxury living",
      },
    ],
    reality: [
      {
        image: "/images/phases/phase-1.jpg",
        title: "Phase 1 Completion",
        description: "Successfully delivered luxury homes",
      },
      {
        image: "/images/phases/phase-2-c.jpg",
        title: "Phase 2 Construction",
        description: "Active development in progress",
      },
      {
        image: "/images/smart-homes/nodon-smart-homes-9.jpeg",
        title: "Completed Smart Homes",
        description: "Real construction progress",
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
        image: "/images/3d-renders/nodon-smart-homes-8-3d.jpeg",
        title: "Premium Interior Concept",
        description: "Luxury living space design",
      },
    ],
    reality: [
      {
        image: "/images/apartments/nondon-apartments-4.jpeg",
        title: "Apartment Construction Progress",
        description: "Multi-story development in progress",
      },
    ],
  },
  {
    id: "coming-soon",
    name: "Future Developments",
    description: "Upcoming luxury projects in prime locations",
    status: "Coming Soon",
    vision: [
      {
        image: "/images/coming-soon/coming-soon-1.jpg",
        title: "Premium Land Development",
        description: "Future luxury residential community",
      },
      {
        image: "/images/coming-soon/coming-soon-2.jpg",
        title: "Exclusive Estate Planning",
        description: "Strategic location for luxury living",
      },
    ],
    reality: [
      {
        image: "/images/coming-soon/coming-soon-1.jpg",
        title: "Site Preparation",
        description: "Land acquisition and planning phase",
      },
      {
        image: "/images/coming-soon/coming-soon-2.jpg",
        title: "Development Planning",
        description: "Strategic development in progress",
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
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-nondon.png"
                alt="Nondon Real Estate Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-gray-900">Nondon Real Estate</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-red-600 transition-colors">
                Projects
              </Link>
              <Link href="/gallery" className="text-red-600 font-semibold">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                Contact
              </Link>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white"
            >
              <Link href="/contact">Reserve Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Project Gallery</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
              Witness the transformation from architectural vision to stunning reality. Explore our projects through
              detailed 3D renders and actual construction progress.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Vision (3D Renders)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Reality (Construction)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {galleryProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
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
            ))}
          </div>
        </div>
      </section>

      {/* Vision vs Reality Toggle */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentProject.name}</h2>
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border">
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
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Stats */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">From Vision to Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-red-600 mb-2">8+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Delivered</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Vision Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Ready to Turn Your Vision into Reality?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-balance">
            Experience the Nondon difference. From concept to completion, we deliver exactly what we promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
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
      </section>
    </div>
  )
}
