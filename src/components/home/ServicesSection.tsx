"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  Truck,
  Rocket,
  Scale,
  Warehouse,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/* Mapping nom d'icône → composant lucide */
const ICONS: Record<string, LucideIcon> = {
  Search,
  ShieldCheck,
  Truck,
  Rocket,
  Scale,
  Warehouse,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* ==== EN-TÊTE ==== */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
            Nos services
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">Tout pour réussir</span>{" "}
            <span className="text-gradient-neon">votre import</span>
          </h2>
          <p className="mt-4 text-base text-ag-muted">
            Du premier devis fournisseur à la livraison chez vos clients,
            AFRO GROUPE couvre toute la chaîne de valeur.
          </p>
        </div>

        {/* ==== GRILLE ==== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon] ?? Search;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/services#${service.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col rounded-3xl glass p-6 transition-all duration-300",
                    "hover:-translate-y-1 hover:border-ag-neon-500/40 hover:shadow-glow",
                    service.highlighted && "border-ag-neon-500/30"
                  )}
                >
                  {/* Badge highlight */}
                  {service.highlighted && (
                    <span className="absolute right-5 top-5 rounded-full bg-ag-neon-500/15 border border-ag-neon-500/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ag-neon-400">
                      Populaire
                    </span>
                  )}

                  {/* Icône */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ag-neon-500/10 text-ag-neon-400 transition-all duration-300 group-hover:bg-ag-neon-500/20 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Titre */}
                  <h3 className="mt-5 text-lg font-semibold text-ag-ink">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-ag-muted">
                    {service.shortDescription}
                  </p>

                  {/* Features (2 max) */}
                  <ul className="mt-4 space-y-1.5">
                    {service.features.slice(0, 2).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-ag-subtle"
                      >
                        <span className="h-1 w-1 rounded-full bg-ag-neon-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer carte */}
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-xs font-medium text-ag-neon-400">
                      {service.price}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ag-muted transition-all duration-300 group-hover:border-ag-neon-500/40 group-hover:bg-ag-neon-500/10 group-hover:text-ag-neon-400">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}