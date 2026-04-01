'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { GradientMesh } from '../ui/GradientMesh'
import { TextReveal } from '../ui/TextReveal'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <GradientMesh />

      {/* Radial glow center */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(11,57,175,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-foreground-muted font-medium tracking-wide uppercase">
            Le réseau de chasseurs de têtes N°1 en France
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Comment recruter le </span>
          <span className="gradient-text">top 1 %</span>
          <br />
          <TextReveal
            text="sans perdre 6 mois à sourcer"
            className="text-white"
            delay={0.3}
          />
        </h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Lancez votre mission de recrutement, rencontrez des talents rares et{' '}
          <span className="text-white font-medium">payez uniquement à l'acceptation du poste</span>.
          Aucun acompte, aucun abonnement.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <MagneticButton
            href="#mission"
            variant="primary"
            className="px-8 py-4 text-base font-semibold rounded-full"
          >
            Lancer ma première mission
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton
            href="#processus"
            variant="ghost"
            className="px-8 py-4 text-base rounded-full"
          >
            Voir comment ça marche
          </MagneticButton>
        </motion.div>

        {/* Micro-copy sous CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 text-xs text-foreground-muted"
        >
          {['Aucun acompte requis', 'Paiement au succès uniquement', 'Double garantie incluse'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check size={12} className="text-accent" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-16 mx-auto max-w-4xl"
        >
          {/* Card mockup simulating the dashboard */}
          <div className="glass-strong rounded-2xl p-6 border border-white/10 overflow-hidden relative">
            {/* Gradient top edge glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

            {/* Fake dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Mission — Lead Developer</div>
                  <div className="text-foreground-muted text-xs">Publiée il y a 2h · 8 chasseurs sélectionnés</div>
                </div>
              </div>
              <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
                Actif
              </span>
            </div>

            {/* Candidates row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: 'Alexandre M.', role: 'Lead Dev · 8 ans', score: '97', time: '18h' },
                { name: 'Sophie L.', role: 'CTO · 12 ans', score: '94', time: '22h' },
                { name: 'Pierre K.', role: 'Arch. · 6 ans', score: '91', time: '31h' },
              ].map((c) => (
                <div key={c.name} className="glass rounded-xl p-4 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-accent-dark/40 flex items-center justify-center text-white font-semibold text-sm">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{c.name}</div>
                      <div className="text-foreground-muted text-xs">{c.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground-muted">Match score</span>
                    <span className="text-accent font-bold text-sm">{c.score}%</span>
                  </div>
                  <div className="mt-1 text-xs text-foreground-muted">Recu en {c.time}</div>
                </div>
              ))}
            </div>

            {/* Bottom stat bar */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-foreground-muted">Premiers candidats reçus en <strong className="text-white">24h</strong></span>
              <span className="text-xs text-foreground-muted">Taux de réussite <strong className="text-accent">94%</strong></span>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080e1f] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
