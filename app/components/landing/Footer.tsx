'use client'

import { motion } from 'framer-motion'
import { Linkedin, MapPin } from 'lucide-react'

const links = {
  Services: [
    { label: 'Employeurs', href: '#employeurs' },
    { label: 'Chasseurs de tête', href: '#chasseurs' },
    { label: 'Lancer une mission', href: 'https://muzzo.io' },
    { label: 'Tarifs', href: '#tarifs' },
  ],
  Ressources: [
    { label: 'Blog recrutement', href: 'https://muzzo.io' },
    { label: 'Podcast', href: 'https://muzzo.io' },
    { label: 'Guide du recrutement', href: 'https://muzzo.io' },
    { label: 'Case studies', href: 'https://muzzo.io' },
  ],
  'À propos': [
    { label: 'Notre équipe', href: 'https://muzzo.io' },
    { label: 'Presse', href: 'https://muzzo.io' },
    { label: 'Carrières', href: 'https://muzzo.io' },
    { label: 'Contact', href: 'https://muzzo.io' },
  ],
}

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-[#F8F9FC] border-t border-[#E5E9F5]">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
              <a href="https://muzzo.io" aria-label="Muzzo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn-jkmcd.nitrocdn.com/sxDCNGWafoWtjSofstwSwfeGkvxmEBtI/assets/images/optimized/rev-d5a4e98/muzzo.io/wp-content/uploads/2023/06/muzzo.svg" alt="Muzzo" width={120} height={36} className="h-8 w-auto" />
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[#4B5563] text-sm leading-relaxed mb-6 max-w-xs">
              Le réseau de chasseurs de têtes N°1 en France. Le top 1% des talents, sélectionné pour vous.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="flex items-start gap-2 text-[#9CA3AF] text-xs mb-4">
              <MapPin size={13} className="text-[#0B39AF] shrink-0 mt-0.5" />
              <span>48 rue de la Bienfaisance, 75008 Paris</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4B5563] hover:text-[#01164D] text-sm transition-colors duration-200 font-medium">
                <Linkedin size={16} className="text-[#0B39AF]" />
                Muzzo sur LinkedIn
              </a>
            </motion.div>
          </div>

          {Object.entries(links).map(([category, items], i) => (
            <div key={category}>
              <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-[#01164D] font-semibold text-sm mb-4">{category}</motion.h4>
              <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="space-y-3">
                {items.map((item) => (
                  <motion.li key={item.label} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                    <a href={item.href} className="text-[#4B5563] hover:text-[#01164D] text-sm transition-colors duration-200">{item.label}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <span>© 2026 Muzzo. Tous droits réservés.</span>
          <div className="flex flex-wrap items-center gap-6">
            {['Politique de confidentialité', 'CGVU', 'Mentions légales', 'Gestion des cookies'].map((item) => (
              <a key={item} href="https://muzzo.io" className="hover:text-[#01164D] transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
