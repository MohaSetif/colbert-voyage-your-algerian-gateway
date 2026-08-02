import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/travel/Navbar";
import { Hero } from "@/components/travel/Hero";
import { Offers } from "@/components/travel/Offers";
import { WhyUs } from "@/components/travel/WhyUs";
import { Contact } from "@/components/travel/Contact";
import { Footer } from "@/components/travel/Footer";
import type { Lang } from "@/lib/travel-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Colbert Voyage — كولبار للسياحة و الأسفار" },
      {
        name: "description",
        content:
          "Agence de voyage algérienne basée à Aïn Oulmène. Séjours, excursions et voyages organisés en Algérie et en Tunisie. وكالة سياحة جزائرية في عين ولمان، رحلات منظمة إلى تونس وعنابة.",
      },
      { property: "og:title", content: "Colbert Voyage — كولبار للسياحة و الأسفار" },
      {
        property: "og:description",
        content: "Voyages organisés en Algérie et Tunisie — رحلات سياحية منظمة في الجزائر وتونس",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Offers lang={lang} />
        <WhyUs lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
