'use client'

import { motion } from 'framer-motion'
import { Linkedin, MapPin } from 'lucide-react'
import { MuzzoLogo } from '../ui/MuzzoLogo'

const links = {
  Services: [
    { label: 'Employeurs', href: '#employeurs' },
    { label: 'Chasseurs de tête', href: '#chasseurs' },
    { label: 'Lancer une mission', href: '#mission' },
    { label: 'Tarifs', href: '#tarifs' },
  ],
  Ressources: [
    { label: 'Blog recrutement', href: '#blog' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Guide du recrutement', href: '#guide' },
    { label: 'Case studies', href: '#cases' },
  ],
  'À propos': [
    { label: 'Notre équipe', href: '#team' },
    { label: 'Presse', href: '#presse' },
    { label: 'Carrières', href: '#carrieres' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Radial depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(11, 57, 175, 0.08) 0%, transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <MuzzoLogo width={130} height={24} animate={false} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-xs"
            >
              Le réseau de chasseurs de têtes N°1 en France. Le top 1% des talents,
              sélectionné pour vous.
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-start gap-2 text-foreground-muted text-xs mb-4"
            >
              <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
              <span>48 rue de la Bienfaisance, 75008 Paris</span>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-white text-sm transition-colors duration-200"
              >
                <Linkedin size={16} className="text-accent" />
                Muzzo sur LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items], i) => (
            <div key={category}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-white font-medium text-sm mb-4"
              >
                {category}
              </motion.h4>
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="space-y-3"
              >
                {items.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  >
                    <a
                      href={item.href}
                      className="text-foreground-muted hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <span>© 2026 Muzzo. Tous droits réservés.</span>
          <div className="flex items-center gap-6">
            {['Politique de confidentialité', 'CGVU', 'Mentions légales', 'Gestion des cookies'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
