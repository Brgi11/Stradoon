"use client";

import HeroBanner from "@/components/HeroBanner";
import SectionTitle from "@/components/SectionTitle";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ImageRow from "@/components/ImageRow";
import CTAButton from "@/components/CTAButton";
import { ReserveButton } from "@/components/CTAButton";
import ContactSection from "@/components/ContactSection";
import { homepageContent, imageAssets } from "@/data/content";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const lang = language;

  return (
    <>
      <HeroBanner
        title={lang === "hr" ? "Dobrodošli" : "Welcome"}
        imageLabel={imageAssets.heroImage.label}
        imageAlt={imageAssets.heroImage.alt}
        imageSrc="/images/hero.jpg"
      />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <h2 className="mb-4 text-balance text-center font-cardo text-2xl font-bold text-primaryRed sm:text-3xl md:text-5xl">
            {lang === "hr" ? homepageContent.introHeadingHr : homepageContent.introHeadingEn}
          </h2>
          <div className="mx-auto my-6 max-w-[64ch] text-center text-base leading-relaxed text-deepText/95 sm:text-lg md:my-10 md:text-2xl">
            <p>
              {lang === "hr" ? homepageContent.introTextHr : homepageContent.introTextEn}
            </p>
          </div>
        </div>
      </section>

      <ImageRow images={imageAssets.firstRowImages} columns={5} layout="scroll" size="large" />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <ImagePlaceholder
              src={imageAssets.artOfStradoonImage.src}
              label={imageAssets.artOfStradoonImage.label}
              alt={imageAssets.artOfStradoonImage.alt}
              className="aspect-[4/5]"
            />
            <div className="space-y-4 text-center md:text-right">
              <div className="font-script leading-none text-primaryRed">
                <p className="text-4xl sm:text-5xl md:text-6xl">
                  {homepageContent.artOfStradoonHeading}
                </p>
                <p className="-mt-1 text-5xl sm:text-6xl md:-mt-2 md:text-8xl">
                  {homepageContent.artOfStradoonHeadingAccent}
                </p>
              </div>
              <div className="space-y-3 text-base leading-relaxed text-deepText/95 md:text-lg">
                {(lang === "hr" ? homepageContent.artOfStradoonTextHr : homepageContent.artOfStradoonTextEn).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryRed py-4 md:py-6">
        <div className="container-elegant flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:gap-4">
          <CTAButton href="/breakfast-menu">
            {lang === "hr" ? "Meni Doručak" : "Breakfast Menu"}
          </CTAButton>
          <CTAButton href="/pasta-menu">
            {lang === "hr" ? "Meni Tjestenina" : "Pasta Menu"}
          </CTAButton>
          <ReserveButton>
            {lang === "hr" ? "Rezerviraj" : "Reserve"}
          </ReserveButton>
        </div>
      </section>

      <HeroBanner
        title="Breakfast Couture"
        imageLabel="Breakfast Couture"
        imageAlt="Breakfast Couture hero"
        videoSrc="/images/breakfast-hero.mp4"
      />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle className="mb-5 text-center text-primaryRed">
              {lang === "hr" ? "Jutro s najljepšim pogledom na grad." : "Morning with the best view of the city."}
            </SectionTitle>
            <p className="text-base leading-relaxed text-deepText/95 md:text-lg">
                {lang === "hr"
                  ? "Stradoon je oaza mira i vrhunskog bruncha. Naš koncept spaja najfinije sezonske namirnice s modernom prezentacijom. Izabrali smo devet autentičnih doručaka, devet vizualnih i gastronomskih remek-djela dizajniranih za početak dana. Uživajte u okusima koji prate ritam Straduna, uz jedinstven pogled na crkvu sv. Vlaha koji svako jutro čini nezaboravnim."
                  : "Stradoon is an oasis of peace and premium brunch. Our concept combines the finest seasonal ingredients with modern presentation. We chose nine authentic breakfasts, nine visual and gastronomic masterpieces designed to start the day. Enjoy flavors that follow the rhythm of Stradoon, with a unique view of St. Blaise's Church that makes every morning unforgettable."}
            </p>
          </div>
        </div>
      </section>

      <ImageRow images={imageAssets.secondRowImages} columns={5} layout="scroll" size="large" />

      <section className="bg-primaryRed py-4 md:py-6">
        <div className="container-elegant flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:gap-4">
          <CTAButton href="/breakfast-menu">
            {lang === "hr" ? "Meni Doručak" : "Breakfast Menu"}
          </CTAButton>
          <ReserveButton>
            {lang === "hr" ? "Rezerviraj" : "Reserve"}
          </ReserveButton>
        </div>
      </section>

      <HeroBanner
        title={lang === "hr" ? homepageContent.pastaSectionTitleHr : homepageContent.pastaSectionTitleEn}
        imageLabel="Handmade pasta"
        imageAlt="Handmade pasta hero"
        videoSrc={imageAssets.pastaVideo}
      />

      <section className="section-padding bg-ivory">
        <div className="container-elegant">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle className="mb-5 text-center text-primaryRed">
              {lang === "hr" ? homepageContent.pastaSectionHeadingHr : homepageContent.pastaSectionHeadingEn}
            </SectionTitle>
            <p className="text-base leading-relaxed text-deepText/95 md:text-lg">
              {lang === "hr" ? homepageContent.pastaSectionTextHr : homepageContent.pastaSectionTextEn}
            </p>
          </div>
        </div>
      </section>

      <ImageRow images={imageAssets.pastaRowImages} columns={5} layout="scroll" size="large" />

      <section className="bg-primaryRed py-4 md:py-6">
        <div className="container-elegant flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:gap-4">
          <CTAButton href="/pasta-menu">
            {lang === "hr" ? "Meni Tjestenina" : "Pasta Menu"}
          </CTAButton>
          <ReserveButton>
            {lang === "hr" ? "Rezerviraj" : "Reserve"}
          </ReserveButton>
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