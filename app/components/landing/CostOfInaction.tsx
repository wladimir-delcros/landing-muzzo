'use client'

import { motion } from 'framer-motion'
import { TrendingDown, DollarSign, Users, Zap } from 'lucide-react'
import { CounterUp } from '../ui/CounterUp'

const costs = [
  { icon: DollarSign, title: 'Coût salarial gaspillé', desc: "Un poste senior vacant, c'est un projet bloqué. À 60k€/an, chaque mois de sourcing raté te coûte 5 000€ de productivité en moins.", value: 5000, suffix: '€', label: 'perdu par mois de poste vacant', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
  { icon: TrendingDown, title: 'Opportunités manquées', desc: "Un développeur senior embauché 4 mois plus tôt, c'est un produit lancé plus vite, des revenus générés plus tôt, une croissance accélérée.", value: 3, suffix: 'x', label: "de retour sur investissement moyen d'une embauche rapide", color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: Users, title: "Turnover de l'équipe", desc: "Les équipes en sous-effectif s'épuisent. Le turnover augmente. Et tu recommences à recruter — avec les mêmes méthodes qui ne fonctionnent pas.", value: 1.5, suffix: 'x', label: 'plus de turnover quand le recrutement dure plus de 3 mois', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100', decimals: 1 },
  { icon: Zap, title: 'Avantage concurrentiel perdu', desc: 'Pendant que tu sources, tes concurrents recrutent. Les profils rares ne restent pas disponibles longtemps.', value: 24, suffix: 'h', label: 'pour recevoir les premiers candidats avec Muzzo', color: 'text-[#0B39AF]', bg: 'bg-[#EEF2FF]', border: 'border-[#E5E9F5]' },
]

export function CostOfInaction() {
  return (
    <section className="py-24 relative overflow-hidden section-alt">
      <div className="blob-1" style={{ top: '20%', right: '-80px' }} />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs text-red-600 font-semibold tracking-widest uppercase bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6">
            <TrendingDown size={12} /> Le vrai coût de l'inaction
          </span>
          <h2 className="section-title text-[#01164D] mb-4">
            Combien te coûte<br /><span className="gradient-text">chaque semaine sans recruter ?</span>
          </h2>
          <p className="text-[#4B5563] text-lg max-w-xl mx-auto">Le statu quo a un prix. Et il est bien plus élevé que tu ne le penses.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {costs.map((cost, i) => (
            <motion.div key={cost.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 border ${cost.border} hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 ${cost.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <cost.icon size={20} className={cost.color} />
                </div>
                <div>
                  <h3 className="text-[#01164D] font-semibold mb-1">{cost.title}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{cost.desc}</p>
                </div>
              </div>
              <div className={`mt-4 p-4 rounded-xl ${cost.bg} border ${cost.border}`}>
                <div className={`text-3xl font-black ${cost.color} mb-1`}>
                  <CounterUp target={cost.value} suffix={cost.suffix} duration={2} decimals={(cost as { decimals?: number }).decimals ?? 0} />
                </div>
                <div className="text-[#9CA3AF] text-xs">{cost.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
