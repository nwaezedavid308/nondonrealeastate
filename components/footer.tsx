import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-balance">Stay Updated</h2>
          <p className="text-gray-300 mb-8 text-balance">
            Be the first to know about new projects and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-gray-900" />
            <Button className="btn-gradient-red text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="/logo-nondon.png"
                  alt="Nondon Real Estate Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-xl">Nondon Real Estate</span>
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted partner for luxury real estate in Enugu and beyond. Building dreams, creating communities
                since 2016.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.facebook.com/Nondonrealestate?mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </Link>
                <Link 
                  href="https://www.instagram.com/nondonrealestate_properties?igsh=MTJkcWN5bGNqbXBmbA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </Link>
                <Link 
                  href="https://www.tiktok.com/@nondon.realestate?_t=ZS-8zTk3QmVTnt&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="text-sm font-medium">TikTok</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-red-500 transition-colors">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-red-500 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Properties</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/projects/phase-3" className="text-gray-300 hover:text-red-500 transition-colors">
                    Nondon Estate Phase 3
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/luxury-apartment"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    Luxury Apartments
                  </Link>
                </li>
                <li>
                  <Link href="/projects/smart-homes" className="text-gray-300 hover:text-red-500 transition-colors">
                    Smart Homes
                  </Link>
                </li>
                <li>
                  <Link href="/projects/nondon-almonds" className="text-gray-300 hover:text-red-500 transition-colors">
                    Nondon Almonds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 mt-0.5 flex-shrink-0 text-sm font-medium">Address:</span>
                  <div>
                    <p className="text-gray-300">No2 Ituku Street Upper Chime</p>
                    <p className="text-gray-300">New Haven, Enugu State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 flex-shrink-0 text-sm font-medium">Phone:</span>
                  <Link href="tel:+2348143326274" className="text-gray-300 hover:text-red-500 transition-colors">
                    +234 814 332 6274
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 flex-shrink-0 text-sm font-medium">Email:</span>
                  <Link
                    href="mailto:info@nondonreals.com"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    info@nondonreals.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-gray-400 text-sm">&copy; 2024 Nondon Real Estate. All rights reserved.</p>
              <p className="text-gray-500 text-xs">
                DESIGN BY <span className="text-white">NIUXVERSE SOLUTIONS</span>, <span className="text-white">BENCHUKSGLOBAL LIMITED</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
