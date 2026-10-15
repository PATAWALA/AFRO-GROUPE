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
        "fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3",
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
            className="hidden sm:block rounded-full bg-white px-4 py-2 text-sm font-medium text-ag-navy-900 shadow-card border border-ag-navy-900/5"
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
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-blue-lg sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-ag-gold-500 sm:h-3.5 sm:w-3.5" />
      </motion.a>
    </div>
  );
}