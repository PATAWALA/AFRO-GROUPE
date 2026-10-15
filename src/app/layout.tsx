import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afrogroupe.com"),
  title: {
    default: "AFRO GROUPE — Sourcing & E-commerce International",
    template: "%s | AFRO GROUPE",
  },
  description:
    "Vos achats sûrs et sécurisés en Chine, Turquie, Nigéria, Dubaï et France. Sourcing, logistique et accompagnement e-commerce haut de gamme.",
  keywords: [
    "sourcing Chine",
    "import export",
    "e-commerce international",
    "AFRO GROUPE",
    "logistique Dubaï",
    "sourcing Turquie",
    "sourcing Nigéria",
  ],
  authors: [{ name: "AFRO GROUPE" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "AFRO GROUPE",
    title: "AFRO GROUPE — Sourcing & E-commerce International",
    description:
      "Vos achats sûrs et sécurisés en Chine, Turquie, Nigéria, Dubaï et France.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFRO GROUPE — Sourcing & E-commerce International",
    description:
      "Vos achats sûrs et sécurisés en Chine, Turquie, Nigéria, Dubaï et France.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050a18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-ag-neon-500 selection:text-ag-deep-900">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}