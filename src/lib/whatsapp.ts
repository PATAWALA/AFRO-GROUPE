import type { WhatsAppConfig, WhatsAppPayload } from "@/types";

/**
 * Configuration centrale AFRO GROUPE.
 * Numéro business : +237 6 57 24 49 36 (Cameroun)
 */
export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phone: "237657244936",
  defaultMessage:
    "Bonjour AFRO GROUPE 👋, je souhaite obtenir des informations sur vos services.",
  businessName: "AFRO GROUPE",
};

export function buildWhatsAppLink(payload: WhatsAppPayload): string {
  const phone = payload.phone ?? WHATSAPP_CONFIG.phone;
  const rawMessage = payload.message || WHATSAPP_CONFIG.defaultMessage;

  const finalMessage = payload.context
    ? `[${payload.context}] ${rawMessage}`
    : rawMessage;

  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${phone}?text=${encoded}`;
}

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

export function openWhatsApp(payload: WhatsAppPayload): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppLink(payload), "_blank", "noopener,noreferrer");
}