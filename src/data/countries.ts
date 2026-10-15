import type { Country } from "@/types";

export const countries: Country[] = [
  {
    code: "CN",
    name: "Chine",
    flag: "🇨🇳",
    city: "Guangzhou / Shenzhen",
    description:
      "Notre hub historique pour le sourcing produits, l'inspection qualité et la consolidation de conteneurs.",
    specialties: [
      "Sourcing produits",
      "Inspection qualité",
      "Consolidation conteneurs",
      "Négociation fournisseurs",
    ],
    stat: "48h pour un devis sourcing",
    accentColor: "#ef4444",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
  },
  {
    code: "TR",
    name: "Turquie",
    flag: "🇹🇷",
    city: "Istanbul",
    description:
      "Le carrefour textile et cosmétique entre l'Europe et l'Asie. Délais courts, qualité premium.",
    specialties: [
      "Textile & prêt-à-porter",
      "Cosmétiques",
      "Délais courts UE",
      "Petites séries",
    ],
    stat: "7 jours livraison UE",
    accentColor: "#dc2626",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80&auto=format&fit=crop",
  },
  {
    code: "NG",
    name: "Nigéria",
    flag: "🇳🇬",
    city: "Lagos",
    description:
      "Notre ancrage africain : distribution locale, partenariats B2B et logistique intra-africaine.",
    specialties: [
      "Distribution Afrique de l'Ouest",
      "Partenariats B2B",
      "Logistique intra-africaine",
      "Import-export",
    ],
    stat: "Réseau 12 pays africains",
    accentColor: "#16a34a",
    image:
      "https://images.unsplash.com/photo-1572957274438-7b1c62e5c4b8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    code: "AE",
    name: "Dubaï",
    flag: "🇦🇪",
    city: "Dubaï / Jebel Ali",
    description:
      "Plateforme de réexportation stratégique. Dédouanement rapide, zone franche, connexion mondiale.",
    specialties: [
      "Réexportation",
      "Zone franche Jebel Ali",
      "Dédouanement rapide",
      "Stockage sécurisé",
    ],
    stat: "Zone franche 24/7",
    accentColor: "#0891b2",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    code: "FR",
    name: "France",
    flag: "🇫🇷",
    city: "Paris",
    description:
      "Notre siège européen : accompagnement juridique, conformité CE et dernière mile de livraison.",
    specialties: [
      "Conformité CE",
      "Accompagnement juridique",
      "Dernière mile",
      "Service client UE",
    ],
    stat: "Support FR 6j/7",
    accentColor: "#2563eb",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop",
  },
];