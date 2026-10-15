"use client";

import * as React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const FOOTER_LINKS = {
  services: [
    { label: "Sourcing Produits", href: "/services#sourcing-produits" },
    { label: "Inspection Qualité", href: "/services#inspection-qualite" },
    { label: "Logistique & Transport", href: "/services#logistique-transport" },
    { label: "Accompagnement E-commerce", href: "/services#accompagnement-ecommerce" },
    { label: "Conformité & Juridique", href: "/services#conformite-juridique" },
    { label: "Stockage Sécurisé", href: "/services#stockage-securise" },
  ],
  formations: [
    { label: "Importer depuis la Chine", href: "/formations#import-chine" },
    { label: "Lancer son E-commerce", href: "/formations#ecommerce" },
    { label: "Sourcing & Négociation", href: "/formations#sourcing" },
    { label: "Logistique Internationale", href: "/formations#logistique" },
  ],
};

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
];

const CONTACT = {
  email: "contact@afrogroupe.com",
  phone: "+33 6 00 00 00 00",
  address: "Paris · Lagos · Dubaï · Guangzhou · Istanbul",
};

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  };

  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.footer,
    context: "footer",
  });

  return (
    <footer
      id="contact"
      className="relative mt-32 rounded-t-[40px] border-t border-white/10 bg-gradient-to-b from-ag-deep-900 to-ag-deep-950 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-ag-neon-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-8 sm:px-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-ag-deep-900 font-bold shadow-glow">
                AG
              </span>
              <span className="text-lg font-semibold text-ag-ink">
                AFRO<span className="text-ag-neon-400"> GROUPE</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-ag-muted max-w-sm">
              Vos achats sûrs et sécurisés en Chine, Turquie, Nigéria, Dubaï et
              France. Sourcing, logistique et accompagnement e-commerce
              haut de gamme.
            </p>

            <p className="mt-4 text-sm font-medium text-ag-neon-400 italic">
              « Chaque réussite commence par la volonté d&apos;essayer ! »
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ag-muted transition-all hover:border-ag-neon-500/40 hover:text-ag-neon-400 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ag-neon-400">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ag-muted transition-colors hover:text-ag-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ag-neon-400">
              Formations
            </h4>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_LINKS.formations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ag-muted transition-colors hover:text-ag-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ag-neon-400">
              Contact
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-ag-muted">
              <li className="flex items-start gap-2.5">
                <FaEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-ag-neon-400" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-ag-ink transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaPhone className="mt-0.5 h-4 w-4 shrink-0 text-ag-neon-400" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-ag-ink transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-0.5 h-4 w-4 shrink-0 text-ag-neon-400" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6">
              <label
                htmlFor="newsletter-email"
                className="text-xs font-medium text-ag-ink"
              >
                Recevez nos opportunités sourcing
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pl-4 transition-colors focus-within:border-ag-neon-500/50">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-transparent text-sm text-ag-ink placeholder:text-ag-subtle focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire à la newsletter"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ag-neon-400 to-ag-neon-600 text-ag-deep-900 transition-transform hover:scale-105"
                >
                  <FaPaperPlane className="h-3.5 w-3.5" />
                </button>
              </div>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-ag-neon-400"
                >
                  ✅ Merci ! Vous êtes inscrit(e).
                </motion.p>
              )}
            </form>

            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={<FaWhatsapp className="h-3.5 w-3.5" />}
              className="mt-5"
            >
              WhatsApp direct
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ag-subtle">
            © {new Date().getFullYear()} AFRO GROUPE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5 text-xs text-ag-subtle">
            <Link href="/mentions-legales" className="hover:text-ag-ink transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-ag-ink transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-ag-ink transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}