"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SearchComponent from "@/components/search-component"
// import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/images/3d-renders/nondon-apartments-3d.jpeg",
    mainTitle: "Revolutionizing the concept of luxury living",
    subtitle: "Modern living redefined with premium amenities",
    accent: "Royal Residences",
    theme: "from-amber-900/90 via-amber-800/70 to-transparent"
  },
  {
    image: "/images/3d-renders/smarthomes-3d.jpeg",
    mainTitle: "Where Elegance Meets Excellence",
    subtitle: "Contemporary architecture meets intelligent design",
    accent: "Smart Living",
    theme: "from-red-900/90 via-red-800/70 to-transparent"
  },
  {
    image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
    mainTitle: "Invest Today, Enjoy Tomorrow",
    subtitle: "Luxury duplexes in serene locations",
    accent: "Prime Investment",
    theme: "from-orange-900/90 via-orange-800/70 to-transparent"
  },
  {
    image: "/images/3d-renders/nodon-smart-homes-8-3d.jpeg",
    mainTitle: "Crafting timeless elegance",
    subtitle: "Where sophistication meets functionality",
    accent: "Bespoke Design",
    theme: "from-yellow-900/90 via-yellow-800/70 to-transparent"
  },
  {
    image: "/images/3d-renders/nondon-real-estate-3d-aerial.jpeg",
    mainTitle: "Premium Residential Communities",
    subtitle: "Exclusive developments in prime locations",
    accent: "Luxury Estates",
    theme: "from-rose-900/90 via-rose-800/70 to-transparent"
  },
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 300)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Enhanced Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.mainTitle}
            fill
            className="object-cover transition-transform duration-[20s] ease-linear hover:scale-105"
            priority={index === 0}
          />
          
          {/* Multi-Layer Overlay System */}
          <div className="absolute inset-0 bg-black/40" />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.theme} transition-all duration-1500`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Decorative Geometric Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-16 left-16 w-32 h-32 border border-white/30 rotate-45 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-white/25 rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 right-1/3 w-16 h-16 border border-white/15 rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="text-center text-white px-6 sm:px-8 max-w-5xl mx-auto w-full">
          <div
            key={currentSlide}
            className="animate-fadeInUp"
          >
              {/* Luxury Brand Accent */}
              <div className="animate-scaleIn" style={{animationDelay: '200ms'}}>
                <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm font-light tracking-widest uppercase backdrop-blur-sm bg-white/10">
                  {currentSlideData.accent}
                </span>
              </div>

              {/* Enhanced Typography with Split Styling */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-4 sm:mb-6 mt-6 sm:mt-8 animate-fadeInUp"
                style={{animationDelay: '300ms'}}
              >
                <span className="font-thin whitespace-nowrap">{currentSlideData.mainTitle.split(' ').slice(0, -2).join(' ')}</span>
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  {currentSlideData.mainTitle.split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              
              {/* Elegant Divider */}
              <div 
                className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6 sm:mb-8 animate-slideIn"
                style={{animationDelay: '500ms'}}
              ></div>
              
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-balance opacity-90 max-w-4xl mx-auto font-light animate-fadeInUp"
                style={{animationDelay: '400ms'}}
              >
                {currentSlideData.subtitle}
              </p>
            
              {/* Glassmorphism Search Container */}
              <div 
                className="backdrop-blur-md bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl mb-6 sm:mb-8 max-w-2xl mx-auto animate-fadeInUp"
                style={{animationDelay: '600ms'}}
              >
                <SearchComponent />
              </div>
              
              {/* Call to Action Buttons - Positioned below search for better responsive flow */}
              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto animate-fadeInUp"
                style={{animationDelay: '800ms'}}
              >
                <div className="hover:scale-105 transition-transform duration-200">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/projects">Explore Properties</Link>
                  </Button>
                </div>
                <div className="hover:scale-105 transition-transform duration-200">
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 bg-transparent"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Elegant Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 backdrop-blur-md bg-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`group relative transition-all duration-500 ${
              index === currentSlide 
                ? "w-8 sm:w-12 h-2 sm:h-3 bg-white rounded-full" 
                : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/70 rounded-full"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-white to-amber-400 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Professional Slide Counter */}
      <div className="text-center mt-2 sm:mt-4 text-white/70 text-xs sm:text-sm font-light tracking-widest absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1 sm:mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
