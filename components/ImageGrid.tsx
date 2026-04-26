import type { ImageAsset } from "@/data/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type ImageGridProps = {
  images: ImageAsset[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="bg-primaryRed py-6 md:py-10">
      <div className="container-elegant">
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          {images.slice(0, 3).map((image) => (
            <ImagePlaceholder
              key={image.src}
              src={image.src}
              label={image.label}
              alt={image.alt}
              className="aspect-[4/5] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
