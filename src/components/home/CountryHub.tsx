"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
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
    <section id="pays" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
            <FaMapMarkerAlt className="h-3 w-3" />
            Nos hubs internationaux
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">Un réseau sur</span>{" "}
            <span className="text-gradient-neon">5 continents</span>
          </h2>
          <p className="mt-4 text-base text-ag-muted">
            Chaque hub AFRO GROUPE est opéré par une équipe locale qui maîtrise
            le marché, la langue et la logistique du pays.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {countries.map((c) => {
            const isActive = active.code === c.code;
            return (
              <button
                key={c.code}
                onClick={() => setActive(c)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "text-ag-deep-900"
                    : "text-ag-muted hover:text-ag-ink border border-white/10"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="country-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 shadow-glow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative text-base leading-none">{c.flag}</span>
                <span className="relative">{c.name}</span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 rounded-3xl glass p-8 sm:p-10 lg:grid-cols-5"
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4">
                  <span className="text-5xl leading-none">{active.flag}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-ag-ink sm:text-3xl">
                      {active.name}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-ag-neon-400">
                      <FaMapMarkerAlt className="h-3.5 w-3.5" />
                      {active.city}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-ag-muted">
                  {active.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ag-neon-500/10 border border-ag-neon-500/20 px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
                  ⚡ {active.stat}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    as="a"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="neon"
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

              <div className="lg:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ag-neon-400">
                  Spécialités du hub
                </h4>
                <ul className="mt-4 space-y-3">
                  {active.specialties.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                      className="flex items-start gap-2.5 text-sm text-ag-ink"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ag-neon-500/15 text-ag-neon-400">
                        <FaCheck className="h-3 w-3" />
                      </span>
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}