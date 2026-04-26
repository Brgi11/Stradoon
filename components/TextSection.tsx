import SectionTitle from "@/components/SectionTitle";

type TextSectionProps = {
  heading?: string;
  paragraphs: string[];
  centered?: boolean;
  className?: string;
  headingClassName?: string;
};

export default function TextSection({
  heading,
  paragraphs,
  centered = true,
  className = "",
  headingClassName = ""
}: TextSectionProps) {
  return (
    <section className={`section-padding bg-ivory ${className}`}>
      <div className="container-elegant">
        <div
          className={`${centered ? "mx-auto max-w-[62ch] text-center" : "max-w-proseElegant"}`}
        >
          {heading ? (
            <SectionTitle className={`mb-5 text-primaryRed ${headingClassName}`}>
              {heading}
            </SectionTitle>
          ) : null}
          <div className="space-y-3 text-base leading-relaxed text-deepText/95 md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
