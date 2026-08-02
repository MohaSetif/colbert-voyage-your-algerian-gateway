import { Phone, MapPin, Mail, MessageCircle, Navigation } from "lucide-react";
import { translations, agencyInfo, type Lang, phoneLink, whatsappLink } from "@/lib/travel-data";

interface ContactProps {
  lang: Lang;
}

export function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const isAr = lang === "ar";

  return (
    <section
      id="contact"
      dir={isAr ? "rtl" : "ltr"}
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-ocean-500">
            {isAr ? "تواصل" : "Contact"}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">{t.phones}</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {agencyInfo.phones.map((phone, i) => (
                <a
                  key={i}
                  href={phoneLink(phone.number)}
                  className="flex flex-col rounded-xl bg-muted p-4 transition-colors hover:bg-muted/70"
                >
                  <span className="text-xs font-medium text-muted-foreground">{phone.label}</span>
                  <span className="font-display text-lg font-bold text-foreground">{phone.number}</span>
                </a>
              ))}
            </div>

            <a
              href={whatsappLink(agencyInfo.phones[0].number)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              {t.whatsapp}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-ocean-500/10 p-3 text-ocean-500">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">{t.address}</h3>
            </div>
            <p className="mt-5 text-lg font-medium text-foreground">{agencyInfo.address}</p>
            <p className="mt-1 text-sm text-muted-foreground">{agencyInfo.city} — {agencyInfo.postalCode}</p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agencyInfo.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ocean-500 px-6 py-2.5 text-sm font-semibold text-ocean-500 transition-colors hover:bg-ocean-500/10"
            >
              <Navigation className="h-4 w-4" />
              {t.directions}
            </a>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
              <div className="inline-flex rounded-xl bg-ocean-300/20 p-3 text-ocean-700">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">{t.email}</div>
                <a
                  href={`mailto:${agencyInfo.email}`}
                  className="font-display text-lg font-bold text-foreground hover:text-ocean-700"
                >
                  {agencyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
