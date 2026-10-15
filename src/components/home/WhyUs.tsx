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
import { cn } from "@/lib/utils";

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
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ag-neon-500/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
            Pourquoi AFRO GROUPE
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">Ce qui nous rend</span>{" "}
            <span className="text-gradient-neon">différents</span>
          </h2>
          <p className="mt-4 text-base text-ag-muted">
            Nous ne vendons pas du rêve. Nous livrons des résultats,
            avec transparence et rigueur, à chaque étape.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className={cn(
                "group relative flex flex-col rounded-3xl glass p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:border-ag-neon-500/40"
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ag-neon-500/10 text-ag-neon-400 transition-all duration-300 group-hover:bg-ag-neon-500/20 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-base font-semibold text-ag-ink">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ag-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}