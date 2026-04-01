'use client'

import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Users, Zap } from 'lucide-react'
import { CounterUp } from '../ui/CounterUp'

const costs = [
  {
    icon: DollarSign,
    title: 'Cout salarial gaspille',
    desc: "Un poste senior vacant, c est un projet bloque. A 60k e/an, chaque mois de sourcing rate te coute 5 000e de productivite en moins.",
    value: 5000,
    suffix: 'e',
    prefix: '',
    label: 'perdu par mois de poste vacant',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/15',
  },
  {
    icon: TrendingDown,
    title: 'Opportunites manquees',
    desc: "Un developpeur senior embauche 4 mois plus tot, c est un produit lance plus vite, des revenus generes plus tot, une croissance acceleree.",
    value: 3,
    suffix: 'x',
    prefix: '',
    label: "de retour sur investissement moyen d une embauche rapide",
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/15',
  },
  {
    icon: Users,
    title: "Turnover de l equipe",
    desc: "Les equipes en sous-effectif s epuisent. Le turnover augmente. Et tu recommences a recruter -- avec les memes methodes qui ne fonctionnent pas.",
    value: 1.5,
    suffix: 'x',
    prefix: '',
    label: 'plus de turnover quand le recrutement dure plus de 3 mois',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/15',
    decimals: 1,
  },
  {
    icon: Zap,
    title: 'Avantage concurrentiel perdu',
    desc: 'Pendant que tu sources, tes concurrents recrutent. Les profils rares ne restent pas disponibles longtemps.',
    value: 24,
    suffix: 'h',
    prefix: '',
    label: 'pour recevoir les premiers candidats avec Muzzo',
    color: 'text-[#2554D4]',
    bg: 'bg-[#0B39AF]/10',
    border: 'border-[#0B39AF]/20',
  },
]

export function CostOfInaction() {
  return (
    <section className="py-24 relative overflow-hidden section-features">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[400px] h-[400px] rounded-full"
        style={{ background: 'rgba(11,57,175,0.10)', filter: 'blur(80px)', opacity: 0.18 }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs text-red-400 font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-red-400/20 mb-6">
            <TrendingDown size={12} />
            Le vrai cout de l inaction
          </span>
          <h2 className="section-title text-[#F8F9FF] mb-4">
            Combien te coute
            <br />
            <span className="gradient-text">chaque semaine sans recruter ?</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Le statu quo a un prix. Et il est bien plus eleve que tu ne le penses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {costs.map((cost, i) => (
            <motion.div
              key={cost.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 border ${cost.border} hover:border-white/12 transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 ${cost.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <cost.icon size={20} className={cost.color} />
                </div>
                <div>
                  <h3 className="text-[#F8F9FF] font-semibold mb-1">{cost.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{cost.desc}</p>
                </div>
              </div>

              <div className={`mt-4 p-4 rounded-xl ${cost.bg} border border-white/[0.04]`}>
                <div className={`text-3xl font-black ${cost.color} mb-1`}>
                  <CounterUp
                    target={cost.value}
                    prefix={cost.prefix}
                    suffix={cost.suffix}
                    duration={2}
                    decimals={(cost as { decimals?: number }).decimals ?? 0}
                  />
                </div>
                <div className="text-[#6B7280] text-xs">{cost.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
