"use client";

import HeroBanner from "@/components/HeroBanner";
import ImageGrid from "@/components/ImageGrid";
import ScriptHeading from "@/components/ScriptHeading";
import SectionTitle from "@/components/SectionTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTAButton from "@/components/CTAButton";
import ContactSection from "@/components/ContactSection";
import { homepageContent, imageAssets } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const lang = language;

  return (
    <>
      <HeroBanner
        title={lang === "hr" ? "The Italian Club" : homepageContent.heroTitle}
        imageLabel={imageAssets.heroItalianClub.label}
        imageAlt={imageAssets.heroItalianClub.alt}
        videoSrc="/images/Video web-2.mp4"
      />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="mx-auto my-6 max-w-[64ch] text-center text-lg leading-relaxed text-deepText/95 md:my-10 md:text-2xl">
            <p>
              {lang === "hr"
                ? "U kuhinji pričamo talijanski, kuhamo talijanski. koristimo isključivo namirnice koje stižu iz Italije, a sva naša tjestenina je fatto a mano, ručno rađena po receptu talijanskog kuhara Marco Esposito koji je glavna zvijezda restorana."
                : "In the kitchen we speak Italian, we cook Italian. We use exclusively ingredients that come from Italy, and all our pasta is fatto a mano, hand-made according to the recipe of Italian chef Marco Esposito who is the main star of the restaurant."}
            </p>
          </div>
        </div>
      </section>

      <ImageGrid images={imageAssets.pastaGrid} />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <ImagePlaceholder
              src="/images/breakfast 1.jpg"
              label={imageAssets.chefMarco.label}
              alt={imageAssets.chefMarco.alt}
              className="aspect-[4/5]"
            />
            <div className="space-y-4 text-right">
              <div className="font-script leading-none text-primaryRed">
                <p className="text-5xl md:text-6xl">
                  {lang === "hr" ? "Incontra il" : "Meet the"}
                </p>
                <p className="-mt-1 text-7xl md:-mt-2 md:text-8xl">
                  {lang === "hr" ? "Maestro" : "Maestro"}
                </p>
              </div>
              <div className="space-y-3 text-base leading-relaxed text-deepText/95 md:text-lg">
                {homepageContent.maestroBodyParagraphs.map((paragraph, idx) => (
                  <p key={idx}>
                    {lang === "hr"
                      ? paragraph
                      : idx === 0
                        ? "Marco Esposito, originally from Italy, carved his culinary philosophy in the best Italian kitchens around the world. After years of leading prestigious restaurants, the last stop being glittering Miami, he decided to bring his passion and knowledge right here to Dubrovnik."
                        : "He didn't come alone, he brought a team of Italian experts who in our kitchen breathe, talk and create as one. Every plate that comes to you carries his signature, authentic recipe and experience gained from the world gastronomic map."}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primaryRed text-ivory">
        <div className="container-elegant text-center">
          <ScriptHeading className="text-white md:text-7xl">
            {lang === "hr" ? "Naša tjestenina" : "Our Pasta"}
          </ScriptHeading>
          <p className="mt-8 text-lg text-ivory/95 md:text-xl">
            {lang === "hr" ? "Naša ručno rađena tjestenina." : "Hand-made pasta."}
          </p>
          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-base leading-relaxed text-ivory/90 md:text-lg">
            {lang === "hr"
              ? homepageContent.pastaFeatureBody.map((p) => <p key={p}>{p}</p>)
              : [
                  "We believe a true Italian story cannot be told without original ingredients. That's exactly what we did, we brought Italy to you. Our cheese wheels, where the chef in front of your eyes finishes the manistra turning it into creamy perfection, come directly from Italian estates.",
                  "From the finest flour for our hand-made pasta to olive oil and cheese, every ingredient has an Italian passport."
                ].map((p, idx) => <p key={idx}>{p}</p>)
            }
          </div>
        </div>
      </section>

      <ImageGrid images={imageAssets.pastaGrid} />

      <section className="bg-primaryRed py-4 md:py-6">
        <div className="container-elegant flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <CTAButton href="/breakfast-menu">
            {lang === "hr" ? "Istraži meni" : "Explore Menu"}
          </CTAButton>
          <CTAButton href="/#contact">
            {lang === "hr" ? "Rezerviraj" : "Reserve"}
          </CTAButton>
        </div>
      </section>

      <HeroBanner
        title={lang === "hr" ? "Breakfast Couture" : homepageContent.breakfastHeroTitle}
        imageLabel={imageAssets.breakfastHero.label}
        imageAlt={imageAssets.breakfastHero.alt}
        videoSrc="/images/Video web-2.mp4"
      />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-[66ch] text-center">
            <SectionTitle className="mb-5 text-primaryRed md:text-nowrap">
              {lang === "hr" ? "Jutro s najljepšim pogledom na grad." : "Morning with the best view of the city."}
            </SectionTitle>
            <div className="space-y-3 text-base leading-relaxed text-deepText/95 md:text-lg">
              <p>
                {lang === "hr"
                  ? "Prije nego što kuhinjom zavlada miris svježe manistre, Stradoon je oaza mira i vrhunskog bruncha. Naš koncept spaja najfinije sezonske namirnice s modernom prezentacijom. Izabrali smo devet autentičnih doručaka, devet vizualnih i gastronomskih remek-djela dizajniranih za početak dana. Uživajte u okusima koji prate ritam Straduna, uz jedinstven pogled na crkvu sv. Vlaha koji svako jutro čini nezaboravnim."
                  : "Before the kitchen is filled with the scent of fresh manistra, Stradoon is an oasis of peace and premium brunch. Our concept combines the finest seasonal ingredients with modern presentation. We chose nine authentic breakfasts, nine visual and gastronomic masterpieces designed to start the day. Enjoy flavors that follow the rhythm of Stradoon, with a unique view of St. Blaise's Church that makes every morning unforgettable."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageGrid images={imageAssets.breakfastGrid} />

      <section className="bg-primaryRed py-4 md:py-6">
        <div className="container-elegant flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <CTAButton href="/breakfast-menu">
            {lang === "hr" ? "Istraži meni" : "Explore Menu"}
          </CTAButton>
          <CTAButton href="/#contact">
            {lang === "hr" ? "Rezerviraj" : "Reserve"}
          </CTAButton>
        </div>
      </section>

      <ContactSection
        heading={lang === "hr" ? "Pronađite nas:" : homepageContent.contactHeading}
        email={homepageContent.email}
        phone={homepageContent.phone}
        mapSrc={imageAssets.mapPlaceholder.src}
        mapAlt={imageAssets.mapPlaceholder.alt}
      />

    </>
  );
}