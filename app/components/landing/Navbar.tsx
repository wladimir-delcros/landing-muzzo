'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'

const links = [
  { label: 'Employeurs', href: '#employeurs' },
  { label: 'Chasseurs de tête', href: '#chasseurs' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#E5E9F5]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="https://muzzo.io" className="flex items-center" aria-label="Muzzo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn-jkmcd.nitrocdn.com/sxDCNGWafoWtjSofstwSwfeGkvxmEBtI/assets/images/optimized/rev-d5a4e98/muzzo.io/wp-content/uploads/2023/06/muzzo.svg"
              alt="Muzzo"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#4B5563] hover:text-[#01164D] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://muzzo.io" className="text-sm text-[#4B5563] hover:text-[#01164D] font-medium transition-colors">
              Se connecter
            </a>
            <MagneticButton href="https://muzzo.io" variant="primary">
              Lancer une mission
            </MagneticButton>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#01164D] p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-2xl text-[#01164D] font-semibold"
              >
                {link.label}
              </motion.a>
            ))}
            <MagneticButton href="https://muzzo.io" variant="primary" className="mt-4">
              Lancer une mission
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
