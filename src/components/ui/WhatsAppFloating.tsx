"use client";

import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppFloatingProps {
  phone?: string;
  message?: string;
  context?: string;
  className?: string;
}

export function WhatsAppFloating({
  phone,
  message = WHATSAPP_MESSAGES.cta,
  context = "floating",
  className,
}: WhatsAppFloatingProps) {
  const [hovered, setHovered] = React.useState(false);
  const href = buildWhatsAppLink({ phone, message, context });

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block rounded-full glass-strong px-4 py-2 text-sm font-medium text-ag-ink shadow-card"
          >
            Discutons sur WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter AFRO GROUPE sur WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-ag-deep-900 shadow-glow-lg animate-pulse-glow"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-ag-neon-400 opacity-40 animate-ping" />
        <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ag-deep-900 bg-green-400" />
      </motion.a>
    </div>
  );
}