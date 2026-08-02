import heroCoast from "@/assets/hero-coast.jpg";
import annabaBeach from "@/assets/annaba-beach.jpg";
import tunisiaSousse from "@/assets/tunisia-sousse.jpg";
import tunisiaResort from "@/assets/tunisia-resort.jpg";

export type Lang = "fr" | "ar";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      offers: "Offres",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      badge: "✈️ Agence de voyage depuis Aïn Oulmène",
      title: "Colbert Voyage",
      subtitle: "كولبار للسياحة و الأسفار",
      tagline: "Voyagez l'esprit tranquille... On s'occupe du reste.",
      ctaPrimary: "Réserver maintenant",
      ctaSecondary: "Voir nos offres",
    },
    offers: {
      title: "Nos offres du moment",
      subtitle: "Des séjours et excursions sélectionnés pour vous",
      badgeNew: "Nouveau",
      badgePopular: "Populaire",
      from: "À partir de",
      da: "DA",
      child: "Enfant",
      free: "Gratuit",
      perPerson: "/ personne",
      bookNow: "Réserver",
      details: "Détails",
    },
    whyUs: {
      title: "Pourquoi choisir Colbert Voyage ?",
      subtitle: "Une agence de proximité, des services de qualité",
      features: [
        {
          title: "Transport confortable",
          desc: "Autocars touristiques modernes et climatisés pour tous nos départs.",
        },
        {
          title: "Accompagnement sur place",
          desc: "Un guide ou accompagnateur présent durant tout votre séjour.",
        },
        {
          title: "Prix compétitifs",
          desc: "Des tarifs négociés avec les meilleurs hôtels et partenaires.",
        },
        {
          title: "Ambiance familiale",
          desc: "Des voyages conviviaux pensés pour les familles et les groupes.",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Réservation et renseignements 7j/7",
      phones: "Téléphones",
      address: "Adresse",
      email: "Email",
      whatsapp: "WhatsApp",
      bookByPhone: "Réserver par téléphone",
      directions: "Itinéraire",
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "سافر براحة… واترك الباقي علينا",
      legal: "SARL Colbert Voyage — شركة عيدودي عماد",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      offers: "العروض",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    hero: {
      badge: "✈️ وكالة سياحة من عين ولمان",
      title: "كولبار للسياحة و الأسفار",
      subtitle: "Colbert Voyage",
      tagline: "سافر براحة… واترك الباقي علينا",
      ctaPrimary: "احجز الآن",
      ctaSecondary: "شاهد العروض",
    },
    offers: {
      title: "عروضنا الحالية",
      subtitle: "رحلات وإقامات منتقاة لك ولعائلتك",
      badgeNew: "جديد",
      badgePopular: "الأكثر طلبا",
      from: "يبدأ من",
      da: "دج",
      child: "طفل",
      free: "مجاناً",
      perPerson: "/ للشخص",
      bookNow: "احجز",
      details: "التفاصيل",
    },
    whyUs: {
      title: "لماذا تختار كولبار للسياحة؟",
      subtitle: "وكالة قريبة منكم، خدمات عالية الجودة",
      features: [
        {
          title: "نقل مريح",
          desc: "حافلات سياحية حديثة ومكيفة لجميع انطلاقاتنا.",
        },
        {
          title: "مرافقة ميدانية",
          desc: "مرشد أو منظم يرافقكم طوال فترة الإقامة.",
        },
        {
          title: "أسعار تنافسية",
          desc: "أسعار تفاوضناها مع أفضل الفنادق والشركاء.",
        },
        {
          title: "أجواء عائلية",
          desc: "رحلات ودية مصممة للعائلات والمجموعات.",
        },
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "للحجز والاستفسارات طوال أيام الأسبوع",
      phones: "أرقام الهاتف",
      address: "العنوان",
      email: "البريد الإلكتروني",
      whatsapp: "واتساب",
      bookByPhone: "احجز بالهاتف",
      directions: "الموقع",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "Voyagez l'esprit tranquille... On s'occupe du reste",
      legal: "شركة عيدودي عماد — SARL Colbert Voyage",
    },
  },
} as const;

export function getTranslations(lang: Lang) {
  return translations[lang] as (typeof translations)["fr"];
}


export const agencyInfo = {
  name: "Colbert Voyage",
  arabicName: "كولبار للسياحة و الأسفار",
  phones: [
    { label: "Principal", number: "0770 06 10 55" },
    { label: "Réservation", number: "0671 40 40 63" },
    { label: "Réservation", number: "0676 66 42 17" },
    { label: "Tunisie", number: "0779 69 85 79" },
  ],
  email: "colbertvoyage@gmail.com",
  address: "Route Principale – Magasins Es-Safir, Aïn Oulmène – Sétif, Algérie",
  city: "Aïn Oulmène, Sétif, Algérie",
  postalCode: "19002",
  companyName: "شركة عيدودي عماد",
  followers: "27K",
};

export const offers = [
  {
    id: "annaba-07-08-2026",
    image: annabaBeach,
    imageAlt: { fr: "Plages d'Annaba", ar: "شواطئ عنابة" },
    badge: "popular",
    title: { fr: "Journée familiale à Annaba", ar: "رحلة عائلية إلى عنابة" },
    date: { fr: "Vendredi 07 août 2026", ar: "الجمعة 07 أوت 2026" },
    duration: { fr: "1 jour", ar: "يوم واحد" },
    price: 1000,
    priceNote: { fr: "par personne", ar: "للشخص" },
    description: {
      fr: "Une journée estivale entre mer, détente et air pur sur les plus belles plages d'Annaba.",
      ar: "يوم صيفي مميز بين البحر والاسترخاء والهواء النقي في أجمل شواطئ عنابة.",
    },
    includes: {
      fr: [
        "Départs depuis Salah Bay, Aïn Oulmène, Draâ El Maïad, Qualal, Mezlouq, Sétif",
        "Transport aller-retour",
        "Ambiance familiale",
      ],
      ar: [
        "انطلاق من صالح باي، عين ولمان، ذراع الميعاد، قلال، مزلوق، سطيف",
        "نقل ذهاب وإياب",
        "أجواء عائلية",
      ],
    },
  },
  {
    id: "tunisia-sousse-08-2026",
    image: tunisiaSousse,
    imageAlt: { fr: "Sousse Tunisie", ar: "سوسة تونس" },
    badge: "new",
    title: { fr: "Offre spéciale Tunisie — Sousse", ar: "عرض خاص تونس — سوسة" },
    date: { fr: "Du 09/08 au 30/08/2026", ar: "من 09/08 إلى 30/08/2026" },
    duration: { fr: "6 jours / 5 nuits", ar: "06 أيام / 05 ليالٍ" },
    price: 54000,
    priceNote: { fr: "Kantaoui Center 3★ adulte", ar: "Kantaoui Center 3★ للبالغ" },
    description: {
      fr: "Des vacances inoubliables à Sousse avec une sélection des meilleurs hôtels aux meilleurs tarifs.",
      ar: "عطلة لا تُنسى في سوسة مع أفضل الفنادق بأفضل الأسعار.",
    },
    includes: {
      fr: [
        "Transport touristique confortable",
        "Hébergement selon l'hôtel choisi",
        "Accompagnateur et assistance durant le séjour",
        "Excursions organisées",
      ],
      ar: [
        "نقل سياحي مريح",
        "إقامة حسب الفندق المختار",
        "مرافق ومساعدة طوال الإقامة",
        "رحلات منظمة",
      ],
    },
    hotels: {
      fr: [
        "Kantaoui Center 3★ — 54 000 DA",
        "Houria Palace 4★ — 62 000 DA",
        "Hannibal Palace 4★ — 69 000 DA",
        "Soviva Resort 3★ All Inclusive — 67 000 DA",
        "Orient Palace 4★ All Inclusive — 80 000 DA",
        "Amir Palace 4★ All Inclusive — 76 000 DA",
      ],
      ar: [
        "Kantaoui Center 3★ — 54 000 دج",
        "Houria Palace 4★ — 62 000 دج",
        "Hannibal Palace 4★ — 69 000 دج",
        "Soviva Resort 3★ شامل — 67 000 دج",
        "Orient Palace 4★ شامل — 80 000 دج",
        "Amir Palace 4★ شامل — 76 000 دج",
      ],
    },
  },
  {
    id: "tunisia-july-30-2026",
    image: tunisiaResort,
    imageAlt: { fr: "Hôtel Majesti Golf Tunisie", ar: "فندق ماجيستي غولف تونس" },
    badge: "new",
    title: { fr: "Départ 30 juillet — Tunisie", ar: "انطلاق 30 جويلية — تونس" },
    date: { fr: "Départ le 30 juillet 2026", ar: "الانطلاق 30 جويلية 2026" },
    duration: { fr: "6 jours / 5 nuits", ar: "06 أيام / 05 ليالٍ" },
    price: 42000,
    priceNote: { fr: "Majesti Golf 3★ adulte", ar: "ماجيستي غولف 3★ للبالغ" },
    description: {
      fr: "Profitez d'une escapade estivale en Tunisie avec petit-déjeuner et dîner inclus.",
      ar: "استمتعوا بعطلة صيفية في تونس مع فطور الصباح والعشاء.",
    },
    includes: {
      fr: [
        "Hôtel Majesti Golf 3★ — 42 000 DA",
        "Hôtel Meshmoum 3★ — 46 000 DA",
        "1er enfant < 12 ans gratuit",
        "4ème personne en quad -50%",
      ],
      ar: [
        "فندق ماجيستي غولف 3★ — 42 000 دج",
        "فندق المشموم 3★ — 46 000 دج",
        "الطفل الأول أقل من 12 سنة مجاناً",
        "الشخص الرابع في غرفة رباعية بتخفيض 50%",
      ],
    },
  },
];

export const whatsappLink = (phone: string) => {
  const clean = phone.replace(/\s/g, "");
  return `https://wa.me/213${clean.replace(/^0/, "")}`;
};

export const phoneLink = (phone: string) => `tel:+213${phone.replace(/\s/g, "").replace(/^0/, "")}`;
