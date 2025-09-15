"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/nondon-hub", label: "Nondon Hub" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href) ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Reserve Now</Link>
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-900 hover:text-red-600 hover:bg-gray-50">
                  <span className="text-xl font-bold">☰</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] px-8 py-8">
                <div className="flex flex-col space-y-8 mt-12">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="/logo-nondon.png"
                      alt="Nondon Real Estate Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-bold text-lg text-gray-900">Nondon Real Estate</span>
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors px-4 py-3 rounded-lg hover:bg-gray-50 ${
                        isActive(item.href)
                          ? "text-red-600 font-semibold bg-red-50"
                          : "text-gray-600 hover:text-red-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white font-medium mt-8 mx-4 py-3 transition-all duration-300"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Reserve Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
