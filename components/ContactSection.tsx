import SectionTitle from "@/components/SectionTitle";
import type { SVGProps } from "react";
import Image from "next/image";

type ContactSectionProps = {
  heading: string;
  email: string;
  phone: string;
  mapSrc: string;
  mapAlt: string;
};

const mapsLink =
  "https://www.google.com/maps/place/Stradoon/@42.6412545,18.1067983,16.42z/data=!4m6!3m5!1s0x134c0b32fd6a94d7:0x8902aca253e2ee5b!8m2!3d42.6411149!4d18.1101912!16s%2Fg%2F11c602w4qz?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";
const facebookLink = "https://www.facebook.com/stradoondubrovnik/";
const instagramLink = "https://www.instagram.com/stradoon/";
const tiktokLink = "https://www.tiktok.com/";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.64 21v-8.2h2.76l.41-3.2h-3.17V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.82-.09-1.64-.14-2.47-.14-2.45 0-4.12 1.5-4.12 4.25v2.36H7.56v3.2h2.78V21h3.3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.64 4h2.73c.18 1.54 1.09 2.96 2.46 3.64v2.78a7.3 7.3 0 0 1-2.44-.42v5.08a5.63 5.63 0 1 1-5.63-5.63c.26 0 .53.02.78.06v2.86a2.75 2.75 0 0 0-.78-.11 2.82 2.82 0 1 0 2.88 2.82V4z" />
    </svg>
  );
}

export default function ContactSection({
  heading,
  email,
  phone,
  mapSrc,
  mapAlt
}: ContactSectionProps) {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-elegant">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open map location"
            className="group relative block overflow-hidden rounded-xl border-elegant"
          >
            <div className="relative aspect-[16/8]">
              <Image
                src={mapSrc}
                alt={mapAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="translate-y-2 text-lg tracking-[0.18em] text-ivory opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-xl">
                  OPEN MAPS
                </span>
              </div>
            </div>
          </a>
          <div className="space-y-4">
            <SectionTitle className="text-primaryRed">{heading}</SectionTitle>
            <div className="space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                <span className="font-semibold">Email:</span>
                <br />
                <a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                <a className="underline-offset-4 hover:underline" href={`tel:${phone.replace(/\s+/g, "")}`}>
                  {phone}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-1">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-primaryRed/40 text-primaryRed transition hover:bg-primaryRed hover:text-ivory md:size-10"
              >
                <FacebookIcon className="size-4 md:size-5" />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-primaryRed/40 text-primaryRed transition hover:bg-primaryRed hover:text-ivory md:size-10"
              >
                <InstagramIcon className="size-4 md:size-5" />
              </a>
              <a
                href={tiktokLink}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-primaryRed/40 text-primaryRed transition hover:bg-primaryRed hover:text-ivory md:size-10"
              >
                <TikTokIcon className="size-4 md:size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
