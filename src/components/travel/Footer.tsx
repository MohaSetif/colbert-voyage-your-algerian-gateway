import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { translations, agencyInfo, type Lang, phoneLink } from "@/lib/travel-data";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const isAr = lang === "ar";

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="border-t border-border bg-muted py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-bold text-primary">{agencyInfo.name}</div>
            <div className="text-sm font-medium text-ocean-500">{agencyInfo.arabicName}</div>
            <p className="mt-3 text-sm text-muted-foreground">{t.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              {isAr ? "اتصال" : "Contact"}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {agencyInfo.phones.slice(0, 3).map((phone, i) => (
                <li key={i}>
                  <a href={phoneLink(phone.number)} className="hover:text-primary">
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${agencyInfo.email}`} className="hover:text-primary">
                  {agencyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              {isAr ? "العنوان" : "Adresse"}
            </h4>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {agencyInfo.address}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              {isAr ? "تابعونا" : "Suivez-nous"}
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/colbertvoyage"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-primary p-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/colbertvoyage"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-primary p-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={phoneLink(agencyInfo.phones[0].number)}
                className="inline-flex rounded-full bg-primary p-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {agencyInfo.followers} {isAr ? "متابع على فيسبوك" : "followers sur Facebook"}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {agencyInfo.name}. {t.rights}
          </p>
          <p className="text-sm font-medium text-muted-foreground">{t.legal}</p>
        </div>
      </div>
    </footer>
  );
}
