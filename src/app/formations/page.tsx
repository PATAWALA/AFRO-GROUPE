import type { Metadata } from "next";
import {
  FaGraduationCap,
  FaClock,
  FaChartBar,
  FaCheck,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { Formation } from "@/types";

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Formations",
  description:
    "Formations AFRO GROUPE : import depuis la Chine, lancement e-commerce, sourcing, négociation et logistique internationale.",
};

/* ============================================================
   DONNÉES FORMATIONS
   ============================================================ */
const formations: Formation[] = [
  {
    id: "f-01",
    slug: "import-chine",
    title: "Importer depuis la Chine",
    description:
      "Maîtrisez toute la chaîne : recherche fournisseur, négociation, paiement sécurisé, dédouanement et réception.",
    duration: "6 semaines · 12h de cours",
    level: "Débutant",
    modules: [
      "Trouver un fournisseur fiable (Alibaba, 1688, salons)",
      "Négocier prix & MOQ",
      "Paiement sécurisé (LC, escrow, virement)",
      "Dédouanement & TVA",
      "Réception et contrôle qualité",
    ],
    icon: "GraduationCap",
  },
  {
    id: "f-02",
    slug: "ecommerce",
    title: "Lancer son E-commerce",
    description:
      "De l'idée au premier client : étude de marché, branding, boutique, publicité et logistique.",
    duration: "8 semaines · 16h de cours",
    level: "Débutant",
    modules: [
      "Étude de marché & niche",
      "Création boutique Shopify / WooCommerce",
      "Branding & identité visuelle",
      "Publicité Meta & TikTok",
      "Logistique & service client",
    ],
    icon: "Rocket",
  },
  {
    id: "f-03",
    slug: "sourcing",
    title: "Sourcing & Négociation",
    description:
      "Devenez un pro du sourcing : audit fournisseurs, négociation en volume, gestion des litiges.",
    duration: "4 semaines · 10h de cours",
    level: "Intermédiaire",
    modules: [
      "Audit fournisseur sur site",
      "Négociation prix & conditions",
      "Gestion des échantillons",
      "Contrats bilingues",
      "Gestion des litiges",
    ],
    icon: "Search",
  },
  {
    id: "f-04",
    slug: "logistique",
    title: "Logistique Internationale",
    description:
      "Maîtrisez le fret aérien, maritime et express. Optimisez vos coûts et vos délais.",
    duration: "5 semaines · 12h de cours",
    level: "Avancé",
    modules: [
      "Fret aérien vs maritime vs express",
      "Incoterms 2020",
      "Assurance marchandise",
      "Optimisation des coûts",
      "Tracking & gestion des retards",
    ],
    icon: "Truck",
  },
];

/* ============================================================
   PAGE
   ============================================================ */
export default function FormationsPage() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.cta,
    context: "formations-page",
  });

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-light opacity-50" />
          <div className="absolute left-1/2 top-20 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-ag-blue-300/30 blur-[120px] sm:h-[400px] sm:w-[700px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-gold-100 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ag-gold-500 sm:text-xs">
            <FaGraduationCap className="h-3 w-3" />
            Formations AFRO GROUPE
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ag-navy-900 sm:mt-6 sm:text-5xl lg:text-6xl">
            Apprenez à importer{" "}
            <span className="text-gradient-blue">comme un pro</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ag-body sm:mt-5 sm:text-base lg:text-lg">
            Des formations concrètes, animées par des experts qui opèrent
            au quotidien en Chine, Turquie, Nigéria, Dubaï et France.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<FaWhatsapp className="h-4 w-4" />}
            >
              Réserver ma place
            </Button>
            <Button
              as="a"
              href="/services"
              variant="outline"
              size="lg"
              icon={<FaArrowRight className="h-4 w-4" />}
            >
              Voir nos services
            </Button>
          </div>
        </div>
      </section>

      {/* ===== GRILLE FORMATIONS ===== */}
      <section className="relative bg-ag-offwhite pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {formations.map((f, i) => (
              <article
                key={f.id}
                id={f.slug}
                className="scroll-mt-24 group relative flex flex-col rounded-2xl bg-white p-5 shadow-card border border-ag-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-lg sm:scroll-mt-28 sm:rounded-3xl sm:p-8"
              >
                {/* Numéro décor */}
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-ag-blue-100 transition-colors group-hover:text-ag-blue-300 sm:right-6 sm:top-6 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="relative pr-16 text-lg font-extrabold text-ag-navy-900 sm:pr-20 sm:text-xl lg:text-2xl">
                  {f.title}
                </h2>

                <div className="relative mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ag-offwhite border border-ag-navy-900/8 px-2.5 py-1 text-[10px] text-ag-body sm:px-3 sm:text-xs">
                    <FaClock className="h-3 w-3" />
                    {f.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ag-blue-100 px-2.5 py-1 text-[10px] font-bold text-ag-blue-500 sm:px-3 sm:text-xs">
                    <FaChartBar className="h-3 w-3" />
                    {f.level}
                  </span>
                </div>

                <p className="relative mt-4 text-xs leading-relaxed text-ag-body sm:mt-5 sm:text-sm">
                  {f.description}
                </p>

                <ul className="relative mt-4 space-y-2 sm:mt-6 sm:space-y-2.5">
                  {f.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-xs text-ag-navy-900 sm:text-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ag-blue-500 text-white">
                        <FaCheck className="h-2.5 w-2.5" />
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 border-t border-ag-navy-900/8 pt-5 sm:mt-8 sm:pt-6">
                  <Button
                    as="a"
                    href={buildWhatsAppLink({
                      message: WHATSAPP_MESSAGES.formation(f.title),
                      context: `formation-${f.slug}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    icon={<FaWhatsapp className="h-4 w-4" />}
                  >
                    S&apos;inscrire
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ag-navy-900 via-ag-navy-800 to-ag-blue-500 p-6 text-center sm:rounded-[40px] sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-52 w-96 -translate-x-1/2 rounded-full bg-ag-gold-400/15 blur-[100px] sm:h-64 sm:w-[500px]"
            />
            <h2 className="relative text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Prêt à vous lancer ?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-white/80 sm:mt-4 sm:text-base">
              Nos experts vous accompagnent de A à Z. Contactez-nous sur WhatsApp
              pour un devis personnalisé.
            </p>
            <div className="relative mt-7 flex justify-center sm:mt-8">
              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
                icon={<FaWhatsapp className="h-4 w-4" />}
              >
                Démarrer maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}