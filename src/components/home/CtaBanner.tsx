"use client";

import * as React from "react";
import { FaWhatsapp, FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function CtaBanner() {
  const [confettiLoaded, setConfettiLoaded] = React.useState(false);

  const fireConfetti = async () => {
    const { default: confetti } = await import("canvas-confetti");
    setConfettiLoaded(true);

    const colors = ["#3b5bdb", "#1a2b6d", "#f59e0b", "#fbbf24", "#ffffff"];

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      scalar: 1.1,
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });
    }, 150);

    setTimeout(() => {
      window.open(
        buildWhatsAppLink({
          message: WHATSAPP_MESSAGES.cta,
          context: "cta-banner",
        }),
        "_blank",
        "noopener,noreferrer"
      );
    }, 400);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ag-navy-900 via-ag-navy-800 to-ag-blue-500 p-6 sm:rounded-[40px] sm:p-10 lg:p-16"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-ag-blue-300/20 blur-[100px] sm:h-72 sm:w-72" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-ag-gold-400/15 blur-[100px] sm:h-72 sm:w-72" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 top-8 h-2 w-2 rounded-full bg-ag-gold-400 sm:right-12 sm:top-12 sm:h-3 sm:w-3"
            />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-8 h-1.5 w-1.5 rounded-full bg-ag-blue-300 sm:bottom-16 sm:left-16 sm:h-2 sm:w-2"
            />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ag-gold-400 backdrop-blur-sm border border-white/20 sm:px-4 sm:py-2 sm:text-xs">
              <FaStar className="h-3 w-3" />
              Prêt à démarrer ?
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              Votre prochain succès{" "}
              <span className="text-gradient-gold">commence maintenant</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base lg:text-lg">
              Un expert AFRO GROUPE vous répond en moins de 2 heures sur WhatsApp.
              Devis gratuit, sans engagement.
            </p>

            <p className="mt-3 text-xs italic text-ag-gold-400 sm:mt-4 sm:text-sm">
              « Chaque réussite commence par la volonté d&apos;essayer ! »
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
              <Button
                variant="gold"
                size="lg"
                onClick={fireConfetti}
                icon={
                  confettiLoaded ? (
                    <FaArrowRight className="h-4 w-4" />
                  ) : (
                    <FaWhatsapp className="h-4 w-4" />
                  )
                }
              >
                {confettiLoaded ? "Redirection…" : "Démarrer mon projet 🎉"}
              </Button>

              <Button
                as="a"
                href="/services"
                variant="outline"
                size="lg"
                icon={<FaArrowRight className="h-4 w-4" />}
                className="border-white text-white hover:bg-white hover:text-ag-navy-900"
              >
                Explorer nos services
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/60 sm:mt-10 sm:gap-x-6 sm:text-xs">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-gold-400" />
                Devis gratuit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-gold-400" />
                Réponse en moins de 2h
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-gold-400" />
                Sans engagement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}