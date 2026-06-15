"use client";

import HeroBanner from "@/components/HeroBanner";
import PastaMenuList from "@/components/PastaMenuList";
import { homepageContent, imageAssets, pastaMenuCategories } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

export default function PastaMenuPage() {
  const { language } = useLanguage();
  const lang = language;

  return (
    <>
      <HeroBanner
        title={lang === "hr" ? homepageContent.pastaSectionTitleHr : homepageContent.pastaSectionTitleEn}
        videoSrc={imageAssets.pastaVideo}
        imageAlt="Pasta Menu"
        imageLabel="Pasta Menu"
      />
      <section className="section-padding bg-primaryRed text-center text-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-4xl rounded-2xl border border-ivory/25 bg-gradient-to-b from-white/10 to-white/[0.03] px-4 py-7 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:px-6 sm:py-8 md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.45em] text-ivory/70 md:text-sm">
              {lang === "hr" ? "Tjestenina se poslužuje od 17 do 22 h" : "Pasta is served from 5 PM to 10 PM"}
            </p>
            <div className="mt-3 font-cardo text-3xl font-semibold tracking-wide text-white sm:text-4xl md:text-6xl">
              {lang === "hr" ? "Istraži meni" : "Explore Menu"}
            </div>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ivory/90 md:text-xl">
              {lang === "hr" ? homepageContent.pastaMenuIntroHr : homepageContent.pastaMenuIntroEn}
            </p>
          </div>
        </div>
      </section>
      <PastaMenuList categories={pastaMenuCategories} />
    </>
  );
}
