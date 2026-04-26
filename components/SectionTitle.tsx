type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className = ""
}: SectionTitleProps) {
  return (
    <h3
      className={`text-balance text-2xl font-semibold tracking-wide text-deepText md:text-3xl ${className}`}
    >
      {children}
    </h3>
  );
}
