import { getCars, Car } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { CarCard } from "@/components/car-card";
import { HeroSection } from "@/components/hero-section";
import { FloatingSearch } from "@/components/floating-search";
import { GoogleReviews } from "@/components/google-reviews";
import { LocalBusinessSchema, WebsiteSchema, FAQSchema } from "@/components/seo-schemas";
import { getFaqs } from "@/lib/get-site-data";
import Link from "next/link";

const HOTEL_ZONES = [
    { zone: "Hammamet Centre", desc: "Médina, plages nord, restaurants" },
    { zone: "Hammamet Yasmine", desc: "Zone touristique, grands hôtels" },
    { zone: "Hammamet Nord", desc: "Plages tranquilles, résidences" },
    { zone: "Nabeul", desc: "Poterie, marché, Cap Bon" },
];

const INCLUDED = [
    { icon: "route", text: "Kilométrage illimité" },
    { icon: "verified_user", text: "Assurance tous risques" },
    { icon: "hotel", text: "Livraison à l'hôtel" },
    { icon: "credit_card_off", text: "Sans carte bancaire" },
    { icon: "cancel", text: "Annulation gratuite" },
    { icon: "support_agent", text: "Assistance 24h/24" },
];

export default async function Home() {
    const [cars, faqs] = await Promise.all([getCars(), getFaqs()]);
    const featuredCars = cars.slice(0, 6);
    const displayFaqs = faqs.slice(0, 8);

    return (
        <div className="flex flex-col">
            <HeroSection />
            <FloatingSearch />

            {/* Reviews First — social proof up top */}
            <GoogleReviews />

            {/* Hotel Delivery Section */}
            <section style={{ backgroundColor: 'var(--site-primary)' }} className="py-20 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-sm font-bold tracking-widest uppercase mb-2 text-white/70 font-body">Service Exclusif</p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white">
                            Livraison directement dans votre hôtel
                        </h2>
                        <p className="mt-4 text-white/80 max-w-xl mx-auto font-body">
                            Profitez de vos vacances à Hammamet sans vous soucier du transport. Votre voiture vous attend à votre hôtel dès votre arrivée.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {HOTEL_ZONES.map((h) => (
                            <div key={h.zone} className="rounded-2xl p-6 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)' }}>
                                <span className="material-symbols-outlined text-3xl mb-3 block opacity-80">location_on</span>
                                <h3 className="font-headline font-bold text-lg mb-1">{h.zone}</h3>
                                <p className="font-body text-sm opacity-70">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="bg-white py-16 px-4 md:px-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>Tout compris</p>
                        <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-gray-900">Ce qui est inclus dans chaque location</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {INCLUDED.map((item) => (
                            <div key={item.text} className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-gray-50">
                                <span className="material-symbols-outlined text-3xl mb-2" style={{ color: 'var(--site-primary)' }}>{item.icon}</span>
                                <span className="font-body text-xs text-gray-700 font-semibold leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-24 px-4 md:px-12" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 4%, white)' }}>
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                                {siteConfig.content.home.fleetLabel}
                            </p>
                            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                                {siteConfig.content.home.fleetTitle}
                            </h2>
                        </div>
                        <Link href="/nos-voitures" className="hidden md:flex items-center gap-2 font-bold text-sm hover:gap-4 transition-all duration-300" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAll}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredCars.map((car: Car) => (
                            <CarCard key={car.id} id={car.id} title={car.title} slug={car.slug} subtitle={car.subtitle} price3Days={car.price3Days} currency={car.currency} image={car.featured_image} category={car.category} seats={car.seats} doors={car.doors} transmission={car.transmission} fuel={car.fuel} caution={car.caution} freeCancellation={car.freeCancellation} />
                        ))}
                    </div>
                    <div className="text-center mt-10 md:hidden">
                        <Link href="/nos-voitures" className="inline-flex items-center gap-2 font-bold" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.viewAllMobile}
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-16 px-4 text-center border-t border-gray-100">
                <div className="max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 font-body" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 12%, white)', color: 'var(--site-primary)' }}>
                        <span className="material-symbols-outlined text-base">local_offer</span>
                        {siteConfig.content.promo.badge}
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{siteConfig.content.promo.h2}</h2>
                    <p className="text-gray-600 mb-8 font-body">{siteConfig.content.promo.subtitle}</p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link href="/nos-voitures" className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--site-primary)' }}>
                            {siteConfig.content.promo.cta}
                        </Link>
                        <a href={`https://wa.me/${siteConfig.contact.phone.whatsapp}?text=Bonjour, je souhaite louer une voiture à Hammamet`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border-2 transition-all hover:shadow-md" style={{ borderColor: 'var(--site-primary)', color: 'var(--site-primary)' }}>
                            <span className="material-symbols-outlined text-base">chat</span>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 md:px-12" style={{ backgroundColor: 'color-mix(in srgb, var(--site-primary) 4%, white)' }}>
                <div className="max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-body text-sm font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--site-primary)' }}>
                            {siteConfig.content.home.faqLabel}
                        </p>
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-gray-900">
                            {siteConfig.content.home.faqTitle}
                        </h2>
                    </div>
                    <div className="space-y-3 max-w-2xl mx-auto">
                        {displayFaqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="font-bold text-gray-900 text-left pr-4">{faq.question}</span>
                                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 shrink-0" style={{ color: 'var(--site-primary)' }}>expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 leading-relaxed font-body text-sm">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <LocalBusinessSchema />
            <WebsiteSchema />
            <FAQSchema faqs={displayFaqs} />
        </div>
    );
}
