"use client";

import * as React from "react";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/* ============================================================
   COMPOSANT
   ============================================================ */
export function CtaBanner() {
  const [confettiLoaded, setConfettiLoaded] = React.useState(false);

  /* Lazy-load canvas-confetti (évite de gonfler le bundle initial) */
  const fireConfetti = async () => {
    const { default: confetti } = await import("canvas-confetti");
    setConfettiLoaded(true);

    const colors = ["#10B981", "#22C55E", "#34d399", "#a7f3d0", "#ffffff"];

    // Explosion centrale
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      scalar: 1.1,
    });

    // Effet "côtés"
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

    // Ouvre WhatsApp après un petit délai
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
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] border border-ag-neon-500/20 bg-gradient-to-br from-ag-deep-800 via-ag-deep-900 to-ag-deep-950 p-10 sm:p-16"
        >
          {/* ==== DÉCOR ==== */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {/* Grille */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            {/* Halo néon */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-ag-neon-500/20 blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-ag-neon-400/15 blur-[100px]" />
            {/* Orbes flottants */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-12 top-12 h-3 w-3 rounded-full bg-ag-neon-400/60 shadow-glow"
            />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-ag-neon-500/60 shadow-glow"
            />
          </div>

          {/* ==== CONTENU ==== */}
          <div className="relative mx-auto max-w-3xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-ag-neon-400">
              <Sparkles className="h-3.5 w-3.5" />
              Prêt à démarrer ?
            </span>

            {/* Titre */}
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              <span className="text-gradient-soft">Votre prochain succès</span>{" "}
              <span className="text-gradient-neon">commence maintenant</span>
            </h2>

            {/* Sous-titre */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ag-muted sm:text-lg">
              Un expert AFRO GROUPE vous répond en moins de 2 heures sur WhatsApp.
              Devis gratuit, sans engagement.
            </p>

            {/* Devise */}
            <p className="mt-4 text-sm italic text-ag-neon-400">
              « Chaque réussite commence par la volonté d&apos;essayer ! »
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="neon"
                size="lg"
                glow
                onClick={fireConfetti}
                icon={
                  confettiLoaded ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <MessageCircle className="h-4 w-4" />
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
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explorer nos services
              </Button>
            </div>

            {/* Preuve sociale */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ag-subtle">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-neon-500" />
                Devis gratuit
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-neon-500" />
                Réponse en moins de 2h
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ag-neon-500" />
                Sans engagement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}