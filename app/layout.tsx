import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'

export const metadata: Metadata = {
  title: 'Nondon Real Estate and Properties',
  description: 'Buy, sell, and invest in real estate with confidence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
