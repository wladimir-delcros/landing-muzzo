'use client'

import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function TextReveal({ text, className = '', delay = 0, once = true }: TextRevealProps) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      className={className}
      style={{ display: 'inline' }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block"
          style={{ marginRight: '0.28em' }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  )
}
