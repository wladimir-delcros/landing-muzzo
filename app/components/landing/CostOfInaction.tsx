'use client'

import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Users, Zap } from 'lucide-react'
import { CounterUp } from '../ui/CounterUp'

const costs = [
  {
    icon: DollarSign,
    title: 'Coût salarial gaspillé',
    desc: 'Un poste senior vacant, c\'est un projet bloqué. À 60k€/an, chaque mois de sourcing raté te coûte 5 000€ de productivité en moins.',
    value: 5000,
    suffix: '€',
    prefix: '',
    label: 'perdu par mois de poste vacant',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: TrendingDown,
    title: 'Opportunités manquées',
    desc: 'Un développeur senior embauché 4 mois plus tôt, c\'est un produit lancé plus vite, des revenus générés plus tôt, une croissance accélérée.',
    value: 3,
    suffix: 'x',
    prefix: '',
    label: 'de retour sur investissement moyen d\'une embauche rapide',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
  },
  {
    icon: Users,
    title: 'Turnover de l\'équipe',
    desc: 'Les équipes en sous-effectif s\'épuisent. Le turnover augmente. Et tu recommences à recruter — avec les mêmes méthodes qui ne fonctionnent pas.',
    value: 1.5,
    suffix: 'x',
    prefix: '',
    label: 'plus de turnover quand le recrutement dure plus de 3 mois',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
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
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export function CostOfInaction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs text-red-400 font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-red-400/20 mb-6">
            <TrendingDown size={12} />
            Le vrai coût de l'inaction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Combien te coûte
            <br />
            <span className="gradient-text">chaque semaine sans recruter ?</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            Le statu quo a un prix. Et il est bien plus élevé que tu ne le penses.
          </p>
        </motion.div>

        {/* Cost grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {costs.map((cost, i) => (
            <motion.div
              key={cost.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-8 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 ${cost.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <cost.icon size={20} className={cost.color} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{cost.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">{cost.desc}</p>
                </div>
              </div>

              {/* Stat */}
              <div className={`mt-4 p-4 rounded-xl ${cost.bg} border border-white/[0.04]`}>
                <div className={`text-3xl font-bold ${cost.color} mb-1`}>
                  <CounterUp
                    target={cost.value}
                    prefix={cost.prefix}
                    suffix={cost.suffix}
                    duration={2}
                    decimals={(cost as { decimals?: number }).decimals ?? 0}
                  />
                </div>
                <div className="text-foreground-muted text-xs">{cost.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
