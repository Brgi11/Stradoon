import ScriptHeading from "@/components/ScriptHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import LazyVideo from "@/components/LazyVideo";
import Image from "next/image";

type HeroBannerProps = {
  title: string;
  imageLabel: string;
  imageAlt: string;
  videoSrc?: string;
  imageSrc?: string;
};

export default function HeroBanner({ title, imageLabel, imageAlt, videoSrc, imageSrc }: HeroBannerProps) {
  return (
    <section className="relative">
      {videoSrc ? (
        <LazyVideo
          src={videoSrc}
          ariaLabel={imageAlt}
          className="relative aspect-[16/11] w-full overflow-hidden border-elegant bg-black md:aspect-[16/7]"
        />
      ) : imageSrc ? (
        <div className="relative aspect-[16/11] w-full overflow-hidden border-elegant bg-black md:aspect-[16/7]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={imageLabel}
          alt={imageAlt}
          className="aspect-[16/11] w-full md:aspect-[16/7]"
          priority
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/15" />
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-6 text-center sm:px-6 md:pb-10">
        <ScriptHeading className="text-4xl leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-5xl md:text-7xl">
          {title}
        </ScriptHeading>
      </div>
    </section>
  );
}
