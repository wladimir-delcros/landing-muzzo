'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Info } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'

const steps = [
  {
    number: '01',
    title: 'Publie ta mission en 5 minutes',
    description: 'Decris le poste -- metier, industrie, niveau. Notre algorithme selectionne automatiquement les chasseurs de tetes les plus qualifies parmi plus de 2 000 experts references sur leur taux de reussite reel.',
    objection: "Et si mon poste est tres specialise ?",
    objectionAnswer: "C est exactement la ou Muzzo excelle. Plus le profil est rare, plus notre selection data-driven fait la difference face a un cabinet generaliste.",
    visual: {
      label: 'Mission creee',
      items: ['Lead Developer React', 'Senior 7+ ans Paris', '8 chasseurs selectionnes en 4 min'],
    },
  },
  {
    number: '02',
    title: 'Recois des candidats qualifies en 48h',
    description: 'Tes chasseurs selectionnes se mettent au travail immediatement. Tu recois uniquement des candidats motives et verifies -- pas des CVs tries a la va-vite. En moins de 48 heures.',
    objection: "48h c est vraiment possible pour des profils rares ?",
    objectionAnswer: "Oui -- Etienne Metzger chez Mistral AI a recu son profil en 24h apres 6 mois de recherche solo. Nos chasseurs sont specialistes de ton domaine, ils ont deja les candidats dans leur reseau.",
    visual: {
      label: 'Candidats recus',
      items: ['3 profils qualifies en 24h', 'Match score 92%', 'Motives et disponibles'],
    },
  },
  {
    number: '03',
    title: 'Concentre-toi sur les entretiens, pas le sourcing',
    description: "Tu ne fais plus de sourcing. Tu rencontres directement des talents preselectionnes. Tes equipes RH se recentrent sur leur vraie valeur ajoutee : l evaluation et l integration.",
    objection: "On perd le controle sur le processus ?",
    objectionAnswer: "Non -- tu restes decisionnaire sur chaque etape. Muzzo s occupe du sourcing et de la preselection, tu geres les entretiens et le choix final. C est ta mission, pas la notre.",
    visual: {
      label: 'En entretien',
      items: ['0h de sourcing pour ton equipe', 'Pipeline actif en temps reel', 'Dashboard candidats centralise'],
    },
  },
  {
    number: '04',
    title: 'Embauche -- et paie uniquement au succes',
    description: "A partir de 20% du salaire annuel brut + 490e de frais de service. Aucun acompte, aucun abonnement. Tu paies seulement quand le contrat est signe. Double garantie de remplacement et remboursement incluse.",
    objection: "20% c est moins cher que les cabinets traditionnels ?",
    objectionAnswer: "Oui -- la plupart facturent 25 a 33% + acompte. Avec Muzzo tu paies moins, seulement au succes, avec une double garantie. Et tu economises 3 a 5 mois de productivite perdue.",
    visual: {
      label: 'Mission reussie',
      items: ['Paiement au succes uniquement', 'Double garantie de remplacement', 'Frais : 20% + 490e en cas de succes'],
    },
  },
]

export function SolutionSteps() {
  return (
    <section className="py-24 relative overflow-hidden section-steps" id="processus">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(11,57,175,0.07) 0%, transparent 65%)' }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs text-[#2554D4] font-medium tracking-widest uppercase glass px-4 py-2 rounded-full border border-[#0B39AF]/25 mb-6">
            La solution
          </span>
          <h2 className="section-title text-[#F8F9FF] mb-4">
            Accede au top 1% des talents
            <br />
            <span className="gradient-text">en 4 etapes, en moins de 48h</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Voici comment Muzzo resout tous les problemes que tu viens de lire.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-black text-white/[0.07] leading-none">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#F8F9FF] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="glass-card p-4 border border-[#0B39AF]/15">
                  <div className="flex items-start gap-3">
                    <Info size={15} className="text-[#2554D4] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#2554D4] text-sm font-medium mb-1">
                        {step.objection}
                      </p>
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        {step.objectionAnswer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card p-8 border border-white/[0.08] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2554D4]/50 to-transparent" />

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#2554D4]" />
                    <span className="text-[#2554D4] text-xs font-medium tracking-wider uppercase">
                      {step.visual.label}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {step.visual.items.map((item, j) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 + 0.3 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2554D4] shrink-0" />
                        <span className="text-[#F8F9FF] text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute bottom-4 right-6 text-8xl font-black text-white/[0.03] select-none">
                    {step.number}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20"
        >
          <MagneticButton href="https://muzzo.io" variant="primary" className="px-8 py-4 text-base">
            Lancer ma premiere mission
            <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="https://muzzo.io" variant="ghost" className="px-8 py-4 text-base">
            Voir les tarifs
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
