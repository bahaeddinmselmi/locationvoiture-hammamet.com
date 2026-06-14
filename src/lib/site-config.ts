// ═══════════════════════════════════════════════════════════════════
// Site Configuration — Location Voiture Hammamet
// Domain: locationvoiture-hammamet.com | FR | Hammamet
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
    lang: "fr",

    brand: {
        name: "Location Voiture Hammamet",
        nameShort: "LV Hammamet",
        nameUpper: "LOCATION VOITURE HAMMAMET",
        slug: "location-voiture-hammamet",
        foundingYear: 2009,
        description: "Location voiture Hammamet au meilleur prix. Louer une voiture à Hammamet sans carte bancaire, livraison hôtel gratuite, kilométrage illimité.",
    },

    contact: {
        phone: {
            display: "+216 97 955 896",
            link: "+21697955896",
            whatsapp: "21697955896",
        },
        email: "nhrentcar.tn@gmail.com",
        address: {
            street: "Hammamet Centre",
            city: "Hammamet",
            region: "Nabeul",
            postalCode: "8050",
            country: "TN",
            displayShort: "Hammamet, Tunisie",
        },
        geo: {
            latitude: 36.3996,
            longitude: 10.5539,
        },
    },

    url: {
        domain: "locationvoiture-hammamet.com",
        baseUrl: "https://locationvoiture-hammamet.com",
        googleReview: "",
    },

    social: {
        facebook: "",
        instagram: "",
    },

    logo: {
        main: "/images/logo/logo.png",
        white: "/images/logo/logo-wh.png",
        external: "",
        ogImage: "/images/og-image.jpg",
    },

    rating: {
        value: 4.9,
        reviewCount: 138,
        bestRating: 5,
        worstRating: 1,
    },

    pricing: {
        currency: "TND",
        currencyDisplay: "DT",
        eurRate: 3.3,
        minPrice3Days: 324,
        minPrice3DaysEur: 98,
        maxPrice3Days: 1521,
        priceRange3Days: "324 DT - 1521 DT",
        priceRange3DaysEur: "98€ - 461€",
        pricingLabel: "Prix pour 3 jours",
    },

    seo: {
        titleDefault: "Location Voiture Hammamet – Livraison Hôtel Gratuite",
        titleTemplate: "%s | Location Voiture Hammamet",
        description: "Location voiture Hammamet pas cher. Livraison gratuite dans tous les hôtels de Hammamet, Yasmine, Nabeul. Sans carte bancaire. Kilométrage illimité. Dès 324 DT/3j.",
        keywords: [
            "location voiture hammamet",
            "louer voiture hammamet",
            "location voiture hammamet pas cher",
            "location voiture hammamet yasmine",
            "location voiture hammamet nord",
            "location voiture hammamet sans carte bancaire",
            "location auto hammamet",
            "voiture de location hammamet",
            "location voiture hammamet hotel",
            "location voiture nabeul hammamet",
            "rent car hammamet",
            "location voiture hammamet livraison",
        ],
        locale: "fr_TN",
        language: "fr",
        googleVerification: "",
    },

    booking: {
        storageKey: "lvhammamet-booking-storage",
        reviewStorageKey: "lvhammamet_reviewed",
        defaultLocation: "Hammamet, Tunisie",
    },

    telegram: {
        botToken: "",
        chatId: "",
    },

    email: {
        to: "nhrentcar.tn@gmail.com",
    },

    content: {
        hero: {
            h1: "Location Voiture Hammamet",
            subtitle: "Louez une voiture à Hammamet avec livraison gratuite dans tous vos hôtels. Yasmine Hammamet, Hammamet Nord, Nabeul. Sans carte bancaire, kilométrage illimité.",
            badge: "Livraison Hôtel",
        },
        nav: {
            links: [
                { href: "/", label: "Accueil" },
                { href: "/nos-voitures", label: "Nos Voitures" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/contact", label: "Contact" },
            ],
            mobileAvailability: "Disponible 24h/24, 7j/7",
            currencyLabel: "Devise :",
        },
        trust: {
            badges: [
                {
                    icon: "credit_card_off",
                    title: "Sans Carte Bancaire",
                    desc: "Payez en espèces à la livraison. Réservation 100% gratuite et sans engagement.",
                },
                {
                    icon: "hotel",
                    title: "Livraison à l'Hôtel",
                    desc: "On vous livre directement dans votre hôtel à Hammamet Yasmine, Nord ou centre.",
                },
                {
                    icon: "verified_user",
                    title: "Assurance Incluse",
                    desc: "Tous nos véhicules sont assurés tous risques. Conduisez l'esprit tranquille.",
                },
            ],
        },
        footer: {
            tagline: "Location de voiture à Hammamet avec livraison gratuite dans tous les hôtels. Sans carte bancaire, paiement à l'arrivée.",
            cityLinksHeading: "Location par Ville",
            servicesHeading: "Nos Services",
            serviceLinks: [
                { name: "Nos Voitures", href: "/nos-voitures" },
                { name: "Tarifs", href: "/tarifs" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
            ],
            allRightsReserved: "Tous droits réservés.",
        },
        promo: {
            badge: "Offre Hammamet",
            h2: "Explorez Hammamet et le Cap Bon librement",
            subtitle: "Hammamet, Nabeul, Kélibia – découvrez le Cap Bon à votre rythme. Livraison gratuite à votre hôtel.",
            priceLabel: "À partir de",
            priceSuffix: "/ 3 jours",
            cta: "Voir les offres",
        },
        home: {
            fleetLabel: "Notre Flotte",
            fleetTitle: "Nos Véhicules",
            viewAll: "Voir tout",
            viewAllMobile: "Voir tous les véhicules",
            faqLabel: "Questions Fréquentes",
            faqTitle: "Tout savoir sur la location de voiture à Hammamet",
        },
        meta: {
            ogTitle: "Location Voiture Hammamet – Livraison Hôtel | dès 324 DT",
            ogDesc: "Louez une voiture à Hammamet dès 324 DT/3 jours. Livraison gratuite dans votre hôtel. Sans carte bancaire.",
            ogImageAlt: "Location Voiture Hammamet – Livraison Hôtel Gratuite",
        },
    },

    theme: {
        heroVariant: "overlay",   // "overlay" | "split"
        cardVariant: "outlined",   // "default" | "outlined"
        primary: "#6d28d9",
        primaryContainer: "#5b21b6",
        primaryFixed: "#dbe1ff",
        onPrimary: "#ffffff",
        onPrimaryContainer: "#c4b5fd",
        accent: "#6d28d9",
        accentDark: "#5b21b6",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        surfaceContainerLow: "#f2f4f7",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e0e3e6",
        onSurface: "#191c1e",
        onSurfaceVariant: "#444651",
        outlineVariant: "#c4c6d3",
        footerBg: "#2e1065",
    },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.whatsapp}`;
export const telUrl = `tel:${siteConfig.contact.phone.link}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;
export const ogImageUrl = `${siteConfig.url.baseUrl}${siteConfig.logo.ogImage}`;
export const logoFullUrl = `${siteConfig.url.baseUrl}/images/logo/logo.png`;
export const copyrightLine = (year: number) =>
    `© ${siteConfig.brand.foundingYear} - ${year} ${siteConfig.brand.name}. ${siteConfig.content.footer.allRightsReserved}`;

export type SiteConfig = typeof siteConfig;
