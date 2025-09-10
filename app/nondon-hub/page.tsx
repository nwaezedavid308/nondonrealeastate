import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function NondonHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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
