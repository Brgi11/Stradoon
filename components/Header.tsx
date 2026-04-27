"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { useLanguage } from "@/components/LanguageContext";
import ReservationModal from "@/components/ReservationModal";

type NavItemType = {
  labelHr: string;
  labelEn: string;
  href?: string;
  isReserve?: boolean;
};

const navItems: NavItemType[] = [
  { labelHr: "Meni Doručak", labelEn: "Breakfast Menu", href: "/breakfast-menu" },
  { labelHr: "Kokteli", labelEn: "Cocktail Menu", href: "/cocktail-menu" },
  { labelHr: "Rezerviraj", labelEn: "Reserve", isReserve: true },
  { labelHr: "Kontakt", labelEn: "Contact Us", href: "/#contact" }
];

const socialItems = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/stradoondubrovnik/",
    Icon: FacebookIcon
  },
  { label: "Instagram", href: "https://www.instagram.com/stradoon/", Icon: InstagramIcon },
  { label: "Email", href: "mailto:stradoon@juznivjetar.com", Icon: EmailIcon }
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.64 21v-8.2h2.76l.41-3.2h-3.17V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.82-.09-1.64-.14-2.47-.14-2.45 0-4.12 1.5-4.12 4.25v2.36H7.56v3.2h2.78V21h3.3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const lang = language;
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isReserveOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isReserveOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const getNavLabel = (item: NavItemType) => {
    return lang === "hr" ? item.labelHr : item.labelEn;
  };

  const handleNavClick = (item: NavItemType) => {
    if (item.isReserve) {
      setIsReserveOpen(true);
      closeMenu();
    } else {
      closeMenu();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ivory/20 bg-primaryRed">
        <div className="container-elegant">
          <div className="flex min-h-14 items-center justify-between gap-3 py-1 text-ivory md:min-h-20 md:py-2">
            <button
              type="button"
              className="inline-flex h-8 w-10 items-center justify-center rounded-md text-ivory md:h-10 md:w-12"
              aria-label="Open navigation menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="relative block h-3.5 w-6 md:h-4 md:w-7">
                <span className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-ivory" />
                <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-ivory" />
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-ivory" />
              </span>
            </button>

            <Link href="/" className="relative h-7 w-28 md:h-10 md:w-40" aria-label="Stradoon home">
              <Image
                src="/images/stradoon white logo.png"
                alt="Stradoon logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                window.location.reload();
              }}
              className="rounded-full border border-ivory/40 px-2 py-0.5 text-[10px] tracking-widest md:px-3 md:py-1 md:text-sm"
              aria-label="Language selector"
            >
              {language === "hr" ? "EN" : "HR"}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          isMenuOpen ? "pointer-events-auto bg-black/55 opacity-100" : "pointer-events-none bg-black/0 opacity-0"
        }`}
        onClick={closeMenu}
        role="presentation"
      >
        <div
          ref={menuRef}
          className={`absolute left-0 top-0 h-full w-[84%] max-w-sm transform bg-primaryRed px-6 py-6 text-ivory shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
          aria-label="Navigation menu"
        >
          <div className="mb-8 flex items-center justify-end">
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-full border border-ivory/50 px-3 py-1 text-sm"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-4 text-xl">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.isReserve ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="block w-full border-b border-ivory/25 pb-3 text-left transition hover:text-ivory/80"
                    >
                      {getNavLabel(item)}
                    </button>
                  ) : (
                    <Link
                      href={item.href || "/"}
                      onClick={() => handleNavClick(item)}
                      className="block border-b border-ivory/25 pb-3 transition hover:text-ivory/80"
                    >
                      {getNavLabel(item)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex items-center gap-3">
            {socialItems.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/55 text-ivory transition hover:bg-ivory hover:text-primaryRed"
              >
                <social.Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <ReservationModal isOpen={isReserveOpen} onClose={() => setIsReserveOpen(false)} />
    </>
  );
}