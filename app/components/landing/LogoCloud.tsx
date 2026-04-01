'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Mistral AI', abbr: 'MI' }, { name: 'Cohabs', abbr: 'CO' },
  { name: 'Assuralliance AXA', abbr: 'AX' }, { name: 'Batibig', abbr: 'BB' },
  { name: 'Liferay', abbr: 'LR' }, { name: 'Scaleway', abbr: 'SC' },
  { name: 'Pennylane', abbr: 'PL' },
]

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 px-8 opacity-50 hover:opacity-80 transition-opacity duration-300 shrink-0">
      <div className="w-9 h-9 rounded-lg bg-[#F1F4FD] flex items-center justify-center border border-[#E5E9F5]">
        <span className="text-[#0B39AF] text-xs font-bold tracking-wider">{abbr}</span>
      </div>
      <span className="text-[#4B5563] font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  )
}

export function LogoCloud() {
  return (
    <section className="py-16 relative overflow-hidden section-logo">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <p className="text-[#9CA3AF] text-xs tracking-widest uppercase font-medium">
          Ces entreprises font confiance à Muzzo pour recruter leurs profils rares
        </p>
      </motion.div>

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee">
          {logos.map((logo) => <LogoItem key={logo.name} {...logo} />)}
          {logos.map((logo) => <LogoItem key={logo.name + '-dup'} {...logo} />)}
        </div>
        <div className="flex animate-marquee" aria-hidden>
          {logos.map((logo) => <LogoItem key={logo.name + '-2'} {...logo} />)}
          {logos.map((logo) => <LogoItem key={logo.name + '-3'} {...logo} />)}
        </div>
      </div>
    </section>
  )
}
