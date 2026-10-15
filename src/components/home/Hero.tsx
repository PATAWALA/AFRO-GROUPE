"use client";

import * as React from "react";
import {
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { countries } from "@/data/countries";

const STATS = [
  { value: "5", label: "Pays hubs", icon: FaGlobe },
  { value: "500+", label: "Clients accompagnés", icon: FaStar },
  { value: "100%", label: "Achats sécurisés", icon: FaShieldAlt },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.hero,
    context: "hero",
  });

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-24 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-ag-neon-500/15 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-ag-neon-400/10 blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ag-deep-950 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 sm:px-8"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-ag-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ag-neon-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ag-neon-500" />
            </span>
            Sourcing international · Disponible 6j/7
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-8 text-center text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block text-gradient-soft">
            Vos achats sûrs et sécurisés
          </span>
          <span className="mt-2 block text-gradient-neon">
            en Chine, Turquie, Nigéria,
          </span>
          <span className="mt-2 block text-gradient-neon">
            Dubaï &amp; France
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ag-muted sm:text-lg"
        >
          AFRO GROUPE vous accompagne du sourcing à la livraison finale :
          fournisseurs audités, qualité contrôlée, logistique maîtrisée.
          L&apos;e-commerce international sans les mauvaises surprises.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-5 text-center text-sm italic text-ag-neon-400"
        >
          « Chaque réussite commence par la volonté d&apos;essayer ! »
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="neon"
            size="lg"
            glow
            icon={<FaWhatsapp className="h-4 w-4" />}
          >
            Démarrer mon projet
          </Button>
          <Button
            as="a"
            href="#services"
            variant="outline"
            size="lg"
            icon={<FaArrowRight className="h-4 w-4" />}
          >
            Découvrir nos services
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          {countries.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs font-medium text-ag-ink"
            >
              <span className="text-base leading-none">{c.flag}</span>
              <span>{c.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-3xl glass px-6 py-5 transition-colors hover:border-ag-neon-500/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ag-neon-500/10 text-ag-neon-400 transition-colors group-hover:bg-ag-neon-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-semibold text-ag-ink">{value}</div>
                <div className="text-xs text-ag-muted">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}