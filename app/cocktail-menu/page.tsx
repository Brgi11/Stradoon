"use client";

import Image from "next/image";
import ScriptHeading from "@/components/ScriptHeading";
import { cocktailMenuItems, cocktailMenuContent } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

function DecorativeImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-ivory/20 ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}

const allImages = [
  "/images/9.jpg",
  "/images/11.jpg",
  "/images/13.jpg",
  "/images/15.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/20.jpg",
  "/images/21.jpg"
];

function getRandomImage(index: number) {
  return allImages[index % allImages.length];
}

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
            className={`flex justify-between gap-4 border-b ${borderClass} pb-3 last:border-0`}
          >
            <div className="flex-1">
              <h4 className={`text-sm font-semibold tracking-wide ${textClass} md:text-base`}>
                {item.name}
              </h4>
              <p className={`mt-1 text-xs leading-relaxed ${descClass} md:text-sm`}>
                {language === "hr" ? item.hrDescription : item.enDescription}
              </p>
            </div>
            <p className={`whitespace-nowrap text-sm font-semibold ${textClass} md:text-base`}>
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
        <div className="absolute inset-0 opacity-25">
          <DecorativeImage
            src={getRandomImage(0)}
            alt="Cocktail decor"
            className="h-full w-full"
          />
        </div>
        <div className="container-elegant relative z-10">
          <div className="text-center">
            <ScriptHeading className="mt-3 text-white md:text-7xl">
              {lang === "hr" ? "KOKTELI" : "COCKTAILS"}
            </ScriptHeading>
            <div className="mx-auto mt-5 h-px w-28 bg-ivory/40 md:w-36" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/90 md:text-xl">
              {lang === "hr"
                ? "Iskreno pripremljeni kokteli za posebne trenutke. Od klasičnih do kreativnih mješavina, svaki je dizajniran da transformationira vaš doživljaj."
                : "Sincere prepared cocktails for special moments. From classic to creative blends, each designed to transform your experience."}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-primaryRed">
        <div className="container-elegant">
          <div className="grid gap-6 py-8 md:grid-cols-3 md:gap-8 md:py-12">
            <div className="md:col-span-1">
              <DecorativeImage
                src={getRandomImage(1)}
                alt="Cocktail decor 1"
                className="aspect-[3/4] rounded-xl"
              />
            </div>
            <div className="md:col-span-2">
              <MenuCategory title={lang === "hr" ? "BRUNCH" : "BRUNCH"} items={brunchItems} language={lang} />
              <MenuCategory
                title={lang === "hr" ? "BEZ ALKOHOLA" : "NON-ALCOHOLIC"}
                items={nonAlcoholItems}
                language={lang}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-ivory py-16 md:py-24">
        <div className="absolute inset-0 opacity-15">
          <DecorativeImage
            src={getRandomImage(2)}
            alt="Bar decor"
            className="h-full w-full"
          />
        </div>
        <div className="container-elegant relative z-10">
          <ScriptHeading className="text-center text-primaryRed md:text-7xl">
            {lang === "hr" ? '"Bondov Bar"' : cocktailMenuContent.bondBarTitle[lang]}
          </ScriptHeading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-deepText/90 md:text-lg">
            {lang === "hr"
              ? "SHAKEN, NOT STIRRED - Ikonični kokteli po receptu Jamesovog menija."
              : "SHAKEN, NOT STIRRED - Iconic cocktails from James' secret menu."}
          </p>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="relative mt-8 h-fit md:sticky md:top-24">
              <DecorativeImage
                src={getRandomImage(3)}
                alt="Bond cocktail"
                className="aspect-square rounded-xl"
              />
            </div>
            <div className="mt-8 rounded-2xl border border-primaryRed/20 bg-white/80 p-6 shadow-sm">
              <MenuCategory title="" items={bondBarItems} language={lang} textColor="dark" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primaryRed">
        <div className="container-elegant">
          <div className="grid gap-6 py-8 md:grid-cols-3 md:gap-8 md:py-12">
            <div className="md:col-span-2">
              <MenuCategory title={lang === "hr" ? "ŠUTERI" : "SHOOTERS"} items={shootersItems} language={lang} />
              <MenuCategory title={lang === "hr" ? "DEVIRGIN" : "VIRGIN"} items={virginItems} language={lang} />
            </div>
            <div className="md:col-span-1">
              <DecorativeImage
                src={getRandomImage(4)}
                alt="Cocktail decor 2"
                className="aspect-[3/4] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-ivory py-12 md:py-16">
        <div className="container-elegant">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <DecorativeImage
              src={getRandomImage(5)}
              alt="Decoration"
              className="aspect-[4/3] rounded-lg"
            />
            <DecorativeImage
              src={getRandomImage(6)}
              alt="Decoration"
              className="aspect-[4/3] rounded-lg"
            />
            <DecorativeImage
              src={getRandomImage(7)}
              alt="Decoration"
              className="aspect-[4/3] rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}