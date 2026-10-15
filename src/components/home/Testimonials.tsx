"use client";

import * as React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { countries } from "@/data/countries";
import { cn } from "@/lib/utils";

const countryFlag = (code: string) =>
  countries.find((c) => c.code === code)?.flag ?? "🌍";

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const [paused, setPaused] = React.useState(false);

  const total = testimonials.length;
  const current = testimonials[index];

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
      className="relative scroll-mt-24 bg-ag-offwhite py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-gold-100 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ag-gold-500 sm:text-xs">
            Témoignages
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ag-navy-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Ils nous font{" "}
            <span className="text-gradient-blue">confiance</span>
          </h2>
          <p className="mt-3 text-sm text-ag-body sm:mt-4 sm:text-base">
            Plus de 500 clients accompagnés dans 5 pays. Voici ce qu&apos;ils en disent.
          </p>
        </div>

        <div
          className="relative mt-8 sm:mt-14"
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
                className="relative rounded-2xl bg-white p-6 shadow-card border border-ag-navy-900/5 sm:rounded-3xl sm:p-10 lg:p-12"
              >
                <FaQuoteLeft
                  aria-hidden
                  className="absolute right-5 top-5 h-10 w-10 text-ag-blue-100 sm:right-8 sm:top-8 sm:h-16 sm:w-16"
                />

                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-3.5 w-3.5 text-ag-gold-500 sm:h-4 sm:w-4"
                    />
                  ))}
                </div>

                <blockquote className="relative mt-4 text-base font-medium leading-relaxed text-ag-navy-900 sm:mt-6 sm:text-lg lg:text-xl">
                  « {current.content} »
                </blockquote>

                <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
                    {current.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs font-bold text-ag-navy-900 sm:text-sm">
                      {current.name}
                      <span aria-hidden className="text-base leading-none">
                        {countryFlag(current.country)}
                      </span>
                    </div>
                    <div className="truncate text-[11px] text-ag-muted sm:text-xs">
                      {current.role} · {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between sm:mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ag-navy-800 shadow-card border border-ag-navy-900/5 transition-colors hover:bg-ag-blue-500 hover:text-white sm:h-11 sm:w-11"
            >
              <FaChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
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
                      ? "w-6 bg-ag-blue-500 sm:w-8"
                      : "w-1.5 bg-ag-navy-900/15 hover:bg-ag-navy-900/30"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ag-navy-800 shadow-card border border-ag-navy-900/5 transition-colors hover:bg-ag-blue-500 hover:text-white sm:h-11 sm:w-11"
            >
              <FaChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}