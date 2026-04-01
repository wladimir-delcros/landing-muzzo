'use client'

import { useRef } from 'react'
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
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  const variantClasses = {
    primary: 'bg-[#0B39AF] text-white hover:bg-[#2554D4] border border-[#0B39AF]/80 shadow-sm',
    ghost: 'bg-transparent text-[#4B5563] hover:text-[#01164D] border border-[#E5E9F5] hover:border-[#0B39AF]/30',
    outline: 'bg-transparent text-[#0B39AF] border border-[#0B39AF]/40 hover:bg-[#EEF2FF]',
  }

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'magnetic-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium cursor-pointer select-none transition-colors duration-200',
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  )

  if (href) return <a href={href}>{content}</a>
  return content
}
