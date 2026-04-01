'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { CounterUp } from '../ui/CounterUp'

const stats = [
  {
    icon: TrendingUp,
    value: 67,
    suffix: '%',
    label: "d'augmentation des postes vacants depuis 2019",
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/15',
  },
  {
    icon: Clock,
    value: 6,
    suffix: ' mois',
    label: 'en moyenne pour recruter un profil technique senior',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/15',
  },
  {
    icon: AlertCircle,
    value: 82,
    suffix: '%',
    label: 'des recrutements échouent par manque de spécialisation',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/15',
  },
]

export function Problem() {
  return (
    <section className="py-24 relative overflow-hidden section-problem" id="employeurs">
      {/* Blob 1 — top right */}
      <div className="blob-1" />

      {/* Radial center subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(11,57,175,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs text-red-400 font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-red-400/20">
            <AlertCircle size={12} />
            La réalité du recrutement en 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-center mb-6 text-[#F8F9FF]"
        >
          Honnêtement — <span className="gradient-text">est-ce vraiment</span>
          <br />
          comme ça qu'on doit recruter ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#6B7280] text-lg text-center max-w-2xl mx-auto mb-16"
        >
          Le marché des profils rares est sous tension. Chaque semaine de poste vacant
          coûte bien plus qu'une mission de chasse. Et pourtant, la plupart des entreprises
          continuent à sourcer seules.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`glass-card p-8 text-center relative overflow-hidden group hover:border-white/15 transition-all duration-300 border ${stat.border}`}
            >
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={22} className={stat.color} />
              </div>
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>
                <CounterUp target={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-8 text-center border border-[#0B39AF]/20"
        >
          <p className="text-[#F8F9FF] text-lg font-medium mb-2">
            "Nous cherchions un profil depuis 6 mois. Muzzo l'a trouvé en 24 heures."
          </p>
          <p className="text-[#6B7280] text-sm">— Etienne Metzger, Head of Talent Acquisition, Mistral AI</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <MagneticButton href="https://muzzo.io" variant="primary" className="px-8 py-4">
            Débloquer ma situation maintenant
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="https://muzzo.io" variant="ghost" className="px-8 py-4">
            Voir comment ça marche
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
