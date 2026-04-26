import type { MenuItemData } from "@/data/content";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

type MenuItemProps = {
  item: MenuItemData;
  index: number;
};

export default function MenuItem({ item, index }: MenuItemProps) {
  const { language } = useLanguage();
  const reverseLayout = index % 2 === 1;

  return (
    <article className="rounded-2xl border border-primaryRed/20 bg-ivory/80 p-4 shadow-sm md:p-6">
      <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
        <div
          className={`relative overflow-hidden rounded-xl border border-primaryRed/25 bg-[#f5ece2] ${
            reverseLayout ? "md:order-2" : ""
          }`}
        >
          <div className="relative aspect-[4/3]">
            {item.imageSrc && (
              <Image src={item.imageSrc} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            )}
          </div>
        </div>

        <div className={reverseLayout ? "md:order-1" : ""}>
          <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 className="text-lg font-semibold tracking-wide text-primaryRed md:text-2xl">{item.name}</h3>
            <p className="text-base font-semibold text-deepText md:text-xl">{item.price}</p>
          </div>
          <p className="text-[15px] leading-relaxed text-deepText/95 md:text-base">
            {language === "hr" ? item.hrDescription : item.enDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
