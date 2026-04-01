'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, TrendingUp } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { GradientMesh } from '../ui/GradientMesh'

const risks = [
  'Paiement au succès uniquement — aucun acompte',
  'Mission lancée en moins de 5 minutes',
  'Double garantie de remplacement et remboursement',
  'Premiers candidats en moins de 48h',
  'Annulation libre à tout moment',
]

export function UrgencyCTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="mission">
      <GradientMesh />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 md:p-16 text-center border border-accent/20 relative overflow-hidden"
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

          {/* FOMO badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <TrendingUp size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium">
              Ces entreprises avancent déjà — quand est-ce ton tour ?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Tes concurrents recrutent déjà
            <br />
            <span className="gradient-text">les profils que tu cherches</span>
          </h2>

          <p className="text-foreground-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Mistral AI, Cohabs, Batibig et des centaines d'autres ont déjà accédé aux talents rares.
            Chaque semaine de retard, c'est un candidat de moins sur le marché.
          </p>

          {/* Risk reversal checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10 text-left max-w-3xl mx-auto">
            {risks.map((risk) => (
              <div key={risk} className="flex items-start gap-2">
                <Check size={15} className="text-accent shrink-0 mt-0.5" />
                <span className="text-foreground-muted text-sm">{risk}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>

          <p className="text-foreground-muted/60 text-xs mt-6">
            Aucune carte bancaire requise · Mission publiée en 5 min · Équipe disponible 7j/7
          </p>

          {/* Decorative blobs inside card */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-[60px]" />
        </motion.div>
      </div>
    </section>
  )
}
