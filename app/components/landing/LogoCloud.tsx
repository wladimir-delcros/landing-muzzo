'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Mistral AI', abbr: 'MI' },
  { name: 'Cohabs', abbr: 'CO' },
  { name: 'Assuralliance AXA', abbr: 'AX' },
  { name: 'Batibig', abbr: 'BB' },
  { name: 'Liferay', abbr: 'LR' },
  { name: 'Scaleway', abbr: 'SC' },
  { name: 'Pennylane', abbr: 'PL' },
]

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 px-8 opacity-35 hover:opacity-65 transition-opacity duration-300 shrink-0">
      <div className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center border border-white/[0.06]">
        <span className="text-white/70 text-xs font-bold tracking-wider">{abbr}</span>
      </div>
      <span className="text-white/50 font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  )
}

export function LogoCloud() {
  return (
    <section className="py-16 relative overflow-hidden section-logo">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-[#6B7280] text-xs tracking-widest uppercase font-medium">
          Ces entreprises font confiance à Muzzo pour recruter leurs profils rares
        </p>
      </motion.div>

      {/* Marquee container */}
      <div className="relative flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d1628] to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d1628] to-transparent z-10" />

        {/* Track 1 */}
        <div className="flex animate-marquee">
          {logos.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
          {logos.map((logo) => (
            <LogoItem key={logo.name + '-dup'} {...logo} />
          ))}
        </div>
        {/* Track 2 — seamless loop */}
        <div className="flex animate-marquee" aria-hidden>
          {logos.map((logo) => (
            <LogoItem key={logo.name + '-2'} {...logo} />
          ))}
          {logos.map((logo) => (
            <LogoItem key={logo.name + '-3'} {...logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
