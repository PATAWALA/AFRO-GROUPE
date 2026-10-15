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

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Sourcing, inspection qualité, logistique, e-commerce, conformité et stockage sécurisé. Découvrez tous les services AFRO GROUPE.",
};

const ICONS: Record<string, IconType> = {
  Search: FaSearch,
  ShieldCheck: FaShieldAlt,
  Truck: FaTruck,
  Rocket: FaRocket,
  Scale: FaBalanceScale,
  Warehouse: FaWarehouse,
};

export default function ServicesPage() {
  const whatsappHref = buildWhatsAppLink({
    message: WHATSAPP_MESSAGES.cta,
    context: "services-page",
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
            Nos services
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient-soft">Des solutions</span>{" "}
            <span className="text-gradient-neon">bout en bout</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ag-muted sm:text-lg">
            Six expertises complémentaires pour sécuriser, optimiser et
            accélérer votre commerce international.
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
              Discuter avec un expert
            </Button>
            <Button
              as="a"
              href="/#services"
              variant="outline"
              size="lg"
              icon={<FaArrowRight className="h-4 w-4" />}
            >
              Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = ICONS[service.icon] ?? FaSearch;
              const isReversed = i % 2 === 1;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-28 rounded-3xl glass p-8 transition-colors hover:border-ag-neon-500/30 sm:p-12"
                >
                  <div
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                      isReversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ag-neon-500/10 text-ag-neon-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-medium uppercase tracking-wider text-ag-neon-400">
                            Service {String(i + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-2xl font-semibold text-ag-ink sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-6 text-base leading-relaxed text-ag-muted">
                        {service.longDescription}
                      </p>

                      {service.price && (
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ag-neon-500/10 border border-ag-neon-500/20 px-4 py-2 text-sm font-medium text-ag-neon-400">
                          💰 {service.price}
                        </div>
                      )}

                      <div className="mt-8">
                        <Button
                          as="a"
                          href={buildWhatsAppLink({
                            message: WHATSAPP_MESSAGES.service(service.title),
                            context: `service-${service.slug}`,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="neon"
                          size="md"
                          icon={<FaWhatsapp className="h-4 w-4" />}
                        >
                          Demander un devis
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-ag-deep-900/40 p-6 sm:p-8">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-ag-neon-400">
                        Ce qui est inclus
                      </h3>
                      <ul className="mt-5 space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-ag-ink"
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ag-neon-500/15 text-ag-neon-400">
                              <FaCheck className="h-3.5 w-3.5" />
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

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-[40px] border border-ag-neon-500/20 bg-gradient-to-br from-ag-deep-800 via-ag-deep-900 to-ag-deep-950 p-10 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-ag-neon-500/15 blur-[100px]"
            />
            <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-gradient-soft">Une question ?</span>{" "}
              <span className="text-gradient-neon">Parlons-en.</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-ag-muted">
              Un expert vous répond en moins de 2h sur WhatsApp. Devis gratuit,
              sans engagement.
            </p>
            <div className="relative mt-8 flex justify-center">
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
                Contacter AFRO GROUPE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}