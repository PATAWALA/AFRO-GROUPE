import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-01",
    slug: "sourcing-produits",
    title: "Sourcing Produits",
    shortDescription:
      "Trouvez le bon fournisseur, au bon prix, avec la bonne qualité.",
    longDescription:
      "Nous identifions, auditons et négocions pour vous les meilleurs fournisseurs en Chine, Turquie et Dubaï. Rapport d'audit complet, échantillons testés et contrats sécurisés.",
    icon: "Search",
    features: [
      "Audit fournisseurs sur site",
      "Négociation prix en volume",
      "Échantillons & prototypes",
      "Rapport qualité détaillé",
    ],
    price: "À partir de 350 €",
    highlighted: true,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=80",
  },
  {
    id: "svc-02",
    slug: "inspection-qualite",
    title: "Inspection Qualité",
    shortDescription:
      "Zéro surprise à la réception. Contrôle avant expédition.",
    longDescription:
      "Nos inspecteurs vérifient chaque lot avant expédition : conformité, quantité, emballage, marquage. Photos et rapport PDF livrés sous 24h.",
    icon: "ShieldCheck",
    features: [
      "Contrôle avant expédition",
      "Rapport photo sous 24h",
      "Test de conformité CE",
      "Gestion des litiges",
    ],
    price: "À partir de 199 €",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80",
  },
  {
    id: "svc-03",
    slug: "logistique-transport",
    title: "Logistique & Transport",
    shortDescription:
      "Fret aérien, maritime ou express. Door-to-door sécurisé.",
    longDescription:
      "Nous gérons l'intégralité de votre chaîne logistique : enlèvement fournisseur, consolidation, dédouanement et livraison finale en France ou en Afrique.",
    icon: "Truck",
    features: [
      "Fret aérien & maritime",
      "Dédouanement inclus",
      "Assurance marchandise",
      "Tracking temps réel",
    ],
    price: "Devis sur mesure",
    highlighted: true,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&q=80",
  },
  {
    id: "svc-04",
    slug: "accompagnement-ecommerce",
    title: "Accompagnement E-commerce",
    shortDescription:
      "Lancez votre marque e-commerce sans les erreurs du débutant.",
    longDescription:
      "De l'idée au premier client : étude de marché, branding, boutique Shopify/WooCommerce, publicité et logistique. Coaching 1:1 avec un expert AG.",
    icon: "Rocket",
    features: [
      "Étude de marché",
      "Création boutique",
      "Stratégie publicitaire",
      "Coaching 1:1",
    ],
    price: "À partir de 899 €",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80",
  },
  {
    id: "svc-05",
    slug: "conformite-juridique",
    title: "Conformité & Juridique",
    shortDescription:
      "Importez en toute légalité : CE, douanes, TVA, contrats.",
    longDescription:
      "Nos juristes partenaires en France et à Dubaï sécurisent vos imports : conformité CE, déclarations douanières, TVA intracommunautaire et contrats fournisseurs.",
    icon: "Scale",
    features: [
      "Conformité CE",
      "Déclarations douanières",
      "Optimisation TVA",
      "Contrats bilingues",
    ],
    price: "Sur devis",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=80",
  },
  {
    id: "svc-06",
    slug: "stockage-securise",
    title: "Stockage Sécurisé",
    shortDescription:
      "Entrepôts sécurisés en Chine, Dubaï et France.",
    longDescription:
      "Stockez vos marchandises dans nos entrepôts partenaires. Gestion des stocks, préparation de commandes et réexpédition à la demande.",
    icon: "Warehouse",
    features: [
      "Entrepôts 3 continents",
      "Gestion de stock",
      "Préparation commandes",
      "Réexpédition à la demande",
    ],
    price: "À partir de 0,50 €/palette/jour",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=80",
  },
];