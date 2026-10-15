"use client";

import * as React from "react";
import {
  FaAward,
  FaHeadset,
  FaLock,
  FaBolt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const REASONS = [
  {
    icon: FaLock,
    title: "Paiements sécurisés",
    description:
      "Fonds bloqués jusqu'à validation de la marchandise. Zéro risque d'arnaque fournisseur.",
  },
  {
    icon: FaBolt,
    title: "Délais maîtrisés",
    description:
      "Devis sourcing en 48h, expéditions suivies en temps réel, livraison door-to-door.",
  },
  {
    icon: FaAward,
    title: "Qualité garantie",
    description:
      "Inspection avant expédition, rapport photo sous 24h, remplacement en cas de non-conformité.",
  },
  {
    icon: FaHeadset,
    title: "Support 6j/7",
    description:
      "Une équipe francophone dédiée, joignable par WhatsApp, email ou téléphone.",
  },
  {
    icon: FaChartLine,
    title: "Prix optimisés",
    description:
      "Négociation en volume, mise en concurrence fournisseurs, -30% en moyenne sur vos coûts.",
  },
  {
    icon: FaUsers,
    title: "Réseau local",
    description:
      "Des équipes sur place en Chine, Turquie, Nigéria, Dubaï et France. Pas d'intermédiaire.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function WhyUs() {
  return (
    <section
      id="pourquoi-nous"
      className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-blue-100 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ag-blue-500 sm:text-xs">
            Pourquoi AFRO GROUPE
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ag-navy-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Ce qui nous rend{" "}
            <span className="text-gradient-blue">différents</span>
          </h2>
          <p className="mt-3 text-sm text-ag-body sm:mt-4 sm:text-base">
            Nous ne vendons pas du rêve. Nous livrons des résultats,
            avec transparence et rigueur, à chaque étape.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {REASONS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white p-5 shadow-card border border-ag-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-lg hover:border-ag-blue-500/30 sm:rounded-3xl sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ag-blue-100 text-ag-blue-500 transition-all duration-300 group-hover:bg-ag-blue-500 group-hover:text-white group-hover:scale-105 sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <h3 className="mt-4 text-base font-bold text-ag-navy-900 sm:mt-5">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-ag-body sm:text-sm">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}