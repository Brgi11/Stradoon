"use client";

import HeroBanner from "@/components/HeroBanner";
import MenuList from "@/components/MenuList";
import ScriptHeading from "@/components/ScriptHeading";
import { breakfastMenuItems, imageAssets } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

export default function BreakfastMenuPage() {
  const { language } = useLanguage();
  const lang = language;

  return (
    <>
      <HeroBanner
        title={lang === "hr" ? "Istraži meni" : "Explore Menu"}
        videoSrc="/images/Video web-2.mp4"
        imageAlt="Breakfast Menu"
        imageLabel="Breakfast Menu"
      />
      <section className="section-padding bg-primaryRed text-center text-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-4xl rounded-2xl border border-ivory/25 bg-gradient-to-b from-white/10 to-white/[0.03] px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.45em] text-ivory/70 md:text-sm">
              {lang === "hr" ? "Doručak poslužujemo do 12 h" : "Morning rituals are available until 12 PM"}
            </p>
            <div className="mt-3 font-cardo text-4xl font-semibold tracking-wide text-white md:text-6xl">
              {lang === "hr" ? "Istraži meni" : "Explore Menu"}
            </div>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/90 md:text-xl">
              {lang === "hr"
                ? "Odabrali smo devet autentičnih jela koja redefiniraju jutarnje rituale. Uživajte u modernim okusima i prezentaciji u samom središtu grada, na Stradunu. Savršen dan u Dubrovniku počinje ovdje."
                : "We have curated nine signature dishes that redefine morning rituals. Enjoy modern flavors and impeccable presentation in the very heart of the city, on Stradun. Your perfect day in Dubrovnik begins here."}
            </p>
          </div>
        </div>
      </section>
      <MenuList items={breakfastMenuItems} />
    </>
  );
}