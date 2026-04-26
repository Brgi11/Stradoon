type ScriptHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScriptHeading({
  children,
  className = ""
}: ScriptHeadingProps) {
  return (
    <h2
      className={`font-script text-5xl leading-[0.95] text-primaryRed md:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}
