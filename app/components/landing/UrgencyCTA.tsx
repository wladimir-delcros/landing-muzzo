'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const risks = [
  'Paiement au succès uniquement — aucun acompte',
  'Mission lancée en moins de 5 minutes',
  'Double garantie de remplacement et remboursement',
  'Premiers candidats en moins de 48h',
  'Annulation libre à tout moment',
]

export function UrgencyCTA() {
  return (
    <section className="bg-[#01164D] py-28 relative overflow-hidden" id="mission">
      <div className="blob-hero opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-8">
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-white/10 text-blue-200 border border-white/20 rounded-full">
            Sans acompte · Sans abonnement
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          Votre prochain talent<br /><span className="text-[#6B8FFF]">vous attend déjà.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-blue-200 mb-10">
          2 000+ chasseurs de têtes. Premiers candidats en 48h.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mb-10 mx-auto max-w-2xl rounded-2xl p-6 bg-white/5 border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {risks.map((risk) => (
              <div key={risk} className="flex items-start gap-2.5">
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
                  <Check size={11} className="text-blue-200" />
                </div>
                <span className="text-blue-100 text-sm leading-relaxed">{risk}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <a href="https://muzzo.io" className="inline-block px-10 py-4 bg-white text-[#01164D] font-black rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl text-base">
            Lancer ma mission →
          </a>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 }} className="mt-8 text-xs text-blue-300/70">
          Mistral AI, Cohabs, Batibig et des centaines d’autres ont déjà accédé aux talents rares.
        </motion.p>
      </div>
    </section>
  )
}
