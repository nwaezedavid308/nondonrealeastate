import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Bed, Home, Shield, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Property data
const propertyData = {
  "phase-1": {
    id: "phase-1",
    name: "Nondon Estate Phase 1",
    status: "Sold Out",
    type: "Fully detached 5-bedroom duplex with BQ",
    bedrooms: 5,
    units: 8,
    location: "Naira Triangle / NNPC Mega Station, Enugu",
    price: "₦110,000,000",
    priceRange: null,
    images: [
      "/luxury-duplex-house-exterior-modern-architecture-e.jpg",
      "/luxury-duplex-house-phase-3-nondon-estate.jpg",
    ],
    description:
      "Experience luxury living in our fully detached 5-bedroom duplexes with Boys' Quarters. Located in the prestigious Naira Triangle area near NNPC Mega Station, these homes offer the perfect blend of comfort, security, and modern amenities.",
    amenities: [
      "All rooms en-suite with premium fixtures",
      "POP ceilings throughout (including BQ)",
      "10mm tempered glass balconies",
      "Rolling security gate system",
      "Multiview CCTV surveillance system",
      "Smoke detectors in all rooms",
      "Fire extinguishers & fire blanket in kitchens",
      "Pre-wired for inverter installation",
      "Interlocked estate driveway",
      "Approximately 270 sqm parking per unit",
      "90W solar street lights",
      "24/7 security personnel",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: true,
    specifications: {
      landSize: "500 sqm",
      buildingArea: "350 sqm",
      parking: "270 sqm (4-6 cars)",
      floors: "2 floors + BQ",
    },
    nearbyAmenities: [
      "NNPC Mega Station - 2 minutes walk",
      "Shopping complexes - 5 minutes drive",
      "International schools - 10 minutes drive",
      "Medical facilities - 8 minutes drive",
    ],
  },
  "phase-2": {
    id: "phase-2",
    name: "Nondon Estate Phase 2",
    status: "Sold Out",
    type: "Executive fully detached 4-bedroom bungalows",
    bedrooms: 4,
    units: 8,
    location: "Chief Geff Ozor Avenue by Adorable British College, Enugu",
    price: "₦110,000,000",
    priceRange: null,
    images: [
      "/luxury-duplex-house-exterior-modern-architecture-e.jpg",
      "/4-bedroom-bungalow-luxury-nondon-almonds.jpg",
    ],
    description:
      "Elegant executive bungalows designed for sophisticated living. Located on the prestigious Chief Geff Ozor Avenue, these properties offer single-level luxury with all the modern amenities you expect from Nondon Real Estate.",
    amenities: [
      "All rooms en-suite with luxury fittings",
      "POP ceilings throughout (including BQ)",
      "10mm tempered glass balconies",
      "Rolling security gate system",
      "Advanced CCTV surveillance system",
      "Smoke detectors and fire safety equipment",
      "Fire extinguishers & fire blanket in kitchens",
      "Pre-wired for inverter installation",
      "Interlocked driveway and compound",
      "One-year facility maintenance guarantee",
      "90W solar street lights",
      "Gated community with 24/7 security",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: true,
    specifications: {
      landSize: "450 sqm",
      buildingArea: "280 sqm",
      parking: "200 sqm (3-4 cars)",
      floors: "1 floor + BQ",
    },
    nearbyAmenities: [
      "Adorable British College - Adjacent",
      "Shopping centers - 3 minutes drive",
      "Banks and ATMs - 5 minutes walk",
      "Restaurants - 2 minutes drive",
    ],
  },
  "phase-3": {
    id: "phase-3",
    name: "Nondon Estate Phase 3",
    status: "Now Selling",
    type: "4 & 5-bedroom detached and semi-detached duplexes",
    bedrooms: "4-5",
    units: "Multiple",
    location: "Opp. Innoson warehouse New Heaven Extension, Enugu State",
    price: null,
    priceRange: "₦130,000,000 - ₦300,000,000",
    images: [
      "/luxury-duplex-house-phase-3-nondon-estate.jpg",
      "/luxury-duplex-house-exterior-modern-architecture-e.jpg",
    ],
    description:
      "Our most ambitious project yet, featuring a variety of luxury options from 4-bedroom semi-detached to 5-bedroom luxury duplexes. This estate includes recreational facilities and modern infrastructure for the ultimate living experience.",
    amenities: [
      "5-aside football pitch for recreation",
      "Swimming pool with modern facilities",
      "Dual access road for convenience",
      "Street lights throughout the estate",
      "24-hour uninterrupted power supply",
      "Solar energy backup system",
      "Fully equipped gymnasium",
      "Round-the-clock security with CCTV",
      "Landscaped gardens and green spaces",
      "Children's playground area",
      "Visitor parking areas",
      "Modern drainage and sewage system",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
    specifications: {
      landSize: "400-600 sqm",
      buildingArea: "300-450 sqm",
      parking: "250-350 sqm",
      floors: "2 floors + optional BQ",
    },
    nearbyAmenities: [
      "Innoson warehouse - Opposite",
      "New Heaven market - 10 minutes drive",
      "Schools and colleges - 15 minutes drive",
      "Medical centers - 12 minutes drive",
    ],
  },
  "luxury-apartment": {
    id: "luxury-apartment",
    name: "Nondon Luxury Apartment",
    status: "Ongoing",
    type: "Serviced studio apartments (luxury, smart-home enabled)",
    bedrooms: "1-3",
    units: "Multiple Studios",
    location: "Nza Street, Independence Layout, Enugu",
    price: null,
    priceRange: "₦200,000,000 - ₦380,000,000",
    images: ["/luxury-apartment-building-modern-nondon.jpg", "/smart-home-technology-modern-house-automation.jpg"],
    description:
      "Modern serviced apartments with smart home technology in the heart of Independence Layout. These luxury studios offer the perfect blend of convenience, technology, and premium amenities for contemporary urban living.",
    amenities: [
      "Fully furnished with premium furniture",
      "Smart home facilities and automation",
      "Rooftop lounge with city views",
      "Swimming pool and deck area",
      "Fully equipped modern gymnasium",
      "Ample secure parking spaces",
      "Top-notch 24/7 security system",
      "Steady power supply with backup",
      "Professional laundry services",
      "On-site restaurant and café",
      "Exquisite lobby and reception",
      "High-speed internet connectivity",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
    specifications: {
      unitSizes: "45-120 sqm",
      floors: "8 floors",
      parking: "1-2 spaces per unit",
      facilities: "Rooftop, Ground floor commercial",
    },
    nearbyAmenities: [
      "Independence Layout shops - 5 minutes walk",
      "Banks and financial services - 3 minutes walk",
      "Restaurants and cafés - 2 minutes walk",
      "Public transportation - 1 minute walk",
    ],
  },
  "smart-homes": {
    id: "smart-homes",
    name: "Nondon Smart Homes",
    status: "Sales Ongoing",
    type: "Fully detached 6-bedroom duplexes with BQ",
    bedrooms: 6,
    units: 3,
    location: "Thinkers Corner, Enugu East, Enugu State",
    price: "₦240,000,000",
    priceRange: null,
    images: [
      "/smart-home-technology-modern-house-automation.jpg",
      "/luxury-duplex-house-exterior-modern-architecture-e.jpg",
    ],
    description:
      "Experience the future of living with our fully automated smart homes. These 6-bedroom duplexes feature cutting-edge technology, premium finishes, and intelligent systems that respond to your lifestyle needs.",
    amenities: [
      "Smart lighting with automated controls",
      "Smart locks and security gate systems",
      "Intelligent thermostat controls",
      "24/7 smart security cameras surveillance",
      "Smart appliances throughout",
      "Motion and environmental sensors",
      "Voice assistants integration",
      "Fully automated home systems",
      "Fully fitted luxury bathrooms",
      "State-of-the-art kitchen facilities",
      "Efficient water and power supply",
      "Modern decorative water fountains",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
    specifications: {
      landSize: "600 sqm",
      buildingArea: "450 sqm",
      parking: "300 sqm (5-6 cars)",
      floors: "2 floors + BQ + smart systems",
    },
    nearbyAmenities: [
      "Thinkers Corner junction - 5 minutes walk",
      "Shopping complexes - 8 minutes drive",
      "International schools - 12 minutes drive",
      "Medical facilities - 10 minutes drive",
    ],
  },
  "nondon-almonds": {
    id: "nondon-almonds",
    name: "Nondon Almonds",
    status: "Ongoing",
    type: "4-bedroom bungalow",
    bedrooms: 4,
    units: 2,
    location: "Almond Estate, Catenary City, Enugu State",
    price: "₦120,000,000",
    priceRange: null,
    images: [
      "/4-bedroom-bungalow-luxury-nondon-almonds.jpg",
      "/luxury-duplex-house-exterior-modern-architecture-e.jpg",
    ],
    description:
      "Elegant 4-bedroom bungalows in the serene Almond Estate within Catenary City. These homes combine modern design with premium finishing, offering comfortable single-level living in a peaceful environment.",
    amenities: [
      "Fully fitted luxury bathrooms",
      "State-of-the-art kitchen with modern appliances",
      "Premium finishing throughout",
      "Modern architectural design",
      "Smart layout and space utilization",
      "24/7 security surveillance system",
      "Reliable electricity and water supply",
      "4 dedicated car parking spaces",
      "Landscaped compound and gardens",
      "Modern drainage system",
      "Quality tiles and fixtures",
      "Spacious rooms with natural lighting",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
    specifications: {
      landSize: "500 sqm",
      buildingArea: "250 sqm",
      parking: "200 sqm (4 cars)",
      floors: "1 floor bungalow",
    },
    nearbyAmenities: [
      "Catenary City center - 10 minutes drive",
      "Shopping areas - 15 minutes drive",
      "Schools - 20 minutes drive",
      "Medical facilities - 18 minutes drive",
    ],
  },
}

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = propertyData[params.id as keyof typeof propertyData]

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Abstract-25.jpg"
                alt="Nondon Real Estate Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-gray-900">Nondon Real Estate</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-red-600 font-semibold">
                Projects
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-red-600 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                Contact
              </Link>
            </div>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Reserve Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-red-600">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-900">{property.name}</span>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant={property.soldOut ? "secondary" : "default"}
                  className={`${
                    property.soldOut ? "bg-gray-500 text-white" : "bg-red-600 text-white"
                  } text-sm px-3 py-1`}
                >
                  {property.status}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">{property.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{property.type}</p>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                    {property.price || property.priceRange}
                  </div>
                  {property.paymentPlan && <p className="text-gray-700 text-lg">{property.paymentPlan}</p>}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8"
                    disabled={property.soldOut}
                  >
                    <Link href="/contact">{property.soldOut ? "Sold Out" : "Reserve Now"}</Link>
                  </Button>
                  {!property.soldOut && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-red-300 text-red-700 hover:bg-red-100 px-8 bg-white"
                    >
                      <Link href="/contact">Schedule Visit</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {property.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Property Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Key Features & Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              {property.specifications && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {Object.entries(property.specifications).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-red-600 mb-1">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Nearby Amenities */}
              {property.nearbyAmenities && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Nearby Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.nearbyAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600">Bedrooms</span>
                    </div>
                    <span className="font-semibold text-gray-900">{property.bedrooms}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Home className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600">Units Available</span>
                    </div>
                    <span className="font-semibold text-gray-900">{property.units}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600">Status</span>
                    </div>
                    <Badge
                      variant={property.soldOut ? "secondary" : "default"}
                      className={property.soldOut ? "bg-gray-500 text-white" : "bg-red-600 text-white"}
                    >
                      {property.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Get More Information</CardTitle>
                  <CardDescription>
                    Interested in this property? Contact our sales team for more details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Link href="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Link href="/contact">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Payment Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-1">30%</div>
                      <div className="text-sm text-gray-600">Initial Payment</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">70%</div>
                      <div className="text-sm text-gray-600">Spread over 12 months</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Ready to Make This Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-balance">
            Don't miss out on this opportunity. Contact us today to schedule a viewing or make a reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
              disabled={property.soldOut}
            >
              <Link href="/contact">{property.soldOut ? "Property Sold Out" : "Reserve This Property"}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-red-200 text-red-600 hover:bg-red-50 px-8 bg-transparent"
            >
              <Link href="/projects">View Other Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static params for all properties
export function generateStaticParams() {
  return Object.keys(propertyData).map((id) => ({
    id: id,
  }))
}

// Generate metadata for each property
export function generateMetadata({ params }: PropertyPageProps) {
  const property = propertyData[params.id as keyof typeof propertyData]

  if (!property) {
    return {
      title: "Property Not Found - Nondon Real Estate",
    }
  }

  return {
    title: `${property.name} - Nondon Real Estate`,
    description: property.description,
  }
}
