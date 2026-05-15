import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NondonHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/apartments/luxury-apartment-1.jpg')",
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-emerald-800/70 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance drop-shadow-lg">Nondon Hub</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-balance drop-shadow-md">
            Coming Soon - Your Gateway to Exclusive Real Estate Opportunities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Latest News</h2>
            <p className="text-xl text-gray-600">
              Updates from Nondon Real Estate projects, offers, and estate development milestones.
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[420px] bg-slate-950">
                <Image
                  src="/images/news/NONDO REAL ESTATE FLYER.jpg"
                  alt="Nondon Estate Phase 3 available properties flyer"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <CardHeader>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Project Update</p>
                  <CardTitle className="text-3xl text-gray-900">Nondon Estate Phase 3: Available Properties Now Selling</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nondon Estate Phase 3 brings a refined collection of duplex options to New Heaven Extension, Enugu,
                    designed for families and investors who want secure estate living, modern architecture, and premium
                    amenities.
                  </p>
                  <p>
                    The available units include semi-detached 4-bedroom duplexes, 4-bedroom duplexes, 5-bedroom
                    duplexes, and 5-bedroom luxury suites. Pricing starts at ₦140M, with installment options available
                    up to ₦280M for the luxury suite.
                  </p>
                  <p>
                    Located opposite Innoson Warehouse, the estate is positioned for convenient city access while
                    offering the privacy and comfort expected from a modern Nondon residential community.
                  </p>
                  <Button asChild className="bg-emerald-700 hover:bg-emerald-800 text-white">
                    <Link href="/projects/phase-3">View Phase 3 Details</Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
