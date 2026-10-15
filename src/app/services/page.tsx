import type { Metadata } from "next";
import {
  FaSearch,
  FaShieldAlt,
  FaTruck,
  FaRocket,
  FaBalanceScale,
  FaWarehouse,
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Sourcing, inspection qualité, logistique, e-commerce, conformité et stockage sécurisé. Découvrez tous les services AFRO GROUPE.",
};

/* ============================================================
   ICONS
   ============================================================ */
const ICONS: Record<string, IconType> = {
  Search: FaSearch,
  ShieldCheck: FaShieldAlt,
  Truck: FaTruck,
  Rocket: FaRocket,
  Scale: FaBalanceScale,
  Warehouse: FaWarehouse,
};

/* ============================================================
   PAGE
   ============================================================ */
export default function ServicesPage() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.cta,
    context: "services-page",
  });

  return (
    <>
      {/* ===== HERO SECONDAIRE ===== */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-light opacity-50" />
          <div className="absolute left-1/2 top-20 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-ag-blue-300/30 blur-[120px] sm:h-[400px] sm:w-[700px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-ag-blue-100 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ag-blue-500 sm:text-xs">
            Nos Services
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ag-navy-900 sm:mt-6 sm:text-5xl lg:text-6xl">
            Des solutions{" "}
            <span className="text-gradient-blue">bout en bout</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ag-body sm:mt-5 sm:text-base lg:text-lg">
            Six expertises complémentaires pour sécuriser, optimiser et
            accélérer votre commerce international.
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
              Discuter avec un expert
            </Button>
            <Button
              as="a"
              href="/"
              variant="outline"
              size="lg"
              icon={<FaArrowRight className="h-4 w-4" />}
            >
              Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </section>

      {/* ===== LISTE DES SERVICES ===== */}
      <section className="relative bg-ag-offwhite pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
          <div className="space-y-5 sm:space-y-6">
            {services.map((service, i) => {
              const Icon = ICONS[service.icon] ?? FaSearch;
              const isReversed = i % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-24 rounded-2xl bg-white p-5 shadow-card border border-ag-navy-900/5 transition-shadow hover:shadow-blue-lg sm:scroll-mt-28 sm:rounded-3xl sm:p-8 lg:p-12"
                >
                  <div
                    className={`grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center ${
                      isReversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* ==== Colonne Info ==== */}
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ag-blue-100 text-ag-blue-500 sm:h-14 sm:w-14">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-ag-gold-500 sm:text-xs">
                            Service {String(i + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-xl font-extrabold text-ag-navy-900 sm:text-2xl lg:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-ag-body sm:mt-6 sm:text-base">
                        {service.longDescription}
                      </p>

                      {service.price && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-ag-gold-100 px-3.5 py-1.5 text-xs font-bold text-ag-gold-500 sm:mt-6 sm:px-4 sm:py-2 sm:text-sm">
                          💰 {service.price}
                        </div>
                      )}

                      <div className="mt-6 sm:mt-8">
                        <Button
                          as="a"
                          href={buildWhatsAppLink({
                            message: WHATSAPP_MESSAGES.service(service.title),
                            context: `service-${service.slug}`,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          size="md"
                          icon={<FaWhatsapp className="h-4 w-4" />}
                        >
                          Demander un devis
                        </Button>
                      </div>
                    </div>

                    {/* ==== Colonne Features ==== */}
                    <div className="rounded-2xl bg-ag-offwhite p-5 sm:rounded-3xl sm:p-8">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-ag-blue-500 sm:text-xs">
                        Ce qui est inclus
                      </h3>
                      <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-xs text-ag-navy-900 sm:text-sm"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ag-blue-500 text-white sm:h-6 sm:w-6">
                              <FaCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
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
              Une question ?{" "}
              <span className="text-gradient-gold">Parlons-en.</span>
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm text-white/80 sm:mt-4 sm:text-base">
              Un expert vous répond en moins de 2h sur WhatsApp. Devis gratuit,
              sans engagement.
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
                Contacter AFRO GROUPE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}