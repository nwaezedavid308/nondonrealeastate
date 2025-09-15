import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import HeroSlideshow from "@/components/hero-slideshow"
import HeroVideo from "@/components/hero-video"
import { Home, Video, Star, Check } from "lucide-react"

export default function NondonRealEstate() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSlideshow />

      {/* Engaging Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-balance">Experience Nondon Real Estate</h2>
            <p className="text-xl text-muted-foreground text-pretty font-normal max-w-3xl mx-auto">
              Take a virtual journey through our premium properties and discover what makes Nondon the preferred choice for luxury living
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto animate-fade-in-up">
            <HeroVideo videoId="Z0OQ-TyXvlM" />
            
            {/* Video Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Virtual Tours</h3>
                <p className="text-muted-foreground text-sm font-normal">Experience our properties from the comfort of your home</p>
              </div>
              
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Behind the Scenes</h3>
                <p className="text-muted-foreground text-sm font-normal">See the craftsmanship and attention to detail in every project</p>
              </div>
              
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customer Stories</h3>
                <p className="text-muted-foreground text-sm font-normal">Hear from satisfied homeowners about their Nondon experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-balance">Featured Properties</h2>
            <p className="text-xl text-muted-foreground text-pretty font-normal">Discover our premium collection of luxury homes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nondon Estate Phase 3 */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/3d-renders/3D RENDER 4  BEDROOM DUPLEX PHASE 3.jpeg"
                  alt="Nondon Estate Phase 3"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">Now Selling</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Estate Phase 3</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Opp. Innoson Warehouse, New Heaven Extension, Enugu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-red-600">₦125M – ₦290M</div>
                  <p className="text-sm text-muted-foreground font-normal">4–5 Bedroom Luxury & Deluxe Duplexes</p>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/projects/phase-3">View Details →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nondon Luxury Apartments */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/3d-renders/nondon-apartments-3d.jpeg"
                  alt="Nondon Luxury Apartments"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Ongoing</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Luxury Apartments</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Nza Street, Independence Layout, Enugu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-red-600">₦200M – ₦380M</div>
                  <p className="text-sm text-muted-foreground font-normal">1,2,3 Bedroom Studio Apartments</p>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/projects/luxury-apartment">View Details →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nondon Smart Homes */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/3d-renders/nodon-smart-homes-8-3d.jpeg"
                  alt="Nondon Smart Homes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Sales Ongoing</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Smart Homes</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Thinkers Corner, Enugu East, Enugu State
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-red-600">₦235M – ₦250M</div>
                  <p className="text-sm text-muted-foreground font-normal">6-Bedroom Smart Duplexes with BQ</p>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/projects/smart-homes">View Details →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nondon Almonds */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/bungalows/nondon-almonds-bungalows.jpg"
                  alt="Nondon Almonds Bungalows"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">Now Selling</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Almonds</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Centenary City, Enugu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-red-600">₦135M</div>
                  <p className="text-sm text-muted-foreground font-normal">4-Bedroom Luxury Bungalows</p>
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/projects/nondon-almonds">View Details →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon - Nondon Crest Luxury */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-90 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/coming-soon/coming-soon-1.jpg"
                  alt="Nondon Crest Luxury"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gray-600 text-white">Coming Soon</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Crest Luxury</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Luxury Development, Enugu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-muted-foreground">Coming Soon</div>
                  <p className="text-sm text-muted-foreground font-normal">Premium luxury development coming soon to Enugu</p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300"
                    >
                      <Link href="/contact">Join Waitlist</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon - Luxury Apartment Asaba */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-90 animate-fade-in-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/coming-soon/coming-soon-2.jpg"
                  alt="Nondon Luxury Apartment Asaba"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gray-600 text-white">Coming Soon</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Nondon Luxury Apartment Asaba</CardTitle>
                <CardDescription className="flex items-center text-muted-foreground">
                  Luxury Apartments, Asaba, Delta State
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-muted-foreground">Coming Soon</div>
                  <p className="text-sm text-muted-foreground font-normal">Expanding our luxury apartment offerings to Asaba</p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300"
                    >
                      <Link href="/contact">Join Waitlist</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-balance">How It Works</h2>
            <p className="text-xl text-muted-foreground text-pretty font-normal">Your journey to luxury living in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse</h3>
              <p className="text-muted-foreground font-normal">Explore our estates, apartments & smart homes.</p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reserve</h3>
              <p className="text-muted-foreground font-normal">Pay 30% to secure your unit.</p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay Flexibly</h3>
              <p className="text-muted-foreground font-normal">Spread the balance over 12 months.</p>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Move In</h3>
              <p className="text-muted-foreground font-normal">Enjoy luxury living with Nondon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nondon */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-balance">Why Choose Nondon</h2>
            <p className="text-xl text-muted-foreground text-pretty font-normal">
              Experience the difference with our premium services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Payment Plans</h3>
              <p className="text-muted-foreground text-sm font-normal">12-month payment options to suit your budget</p>
            </div>

            <div className="text-center animate-fade-in-up group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Estates</h3>
              <p className="text-muted-foreground text-sm font-normal">24/7 security and gated communities</p>
            </div>

            <div className="text-center animate-fade-in-up group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground text-sm font-normal">No hidden costs, clear pricing structure</p>
            </div>

            <div className="text-center animate-fade-in-up group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Amenities</h3>
              <p className="text-muted-foreground text-sm font-normal">24/7 power, water & modern facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-balance">Start Your Homeownership Journey Today</h2>
          <p className="text-xl mb-8 text-pretty opacity-90 font-normal">
            Join hundreds of satisfied homeowners who chose Nondon for their luxury living experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/contact">Talk to Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Reserve Now</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}
