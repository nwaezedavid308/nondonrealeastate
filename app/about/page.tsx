import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Heart, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in honest dealings and transparent processes. Every transaction is handled with integrity and clear communication.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We never compromise on quality. From materials to craftsmanship, every detail meets our high standards.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to ensure your real estate journey is smooth and rewarding.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace modern technology and innovative solutions to deliver smart, future-ready properties.",
  },
]

const achievements = [
  {
    number: "500+",
    label: "Happy Families",
    description: "Families now call our properties home",
  },
  {
    number: "50+",
    label: "Properties Delivered",
    description: "Successfully completed and delivered",
  },
  {
    number: "8+",
    label: "Years Experience",
    description: "In luxury real estate development",
  },
  {
    number: "5",
    label: "Active Projects",
    description: "Currently under development",
  },
]

const teamMembers = [
  {
    name: "Chief Nonso Ezewanne",
    role: "Founder/CEO",
    image: "/images/team/chief-nonso-ezewanne-updated.png",
    description:
      "Visionary Leader and Industry Trailblazer with over 25 years of cognate experience spanning multiple sectors. His distinguished career encompasses hotel management, real estate, manufacturing, trade, and entertainment, both in Nigeria and Europe.",
    fullBio:
      "Chief Nonso Ezewanne, the MD/CEO of Nondon Real Estate and Properties, stands as a paragon of entrepreneurial excellence with over 25 years of cognate experience spanning multiple sectors. Throughout his illustrious journey, Chief Ezewanne has been the driving force behind more than five innovative business ventures, each propelled by his commitment to partnerships and teamwork. His strategic acumen and sharp business insights have consistently translated visions into successful enterprises.",
  },
  {
    name: "Chuka Charles Chima",
    role: "General Manager",
    image: "/images/team/chuka-charles-chima-updated.png",
    description:
      "Brings over 20 years of extensive experience in business, investment banking, and real estate management. His career includes notable roles as a branch manager and relief area manager in several prominent banks.",
    fullBio:
      "Chuka Charles Chima brings over 20 years of extensive experience in business, investment banking, and real estate management. Mr. Chima holds a degree in geology and a business management education from the University of Nigeria, Nsukka (UNN), and Enugu State University of Science and Technology (ESUT). As an intellectual leader, Mr. Chima is renowned for his focus on value ideation, innovation, and impact investing.",
  },
  {
    name: "Mma Nwaigwe Chidimma",
    role: "Head of Marketing",
    image: "/images/team/mma-nwaigwe-updated.png",
    description:
      "Leading our marketing initiatives with creative strategies and innovative approaches to reach and engage our target audience effectively.",
    fullBio:
      "Mma Nwaigwe Chidimma serves as the Head of Marketing at Nondon Real Estate and Properties, bringing fresh perspectives and innovative marketing strategies to promote our luxury properties and brand excellence.",
  },
  {
    name: "Chidiebere Ukokwere",
    role: "Media Manager",
    image: "/images/team/chidi-ukokwere-updated.png",
    description:
      "Managing our digital presence and media communications to ensure consistent brand messaging across all platforms.",
    fullBio:
      "Chidiebere Ukokwere oversees all media communications and digital marketing efforts, ensuring that Nondon Real Estate maintains a strong and consistent presence across all digital platforms and media channels.",
  },
]

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description: "Nondon Real Estate was established with a vision to transform luxury living in Enugu.",
    image: "/images/phases/phase-1.jpg",
    phase: "Foundation",
    color: "from-blue-600 to-blue-800"
  },
  {
    year: "2018",
    title: "Phase 1 Completed",
    description: "Successfully delivered Nondon Estate Phase 1, setting new standards for luxury housing with fully detached 5-bedroom duplexes.",
    image: "/images/phases/phase-1.jpg",
    phase: "Phase 1",
    color: "from-green-600 to-green-800"
  },
  {
    year: "2020",
    title: "Phase 2 Excellence",
    description: "Delivered executive fully detached 4-bedroom bungalows, establishing our reputation for premium residential communities.",
    image: "/images/phases/phase-2-c.jpg",
    phase: "Phase 2",
    color: "from-purple-600 to-purple-800"
  },
  {
    year: "2022",
    title: "Phase 3 Innovation",
    description: "Launched Phase 3 with 4 & 5-bedroom detached and semi-detached duplexes, featuring modern amenities and smart technology.",
    image: "/images/phases/PHASE 3/PHASE 3 (1).jpg",
    phase: "Phase 3",
    color: "from-orange-600 to-orange-800"
  },
  {
    year: "2023",
    title: "Luxury Apartments",
    description: "Introduced serviced studio apartments with smart-home technology, rooftop lounges, and premium amenities.",
    image: "/images/apartments/APARTMENTS (1).jpg",
    phase: "Apartments",
    color: "from-pink-600 to-pink-800"
  },
  {
    year: "2024",
    title: "Smart Homes Revolution",
    description: "Pioneered fully automated luxury homes with cutting-edge smart technology, voice assistants, and 24/7 security.",
    image: "/images/3d-renders/3D RENDER SMART HOME (1).jpg",
    phase: "Smart Homes",
    color: "from-cyan-600 to-cyan-800"
  },
  {
    year: "2024",
    title: "Bungalow Collection",
    description: "Launched Nondon Almonds luxury bungalows, combining traditional elegance with modern luxury finishes.",
    image: "/images/bungalows/BUNGALOW (1).jpg",
    phase: "Bungalows",
    color: "from-red-600 to-red-800"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/3d-renders/nondon-real-estate-3d-aerial.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-red-600/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up drop-shadow-lg">
            About Nondon Real Estate
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto text-balance animate-fade-in-up drop-shadow-md">
            Building dreams, creating communities, and transforming lives through exceptional real estate development
            since 2016.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2016, Nondon Real Estate emerged from a simple yet powerful vision: to redefine luxury
                  living in Enugu and beyond. What started as a dream to create exceptional residential properties has
                  evolved into a leading real estate development company known for innovation, quality, and customer
                  satisfaction.
                </p>
                <p className="text-lg">
                  Over the years, we have successfully delivered multiple phases of luxury estates, introduced smart
                  home technology to the Nigerian market, and expanded our footprint across the South-East region. Our
                  commitment to excellence has earned us the trust of hundreds of families who now call our properties
                  home.
                </p>
                <p className="text-lg">
                  Today, Nondon Real Estate stands as a testament to what's possible when vision meets execution. We
                  continue to push boundaries, embrace innovation, and create spaces that don't just house families but
                  nurture communities and lifestyles.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <Image
                src="/images/3d-renders/nodon-smart-homes-8-3d.jpeg"
                alt="Nondon Real Estate Development"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg animate-scale-in">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  To create exceptional residential and commercial properties that enhance lifestyles, build
                  communities, and deliver lasting value to our clients through innovative design, quality construction,
                  and outstanding service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  To be the leading real estate development company in Nigeria, recognized for transforming communities
                  through innovative, sustainable, and technology-driven properties that set new standards for modern
                  living.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              These principles guide everything we do and shape every decision we make in our journey to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Achievements</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto text-balance">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 transition-transform duration-300 hover:scale-110">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-red-100 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Meet the experienced professionals who drive our vision and ensure excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full object-cover mx-auto transition-transform duration-300 hover:scale-105 shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 text-balance">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              A visual journey through our evolution from foundation to innovation in luxury real estate.
            </p>
          </div>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-200 via-red-400 to-red-600 hidden md:block rounded-full"></div>

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group">
                      <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        {/* Image Background */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${milestone.color} opacity-80`}></div>
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-sm font-bold text-gray-900">{milestone.phase}</span>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="text-3xl font-bold text-white drop-shadow-lg">{milestone.year}</div>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Timeline Dot with Animation */}
                  <div className="hidden md:flex w-2/12 justify-center relative">
                    <div className="relative">
                      <div className={`w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-2xl animate-pulse`}></div>
                      <div className={`absolute inset-0 w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full opacity-30 animate-ping`}></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Journey End Badge */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-2xl">
                <span className="text-lg font-bold">Journey Continues...</span>
                <div className="ml-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Why Choose Nondon Real Estate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Here's what sets us apart in the competitive real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "Over 8 years of successful project delivery with 100% customer satisfaction rate.",
              },
              {
                title: "Quality Assurance",
                description: "We use only premium materials and work with certified contractors and architects.",
              },
              {
                title: "Smart Technology",
                description: "Pioneers in smart home integration, bringing future-ready solutions to your doorstep.",
              },
              {
                title: "Flexible Payment Plans",
                description: "Affordable payment structures designed to make homeownership accessible to everyone.",
              },
              {
                title: "Prime Locations",
                description: "Strategic locations with excellent infrastructure and proximity to essential amenities.",
              },
              {
                title: "After-Sales Support",
                description: "Comprehensive maintenance and support services even after project completion.",
              },
            ].map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-xl text-white/90 mb-8 text-balance">
            Join hundreds of satisfied families who have made Nondon Real Estate their trusted partner in homeownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
