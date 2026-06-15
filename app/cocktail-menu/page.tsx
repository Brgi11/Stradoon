"use client";

import ImageRow from "@/components/ImageRow";
import HeroBanner from "@/components/HeroBanner";
import ScriptHeading from "@/components/ScriptHeading";
import { cocktailMenuItems, cocktailMenuContent } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

function MenuCategory({ title, items, language, textColor = "ivory" }: { title: string; items: typeof cocktailMenuItems; language: "hr" | "en"; textColor?: string }) {
  const textClass = textColor === "dark" ? "text-deepText" : "text-ivory";
  const descClass = textColor === "dark" ? "text-deepText/80" : "text-ivory/80";
  const borderClass = textColor === "dark" ? "border-primaryRed/20" : "border-ivory/15";

  return (
    <div className="mb-8 md:mb-12">
      {title && (
        <>
          <div className={`mx-auto mt-10 mb-6 h-px w-28 ${textColor === "dark" ? "bg-primaryRed/30" : "bg-ivory/30"} md:w-36`} />
          <h3 className={`mb-6 text-center font-script text-2xl tracking-wide ${textClass} md:text-4xl`}>
            {title}
          </h3>
        </>
      )}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex flex-col gap-2 border-b ${borderClass} pb-3 last:border-0 sm:flex-row sm:justify-between sm:gap-4`}
          >
            <div className="flex-1">
              <h4 className={`text-sm font-semibold tracking-wide ${textClass} md:text-base`}>
                {item.name}
              </h4>
              <p className={`mt-1 text-xs leading-relaxed ${descClass} md:text-sm`}>
                {language === "hr" ? item.hrDescription : item.enDescription}
              </p>
            </div>
            <p className={`text-sm font-semibold sm:whitespace-nowrap ${textClass} md:text-base`}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CocktailMenuPage() {
  const { language } = useLanguage();
  const lang = language;

  const brunchItems = cocktailMenuItems.slice(0, 6);
  const nonAlcoholItems = cocktailMenuItems.slice(6, 8);
  const bondBarItems = cocktailMenuItems.slice(8, 22);
  const shootersItems = cocktailMenuItems.slice(22, 26);
  const virginItems = cocktailMenuItems.slice(26, 30);

  return (
    <>
      <section className="relative min-h-[50vh] bg-primaryRed pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0">
          <video
            className="size-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/images/video 2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="container-elegant relative z-10">
          <div className="text-center">
            <ScriptHeading className="mt-3 text-4xl text-white sm:text-5xl md:text-7xl">
              Liquid Couture
            </ScriptHeading>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.45em] text-ivory/70 md:text-sm">
                {lang === "hr" ? "Jutro. Dan. Večer." : "Morning. Noon. Night."}
              </p>
            </div>
            <h3 className="mt-4 font-cardo text-xl font-semibold tracking-wide text-white md:text-3xl">
              Martini & Mixology
            </h3>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/90 md:text-xl">
              {lang === "hr"
                ? "Umijeće miksologije bez vremenskih ograničenja. Uživajte u našim signature koktelima i osvježavajućim bezalkoholnim kreacijama, od jutarnjeg bruncha do elegantnih večeri na Stradunu."
                : "The art of mixology with no time constraints. Enjoy our signature cocktails and refreshing non-alcoholic creations, from morning brunch to elegant evenings on Stradoon."}
            </p>
          </div>
        </div>
      </section>

      <ImageRow
        images={[
          { src: "/images/IMG_4435.jpg", alt: "Cocktail image 1", label: "Cocktail image 1" },
          { src: "/images/IMG_4449.jpg", alt: "Cocktail image 2", label: "Cocktail image 2" },
          { src: "/images/IMG_4443.jpg", alt: "Cocktail image 3", label: "Cocktail image 3" }
        ]}
        columns={3}
      />

      <section className="bg-primaryRed py-16 md:py-24">
        <div className="container-elegant">
          <div className="mb-8 md:mb-12">
            <MenuCategory title={lang === "hr" ? "Brunch" : "Brunch"} items={brunchItems} language={lang} />
            <MenuCategory title={lang === "hr" ? "Bez alkohola" : "Non-alcoholic"} items={nonAlcoholItems} language={lang} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="container-elegant">
          <h2 className="text-center font-script text-3xl text-primaryRed md:text-5xl">
            {cocktailMenuContent.bondBarTitle[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-deepText/90 md:text-lg">
            {lang === "hr"
              ? "SHAKEN, NOT STIRRED - Ikonični kokteli po receptu Jamesovog menija."
              : "SHAKEN, NOT STIRRED - Iconic cocktails from James' secret menu."}
          </p>
          <div className="mt-8 rounded-none border border-primaryRed/20 bg-white/80 p-4 shadow-sm sm:p-6">
            <MenuCategory title="" items={bondBarItems} language={lang} textColor="dark" />
          </div>
        </div>
      </section>

      <section className="bg-primaryRed py-12 md:py-16">
        <div className="container-elegant">
          <div className="mb-8 md:mb-12">
            <MenuCategory title={lang === "hr" ? "Šuteri" : "Shooters"} items={shootersItems} language={lang} />
            <MenuCategory title={lang === "hr" ? "Bezalkoholni" : "Virgin"} items={virginItems} language={lang} />
          </div>
        </div>
      </section>
    </>
  );
}