"use client"

import { motion, HTMLMotionProps, Variants } from "framer-motion"
import { ReactNode } from "react"
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from "@/lib/animations"

interface AnimatedWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "staggerContainer" | "staggerItem"
  delay?: number
  duration?: number
  className?: string
}

const animationMap = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
}

export function AnimatedWrapper({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  duration,
  className = "",
  ...props 
}: AnimatedWrapperProps) {
  const selectedAnimation = animationMap[animation]
  
  const customAnimation = {
    ...selectedAnimation,
    animate: {
      ...selectedAnimation.animate,
      transition: {
        ...selectedAnimation.animate?.transition,
        delay,
        duration,
      },
    },
  }

  return (
    <motion.div
      variants={customAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Specialized animation components
export function FadeInUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="fadeInUp" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function FadeInDown({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="fadeInDown" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function FadeInLeft({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="fadeInLeft" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function FadeInRight({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="fadeInRight" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="scaleIn" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <AnimatedWrapper animation="staggerContainer" className={className}>
      {children}
    </AnimatedWrapper>
  )
}

export function StaggerItem({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedWrapper animation="staggerItem" delay={delay} className={className}>
      {children}
    </AnimatedWrapper>
  )
}
