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
        title={lang === "hr" ? "Meni Doručak" : "Breakfast Menu"}
        imageLabel={imageAssets.breakfastHero.label}
        imageAlt={imageAssets.breakfastHero.alt}
        videoSrc="/images/Video web-2.mp4"
      />
      <section className="section-padding bg-primaryRed text-center text-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-4xl rounded-2xl border border-ivory/25 bg-gradient-to-b from-white/10 to-white/[0.03] px-6 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.45em] text-ivory/70 md:text-sm">
              {lang === "hr" ? "Potpisano Jutarnje Iskustvo" : "Signature Morning Experience"}
            </p>
            <ScriptHeading className="mt-3 text-white md:text-7xl">Breakfast Couture</ScriptHeading>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/90 md:text-xl">
              {lang === "hr"
                ? "Elegantno osmišljen jutarnji meni, pripremljen za ritam Straduna i trenutke za pamćenje. Devet prepoznatljivih jela, pažljivo stiliziranih za sporo jutro, pogled na grad i okus koji ostaje."
                : "Elegantly designed morning menu, prepared for the rhythm of Stradoon and moments to remember. Nine distinctive dishes, carefully styled for a slow morning, a view of the city and a taste that lingers."}
            </p>
          </div>
        </div>
      </section>
      <MenuList items={breakfastMenuItems} />
    </>
  );
}
