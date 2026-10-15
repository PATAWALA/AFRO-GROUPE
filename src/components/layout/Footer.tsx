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
import { CurrentYear } from "@/components/ui/CurrentYear";
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
  email: "Afrogroupe@gmail.com",
  phone: "+237 6 57 24 49 36",
  address: "Chine · Turquie · Nigéria · Dubaï · France",
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
      className="relative mt-16 rounded-t-[32px] bg-ag-navy-900 sm:mt-32 sm:rounded-t-[40px]"
    >
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-6 sm:px-8 sm:pt-20 sm:pb-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          {/* --- Colonne Marque --- */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ag-blue-500 to-ag-navy-800 text-white font-bold shadow-blue border border-white/20">
                AG
              </span>
              <span className="text-lg font-extrabold text-white">
                AFRO<span className="text-ag-gold-400"> GROUPE</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm sm:mt-5">
              Vos achats sûrs et sécurisés en Chine, Turquie, Nigéria, Dubaï et
              France. Sourcing, logistique et accompagnement e-commerce
              haut de gamme.
            </p>

            <p className="mt-3 text-xs font-medium text-ag-gold-400 italic sm:mt-4 sm:text-sm">
              « Chaque réussite commence par la volonté d&apos;essayer ! »
            </p>

            <div className="mt-5 flex items-center gap-2 sm:mt-6">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-ag-gold-400 hover:text-ag-gold-400 sm:h-10 sm:w-10"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* --- Colonne Services --- */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-ag-gold-400 sm:text-xs">
              Services
            </h4>
            <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Colonne Formations --- */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-ag-gold-400 sm:text-xs">
              Formations
            </h4>
            <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              {FOOTER_LINKS.formations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Colonne Contact --- */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-ag-gold-400 sm:text-xs">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-xs text-white/70 sm:mt-5 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <FaEnvelope className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ag-gold-400 sm:h-4 sm:w-4" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaPhone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ag-gold-400 sm:h-4 sm:w-4" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ag-gold-400 sm:h-4 sm:w-4" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6">
              <label
                htmlFor="newsletter-email"
                className="text-[11px] font-medium text-white sm:text-xs"
              >
                Recevez nos opportunités sourcing
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 pl-3 transition-colors focus-within:border-ag-gold-400 sm:pl-4">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-transparent text-xs text-white placeholder:text-white/40 focus:outline-none sm:text-sm"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire à la newsletter"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ag-gold-500 text-white transition-transform hover:scale-105 sm:h-9 sm:w-9"
                >
                  <FaPaperPlane className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </button>
              </div>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-[11px] text-ag-gold-400 sm:text-xs"
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
              className="mt-4 border-white/30 text-white hover:bg-white hover:text-ag-navy-900 sm:mt-5"
            >
              WhatsApp direct
            </Button>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 sm:mt-14 sm:gap-4 sm:pt-6 lg:flex-row">
          <p className="text-[11px] text-white/50 sm:text-xs">
            © <CurrentYear /> AFRO GROUPE. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-white/50 sm:gap-5 sm:text-xs">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}