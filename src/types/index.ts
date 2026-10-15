/**
 * AFRO GROUPE — Types globaux
 * Interfaces partagées dans toute l'application.
 */

/* ============================================================
   NAVIGATION
   ============================================================ */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/* ============================================================
   PAYS / HUBS INTERNATIONAUX
   ============================================================ */

export type CountryCode = "CN" | "TR" | "NG" | "AE" | "FR";

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;          // Emoji drapeau
  city: string;          // Ville hub principal
  description: string;
  specialties: string[]; // Spécialités du hub
  stat: string;          // Chiffre clé (ex: "48h expédition")
  accentColor: string;   // Couleur d'accent du pays
  image: string;         // 🆕 URL image (Unsplash ou locale)
}

/* ============================================================
   SERVICES
   ============================================================ */

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;          // Nom d'icône react-icons
  features: string[];
  price?: string;        // Fourchette indicative
  highlighted?: boolean; // Mise en avant
  image: string;         // 🆕 URL image
}

/* ============================================================
   TÉMOIGNAGES
   ============================================================ */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: CountryCode;
  avatar?: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

/* ============================================================
   WHATSAPP
   ============================================================ */

export interface WhatsAppPayload {
  phone?: string;
  message: string;
  context?: string;
}

export interface WhatsAppConfig {
  phone: string;
  defaultMessage: string;
  businessName: string;
}

/* ============================================================
   STATISTIQUES / WHY US
   ============================================================ */

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

/* ============================================================
   FORMATIONS
   ============================================================ */

export interface Formation {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  modules: string[];
  icon: string;
  image?: string;        // 🆕 URL image (optionnel)
}