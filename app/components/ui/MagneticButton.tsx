'use client'

import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost' | 'outline'
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 300, damping: 20 })
  const y = useSpring(0, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variants = {
    primary: 'bg-[#0B39AF] text-[#F8F9FF] hover:bg-[#2554D4] border border-[#0B39AF]/60',
    ghost: 'bg-transparent text-[#6B7280] hover:text-[#F8F9FF] border border-white/[0.07] hover:border-white/20',
    outline: 'bg-transparent text-[#2554D4] border border-[#0B39AF]/40 hover:bg-[#0B39AF]/10',
  }

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'magnetic-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium cursor-pointer select-none transition-colors duration-200',
        variants[variant],
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
