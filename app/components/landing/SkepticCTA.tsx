'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PlayCircle, FileText, Shield } from 'lucide-react'

const alternatives = [
  {
    icon: PlayCircle,
    title: 'Voir une demo en 3 min',
    desc: 'Comment une mission se lance, et ce que tu recois dans les 48h.',
    cta: 'Regarder la demo',
    href: 'https://muzzo.io',
    accent: false,
  },
  {
    icon: MessageSquare,
    title: 'Parler a un expert Muzzo',
    desc: "Decris ton besoin, on t explique comment nos chasseurs travailleraient sur ton poste.",
    cta: 'Reserver un appel',
    href: 'https://muzzo.io',
    accent: true,
  },
  {
    icon: FileText,
    title: 'Lire le guide du recrutement',
    desc: 'Comment recruter un profil rare en 2026 sans acompte, ni abonnement.',
    cta: 'Telecharger le guide',
    href: 'https://muzzo.io',
    accent: false,
  },
]

const objections = [
  {
    q: "Mon secteur est tres specifique -- vous avez des chasseurs specialises ?",
    a: "Oui. Nous referenons les chasseurs par secteur ET par type de poste. Notre algorithme selectionne ceux avec le meilleur taux de reussite sur ton profil exact.",
  },
  {
    q: "Que se passe-t-il si le candidat part dans les 3 premiers mois ?",
    a: "Double garantie : on remplace gratuitement, ou on rembourse. C est la meilleure garantie du marche -- sans condition.",
  },
  {
    q: "On a deja un cabinet, peut-on lancer une mission en parallele ?",
    a: "Oui, et c est souvent la strategie gagnante. Tu ne paies Muzzo que si l embauche vient de notre reseau. Aucun risque, double chance.",
  },
]

export function SkepticCTA() {
  return (
    <section className="py-24 relative overflow-hidden section-steps" id="tarifs">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(37,84,212,0.08) 0%, transparent 60%)' }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[#F8F9FF] mb-4">
            Pas encore convaincu ?{' '}
            <span className="gradient-text">C est normal.</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Voici trois facons de tester Muzzo sans engagement,
            et les reponses aux objections que tu as peut-etre encore.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {alternatives.map((alt) => (
            <motion.a
              key={alt.title}
              href={alt.href}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className={`block p-8 rounded-[20px] transition-all duration-300 group ${
                alt.accent
                  ? 'glass-card border border-[#0B39AF]/30 hover:border-[#2554D4]/50'
                  : 'glass-card border border-white/[0.07] hover:border-white/15'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${alt.accent ? 'bg-[#0B39AF]/20' : 'bg-white/[0.05]'} flex items-center justify-center mb-4`}>
                <alt.icon size={22} className={alt.accent ? 'text-[#2554D4]' : 'text-[#6B7280]'} />
              </div>
              <h3 className="text-[#F8F9FF] font-semibold text-lg mb-2">{alt.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{alt.desc}</p>
              <span className={`text-sm font-medium group-hover:underline ${alt.accent ? 'text-[#2554D4]' : 'text-[#6B7280]'}`}>
                {alt.cta} -&gt;
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-[#F8F9FF] mb-8"
          >
            Questions frequentes
          </motion.h3>

          <div className="space-y-4">
            {objections.map((obj, i) => (
              <motion.div
                key={obj.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border border-white/[0.07]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Shield size={16} className="text-[#2554D4] shrink-0 mt-0.5" />
                  <p className="text-[#F8F9FF] font-medium">{obj.q}</p>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed pl-7">{obj.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
