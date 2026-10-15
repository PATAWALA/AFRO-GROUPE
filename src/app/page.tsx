import { Hero } from "@/components/home/Hero";
import { CountryHub } from "@/components/home/CountryHub";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <CountryHub />
      <ServicesSection />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}