'use client'

import { motion } from 'framer-motion'
import { Check, TrendingUp } from 'lucide-react'

const risks = [
  'Paiement au succès uniquement — aucun acompte',
  'Mission lancée en moins de 5 minutes',
  'Double garantie de remplacement et remboursement',
  'Premiers candidats en moins de 48h',
  'Annulation libre à tout moment',
]

export function UrgencyCTA() {
  return (
    <section className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, rgba(11,57,175,0.22) 0%, #080e1f 55%, #080e1f 100%)' }} id="mission">
      {/* Blobs */}
      <div className="blob-1" />
      <div className="blob-2" />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,84,212,0.5), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-12 md:p-16 border border-white/[0.08]"
          style={{ boxShadow: '0 8px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)' }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-[20px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(37,84,212,0.7), transparent)' }}
          />

          {/* FOMO badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-6 rounded-full px-5 py-2"
            style={{ background: 'rgba(11,57,175,0.18)', border: '1px solid rgba(37,84,212,0.3)' }}
          >
            <TrendingUp size={14} className="text-[#6B8FFF]" />
            <span className="text-[#6B8FFF] text-xs font-semibold tracking-widest uppercase">
              Recrutement sans risque
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-[#F8F9FF] mb-6 leading-tight"
          >
            Votre prochain talent
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2554D4] to-[#6B8FFF]">
              vous attend déjà.
            </span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#6B7280] mb-10 max-w-xl mx-auto"
          >
            Plus de 2 000 chasseurs de têtes. Premiers candidats en 48h. Payez uniquement à l'acceptation.
          </motion.p>

          {/* Risk reversal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-10 mx-auto max-w-3xl rounded-2xl p-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
              {risks.map((risk) => (
                <div key={risk} className="flex items-start gap-2.5">
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(11,57,175,0.25)', border: '1px solid rgba(37,84,212,0.35)' }}
                  >
                    <Check size={11} className="text-[#6B8FFF]" />
                  </div>
                  <span className="text-[#6B7280] text-sm leading-relaxed">{risk}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://muzzo.io"
              className="px-8 py-4 bg-[#0B39AF] hover:bg-[#2554D4] text-[#F8F9FF] font-bold rounded-xl transition-all duration-200 hover:scale-105 text-center"
              style={{
                boxShadow: '0 0 0 rgba(11,57,175,0)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(11,57,175,0.5)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(11,57,175,0)'
              }}
            >
              Lancer ma mission →
            </a>
            <a
              href="https://muzzo.io"
              className="px-8 py-4 glass-card text-[#F8F9FF] font-medium rounded-xl hover:bg-white/10 transition-all duration-200 text-center border border-white/[0.08]"
            >
              Voir comment ça marche
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="mt-8 text-xs text-[#6B7280]/60"
          >
            Mistral AI, Cohabs, Batibig et des centaines d'autres ont déjà accédé aux talents rares.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
