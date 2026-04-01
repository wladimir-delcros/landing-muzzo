'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { TextReveal } from '../ui/TextReveal'

const guarantees = [
  'Aucun acompte requis',
  'Paiement au succès uniquement',
  'Double garantie incluse',
]

const candidates = [
  { name: 'Alexandre M.', role: 'Lead Dev · 8 ans', score: '97', time: '18h' },
  { name: 'Sophie L.', role: 'CTO · 12 ans', score: '94', time: '22h' },
  { name: 'Pierre K.', role: 'Arch. · 6 ans', score: '91', time: '31h' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden section-hero">
      <div className="blob-hero" />
      <div className="blob-1" style={{ top: '-120px', right: '-80px' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#E5E9F5] rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#0B39AF] animate-pulse" />
          <span className="text-xs text-[#0B39AF] font-semibold tracking-wide uppercase">
            Le réseau de chasseurs de têtes N°1 en France
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-title mb-6 text-[#01164D]"
        >
          Comment recruter le{' '}
          <span className="gradient-text">top 1 %</span>
          <br />
          <TextReveal text="sans perdre 6 mois à sourcer" className="text-[#01164D]" delay={0.35} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lancez votre mission de recrutement, rencontrez des talents rares et{' '}
          <span className="text-[#01164D] font-semibold">payez uniquement à l&apos;acceptation du poste</span>.
          Aucun acompte, aucun abonnement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <MagneticButton href="https://muzzo.io" variant="primary" className="px-8 py-4 text-base font-semibold rounded-xl">
            Lancer ma première mission
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="https://muzzo.io" variant="ghost" className="px-8 py-4 text-base rounded-xl">
            Voir comment ça marche
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9CA3AF]"
        >
          {guarantees.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check size={12} className="text-[#0B39AF]" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-16 mx-auto max-w-4xl"
        >
          <div className="glass-card p-6 overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0B39AF]/40 to-transparent" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#0B39AF]" />
                </div>
                <div>
                  <div className="text-[#01164D] text-sm font-medium">Mission — Lead Developer</div>
                  <div className="text-[#9CA3AF] text-xs">Publiée il y a 2h · 8 chasseurs sélectionnés</div>
                </div>
              </div>
              <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full font-medium">Actif</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {candidates.map((c) => (
                <div key={c.name} className="bg-[#F8F9FC] border border-[#E5E9F5] rounded-xl p-4 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#0B39AF] font-bold text-sm">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="text-[#01164D] text-sm font-medium">{c.name}</div>
                      <div className="text-[#9CA3AF] text-xs">{c.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">Match score</span>
                    <span className="text-[#0B39AF] font-bold text-sm">{c.score}%</span>
                  </div>
                  <div className="mt-1 text-xs text-[#9CA3AF]">Reçu en {c.time}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E5E9F5] flex items-center justify-between">
              <span className="text-xs text-[#9CA3AF]">Premiers candidats en <strong className="text-[#01164D]">24h</strong></span>
              <span className="text-xs text-[#9CA3AF]">Taux de réussite <strong className="text-[#0B39AF]">94%</strong></span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
