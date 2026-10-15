"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { countries } from "@/data/countries";
import { cn } from "@/lib/utils";

/* ============================================================
   HELPERS
   ============================================================ */
const countryFlag = (code: string) =>
  countries.find((c) => c.code === code)?.flag ?? "🌍";

const AUTOPLAY_MS = 6000;

/* ============================================================
   COMPOSANT
   ============================================================ */
export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const [paused, setPaused] = React.useState(false);

  const total = testimonials.length;
  const current = testimonials[index];

  /* Auto-play */
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <section
      id="temoignages"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* ==== EN-TÊTE ==== */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
            Témoignages
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient-soft">Ils nous font</span>{" "}
            <span className="text-gradient-neon">confiance</span>
          </h2>
          <p className="mt-4 text-base text-ag-muted">
            Plus de 500 clients accompagnés dans 5 pays. Voici ce qu&apos;ils en disent.
          </p>
        </div>

        {/* ==== CARROUSEL ==== */}
        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[340px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl glass p-8 sm:p-12"
              >
                {/* Quote décor */}
                <Quote
                  aria-hidden
                  className="absolute right-8 top-8 h-16 w-16 text-ag-neon-500/10"
                />

                {/* Étoiles */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-ag-neon-400 text-ag-neon-400"
                    />
                  ))}
                </div>

                {/* Contenu */}
                <blockquote className="relative mt-6 text-lg leading-relaxed text-ag-ink sm:text-xl">
                  « {current.content} »
                </blockquote>

                {/* Auteur */}
                <div className="mt-8 flex items-center gap-4">
                  {/* Avatar (initiales) */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-sm font-semibold text-ag-deep-900">
                    {current.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-sm font-semibold text-ag-ink">
                      {current.name}
                      <span aria-hidden className="text-base leading-none">
                        {countryFlag(current.country)}
                      </span>
                    </div>
                    <div className="truncate text-xs text-ag-muted">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==== CONTRÔLES ==== */}
          <div className="mt-8 flex items-center justify-between">
            {/* Précédent */}
            <button
              onClick={() => go(-1)}
              aria-label="Témoignage précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ag-muted transition-colors hover:border-ag-neon-500/40 hover:text-ag-neon-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Indicateurs */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Aller au témoignage ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-8 bg-ag-neon-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>

            {/* Suivant */}
            <button
              onClick={() => go(1)}
              aria-label="Témoignage suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-ag-muted transition-colors hover:border-ag-neon-500/40 hover:text-ag-neon-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}