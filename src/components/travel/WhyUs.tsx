import { Bus, Users, BadgePercent, HeartHandshake, type LucideIcon } from "lucide-react";
import { getTranslations, type Lang } from "@/lib/travel-data";

const icons = [Bus, Users, BadgePercent, HeartHandshake];

interface WhyUsProps {
  lang: Lang;
}

export function WhyUs({ lang }: WhyUsProps) {
  const t = getTranslations(lang).whyUs;
  const isAr = lang === "ar";

  return (
    <section
      id="why-us"
      dir={isAr ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-ocean-900 py-20 text-primary-foreground sm:py-28"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ocean-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ocean-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-ocean-300">
            {isAr ? "لماذا نحن" : "Pourquoi nous"}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-white/70">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, i) => {
              const Icon = icons[i] as LucideIcon;
              return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="inline-flex rounded-xl bg-ocean-300/20 p-3 text-ocean-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
