import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cjenik / Price list | Stradoon",
  description:
    "Cjenik bistra – slastičarnice Stradoon, Placa 6, Dubrovnik, sa sidrenim cijenama od 10. 9. 2026."
};

export default function CjenikLayout({ children }: { children: React.ReactNode }) {
  return children;
}
