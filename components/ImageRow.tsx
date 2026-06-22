import type { ImageAsset } from "@/data/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type ImageRowProps = {
  images: ImageAsset[];
  columns?: 2 | 3 | 4 | 5;
  layout?: "grid" | "scroll";
  size?: "default" | "large";
};

export default function ImageRow({
  images,
  columns = 3,
  layout = "grid",
  size = "default"
}: ImageRowProps) {
  const imageClassName = "aspect-[4/5] w-full shadow-[0_8px_24px_rgba(0,0,0,0.22)]";

  const scrollItemClassName =
    size === "large"
      ? "w-[88vw] max-w-[24rem] flex-shrink-0 snap-center sm:w-[21rem] md:w-[24rem] lg:w-auto lg:max-w-none lg:flex-shrink"
      : "w-[72vw] max-w-[16rem] flex-shrink-0 snap-center sm:w-56 lg:w-auto lg:max-w-none lg:flex-shrink";

  if (columns === 2) {
    return (
      <section className="bg-primaryRed py-6 md:py-10">
        <div className="container-elegant">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {images.map((image) => (
              <ImagePlaceholder
                key={image.src}
                src={image.src}
                label={image.label}
                alt={image.alt}
                className={imageClassName}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === "scroll" && columns === 5) {
    return (
      <section className="bg-primaryRed py-6 md:py-10">
        <div className="container-elegant-wide">
          <div className="flex gap-4 overflow-x-auto scroll-px-4 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:pb-0 xl:gap-5 [&::-webkit-scrollbar]:hidden">
            {images.map((image) => (
              <div key={image.src} className={scrollItemClassName}>
                <ImagePlaceholder
                  src={image.src}
                  label={image.label}
                  alt={image.alt}
                  className={imageClassName}
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 384px, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === "scroll") {
    return (
      <section className="bg-primaryRed py-6 md:py-10">
        <div className="container-elegant">
          <div className="flex gap-4 overflow-x-auto scroll-px-4 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:gap-5 [&::-webkit-scrollbar]:hidden">
            {images.map((image) => (
              <div key={image.src} className={scrollItemClassName}>
                <ImagePlaceholder
                  src={image.src}
                  label={image.label}
                  alt={image.alt}
                  className={imageClassName}
                  sizes="(max-width: 640px) 88vw, 384px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const gridClass =
    columns === 5
      ? "md:grid-cols-2 lg:grid-cols-5"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-3";

  const gridSizes =
    columns === 5
      ? "(max-width: 768px) 72vw, (max-width: 1024px) 50vw, 20vw"
      : columns === 4
        ? "(max-width: 768px) 72vw, (max-width: 1024px) 50vw, 25vw"
        : "(max-width: 768px) 72vw, 33vw";

  return (
    <section className="bg-primaryRed py-6 md:py-10">
      <div className="container-elegant">
        <div
          className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid ${gridClass} md:gap-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden`}
        >
          {images.map((image) => (
            <div
              key={image.src}
              className={`${scrollItemClassName} md:w-auto md:max-w-none md:flex-shrink`}
            >
              <ImagePlaceholder
                src={image.src}
                label={image.label}
                alt={image.alt}
                className={imageClassName}
                sizes={gridSizes}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
