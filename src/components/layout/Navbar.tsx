"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "Pays", href: "/#pays" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Détection du scroll pour changer le style
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Fermer le menu mobile au changement de route
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.hero,
    context: "navbar",
  });

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-500",
          scrolled ? "pt-3" : "pt-4 sm:pt-6"
        )}
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-strong shadow-card"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* ===== LOGO ===== */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="AFRO GROUPE — Accueil"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-ag-deep-900 font-bold text-sm shadow-glow">
              AG
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-ag-ink sm:block">
              AFRO<span className="text-ag-neon-400"> GROUPE</span>
            </span>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0]) &&
                    item.href !== "/#pays" &&
                    item.href !== "/#contact";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-ag-neon-400"
                        : "text-ag-muted hover:text-ag-ink"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-ag-neon-500/10 border border-ag-neon-500/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ===== ACTIONS ===== */}
          <div className="flex items-center gap-2">
            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="neon"
              size="sm"
              icon={<MessageCircle className="h-3.5 w-3.5" />}
              className="hidden sm:inline-flex"
            >
              WhatsApp
            </Button>

            {/* Burger mobile */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ag-ink transition-colors hover:bg-white/5 lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ag-deep-950/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-6 px-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-semibold text-ag-ink transition-colors hover:text-ag-neon-400"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <Button
                  as="a"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="neon"
                  size="lg"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Discuter sur WhatsApp
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}