"use client";

import * as React from "react";
import Link from "next/link";
import {
  FaSearch,
  FaShieldAlt,
  FaTruck,
  FaRocket,
  FaBalanceScale,
  FaWarehouse,
  FaArrowRight,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const ICONS: Record<string, IconType> = {
  Search: FaSearch,
  ShieldCheck: FaShieldAlt,
  Truck: FaTruck,
  Rocket: FaRocket,
  Scale: FaBalanceScale,
  Warehouse: FaWarehouse,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
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
      className="relative scroll-mt-24 bg-ag-offwhite py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ==== EN-TÊTE ==== */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-gold-100 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ag-gold-500 sm:text-xs">
            Nos Services
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ag-navy-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Tout pour réussir{" "}
            <span className="text-gradient-blue">votre import</span>
          </h2>
          <p className="mt-3 text-sm text-ag-body sm:mt-4 sm:text-base">
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
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon] ?? FaSearch;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Link
                  href={`/services#${service.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl bg-white p-5 shadow-card border border-ag-navy-900/5 transition-all duration-300 sm:rounded-3xl sm:p-6",
                    "hover:-translate-y-1 hover:shadow-blue-lg hover:border-ag-blue-500/30",
                    service.highlighted && "ring-2 ring-ag-gold-400 ring-offset-2"
                  )}
                >
                  {service.highlighted && (
                    <span className="absolute -top-3 right-5 rounded-full bg-ag-gold-500 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:text-[10px]">
                      Populaire
                    </span>
                  )}

                  {/* Icône */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ag-blue-100 text-ag-blue-500 transition-all duration-300 group-hover:bg-ag-blue-500 group-hover:text-white group-hover:scale-105 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-ag-navy-900 sm:mt-5 sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-ag-body sm:text-sm">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-3 space-y-1.5 sm:mt-4">
                    {service.features.slice(0, 2).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[11px] text-ag-muted sm:text-xs"
                      >
                        <span className="h-1 w-1 rounded-full bg-ag-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-5 sm:pt-6">
                    <span className="text-[11px] font-bold text-ag-blue-500 sm:text-xs">
                      {service.price}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ag-blue-100 text-ag-blue-500 transition-all duration-300 group-hover:bg-ag-blue-500 group-hover:text-white">
                      <FaArrowRight className="h-3.5 w-3.5" />
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