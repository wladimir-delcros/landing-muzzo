'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { CounterUp } from '../ui/CounterUp'

const testimonials = [
  {
    quote: "Nous cherchions un profil depuis 6 mois, Muzzo l a trouve en 24 heures. C est la difference entre un outil generaliste et un reseau de vrais specialistes.",
    name: 'Etienne Metzger',
    title: 'Head of Talent Acquisition',
    company: 'Mistral AI',
    initials: 'EM',
    gradientFrom: 'from-[#0B39AF]/40',
    gradientTo: 'to-[#2554D4]/30',
    metric: '6 mois 24h',
  },
  {
    quote: "J ai eu acces a des chasseurs de tetes avec des specialites variees. Muzzo a mis les bons recruteurs sur les bons postes -- une precision que je n avais jamais vue.",
    name: 'Akesia Doubrere',
    title: 'HR Manager',
    company: 'Cohabs',
    initials: 'AD',
    gradientFrom: 'from-green-500/30',
    gradientTo: 'to-teal-500/30',
    metric: 'Profils specialises',
  },
  {
    quote: "Nous avons essaye de nombreuses solutions de recrutement. Avec Muzzo, nous n avons pas eu le dixieme des efforts -- pour dix fois les resultats.",
    name: 'Sylvie Denko Aubert',
    title: 'Gerante Associee',
    company: 'Assuralliance AXA',
    initials: 'SA',
    gradientFrom: 'from-[#2554D4]/30',
    gradientTo: 'to-blue-600/30',
    metric: '10x les resultats',
  },
  {
    quote: "La data-driven approach de Muzzo change tout. Savoir que le chasseur assigne a un taux de reussite de 94% sur mon type de profil -- c est rassurant et efficace.",
    name: 'Thomas Laurent',
    title: 'DRH',
    company: 'Batibig',
    initials: 'TL',
    gradientFrom: 'from-orange-500/30',
    gradientTo: 'to-red-500/30',
    metric: '94% taux de succes',
  },
  {
    quote: "Le modele pay-at-success m a convaincu d essayer. Et le resultat a depasse mes attentes : profil embauche en 3 semaines, budget maitrise, zero prise de tete.",
    name: 'Marie Blanc',
    title: 'CEO',
    company: 'Liferay France',
    initials: 'MB',
    gradientFrom: 'from-[#0B39AF]/30',
    gradientTo: 'to-cyan-600/30',
    metric: '3 semaines chrono',
  },
  {
    quote: "Le matching algorithmique ne ment pas. La ou des cabinets nous envoyaient des profils approximatifs, Muzzo nous a envoye trois candidats dont deux auraient pu signer.",
    name: 'Julien Martins',
    title: 'VP Engineering',
    company: 'Scaleway',
    initials: 'JM',
    gradientFrom: 'from-cyan-500/30',
    gradientTo: 'to-blue-500/30',
    metric: '2/3 candidats parfaits',
  },
]

const stats = [
  { value: 2000, suffix: '+', label: 'Chasseurs de tetes references', prefix: '' },
  { value: 94, suffix: '%', label: 'Taux de succes moyen', prefix: '' },
  { value: 48, suffix: 'h', label: 'Pour les premiers candidats', prefix: '' },
  { value: 0, suffix: 'e', label: 'Acompte requis', prefix: '' },
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden section-testimonials" id="chasseurs">
      <div className="blob-2" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,84,212,0.10) 0%, transparent 60%)' }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs text-[#2554D4] font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-[#0B39AF]/25 mb-6">
            <Star size={12} />
            Temoignages clients
          </span>
          <h2 className="section-title text-[#F8F9FF] mb-4">
            Pourquoi des centaines d entreprises
            <br />
            <span className="gradient-text">font confiance a Muzzo</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Des DRH, CEOs et Heads of Talent qui ont resolu leur probleme de recrutement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass-card p-5 text-center border border-white/[0.06]">
              <div className="text-3xl font-black text-[#F8F9FF] mb-1">
                <CounterUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2 + i * 0.2}
                />
              </div>
              <div className="text-[#6B7280] text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid glass-card p-6 border border-white/[0.07] hover:border-[#2554D4]/25 transition-all duration-300 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#2554D4] fill-[#2554D4]" />
                  ))}
                </div>
                <span className="text-xs text-[#2554D4] font-semibold glass px-3 py-1 rounded-full border border-[#0B39AF]/25">
                  {t.metric}
                </span>
              </div>

              <div className="relative">
                <Quote size={20} className="text-[#2554D4]/20 mb-2" />
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.05]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradientFrom} ${t.gradientTo} flex items-center justify-center text-[#F8F9FF] font-semibold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#F8F9FF] text-sm font-medium">{t.name}</div>
                  <div className="text-[#6B7280] text-xs">
                    {t.title} - {t.company}
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
