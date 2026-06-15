import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pasta Menu | Stradoon",
  description:
    "Explore Stradoon's handmade pasta menu featuring Italian starters and fresh pasta dishes in the heart of Dubrovnik."
};

export default function PastaMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
