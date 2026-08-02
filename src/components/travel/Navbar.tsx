import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { agencyInfo, translations, type Lang, phoneLink, whatsappLink } from "@/lib/travel-data";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const t = translations[lang];
  const isAr = lang === "ar";

  const navItems = [
    { key: "home", href: "#" },
    { key: "offers", href: "#offers" },
    { key: "about", href: "#why-us" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      dir={isAr ? "rtl" : "ltr"}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-tight text-primary">
            {agencyInfo.name}
          </span>
          <span className="text-xs font-medium text-ocean-500">{agencyInfo.arabicName}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {(t.nav as Record<string, string>)[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex rounded-full border border-border bg-muted p-1">
            <button
              onClick={() => setLang("fr")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              AR
            </button>
          </div>
          <a
            href={phoneLink(agencyInfo.phones[0].number)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            {agencyInfo.phones[0].number}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {(t.nav as Record<string, string>)[item.key]}
              </a>
            ))}
            <a
              href={whatsappLink(agencyInfo.phones[0].number)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLang("fr")}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
                  lang === "fr" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
                  lang === "ar" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                العربية
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
