import ScriptHeading from "@/components/ScriptHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type HeroBannerProps = {
  title: string;
  imageLabel: string;
  imageAlt: string;
  videoSrc?: string;
};

export default function HeroBanner({ title, imageLabel, imageAlt, videoSrc }: HeroBannerProps) {
  return (
    <section className="relative">
      {videoSrc ? (
        <div className="relative aspect-[16/11] w-full overflow-hidden border-elegant bg-black md:aspect-[16/7]">
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={imageAlt}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
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
      <div className="absolute inset-0 flex items-center justify-center px-6 pb-6 text-center md:pb-10">
        <ScriptHeading className="text-5xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] md:text-7xl">
          {title}
        </ScriptHeading>
      </div>
    </section>
  );
}
