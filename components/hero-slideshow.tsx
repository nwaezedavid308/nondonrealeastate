"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/3d-renders/nondon-apartments-3d.jpeg",
    mainTitle: "Revolutionizing the concept of luxury living",
    subtitle: "Modern living redefined with premium amenities",
  },
  {
    image: "/images/3d-renders/smarthomes-3d.jpeg",
    mainTitle: "Where Elegance Meets Excellence",
    subtitle: "Contemporary architecture meets intelligent design",
  },
  {
    image: "/images/3d-renders/nondon-real-estate-3d-6.jpeg",
    mainTitle: "Invest Today, Enjoy Tomorrow",
    subtitle: "Luxury duplexes in serene locations",
  },
  {
    image: "/images/3d-renders/nodon-smart-homes-8-3d.jpeg",
    mainTitle: "Crafting timeless elegance",
    subtitle: "Where sophistication meets functionality",
  },
  {
    image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
    mainTitle: "Premium Residential Communities",
    subtitle: "Exclusive developments in prime locations",
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.mainTitle}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 sm:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance transition-all duration-500 leading-tight">
              {slides[currentSlide].mainTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-balance opacity-90 transition-all duration-500 max-w-4xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Link href="/projects">Explore Properties</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
