"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/2348143329493?text=Hello%20Nondon%20Real%20Estate,%20I%20would%20like%20to%20talk%20to%20an%20agent";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        aria-label="Talk to an agent on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors px-4 py-3"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">Talk to an agent</span>
      </Link>
    </div>
  )
}


