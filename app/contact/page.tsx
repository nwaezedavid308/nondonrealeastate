import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Home, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our sales team",
    contact: "+234 814 332 6274",
    action: "tel:+2348143326274",
    available: "Mon - Sat, 8AM - 6PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses via WhatsApp",
    contact: "+234 814 332 9493",
    action: "https://wa.me/2348143329493",
    available: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us detailed inquiries",
    contact: "info@nondonreals.com",
    action: "mailto:info@nondonreals.com",
    available: "Response within 24hrs",
  },
]

const offices = [
  {
    name: "Head Office - Enugu",
    address: "Independence Layout, Enugu State, Nigeria",
    phone: "+234 814 332 6274",
    email: "info@nondonreals.com",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  },
  {
    name: "Sales Office",
    address: "Enugu State, Nigeria",
    phone: "+234 814 332 9493",
    email: "sales@nondonreals.com",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  },
]

const properties = [
  "Nondon Estate Phase 3",
  "Nondon Luxury Apartment",
  "Nondon Smart Homes",
  "Nondon Almonds",
  "Other/General Inquiry",
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-09%20at%2010.44.52%20AM%20%281%29-1T0joqeNI6PRRbqdCrSs95ELtZ1rUC.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">Contact & Reserve</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-balance animate-fade-in-up">
            Ready to own your dream home? Get in touch with our expert team or reserve your property today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Choose your preferred way to contact us. Our team is ready to assist you with any questions or property
              reservations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110">
                    <method.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-lg font-semibold text-gray-900">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.available}</div>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href={method.action}>Contact Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Inquiry Form */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-red-600" />
                  General Inquiry
                </CardTitle>
                <CardDescription>
                  Have questions about our properties or services? Send us a message and we'll get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="property">Property Details</SelectItem>
                      <SelectItem value="visit">Schedule a Visit</SelectItem>
                      <SelectItem value="payment">Payment Plans</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Property Reservation Form */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Home className="w-6 h-6 text-red-600" />
                  Property Reservation
                </CardTitle>
                <CardDescription>
                  Ready to reserve a property? Fill out this form and our sales team will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="resFirstName">First Name</Label>
                    <Input id="resFirstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resLastName">Last Name</Label>
                    <Input id="resLastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resEmail">Email Address</Label>
                  <Input id="resEmail" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resPhone">Phone Number</Label>
                  <Input id="resPhone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property">Property of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent>
                      {properties.map((property) => (
                        <SelectItem key={property} value={property.toLowerCase().replace(/\s+/g, "-")}>
                          {property}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-150">₦100M - ₦150M</SelectItem>
                      <SelectItem value="150-200">₦150M - ₦200M</SelectItem>
                      <SelectItem value="200-250">₦200M - ₦250M</SelectItem>
                      <SelectItem value="250-300">₦250M - ₦300M</SelectItem>
                      <SelectItem value="300+">₦300M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Purchase Timeline</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="When are you looking to purchase?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="12months+">12+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resMessage">Additional Notes</Label>
                  <Textarea
                    id="resMessage"
                    placeholder="Any specific requirements or questions..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reserve Property
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Visit us at our convenient locations or schedule an appointment with our sales team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>

                  <Separator />

                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
                    >
                      <Link href={`tel:${office.phone}`}>Call Office</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50 bg-transparent transition-all duration-300 hover:scale-105"
                    >
                      <Link href={`mailto:${office.email}`}>Send Email</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-balance">
              Quick answers to common questions about our properties and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the payment structure for properties?",
                answer:
                  "We offer flexible payment plans with 30% initial payment and the remaining 70% spread over 12 months. This makes homeownership more accessible and manageable for our clients.",
              },
              {
                question: "Are the properties ready for immediate occupation?",
                answer:
                  "Our delivery timelines vary by project. Phase 1 and 2 are sold out and delivered. Phase 3, Smart Homes, and other ongoing projects have specific completion dates which our sales team will share with you.",
              },
              {
                question: "Do you provide legal documentation and title transfer?",
                answer:
                  "Yes, we handle all legal documentation including Certificate of Occupancy (C of O), survey plans, and deed of assignment. Our legal team ensures all paperwork is properly processed.",
              },
              {
                question: "Can I schedule a site visit before making a decision?",
                answer:
                  "We encourage site visits and provide guided tours of our properties. Contact us to schedule a convenient time for your visit.",
              },
              {
                question: "What amenities are included in the properties?",
                answer:
                  "Each property comes with comprehensive amenities including 24/7 security, power supply, water, modern fixtures, and project-specific features like swimming pools, gyms, and smart home technology.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Own Your Dream Home?</h2>
          <p className="text-xl text-red-100 mb-8 text-balance">
            Don't wait any longer. Contact us today and let's help you find the perfect property that matches your
            lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="tel:+2348143326274">Call Now: +234 814 332 6274</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="https://wa.me/2348143329493">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
