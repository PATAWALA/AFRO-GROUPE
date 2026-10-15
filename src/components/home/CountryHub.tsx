"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { countries } from "@/data/countries";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Country } from "@/types";

export function CountryHub() {
  const [active, setActive] = React.useState<Country>(countries[0]);

  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.countryHub(active.name),
    context: "country-hub",
  });

  return (
    <section id="pays" className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-blue-100 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ag-blue-500 sm:text-xs">
            <FaMapMarkerAlt className="h-3 w-3" />
            Nos hubs internationaux
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ag-navy-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Un réseau sur{" "}
            <span className="text-gradient-blue">5 continents</span>
          </h2>
          <p className="mt-3 text-sm text-ag-body sm:mt-4 sm:text-base">
            Chaque hub AFRO GROUPE est opéré par une équipe locale qui maîtrise
            le marché, la langue et la logistique du pays.
          </p>
        </div>

        <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2 sm:mt-12 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex items-center justify-start gap-2 sm:flex-wrap sm:justify-center">
            {countries.map((c) => {
              const isActive = active.code === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setActive(c)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm",
                    isActive
                      ? "text-white"
                      : "text-ag-body hover:text-ag-navy-900 bg-white border border-ag-navy-900/8"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="country-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 shadow-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative text-sm leading-none sm:text-base">
                    {c.flag}
                  </span>
                  <span className="relative">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-6 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-0 overflow-hidden rounded-2xl bg-white shadow-card border border-ag-navy-900/5 sm:rounded-3xl lg:grid-cols-5"
            >
              {/* IMAGE */}
              <div className="relative h-48 sm:h-64 lg:col-span-2 lg:h-auto lg:min-h-[400px]">
                <ImageWithFallback
                  src={active.image}
                  alt={`${active.name} — ${active.city}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority={active.code === "CN"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ag-navy-900/70 via-ag-navy-900/20 to-transparent lg:bg-gradient-to-r lg:from-ag-navy-900/60 lg:to-transparent" />

                <div className="absolute bottom-4 left-4 flex items-center gap-3 sm:bottom-6 sm:left-6">
                  <span className="text-4xl drop-shadow-lg sm:text-5xl">
                    {active.flag}
                  </span>
                  <div className="text-white">
                    <div className="text-lg font-extrabold drop-shadow sm:text-2xl">
                      {active.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs drop-shadow sm:text-sm">
                      <FaMapMarkerAlt className="h-3 w-3" />
                      {active.city}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5 sm:p-8 lg:col-span-3 lg:p-10">
                <p className="text-sm leading-relaxed text-ag-body sm:text-base">
                  {active.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-ag-gold-100 px-3 py-1.5 text-[10px] font-semibold text-ag-gold-500 sm:mt-6 sm:px-3.5 sm:text-xs">
                  ⚡ {active.stat}
                </div>

                <div className="mt-5 sm:mt-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-ag-blue-500 sm:text-xs">
                    Spécialités du hub
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-3">
                    {active.specialties.map((s, i) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                        className="flex items-start gap-2.5 text-xs text-ag-navy-900 sm:text-sm"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ag-blue-500 text-white">
                          <FaCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        </span>
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Button
                    as="a"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon={<FaWhatsapp className="h-4 w-4" />}
                  >
                    Sourcer depuis {active.name}
                  </Button>
                  <Button as="a" href="/services" variant="ghost" size="md">
                    Voir nos services
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}