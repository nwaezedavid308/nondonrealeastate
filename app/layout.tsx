import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import NewsletterPopup from '@/components/newsletter-popup'

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Deployed on Netlify',
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
        <NewsletterPopup />
      </body>
    </html>
  )
}

