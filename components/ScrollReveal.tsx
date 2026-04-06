'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: ReactNode
  className: string
  delay: number
  yOffset: number
}

export default function ScrollReveal({
  children = null,
  className = '',
  delay = 0,
  yOffset = 20,
}: Partial<ScrollRevealProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
