"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          "fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-2 transition-all duration-500 sm:px-4 sm:pt-4",
          scrolled && "sm:pt-3"
        )}
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-5 sm:py-2.5",
            scrolled || mobileOpen
              ? "bg-white/95 backdrop-blur-xl shadow-card border border-ag-navy-900/8"
              : "bg-white/90 backdrop-blur-md border border-ag-navy-900/5"
          )}
        >
          {/* ===== LOGO + NOM (TOUJOURS VISIBLE) ===== */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-2.5 shrink-0"
            aria-label="AFRO GROUPE — Accueil"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 text-[11px] font-bold text-white shadow-blue sm:h-9 sm:w-9 sm:text-sm">
              AG
            </span>
            <span className="text-[13px] font-extrabold tracking-tight text-ag-navy-900 sm:text-sm whitespace-nowrap">
              AFRO<span className="text-ag-blue-500"> GROUPE</span>
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
                        ? "text-ag-blue-500"
                        : "text-ag-body hover:text-ag-navy-900"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-ag-blue-100"
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
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 px-4 py-2 text-xs font-semibold text-white shadow-blue transition-transform hover:scale-105 sm:inline-flex"
            >
              <FaWhatsapp className="h-3.5 w-3.5" />
              WhatsApp
            </a>

            {/* Burger mobile */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ag-navy-900 transition-colors hover:bg-ag-blue-100 lg:hidden"
            >
              {mobileOpen ? (
                <FaTimes className="h-4 w-4" />
              ) : (
                <FaBars className="h-4 w-4" />
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
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-5 px-6 pt-20"
            >
              {/* Logo + nom dans le menu mobile */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mb-4 flex items-center gap-3"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 text-sm font-bold text-white shadow-blue">
                  AG
                </span>
                <span className="text-lg font-extrabold text-ag-navy-900">
                  AFRO<span className="text-ag-blue-500"> GROUPE</span>
                </span>
              </motion.div>

              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-bold text-ag-navy-900 transition-colors hover:text-ag-blue-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-4"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-blue"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Discuter sur WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}