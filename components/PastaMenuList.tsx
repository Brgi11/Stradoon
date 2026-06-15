"use client";

import type { PastaMenuCategory } from "@/data/content";
import MenuItem from "@/components/MenuItem";
import { useLanguage } from "@/components/LanguageContext";

type PastaMenuListProps = {
  categories: PastaMenuCategory[];
};

export default function PastaMenuList({ categories }: PastaMenuListProps) {
  const { language } = useLanguage();
  const lang = language;

  return (
    <section className="section-padding bg-ivory">
      <div className="container-elegant">
        <div className="mx-auto max-w-4xl space-y-8 md:space-y-10">
          {categories.map((category) => (
            <div
              key={category.titleEn}
              className="rounded-2xl border border-primaryRed/20 bg-ivory/80 p-4 shadow-sm sm:p-6 md:p-8"
            >
              <h2 className="mb-5 border-b border-primaryRed/25 pb-3 text-center font-cardo text-2xl font-semibold text-primaryRed md:text-3xl">
                {lang === "hr" ? category.titleHr : category.titleEn}
              </h2>
              {category.items.map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} showImage={false} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
