import type { ImageAsset } from "@/data/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type ImageRowProps = {
  images: ImageAsset[];
  columns?: 2 | 3 | 4;
};

export default function ImageRow({ images, columns = 3 }: ImageRowProps) {
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
                className="aspect-[4/5] w-full shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const gridClass = columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className="bg-primaryRed py-6 md:py-10">
      <div className="container-elegant">
        <div
          className={`flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid ${gridClass} md:gap-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden`}
        >
          {images.map((image) => (
            <div
              key={image.src}
              className="w-[72vw] max-w-[16rem] flex-shrink-0 snap-center sm:w-56 md:w-auto md:max-w-none md:flex-shrink"
            >
              <ImagePlaceholder
                src={image.src}
                label={image.label}
                alt={image.alt}
                className="aspect-[4/5] w-full shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
