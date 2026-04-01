'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const pains = [
  'Tu publies sur LinkedIn et tu te noies dans 500 CVs non qualifiés',
  'Tu passes 3 semaines à sourcer avant même le premier entretien',
  'Ton ATS accumule les rejets — pas les talents qui acceptent',
  'Les chasseurs tradis te facturent 30% + acompte même sans résultat',
  'Tes équipes RH font du recrutement à temps partiel — et le business souffre',
]

export function CritiqueCurrentWay() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs text-foreground-muted font-medium tracking-widest uppercase block mb-4"
            >
              Le problème
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Ce que tu fais aujourd'hui
              <span className="gradient-text"> n'est pas conçu</span>
              {' '}pour recruter des profils rares
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground-muted text-lg mb-8 leading-relaxed"
            >
              Ce n'est pas ta faute — les outils standards sont faits pour les volumes,
              pas pour la rareté. Les profils que tu cherches ne répondent pas aux annonces.
              Ils attendent qu'on vienne les chercher, avec les bons arguments.
            </motion.p>

            {/* Pain list */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-3"
            >
              {pains.map((pain) => (
                <motion.li
                  key={pain}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-3 text-foreground-muted"
                >
                  <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center mt-0.5 shrink-0">
                    <X size={10} className="text-red-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{pain}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* "Without Muzzo" visual */}
            <div className="glass rounded-2xl p-6 border border-red-400/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-red-400/80 text-xs font-medium uppercase tracking-wider">Sans Muzzo</span>
              </div>

              {/* Fake funnel */}
              <div className="space-y-2">
                {[
                  { label: 'Annonce publiée', value: '500+ candidatures', bad: true },
                  { label: 'CVs qualifiés', value: '~25', bad: true },
                  { label: 'Profils adéquats', value: '3–4', bad: true },
                  { label: 'Acceptation poste', value: '... 6 mois plus tard', bad: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                    <span className="text-foreground-muted text-sm">{item.label}</span>
                    <span className="text-red-400/80 text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Cost badge */}
              <div className="mt-4 p-3 rounded-lg bg-red-400/5 border border-red-400/15 text-center">
                <span className="text-red-400 text-sm font-medium">Coût réel : 3–6 mois de salaire perdu en productivité</span>
              </div>
            </div>

            {/* Arrow decoration */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
