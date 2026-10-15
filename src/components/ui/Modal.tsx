"use client";

import * as React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  // Escape pour fermer
  React.useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Bloquer le scroll body
  React.useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-ag-deep-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "relative z-10 w-full max-w-lg rounded-3xl glass-strong p-6 shadow-card sm:p-8",
              className
            )}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ag-muted transition-colors hover:bg-white/5 hover:text-ag-ink"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            {(title || description) && (
              <div className="mb-5 pr-10">
                {title && (
                  <h2
                    id="modal-title"
                    className="text-xl font-semibold text-ag-ink sm:text-2xl"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-1.5 text-sm text-ag-muted">{description}</p>
                )}
              </div>
            )}

            {/* Content */}
            <div className="text-ag-ink">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}