'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const pains = [
  'Tu publies sur LinkedIn et tu te noies dans 500 CVs non qualifies',
  'Tu passes 3 semaines a sourcer avant meme le premier entretien',
  'Ton ATS accumule les rejets -- pas les talents qui acceptent',
  'Les chasseurs tradis te facturent 30% + acompte meme sans resultat',
  'Tes equipes RH font du recrutement a temps partiel -- et le business souffre',
]

export function CritiqueCurrentWay() {
  return (
    <section className="py-24 relative overflow-hidden section-features">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(11,57,175,0.12) 0%, transparent 55%)' }}
      />
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'rgba(37,84,212,0.08)', filter: 'blur(80px)' }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs text-[#6B7280] font-medium tracking-widest uppercase block mb-4"
            >
              Le probleme
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title mb-6 text-[#F8F9FF]"
            >
              Ce que tu fais aujourd hui
              <span className="gradient-text"> n est pas concu</span>
              {' '}pour recruter des profils rares
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-lg mb-8 leading-relaxed"
            >
              Ce n est pas ta faute -- les outils standards sont faits pour les volumes,
              pas pour la rarete. Les profils que tu cherches ne repondent pas aux annonces.
              Ils attendent qu on vienne les chercher, avec les bons arguments.
            </motion.p>

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
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                  className="flex items-start gap-3 text-[#6B7280]"
                >
                  <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center mt-0.5 shrink-0">
                    <X size={10} className="text-red-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{pain}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-6 border border-red-400/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-red-400/80 text-xs font-medium uppercase tracking-wider">Sans Muzzo</span>
              </div>

              <div className="space-y-2">
                {[
                  { label: 'Annonce publiee', value: '500+ candidatures' },
                  { label: 'CVs qualifies', value: '~25' },
                  { label: 'Profils adequats', value: '3-4' },
                  { label: 'Acceptation poste', value: '... 6 mois plus tard' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#6B7280] text-sm">{item.label}</span>
                    <span className="text-red-400/80 text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-red-400/5 border border-red-400/15 text-center">
                <span className="text-red-400 text-sm font-medium">Cout reel : 3-6 mois de salaire perdu en productivite</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
