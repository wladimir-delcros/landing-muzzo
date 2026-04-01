'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

interface CounterUpProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function CounterUp({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  decimals = 0,
}: CounterUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const rounded = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  )

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration, ease: 'easeOut' })
      return controls.stop
    }
  }, [isInView, count, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
