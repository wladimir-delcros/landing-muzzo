'use client'

import { motion } from 'framer-motion'
import { X, AlertTriangle } from 'lucide-react'

const competitors = [
  {
    name: 'Jobboards (LinkedIn, Welcome to the Jungle)',
    issues: [
      'Tu reçois des candidatures non qualifiées en masse',
      'Aucun chasseur humain ne va chercher le profil passif',
      'Ton annonce disparaît en 48h sous la concurrence',
      'Le profil rare que tu cherches ne postule pas — il attend',
    ],
    cost: 'De 500€ à 5 000€/mois — sans garantie de résultat',
  },
  {
    name: 'Cabinets de recrutement traditionnels',
    issues: [
      'Acompte de 20–30% à payer avant le premier candidat',
      'Un seul chasseur sur ta mission — pas de réseau spécialisé',
      'Délais de 3 à 6 mois minimum pour les profils seniors',
      'Garantie de remplacement limitée à 3 mois (et payante)',
    ],
    cost: '25–33% du salaire annuel + acompte non remboursable',
  },
]

export function CritiqueCompetitors() {
  return (
    <section className="py-24 relative overflow-hidden section-dark">
      {/* Radial depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(99, 102, 241, 0.10) 0%, transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs text-yellow-400 font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-yellow-400/20 mb-6">
            <AlertTriangle size={12} />
            Pourquoi les alternatives ne fonctionnent pas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Les autres solutions du marché ont{' '}
            <span className="gradient-text">un problème fondamental</span>
          </h2>
          <p className="text-foreground-muted text-lg mt-4 max-w-xl mx-auto">
            Elles ne sont pas conçues pour les profils rares. Elles sont conçues pour les volumes.
          </p>
        </motion.div>

        {/* Competitors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitors.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-8 border border-red-400/10 hover:border-red-400/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={18} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight">{comp.name}</h3>
                  <span className="text-red-400/70 text-xs font-medium mt-1 block">{comp.cost}</span>
                </div>
              </div>

              {/* Issues */}
              <ul className="space-y-3">
                {comp.issues.map((issue) => (
                  <li key={issue} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-red-400" />
                    </div>
                    <span className="text-foreground-muted text-sm leading-relaxed">{issue}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Transition bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground-muted text-lg">
            Il existait un manque évident. C'est pour ça que Muzzo a été créé.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
