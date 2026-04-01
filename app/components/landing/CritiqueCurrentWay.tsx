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
    <section className="py-24 relative overflow-hidden section-alt">
      <div className="blob-1" style={{ top: '10%', left: '-100px' }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-xs text-[#9CA3AF] font-semibold tracking-widest uppercase block mb-4">
              Le problème
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title mb-6 text-[#01164D]">
              Ce que tu fais aujourd'hui
              <span className="gradient-text"> n'est pas conçu</span>{' '}
              pour recruter des profils rares
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[#4B5563] text-lg mb-8 leading-relaxed">
              Ce n'est pas ta faute — les outils standards sont faits pour les volumes, pas pour la rareté. Les profils que tu cherches ne répondent pas aux annonces. Ils attendent qu'on vienne les chercher, avec les bons arguments.
            </motion.p>
            <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="space-y-3">
              {pains.map((pain) => (
                <motion.li key={pain} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} className="flex items-start gap-3 text-[#4B5563]">
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mt-0.5 shrink-0">
                    <X size={10} className="text-red-500" />
                  </div>
                  <span className="text-sm leading-relaxed">{pain}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="glass-card p-6 border border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-red-600 text-xs font-semibold uppercase tracking-wider">Sans Muzzo</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: 'Annonce publiée', value: '500+ candidatures' },
                  { label: 'CVs qualifiés', value: '~25' },
                  { label: 'Profils adéquats', value: '3–4' },
                  { label: 'Acceptation poste', value: '... 6 mois plus tard' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9FC] border border-[#E5E9F5]">
                    <span className="text-[#4B5563] text-sm">{item.label}</span>
                    <span className="text-red-500 text-xs font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-100 text-center">
                <span className="text-red-600 text-sm font-semibold">Coût réel : 3–6 mois de salaire perdu en productivité</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
