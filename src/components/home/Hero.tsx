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
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { countries } from "@/data/countries";

/* ============================================================
   STATS
   ============================================================ */
const STATS = [
  { value: "5", label: "Pays hubs", icon: FaGlobe },
  { value: "500+", label: "Clients accompagnés", icon: FaStar },
  { value: "100%", label: "Achats sécurisés", icon: FaShieldAlt },
];

/* ============================================================
   ANIMATIONS
   ============================================================ */
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

/* ============================================================
   COMPOSANT
   ============================================================ */
export function Hero() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.hero,
    context: "hero",
  });

  return (
    <section className="relative isolate overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* ============================================================
          DÉCOR DE FOND — Image distante Unsplash + overlay + halos
          ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Image de fond distante (port de conteneurs) */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.08]"
          fallbackGradient="from-ag-navy-900 to-ag-blue-500"
        />

        {/* Overlay blanc dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white" />

        {/* Grille subtile */}
        <div className="absolute inset-0 bg-grid-light opacity-60" />

        {/* Halo bleu central */}
        <div className="absolute left-1/2 top-20 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-ag-blue-300/30 blur-[120px] sm:h-[500px] sm:w-[800px]" />

        {/* Halo doré droite */}
        <div className="absolute right-0 top-1/2 h-52 w-52 rounded-full bg-ag-gold-400/10 blur-[100px] sm:h-72 sm:w-72" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {/* ==== BADGE ==== */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-ag-body shadow-card border border-ag-navy-900/5 sm:px-4 sm:py-2 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ag-blue-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ag-blue-500" />
            </span>
            Sourcing international · Disponible 6j/7
          </div>
        </motion.div>

        {/* ==== TITRE ==== */}
        <motion.h1
          variants={itemVariants}
          className="mt-6 text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-ag-navy-900 sm:mt-8 sm:text-5xl lg:text-6xl"
        >
          <span className="block">Vos achats sûrs</span>
          <span className="block text-gradient-blue">
            et sécurisés en Chine,
          </span>
          <span className="block text-gradient-blue">
            Turquie, Nigéria,
          </span>
          <span className="block">Dubaï &amp; France</span>
        </motion.h1>

        {/* ==== SOUS-TITRE ==== */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-ag-body sm:mt-6 sm:text-base lg:text-lg"
        >
          <strong className="text-ag-navy-900">AFRO GROUPE</strong> vous
          accompagne du sourcing à la livraison finale : fournisseurs audités,
          qualité contrôlée, logistique maîtrisée.
        </motion.p>

        {/* ==== DEVISE ==== */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-center text-xs italic text-ag-blue-500 sm:text-sm"
        >
          « Chaque réussite commence par la volonté d&apos;essayer ! »
        </motion.p>

        {/* ==== CTA ==== */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:items-center sm:px-0"
        >
          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
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

        {/* ==== DRAPEAUX ==== */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-14 sm:gap-3"
        >
          {countries.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-medium text-ag-navy-900 shadow-card border border-ag-navy-900/5 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-xs"
            >
              <span className="text-sm leading-none sm:text-base">{c.flag}</span>
              <span>{c.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ==== STATS ==== */}
        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4"
        >
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-card border border-ag-navy-900/5 transition-all hover:shadow-blue sm:gap-4 sm:rounded-3xl sm:px-6 sm:py-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ag-blue-100 text-ag-blue-500 transition-colors group-hover:bg-ag-blue-500 group-hover:text-white sm:h-11 sm:w-11">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-ag-navy-900 sm:text-2xl">
                  {value}
                </div>
                <div className="text-[11px] text-ag-muted sm:text-xs">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}