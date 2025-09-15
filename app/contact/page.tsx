"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Home, Calendar, CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useFormSubmission } from "@/hooks/useFormSubmission"
import { initEmailJS, testEmailJS } from "@/lib/emailjs"
import { useEffect, useState } from "react"

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
    contact: "nondonprojects@gmail.com",
    action: "mailto:nondonprojects@gmail.com",
    available: "Response within 24hrs",
  },
]

const offices = [
  {
    name: "Head Office - Enugu",
    address: "No2 Ituku Street Upper Chime, New Haven, Enugu State, Nigeria",
    phone: "+234 814 332 6274",
    email: "nondonprojects@gmail.com",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  },
  {
    name: "Sales Office",
    address: "No2 Ituku Street Upper Chime, New Haven, Enugu State, Nigeria",
    phone: "+234 814 332 9493",
    email: "nondonprojects@gmail.com",
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
  // Separate form submission states for each form
  const { 
    isSubmitting: generalSubmitting, 
    submitStatus: generalStatus, 
    handleGeneralInquiry, 
    clearStatus: clearGeneralStatus 
  } = useFormSubmission();
  
  const { 
    isSubmitting: reservationSubmitting, 
    submitStatus: reservationStatus, 
    handlePropertyReservation, 
    clearStatus: clearReservationStatus 
  } = useFormSubmission();
  
  // Form state for General Inquiry
  const [generalForm, setGeneralForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Form state for Property Security (formerly Reservation)
  const [reservationForm, setReservationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    property: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  // Test EmailJS function
  const handleTestEmailJS = async () => {
    console.log('Testing EmailJS...');
    const result = await testEmailJS();
    if (result.success) {
      alert('EmailJS test successful! Check your email.');
    } else {
      alert('EmailJS test failed. Check console for details.');
    }
  };

  // Handle general inquiry form submission
  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleGeneralInquiry(generalForm);
    if (success) {
      setGeneralForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  // Handle secure property form submission
  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handlePropertyReservation(reservationForm);
    if (success) {
      setReservationForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        property: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }
  };

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">Contact & Secure</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-balance animate-fade-in-up">
            Ready to own your dream home? Get in touch with our expert team or secure your property today.
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
            
            {/* Debug Test Button */}
            <div className="mt-6">
              <Button 
                onClick={handleTestEmailJS}
                variant="outline"
                className="bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200"
              >
                🧪 Test EmailJS Connection
              </Button>
            </div>
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
                <form onSubmit={handleGeneralSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={generalForm.firstName}
                        onChange={(e) => setGeneralForm({...generalForm, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={generalForm.lastName}
                        onChange={(e) => setGeneralForm({...generalForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={generalForm.email}
                      onChange={(e) => setGeneralForm({...generalForm, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={generalForm.phone}
                      onChange={(e) => setGeneralForm({...generalForm, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select 
                      value={generalForm.subject}
                      onValueChange={(value) => setGeneralForm({...generalForm, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Information">General Information</SelectItem>
                        <SelectItem value="Property Details">Property Details</SelectItem>
                        <SelectItem value="Schedule a Visit">Schedule a Visit</SelectItem>
                        <SelectItem value="Payment Plans">Payment Plans</SelectItem>
                        <SelectItem value="Customer Support">Customer Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[120px]"
                      value={generalForm.message}
                      onChange={(e) => setGeneralForm({...generalForm, message: e.target.value})}
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {generalStatus.type && (
                    <div className={`p-4 rounded-lg flex items-center gap-2 ${
                      generalStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {generalStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{generalStatus.message}</span>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    disabled={generalSubmitting}
                  >
                    {generalSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Secure Property Form */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Home className="w-6 h-6 text-red-600" />
                  Secure a Property
                </CardTitle>
                <CardDescription>
                  Ready to secure a property? Fill out this form and our sales team will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleReservationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resFirstName">First Name *</Label>
                      <Input 
                        id="resFirstName" 
                        placeholder="Enter your first name" 
                        value={reservationForm.firstName}
                        onChange={(e) => setReservationForm({...reservationForm, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resLastName">Last Name *</Label>
                      <Input 
                        id="resLastName" 
                        placeholder="Enter your last name" 
                        value={reservationForm.lastName}
                        onChange={(e) => setReservationForm({...reservationForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resEmail">Email Address *</Label>
                    <Input 
                      id="resEmail" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={reservationForm.email}
                      onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resPhone">Phone Number *</Label>
                    <Input 
                      id="resPhone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={reservationForm.phone}
                      onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="property">Property of Interest *</Label>
                    <Select 
                      value={reservationForm.property}
                      onValueChange={(value) => setReservationForm({...reservationForm, property: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a property" />
                      </SelectTrigger>
                      <SelectContent>
                        {properties.map((property) => (
                          <SelectItem key={property} value={property}>
                            {property}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select 
                      value={reservationForm.budget}
                      onValueChange={(value) => setReservationForm({...reservationForm, budget: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₦100M - ₦150M">₦100M - ₦150M</SelectItem>
                        <SelectItem value="₦150M - ₦200M">₦150M - ₦200M</SelectItem>
                        <SelectItem value="₦200M - ₦250M">₦200M - ₦250M</SelectItem>
                        <SelectItem value="₦250M - ₦300M">₦250M - ₦300M</SelectItem>
                        <SelectItem value="₦300M+">₦300M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Purchase Timeline *</Label>
                    <Select 
                      value={reservationForm.timeline}
                      onValueChange={(value) => setReservationForm({...reservationForm, timeline: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When are you looking to purchase?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Immediately">Immediately</SelectItem>
                        <SelectItem value="1-3 months">1-3 months</SelectItem>
                        <SelectItem value="3-6 months">3-6 months</SelectItem>
                        <SelectItem value="6-12 months">6-12 months</SelectItem>
                        <SelectItem value="12+ months">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resMessage">Additional Notes</Label>
                    <Textarea
                      id="resMessage"
                      placeholder="Any specific requirements or questions..."
                      className="min-h-[100px]"
                      value={reservationForm.message}
                      onChange={(e) => setReservationForm({...reservationForm, message: e.target.value})}
                    />
                  </div>

                  {/* Status Message */}
                  {reservationStatus.type && (
                    <div className={`p-4 rounded-lg flex items-center gap-2 ${
                      reservationStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {reservationStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{reservationStatus.message}</span>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    disabled={reservationSubmitting}
                  >
                    {reservationSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Secure Property
                      </>
                    )}
                  </Button>
                </form>
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
