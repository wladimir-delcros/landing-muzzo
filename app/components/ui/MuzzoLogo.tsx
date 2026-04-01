'use client'

import { motion } from 'framer-motion'

interface MuzzoLogoProps {
  width?: number
  height?: number
  animate?: boolean
  className?: string
}

export function MuzzoLogo({
  width = 120,
  height = 22,
  animate: shouldAnimate = false,
  className = '',
}: MuzzoLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Butterfly icon */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16 16C16 16 8 10 4 13C1 15.5 3 22 8 20C11 19 14 17.5 16 16Z" fill="#0B39AF" fillOpacity="0.9" />
        <path d="M16 16C16 16 8 20 6 24C4.5 27 9 30 12 27C14.5 24.5 15.5 20 16 16Z" fill="#2554D4" fillOpacity="0.7" />
        <path d="M16 16C16 16 24 10 28 13C31 15.5 29 22 24 20C21 19 18 17.5 16 16Z" fill="#0B39AF" fillOpacity="0.9" />
        <path d="M16 16C16 16 24 20 26 24C27.5 27 23 30 20 27C17.5 24.5 16.5 20 16 16Z" fill="#2554D4" fillOpacity="0.7" />
        <ellipse cx="16" cy="16" rx="2" ry="7" fill="#01164D" />
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: `${height}px`,
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        muzzo
      </span>
    </div>
  )
}
