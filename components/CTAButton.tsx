"use client";

import { useState } from "react";
import Link from "next/link";
import ReservationModal from "@/components/ReservationModal";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-ivory/80 bg-primaryRed px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_3px_12px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8f2d2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-primaryRed sm:w-auto sm:min-w-44 sm:px-7 sm:py-3 sm:text-base md:min-w-52 md:text-lg"
    >
      {children}
    </Link>
  );
}

export function ReserveButton({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-ivory/80 bg-primaryRed px-5 py-2.5 text-sm uppercase tracking-[0.12em] text-ivory shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_3px_12px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8f2d2c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-primaryRed sm:w-auto sm:min-w-44 sm:px-7 sm:py-3 sm:text-base md:min-w-52 md:text-lg"
      >
        {children}
      </button>
      <ReservationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}