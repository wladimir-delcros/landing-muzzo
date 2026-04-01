'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { CounterUp } from '../ui/CounterUp'

const testimonials = [
  {
    quote: "Nous cherchions un profil depuis 6 mois, Muzzo l'a trouvé en 24 heures. C'est la différence entre un outil généraliste et un réseau de vrais spécialistes.",
    name: 'Etienne Metzger',
    title: 'Head of Talent Acquisition',
    company: 'Mistral AI',
    initials: 'EM',
    color: 'from-[#0B39AF]/40 to-[#2554D4]/30',
    metric: '6 mois → 24h',
  },
  {
    quote: "J'ai eu accès à des chasseurs de têtes avec des spécialités variées. Muzzo a mis les bons recruteurs sur les bons postes — une précision que je n'avais jamais vue.",
    name: 'Akesia Doubrere',
    title: 'HR Manager',
    company: 'Cohabs',
    initials: 'AD',
    color: 'from-green-500/30 to-teal-500/30',
    metric: 'Profils spécialisés',
  },
  {
    quote: "Nous avons essayé de nombreuses solutions de recrutement. Avec Muzzo, nous n'avons pas eu le dixième des efforts — pour dix fois les résultats.",
    name: 'Sylvie Denko Aubert',
    title: 'Gérante Associée',
    company: 'Assuralliance AXA',
    initials: 'SA',
    color: 'from-accent/30 to-blue-600/30',
    metric: '10x les résultats',
  },
  {
    quote: "La data-driven approach de Muzzo change tout. Savoir que le chasseur assigné a un taux de réussite de 94% sur mon type de profil — c'est rassurant et efficace.",
    name: 'Thomas Laurent',
    title: 'DRH',
    company: 'Batibig',
    initials: 'TL',
    color: 'from-orange-500/30 to-red-500/30',
    metric: '94% taux de succès',
  },
  {
    quote: "Le modèle pay-at-success m'a convaincu d'essayer. Et le résultat a dépassé mes attentes : profil embauché en 3 semaines, budget maîtrisé, zéro prise de tête.",
    name: 'Marie Blanc',
    title: 'CEO',
    company: 'Liferay France',
    initials: 'MB',
    color: 'from-[#0B39AF]/30 to-cyan-600/30',
    metric: '3 semaines chrono',
  },
  {
    quote: "Le matching algorithmique ne ment pas. Là où des cabinets nous envoyaient des profils approximatifs, Muzzo nous a envoyé trois candidats dont deux auraient pu signer.",
    name: 'Julien Martins',
    title: 'VP Engineering',
    company: 'Scaleway',
    initials: 'JM',
    color: 'from-cyan-500/30 to-blue-500/30',
    metric: '2/3 candidats parfaits',
  },
]

const stats = [
  { value: 2000, suffix: '+', label: 'Chasseurs de têtes référencés' },
  { value: 94, suffix: '%', label: 'Taux de succès moyen' },
  { value: 48, suffix: 'h', label: 'Pour les premiers candidats' },
  { value: 0, suffix: '€', label: 'Acompte requis', prefix: '' },
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" id="chasseurs">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs text-accent font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-accent/20 mb-6">
            <Star size={12} />
            Témoignages clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Pourquoi des centaines d'entreprises
            <br />
            <span className="gradient-text">font confiance à Muzzo</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            Des DRH, CEOs et Heads of Talent qui ont résolu leur problème de recrutement.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-white mb-1">
                <CounterUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix ?? ''}
                  duration={2 + i * 0.2}
                />
              </div>
              <div className="text-foreground-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid glass-strong rounded-2xl p-6 border border-white/[0.06] hover:border-accent/20 transition-all duration-300 group mb-6"
            >
              {/* Metric badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-xs text-accent font-semibold glass px-3 py-1 rounded-full border border-accent/20">
                  {t.metric}
                </span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote size={20} className="text-accent/20 mb-2" />
                <p className="text-foreground-muted text-sm leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.04]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-foreground-muted text-xs">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
