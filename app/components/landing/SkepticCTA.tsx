'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PlayCircle, FileText, Shield } from 'lucide-react'

const alternatives = [
  { icon: PlayCircle, title: 'Voir une démo en 3 min', desc: 'Comment une mission se lance, et ce que tu reçois dans les 48h.', cta: 'Regarder la démo', href: 'https://muzzo.io', accent: false },
  { icon: MessageSquare, title: 'Parler à un expert Muzzo', desc: "Décris ton besoin, on t'explique comment nos chasseurs travailleraient sur ton poste.", cta: 'Réserver un appel', href: 'https://muzzo.io', accent: true },
  { icon: FileText, title: 'Lire le guide du recrutement', desc: 'Comment recruter un profil rare en 2026 sans acompte, ni abonnement.', cta: 'Télécharger le guide', href: 'https://muzzo.io', accent: false },
]

const objections = [
  { q: "Mon secteur est très spécifique — vous avez des chasseurs spécialisés ?", a: "Oui. Nous référençons les chasseurs par secteur ET par type de poste. Notre algorithme sélectionne ceux avec le meilleur taux de réussite sur ton profil exact." },
  { q: "Que se passe-t-il si le candidat part dans les 3 premiers mois ?", a: "Double garantie : on remplace gratuitement, ou on rembourse. C'est la meilleure garantie du marché — sans condition." },
  { q: "On a déjà un cabinet, peut-on lancer une mission en parallèle ?", a: "Oui, et c'est souvent la stratégie gagnante. Tu ne paies Muzzo que si l'embauche vient de notre réseau. Aucun risque, double chance." },
]

export function SkepticCTA() {
  return (
    <section className="py-24 relative overflow-hidden section-white" id="tarifs">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="section-title text-[#01164D] mb-4">Pas encore convaincu ?{' '}<span className="gradient-text">C'est normal.</span></h2>
          <p className="text-[#4B5563] text-lg max-w-xl mx-auto">Voici trois façons de tester Muzzo sans engagement, et les réponses aux objections que tu as peut-être encore.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {alternatives.map((alt) => (
            <motion.a key={alt.title} href={alt.href} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -4 }}
              className={`block p-8 rounded-[20px] transition-all duration-300 group ${alt.accent ? 'glass-card border border-[#0B39AF]/20 hover:border-[#0B39AF]/40 hover:shadow-lg' : 'glass-card border border-[#E5E9F5] hover:border-[#0B39AF]/20 hover:shadow-md'}`}>
              <div className={`w-12 h-12 rounded-xl ${alt.accent ? 'bg-[#EEF2FF]' : 'bg-[#F1F4FD]'} flex items-center justify-center mb-4`}>
                <alt.icon size={22} className={alt.accent ? 'text-[#0B39AF]' : 'text-[#4B5563]'} />
              </div>
              <h3 className="text-[#01164D] font-semibold text-lg mb-2">{alt.title}</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-5">{alt.desc}</p>
              <span className={`text-sm font-semibold group-hover:underline ${alt.accent ? 'text-[#0B39AF]' : 'text-[#4B5563]'}`}>{alt.cta} →</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-center text-[#01164D] mb-8">Questions fréquentes</motion.h3>
          <div className="space-y-4">
            {objections.map((obj, i) => (
              <motion.div key={obj.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 border border-[#E5E9F5]">
                <div className="flex items-start gap-3 mb-3">
                  <Shield size={16} className="text-[#0B39AF] shrink-0 mt-0.5" />
                  <p className="text-[#01164D] font-semibold">{obj.q}</p>
                </div>
                <p className="text-[#4B5563] text-sm leading-relaxed pl-7">{obj.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
