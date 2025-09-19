"use client"

import { useState, useEffect, memo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Home, Building, Clock } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  type: 'property' | 'location' | 'feature' | 'page'
  description: string
  price?: string
  location?: string
  status?: string
  href: string
  image?: string
}

const searchData: SearchResult[] = [
  // Properties
  {
    id: "phase-3",
    title: "Nondon Estate Phase 3",
    type: "property",
    description: "4–5 Bedroom Luxury & Deluxe Duplexes with modern amenities",
    price: "₦125M – ₦290M",
    location: "Opp. Innoson Warehouse, New Heaven Extension, Enugu",
    status: "Now Selling",
    href: "/projects/phase-3",
    image: "/images/3d-renders/3D RENDER 4  BEDROOM DUPLEX PHASE 3.jpeg"
  },
  {
    id: "luxury-apartments",
    title: "Nondon Luxury Apartments",
    type: "property",
    description: "1,2,3 Bedroom Studio Apartments with smart-home technology",
    price: "₦200M – ₦380M",
    location: "Nza Street, Independence Layout, Enugu",
    status: "Ongoing",
    href: "/projects/luxury-apartment",
    image: "/images/3d-renders/nondon-apartments-3d.jpeg"
  },
  {
    id: "smart-homes",
    title: "Nondon Smart Homes",
    type: "property",
    description: "6-Bedroom Smart Duplexes with BQ and cutting-edge technology",
    price: "₦235M – ₦250M",
    location: "Thinkers Corner, Enugu East, Enugu State",
    status: "Sales Ongoing",
    href: "/projects/smart-homes",
    image: "/images/3d-renders/nodon-smart-homes-8-3d.jpeg"
  },
  {
    id: "nondon-almonds",
    title: "Nondon Almonds",
    type: "property",
    description: "4-Bedroom Luxury Bungalows with traditional elegance",
    price: "₦135M",
    location: "Centenary City, Enugu",
    status: "Now Selling",
    href: "/projects/nondon-almonds",
    image: "/images/bungalows/nondon-almonds-bungalows.jpg"
  },
  // Locations
  {
    id: "enugu-properties",
    title: "Properties in Enugu",
    type: "location",
    description: "Discover luxury properties across various locations in Enugu State",
    location: "Enugu State",
    href: "/projects?location=enugu"
  },
  {
    id: "independence-layout",
    title: "Independence Layout",
    type: "location",
    description: "Premium apartments in the heart of Independence Layout",
    location: "Independence Layout, Enugu",
    href: "/projects?location=independence-layout"
  },
  {
    id: "thinkers-corner",
    title: "Thinkers Corner",
    type: "location",
    description: "Smart homes in the prestigious Thinkers Corner area",
    location: "Thinkers Corner, Enugu East",
    href: "/projects?location=thinkers-corner"
  },
  // Features
  {
    id: "smart-home-tech",
    title: "Smart Home Technology",
    type: "feature",
    description: "Properties with cutting-edge smart home automation",
    href: "/projects?feature=smart-home"
  },
  {
    id: "luxury-amenities",
    title: "Luxury Amenities",
    type: "feature",
    description: "24/7 power, security, modern facilities and premium finishes",
    href: "/projects?feature=luxury"
  },
  {
    id: "flexible-payment",
    title: "Flexible Payment Plans",
    type: "feature",
    description: "12-month payment options to suit your budget",
    href: "/contact"
  },
  {
    id: "investment",
    title: "Real Estate Investment",
    type: "feature",
    description: "Invest in luxury properties with guaranteed returns",
    href: "/projects"
  },
  {
    id: "security",
    title: "24/7 Security",
    type: "feature",
    description: "Round-the-clock security and gated communities",
    href: "/projects"
  },
  {
    id: "financing",
    title: "Property Financing",
    type: "feature",
    description: "Mortgage assistance and financing options available",
    href: "/contact"
  },
  // Pages
  {
    id: "about-nondon",
    title: "About Nondon Real Estate",
    type: "page",
    description: "Learn about our company history, vision, and leadership team",
    href: "/about"
  },
  {
    id: "gallery",
    title: "Property Gallery",
    type: "page",
    description: "View our complete collection of properties and 3D renders",
    href: "/gallery"
  },
  {
    id: "contact",
    title: "Contact Us",
    type: "page",
    description: "Get in touch with our sales team for inquiries and bookings",
    href: "/contact"
  },
  {
    id: "nondon-hub",
    title: "Nondon Hub",
    type: "page",
    description: "Your gateway to exclusive real estate opportunities - Coming Soon",
    href: "/nondon-hub"
  },
  {
    id: "team",
    title: "Our Team",
    type: "page",
    description: "Meet the leadership team behind Nondon Real Estate",
    href: "/about"
  },
  {
    id: "testimonials",
    title: "Customer Reviews",
    type: "page",
    description: "Read what our satisfied customers say about us",
    href: "/about"
  },
  {
    id: "careers",
    title: "Career Opportunities",
    type: "page",
    description: "Join our team and build your real estate career",
    href: "/contact"
  },
  {
    id: "news",
    title: "Latest News",
    type: "page",
    description: "Stay updated with Nondon Real Estate developments",
    href: "/about"
  },
  // Additional search terms
  {
    id: "luxury-homes",
    title: "Luxury Homes for Sale",
    type: "property",
    description: "Premium residential properties across Enugu",
    href: "/projects"
  },
  {
    id: "new-construction",
    title: "New Construction",
    type: "feature",
    description: "Brand new properties with modern designs",
    href: "/projects"
  },
  {
    id: "penthouses",
    title: "Penthouses",
    type: "property",
    description: "Exclusive penthouse apartments with premium views",
    href: "/projects"
  },
  {
    id: "family-homes",
    title: "Family Homes",
    type: "property",
    description: "Spacious homes perfect for families",
    href: "/projects"
  }
]

interface SearchComponentProps {
  onSearchStateChange?: (isActive: boolean) => void
}

const SearchComponent = memo(function SearchComponent({ onSearchStateChange }: SearchComponentProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isStable, setIsStable] = useState(false)

  // Mark component as stable after initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStable(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.location?.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6)

    setResults(filteredResults)
    setIsOpen(filteredResults.length > 0)
  }, [query])

  // Prevent closing if component is stable and has results
  useEffect(() => {
    if (isStable && results.length > 0) {
      setIsOpen(true)
    }
  }, [isStable, results.length])

  // Notify parent component about search state
  useEffect(() => {
    onSearchStateChange?.(isOpen && results.length > 0)
  }, [isOpen, results.length, onSearchStateChange])

  const getIcon = (type: string) => {
    switch (type) {
      case 'property':
        return <Home className="w-4 h-4" />
      case 'location':
        return <MapPin className="w-4 h-4" />
      case 'feature':
        return <Building className="w-4 h-4" />
      case 'page':
        return <Clock className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'property':
        return 'bg-red-100 text-red-800'
      case 'location':
        return 'bg-blue-100 text-blue-800'
      case 'feature':
        return 'bg-green-100 text-green-800'
      case 'page':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search properties, locations, amenities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-4 py-3 text-lg border-2 border-white/80 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-600 focus:border-white focus:bg-white transition-all duration-300 shadow-xl"
        />
        {query && (
          <Button
            onClick={clearSearch}
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 hover:bg-white/50"
          >
            ✕
          </Button>
        )}
      </div>

      {isOpen && (
        <>
          {/* Mobile backdrop overlay */}
          <div className="fixed inset-0 bg-black/20 z-[59] sm:hidden" onClick={clearSearch}></div>
          <Card className="absolute top-full left-0 right-0 mt-2 z-[60] max-h-[70vh] sm:max-h-96 overflow-y-auto bg-white/98 backdrop-blur-sm border-white/50 shadow-2xl mobile-search-results">
            <CardContent className="p-0">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.href}
                onClick={clearSearch}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              >
                {result.image && (
                  <Image
                    src={result.image}
                    alt={result.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon(result.type)}
                    <Badge variant="secondary" className={`text-xs ${getTypeColor(result.type)}`}>
                      {result.type}
                    </Badge>
                    {result.status && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          result.status === 'Now Selling' ? 'border-green-500 text-green-700' :
                          result.status === 'Ongoing' ? 'border-blue-500 text-blue-700' :
                          result.status === 'Sales Ongoing' ? 'border-orange-500 text-orange-700' :
                          'border-gray-500 text-gray-700'
                        }`}
                      >
                        {result.status}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 truncate">{result.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 font-normal">{result.description}</p>
                  {result.price && (
                    <p className="text-sm font-bold text-red-600 mt-1">{result.price}</p>
                  )}
                  {result.location && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 font-normal">
                      <MapPin className="w-3 h-3" />
                      {result.location}
                    </p>
                  )}
                </div>
              </Link>
            ))}
            {results.length === 0 && query.length >= 2 && (
              <div className="p-4 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-normal">No results found for "{query}"</p>
                <p className="text-sm mt-1 font-normal">Try searching for properties, locations, or features</p>
              </div>
            )}
          </CardContent>
        </Card>
        </>
      )}
    </div>
  )
})

export default SearchComponent
