import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Bed, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const estates = [
  {
    id: "phase-1",
    name: "Nondon Estate Phase 1",
    status: "Sold Out",
    type: "Fully detached 5-bedroom duplex with BQ",
    bedrooms: 5,
    units: 8,
    location: "Naira Triangle / NNPC Mega Station, Enugu",
    price: "₦110,000,000",
    priceRange: null,
    image: "/images/phases/phase-1.jpg",
    amenities: [
      "All rooms en-suite",
      "POP ceilings",
      "10mm tempered glass balconies",
      "CCTV system",
      "Solar street lights",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: true,
  },
  {
    id: "phase-2",
    name: "Nondon Estate Phase 2",
    status: "Sold Out",
    type: "Executive fully detached 4-bedroom bungalows",
    bedrooms: 4,
    units: 8,
    location: "Chief Geff Ozor Avenue by Adorable British College, Enugu",
    price: "₦110,000,000",
    priceRange: null,
    image: "/images/phases/phase-2-c.jpg",
    amenities: [
      "All rooms en-suite",
      "POP ceilings",
      "CCTV system",
      "One-year facility maintenance",
      "Solar street lights",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: true,
  },
  {
    id: "phase-3",
    name: "Nondon Estate Phase 3",
    status: "Ongoing", // Updated status from "Now Selling" to "Ongoing"
    type: "4 & 5-bedroom detached and semi-detached duplexes",
    bedrooms: "4-5",
    units: "Multiple",
    location: "Opp. Innoson warehouse New Heaven Extension, Enugu State",
    price: null,
    priceRange: "₦125,000,000 - ₦290,000,000",
    image: "/images/phases/PHASE 3/PHASE 3 (1).jpg",
    amenities: [
      "5-aside football pitch",
      "Swimming pool",
      "Dual access road",
      "24-hour power",
      "Round-the-clock security",
    ],
    paymentPlan: "4BR Duplex: ₦160M (Outright) | ₦170M (Installment) • 4BR Semi: ₦125M (Outright) | ₦135M (Installment) • 5BR Duplex: ₦200M (Outright) | ₦210M (Installment) • 5BR Luxury: ₦280M (Outright) | ₦290M (Installment)",
    soldOut: false,
  },
]

const apartments = [
  {
    id: "luxury-apartment",
    name: "Nondon Luxury Apartment",
    status: "Ongoing",
    type: "Serviced studio apartments (luxury, smart-home enabled)",
    bedrooms: "1-3",
    units: "Multiple Studios",
    location: "Nza Street, Independence Layout, Enugu",
    price: null,
    priceRange: "₦200,000,000 - ₦380,000,000",
    image: "/images/apartments/APARTMENTS (1).jpg",
    amenities: [
      "Fully furnished",
      "Smart home facilities",
      "Rooftop lounge",
      "Swimming pool",
      "Equipped gym",
      "Restaurant",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
  },
]

const smartHomes = [
  {
    id: "smart-homes",
    name: "Nondon Smart Homes",
    status: "Sales Ongoing",
    type: "Fully detached 6-bedroom duplexes with BQ",
    bedrooms: 6,
    units: 3,
    location: "Thinkers Corner, Enugu East, Enugu State",
    price: "₦235,000,000",
    priceRange: "₦235,000,000 - ₦250,000,000",
    image: "/images/3d-renders/3D RENDER SMART HOME (1).jpg",
    amenities: [
      "Smart lighting & locks",
      "24/7 smart security cameras",
      "Smart appliances",
      "Voice assistants",
      "Modern water fountains",
    ],
    paymentPlan: "Instant Payment: ₦235M | Installment Payment: ₦250M",
    soldOut: false,
  },
]

const otherProjects = [
  {
    id: "nondon-almonds",
    name: "Nondon Almonds",
    status: "Now Selling", // Updated status to show it's actively selling with green badge
    type: "Premium luxury bungalows",
    bedrooms: 4,
    units: 2,
    location: "Centenary City, Enugu",
    price: "₦135,000,000",
    priceRange: null,
    image: "/images/bungalows/BUNGALOW (1).jpg",
    amenities: [
      "Fully fitted bathroom",
      "State of the art kitchen",
      "Premium finishing",
      "24/7 security surveillance",
      "4 car parking space",
    ],
    paymentPlan: "Pay 30% now; spread 70% over 12 months",
    soldOut: false,
  },
]

const comingSoon = [
  {
    id: "nondon-crest",
    name: "Nondon Crest Luxury",
    status: "Coming Soon",
    type: "Luxury Development",
    location: "Enugu",
    image: "/images/coming-soon/coming-soon-1.jpg", // Updated to use organized coming soon image
    description: "Premium luxury development coming soon to Enugu",
  },
  {
    id: "apartment-asaba",
    name: "Nondon Luxury Apartment Asaba",
    status: "Coming Soon",
    type: "Luxury Apartments",
    location: "Asaba, Delta State",
    image: "/images/coming-soon/coming-soon-2.jpg", // Updated to use organized coming soon image
    description: "Expanding our luxury apartment offerings to Asaba",
  },
]

function PropertyCard({ property, category }: { property: any; category: string }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in-up">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.name}
          width={400}
          height={250}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={property.soldOut ? "secondary" : property.status === "Coming Soon" ? "outline" : "default"}
            className={`${
              property.soldOut
                ? "bg-gray-500 text-white cursor-not-allowed"
                : property.status === "Coming Soon"
                  ? "bg-white text-red-600 border-red-200"
                  : property.status === "Now Selling" || property.status === "Ongoing"
                    ? "bg-green-600 text-white" // Green badges for active selling properties
                    : "bg-red-600 text-white"
            }`}
          >
            {property.status}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
          {property.name}
        </CardTitle>
        <CardDescription className="text-gray-600 font-medium">{property.type}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-red-500" />
          <span className="text-sm">{property.location}</span>
        </div>

        {property.bedrooms && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-red-500" />
              <span>
                {property.bedrooms} Bed{property.bedrooms !== 1 ? "s" : ""}
              </span>
            </div>
            {property.units && (
              <div className="flex items-center">
                <Home className="w-4 h-4 mr-1 text-red-500" />
                <span>
                  {property.units} Unit{property.units !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        )}

        {property.amenities && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm">Key Amenities:</h4>
            <div className="flex flex-wrap gap-1">
              {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs border-red-200 text-red-700">
                  {amenity}
                </Badge>
              ))}
              {property.amenities.length > 3 && (
                <Badge variant="outline" className="text-xs border-gray-200 text-gray-600">
                  +{property.amenities.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {property.description && <p className="text-sm text-gray-600">{property.description}</p>}
      </CardContent>

      <CardFooter className="pt-4 border-t border-gray-100">
        <div className="w-full space-y-3">
          {(property.price || property.priceRange) && (
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{property.price || property.priceRange}</p>
              {property.paymentPlan && <p className="text-xs text-gray-500 mt-1">{property.paymentPlan}</p>}
            </div>
          )}

          <div className="flex gap-2">
            <Button
              asChild
              className={`flex-1 text-white transition-all duration-300 hover:shadow-lg ${
                property.soldOut
                  ? "bg-gray-400 cursor-not-allowed" // Inactive styling for sold out properties
                  : property.status === "Now Selling" || property.status === "Ongoing"
                    ? "bg-green-600 hover:bg-green-700" // Green buttons for active selling properties
                    : "bg-red-600 hover:bg-red-700"
              }`}
              disabled={property.soldOut}
            >
              <Link href={`/projects/${property.id}`}>
                {property.soldOut ? "Sold Out" : property.status === "Coming Soon" ? "Learn More" : "View Details"}
              </Link>
            </Button>
            {!property.soldOut && property.status !== "Coming Soon" && (
              <Button
                variant="outline"
                asChild
                className={`flex-1 transition-all duration-300 hover:shadow-lg ${
                  property.status === "Now Selling" || property.status === "Ongoing"
                    ? "border-green-200 text-green-600 hover:bg-green-50" // Green outline buttons for active properties
                    : "border-red-200 text-red-600 hover:bg-red-50"
                } bg-transparent`}
              >
                <Link href="/contact">Reserve Now</Link>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/3d-renders/nondon-real-estate-3d-aerial.jpeg')", // Updated to use 3D render background
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-red-600/60" />{" "}
        {/* Enhanced gradient overlay for better contrast */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up drop-shadow-lg">
            {" "}
            {/* Added drop shadow for better readability */}
            Our Signature Projects
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto text-balance animate-fade-in-up drop-shadow-md">
            {" "}
            {/* Increased opacity and added drop shadow */}
            From luxury estates to smart apartments, explore our completed, ongoing, and upcoming developments across
            Enugu and beyond.
          </p>
        </div>
      </section>

      {/* Projects Catalogue */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="estates" className="w-full">
            <div className="mb-12 animate-fade-in-up">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-gray-100 p-1 rounded-lg gap-1 h-auto">
                {" "}
                {/* Improved mobile responsiveness with better spacing */}
                <TabsTrigger
                  value="estates"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm py-2 px-1 sm:px-2 whitespace-nowrap transition-all duration-300" // Better responsive text sizing
                >
                  Estates
                </TabsTrigger>
                <TabsTrigger
                  value="apartments"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm py-2 px-1 sm:px-2 whitespace-nowrap transition-all duration-300"
                >
                  Apartments
                </TabsTrigger>
                <TabsTrigger
                  value="smart-homes"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm py-2 px-1 sm:px-2 whitespace-nowrap transition-all duration-300"
                >
                  Smart Homes
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm py-2 px-1 sm:px-2 whitespace-nowrap transition-all duration-300"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="coming-soon"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs sm:text-sm py-2 px-1 sm:px-2 whitespace-nowrap transition-all duration-300"
                >
                  Coming Soon
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="estates" className="space-y-8">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Estates</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Exclusive residential estates featuring luxury duplexes and bungalows in prime Enugu locations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {estates.map((estate, index) => (
                  <div key={estate.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard property={estate} category="estates" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apartments" className="space-y-8">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Luxury Apartments</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Modern serviced apartments with smart home technology and premium amenities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apartments.map((apartment, index) => (
                  <div key={apartment.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard property={apartment} category="apartments" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="smart-homes" className="space-y-8">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Homes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fully automated luxury homes with cutting-edge smart technology and premium finishes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {smartHomes.map((home, index) => (
                  <div key={home.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard property={home} category="smart-homes" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-8">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Projects</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Additional premium developments offering unique living experiences.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => (
                  <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard property={project} category="other" />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coming-soon" className="space-y-8">
              <div className="text-center mb-8 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Exciting new developments in the pipeline. Be the first to know when they launch.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {comingSoon.map((project, index) => (
                  <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PropertyCard property={project} category="coming-soon" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to Own Your Dream Home?</h2>
          <p className="text-xl text-white/90 mb-8 text-balance">
            Start your journey with Nondon Real Estate today. Our team is ready to help you find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
              <Link href="/contact">Reserve Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 bg-transparent"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
