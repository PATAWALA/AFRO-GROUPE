import type { WhatsAppConfig, WhatsAppPayload } from "@/types";

/**
 * Configuration centrale AFRO GROUPE.
 * ⚠️ Remplace le numéro par le vrai numéro business (format international, sans "+").
 */
export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phone: "33600000000", // Exemple France — à remplacer par le numéro AG
  defaultMessage:
    "Bonjour AFRO GROUPE 👋, je souhaite obtenir des informations sur vos services.",
  businessName: "AFRO GROUPE",
};

/**
 * Construit un lien WhatsApp cliquable (wa.me) avec message pré-rempli.
 *
 * @example
 * buildWhatsAppLink({ message: "Je veux sourcer en Chine" })
 * // → https://wa.me/33600000000?text=Je%20veux%20sourcer...
 */
export function buildWhatsAppLink(payload: WhatsAppPayload): string {
  const phone = payload.phone ?? WHATSAPP_CONFIG.phone;
  const rawMessage = payload.message || WHATSAPP_CONFIG.defaultMessage;

  // Ajout automatique du contexte si fourni
  const finalMessage = payload.context
    ? `[${payload.context}] ${rawMessage}`
    : rawMessage;

  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Messages contextuels pré-écrits par section du site.
 * Permet un tracking mental clair de la provenance du lead.
 */
export const WHATSAPP_MESSAGES = {
  hero: "Bonjour AFRO GROUPE 👋, je souhaite lancer mon projet de sourcing. Pouvez-vous m'accompagner ?",
  countryHub: (country: string) =>
    `Bonjour AFRO GROUPE 👋, je suis intéressé(e) par votre hub ${country}. Pouvez-vous m'en dire plus ?`,
  service: (serviceTitle: string) =>
    `Bonjour AFRO GROUPE 👋, je souhaite un devis pour le service "${serviceTitle}".`,
  formation: (formationTitle: string) =>
    `Bonjour AFRO GROUPE 👋, je souhaite m'inscrire à la formation "${formationTitle}".`,
  cta: "Bonjour AFRO GROUPE 👋, je souhaite discuter de mon projet e-commerce avec un expert.",
  footer: "Bonjour AFRO GROUPE 👋, je viens de votre site et j'aimerais échanger.",
} as const;

/**
 * Ouvre WhatsApp dans un nouvel onglet (côté client uniquement).
 */
export function openWhatsApp(payload: WhatsAppPayload): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppLink(payload), "_blank", "noopener,noreferrer");
}