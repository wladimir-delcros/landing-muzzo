'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, AlertCircle, ArrowRight } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { CounterUp } from '../ui/CounterUp'

const stats = [
  {
    icon: TrendingUp, value: 67, suffix: '%',
    label: "d'augmentation des postes vacants depuis 2019",
    color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100',
  },
  {
    icon: Clock, value: 6, suffix: ' mois',
    label: 'en moyenne pour recruter un profil technique senior',
    color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100',
  },
  {
    icon: AlertCircle, value: 82, suffix: '%',
    label: 'des recrutements échouent par manque de spécialisation',
    color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100',
  },
]

export function Problem() {
  return (
    <section className="py-24 relative overflow-hidden section-white" id="employeurs">
      <div className="blob-1" style={{ top: '-80px', right: '-100px' }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs text-red-600 font-semibold tracking-widest uppercase bg-red-50 border border-red-100 px-4 py-2 rounded-full">
            <AlertCircle size={12} />
            La réalité du recrutement en 2026
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title text-center mb-6 text-[#01164D]">
          Honnêtement — <span className="gradient-text">est-ce vraiment</span><br />
          comme ça qu'on doit recruter ?
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[#4B5563] text-lg text-center max-w-2xl mx-auto mb-16">
          Le marché des profils rares est sous tension. Chaque semaine de poste vacant coûte bien plus qu'une mission de chasse. Et pourtant, la plupart des entreprises continuent à sourcer seules.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className={`glass-card p-8 text-center border ${stat.border}`}>
              <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={22} className={stat.color} />
              </div>
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>
                <CounterUp target={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <p className="text-[#4B5563] text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto glass-card p-8 text-center border border-[#E5E9F5]">
          <p className="text-[#01164D] text-lg font-medium mb-2">
            "Nous cherchions un profil depuis 6 mois. Muzzo l'a trouvé en 24 heures."
          </p>
          <p className="text-[#9CA3AF] text-sm">— Etienne Metzger, Head of Talent Acquisition, Mistral AI</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <MagneticButton href="https://muzzo.io" variant="primary" className="px-8 py-4">
            Débloquer ma situation maintenant <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="https://muzzo.io" variant="ghost" className="px-8 py-4">
            Voir comment ça marche
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
