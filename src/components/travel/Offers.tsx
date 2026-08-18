import { Calendar, Clock, Check, Phone, Star } from "lucide-react";
import { getTranslations, offers, primaryPhone, type Lang, whatsappLink } from "@/lib/travel-data";

interface OffersProps {
  lang: Lang;
}

export function Offers({ lang }: OffersProps) {
  const t = getTranslations(lang).offers;
  const isAr = lang === "ar";

  return (
    <section
      id="offers"
      dir={isAr ? "rtl" : "ltr"}
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-ocean-500">
            {isAr ? "استكشف" : "Explorez"}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-ocean"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.imageAlt[lang]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
                <span
                  className={`absolute top-4 pt-2 mx-3 flex items-center justify-center rounded-full px-3 py-1 text-center text-xs font-bold text-white ${
                    offer.badge === "new" ? "bg-ocean-500" : "bg-ocean-700"
                  }`}
                >
                  {offer.badge === "new" ? t.badgeNew : t.badgePopular}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-semibold text-white/90">
                  <Calendar className="h-3.5 w-3.5" />
                  {offer.date[lang]}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-ocean-500">
                  <Clock className="h-3.5 w-3.5" />
                  {offer.duration[lang]}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-card-foreground">
                  {offer.title[lang]}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {offer.description[lang]}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {offer.includes[lang].slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {offer.hotels && (
                  <div className="mt-4 rounded-xl bg-muted p-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Star className="h-3.5 w-3.5 text-ocean-500" />
                      {isAr ? "الفنادق المتاحة" : "Hôtels disponibles"}
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      {offer.hotels[lang].slice(0, 4).map((hotel, i) => (
                        <li key={i}>{hotel}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">{t.from}</div>
                    <div className="font-display text-2xl font-bold text-ocean-700">
                      {offer.price.toLocaleString()}
                      <span className="ml-1 text-sm font-semibold">{t.da}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{offer.priceNote[lang]}</div>
                  </div>
                  <a
                    href={whatsappLink(primaryPhone.number)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" />
                    {t.bookNow}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
