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

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Formations AFRO GROUPE : import depuis la Chine, lancement e-commerce, sourcing, négociation et logistique internationale.",
};

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

export default function FormationsPage() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.cta,
    context: "formations-page",
  });

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute left-1/2 top-24 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-ag-neon-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-ag-neon-400">
            <FaGraduationCap className="h-3 w-3" />
            Formations AFRO GROUPE
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient-soft">Apprenez à importer</span>{" "}
            <span className="text-gradient-neon">comme un pro</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ag-muted sm:text-lg">
            Des formations concrètes, animées par des experts qui opèrent
            au quotidien en Chine, Turquie, Nigéria, Dubaï et France.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="neon"
              size="lg"
              glow
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

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {formations.map((f, i) => (
              <article
                key={f.id}
                id={f.slug}
                className="scroll-mt-28 group relative flex flex-col rounded-3xl glass p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ag-neon-500/40"
              >
                <span className="absolute right-6 top-6 text-5xl font-semibold text-white/5 transition-colors group-hover:text-ag-neon-500/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="relative text-xl font-semibold text-ag-ink sm:text-2xl">
                  {f.title}
                </h2>

                <div className="relative mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-ag-muted">
                    <FaClock className="h-3 w-3" />
                    {f.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ag-neon-500/10 border border-ag-neon-500/20 px-3 py-1 text-xs text-ag-neon-400">
                    <FaChartBar className="h-3 w-3" />
                    {f.level}
                  </span>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-ag-muted">
                  {f.description}
                </p>

                <ul className="relative mt-6 space-y-2.5">
                  {f.modules.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2.5 text-sm text-ag-ink"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ag-neon-500/15 text-ag-neon-400">
                        <FaCheck className="h-3 w-3" />
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 pt-6 border-t border-white/10">
                  <Button
                    as="a"
                    href={buildWhatsAppLink({
                      message: WHATSAPP_MESSAGES.formation(f.title),
                      context: `formation-${f.slug}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="neon"
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
    </>
  );
}