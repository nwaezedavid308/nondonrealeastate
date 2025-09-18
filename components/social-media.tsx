"use client"

import Link from "next/link"
import { Facebook, Instagram, ExternalLink } from "lucide-react"

interface SocialMediaProps {
  variant?: "default" | "large" | "floating" | "minimal"
  showLabels?: boolean
  className?: string
}

export function SocialMedia({ 
  variant = "default", 
  showLabels = true, 
  className = "" 
}: SocialMediaProps) {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/Nondonrealestate?mibextid=ZbWKwL",
      icon: Facebook,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50"
    },
    {
      name: "Instagram", 
      href: "https://www.instagram.com/nondonrealestate_properties?igsh=MTJkcWN5bGNqbXBmbA==",
      icon: Instagram,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@nondon.realestate?_t=ZS-8zTk3QmVTnt&_r=1",
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "hover:text-black",
      bgColor: "hover:bg-gray-100"
    }
  ]

  const getVariantClasses = () => {
    switch (variant) {
      case "large":
        return {
          container: "flex flex-col sm:flex-row gap-6 items-center justify-center",
          link: "group flex items-center space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg",
          icon: "w-8 h-8",
          text: "text-lg font-semibold"
        }
      case "floating":
        return {
          container: "fixed top-1/2 right-4 transform -translate-y-1/2 z-40 flex flex-col space-y-4",
          link: "group flex items-center justify-center w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110 hover:shadow-xl",
          icon: "w-6 h-6 text-gray-600 group-hover:text-white",
          text: "hidden"
        }
      case "minimal":
        return {
          container: "flex space-x-3",
          link: "group flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300",
          icon: "w-5 h-5",
          text: "text-sm font-medium"
        }
      default:
        return {
          container: "flex space-x-4",
          link: "group flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-red-50 transition-all duration-300 hover:scale-105",
          icon: "w-6 h-6",
          text: "text-base font-medium"
        }
    }
  }

  const classes = getVariantClasses()

  return (
    <div className={`${classes.container} ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.link} ${social.color} ${social.bgColor}`}
            aria-label={`Follow us on ${social.name}`}
          >
            <IconComponent className={`${classes.icon} transition-colors`} />
            {showLabels && (
              <span className={`${classes.text} transition-colors`}>
                {social.name}
              </span>
            )}
            {variant === "floating" && (
              <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </Link>
        )
      })}
    </div>
  )
}
