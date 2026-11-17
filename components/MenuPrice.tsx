"use client";

import { useLanguage } from "@/components/LanguageContext";

type MenuPriceProps = {
  price: string;
  anchorPrice: string;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
};

export function MenuPrice({ price, anchorPrice, tone = "dark", size = "md" }: MenuPriceProps) {
  const { language } = useLanguage();
  const label = language === "hr" ? "Sidrena Cijena 10.9" : "Anchor price 10.9";
  const sizeClass = size === "lg" ? "text-base md:text-xl" : size === "sm" ? "text-sm md:text-base" : "text-base md:text-lg";
  const priceClass = `font-semibold ${sizeClass} ${tone === "light" ? "text-ivory" : "text-deepText"}`;
  const anchorClass = `mt-0.5 block max-w-[12rem] text-[11px] font-normal leading-snug sm:ml-auto md:text-xs ${
    tone === "light" ? "text-ivory/80" : "text-deepText/60"
  }`;

  return (
    <div className="shrink-0 sm:text-right">
      <p className={priceClass}>{price}</p>
      <p className={anchorClass}>
        {label}: {anchorPrice}
      </p>
    </div>
  );
}

export function MenuDownload() {
  const { language } = useLanguage();

  return (
    <div className="mt-12 flex justify-center md:mt-16">
      <a
        href="/downloads/57470495260_BISTRO-SLASTICARNICA_STRADOON_PLACA-6-DUBROVNIK_JV1_USLUGE_0001_20261117_SSMM.csv"
        download="57470495260_BISTRO-SLASTICARNICA_STRADOON_PLACA-6-DUBROVNIK_JV1_USLUGE_0001_20261117_SSMM.csv"
        className="inline-flex items-center justify-center rounded-full border border-ivory/80 bg-primaryRed px-6 py-3 text-center text-sm uppercase tracking-[0.12em] text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_3px_12px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8f2d2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryRed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
      >
        {language === "hr" ? "Preuzmi meni (CSV)" : "Download menu (CSV)"}
      </a>
    </div>
  );
}
