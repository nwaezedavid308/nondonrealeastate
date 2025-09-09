import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NondonHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo-nondon.png"
                alt="Nondon Real Estate Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-gray-900">Nondon Real Estate</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-red-600 transition-colors">
                Projects
              </Link>
              <Link href="/gallery" className="text-gray-600 hover:text-red-600 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">
                About
              </Link>
              <Link href="/nondon-hub" className="text-red-600 font-semibold">
                Nondon Hub
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

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Nondon Hub</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-balance">
            Coming Soon - Your Gateway to Exclusive Real Estate Opportunities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stay Tuned</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're working on something special for you. Check back soon for updates.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">Contact Us for More Info</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
