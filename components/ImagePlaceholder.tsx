import Image from "next/image";

type ImagePlaceholderProps = {
  label: string;
  alt: string;
  src?: string;
  className?: string;
  priority?: boolean;
};

const toDataUri = (label: string) => {
  const safe = label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect width='100%' height='100%' fill='%23f5ece2'/><rect x='16' y='16' width='1568' height='868' fill='none' stroke='%23a13534' stroke-width='3' stroke-dasharray='12 10'/><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' fill='%23984a48' font-size='44' font-family='Georgia, serif'>${safe}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function ImagePlaceholder({
  label,
  alt,
  src,
  className = "",
  priority = false
}: ImagePlaceholderProps) {
  return (
    <div className={`relative overflow-hidden rounded-sm border-elegant bg-[#f5ece2] ${className}`}>
      <Image
        src={src ?? toDataUri(label)}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
