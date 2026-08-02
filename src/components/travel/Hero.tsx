import { MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { translations, type Lang, whatsappLink, agencyInfo } from "@/lib/travel-data";
import heroCoast from "@/assets/hero-coast.jpg";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const isAr = lang === "ar";
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroCoast}
          alt="Mediterranean coast"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-700/75 to-ocean-900/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
          <MapPin className="h-4 w-4" />
          {t.badge}
        </span>

        <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          {t.title}
        </h1>
        <p className="mt-3 font-display text-2xl font-semibold text-ocean-300 sm:text-3xl">
          {t.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
          {t.tagline}
        </p>

        <div className={`mt-10 flex flex-col items-center gap-4 sm:flex-row ${isAr ? "sm:flex-row-reverse" : ""}`}>
          <a
            href={whatsappLink(agencyInfo.phones[0].number)}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ocean-300 px-8 py-4 text-base font-bold text-ocean-900 shadow-ocean transition-transform hover:scale-105"
          >
            {t.ctaPrimary}
            <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#offers"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            {t.ctaSecondary}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:grid-cols-4">
          <div className="px-4 py-2">
            <div className="font-display text-2xl font-bold text-white">27K+</div>
            <div className="text-xs text-white/70">{isAr ? "متابع" : "Followers"}</div>
          </div>
          <div className="px-4 py-2">
            <div className="font-display text-2xl font-bold text-white">{isAr ? "+15" : "15+"}</div>
            <div className="text-xs text-white/70">{isAr ? "وجهة" : "Destinations"}</div>
          </div>
          <div className="px-4 py-2">
            <div className="font-display text-2xl font-bold text-white">{isAr ? "24/7" : "7j/7"}</div>
            <div className="text-xs text-white/70">{isAr ? "خدمة" : "Service"}</div>
          </div>
          <div className="px-4 py-2">
            <div className="font-display text-2xl font-bold text-white">{isAr ? "100%" : "100%"}</div>
            <div className="text-xs text-white/70">{isAr ? "ثقة" : "Confiance"}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
