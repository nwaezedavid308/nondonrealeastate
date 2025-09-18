"use client"

import { ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideIn"
  delay?: number
  className?: string
}

export function AnimationWrapper({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  className = "" 
}: AnimationWrapperProps) {
  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `delay-${delay * 100}` : ""
  
  return (
    <div 
      className={`${animationClass} ${delayClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Specialized animation components
export function FadeInUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="fadeInUp" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

export function FadeInDown({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="fadeInDown" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

export function FadeInLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="fadeInLeft" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

export function FadeInRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="fadeInRight" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="scaleIn" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

export function SlideIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimationWrapper animation="slideIn" delay={delay} className={className}>
      {children}
    </AnimationWrapper>
  )
}

// Stagger container for sequential animations
export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`stagger-container ${className}`}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div 
      className={`stagger-item ${className}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  )
}
