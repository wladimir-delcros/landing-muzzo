'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, Zap } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'

const risks = [
  'Paiement au succès uniquement — aucun acompte',
  'Mission lancée en moins de 5 minutes',
  'Double garantie de remplacement et remboursement',
  'Premiers candidats en moins de 48h',
  'Annulation libre à tout moment',
]

export function UrgencyCTA() {
  return (
    <section className="py-32 relative overflow-hidden section-gradient" id="mission">
      {/* Abstract blobs — violet/indigo intense */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'rgba(99, 102, 241, 0.20)', filter: 'blur(80px)', opacity: 0.22 }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'rgba(11, 57, 175, 0.25)', filter: 'blur(80px)', opacity: 0.2 }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37, 84, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)' }}
      />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Glassmorphism card wrapping the whole CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            borderRadius: '24px',
            boxShadow: '0 8px 64px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
            padding: '64px 48px',
          }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.8), transparent)' }}
          />

          {/* Corner glows inside card */}
          <div
            className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full"
            style={{ background: 'rgba(99, 102, 241, 0.15)', filter: 'blur(40px)' }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full"
            style={{ background: 'rgba(11, 57, 175, 0.15)', filter: 'blur(40px)' }}
          />

          {/* FOMO badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-8 rounded-full px-5 py-2"
            style={{
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
            }}
          >
            <TrendingUp size={14} className="text-indigo-400" />
            <span className="text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              Ces entreprises avancent — quand est-ce ton tour ?
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6"
          >
            Tes concurrents recrutent déjà
            <br />
            <span className="gradient-text">les profils que tu cherches</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Mistral AI, Cohabs, Batibig et des centaines d'autres ont déjà accédé aux talents rares.
            Chaque semaine de retard, c'est un candidat de moins sur le marché.
          </motion.p>

          {/* Risk reversal — glassmorphism inner card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-10 mx-auto max-w-3xl rounded-2xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
              {risks.map((risk) => (
                <div key={risk} className="flex items-start gap-2.5">
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(11, 57, 175, 0.25)', border: '1px solid rgba(11, 57, 175, 0.4)' }}
                  >
                    <Check size={11} className="text-[#4d7fff]" />
                  </div>
                  <span className="text-foreground-muted text-sm leading-relaxed">{risk}</span>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href="#contact"
              variant="primary"
              className="px-10 py-5 text-lg font-semibold rounded-full"
            >
              Lancer ma mission maintenant
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              href="#processus"
              variant="ghost"
              className="px-10 py-5 text-lg rounded-full"
            >
              Voir une démo d'abord
            </MagneticButton>
          </motion.div>

          {/* Social proof micro-copy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-foreground-muted/60"
          >
            <span className="flex items-center gap-1.5">
              <Zap size={11} className="text-[#4d7fff]" />
              Mission publiée en 5 min
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={11} className="text-[#4d7fff]" />
              Aucune carte bancaire requise
            </span>
            <span className="flex items-center gap-1.5">
              <Zap size={11} className="text-[#4d7fff]" />
              Équipe disponible 7j/7
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
