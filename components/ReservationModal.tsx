"use client";

import { useEffect, useCallback } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RESERVATION_COPY = {
  hr: "Pozdrav! Hvala na interesu za posjet restoranu Stradoon. Rezervacije trenutno primamo putem e-maila ili telefona. Slobodno nas kontaktirajte i vidimo se!",
  en: "Hello! Thank you for your interest in visiting Stradoon. We are currently accepting reservations via email or phone. Feel free to contact us, and we look forward to seeing you!"
} as const;

const EMAIL = "stradoon@juznivjetar.com";
const PHONE = "+385 99 3388 276";

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { language } = useLanguage();
  const lang = language;

  useBodyScrollLock(isOpen);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handlePopstate = () => {
      if (isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", handlePopstate);
    }

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/70 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="absolute left-1/2 top-1/2 max-h-[90vh] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-ivory p-5 shadow-2xl sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-modal-title"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 text-3xl font-bold leading-none text-primaryRed hover:text-primaryRed/70"
          aria-label={lang === "hr" ? "Zatvori" : "Close"}
        >
          ×
        </button>

        <h2
          id="reservation-modal-title"
          className="mb-5 pr-8 font-cardo text-2xl font-bold text-primaryRed"
        >
          {lang === "hr" ? "Rezervacija" : "Reservation"}
        </h2>

        <p className="text-base leading-relaxed text-deepText/95 md:text-lg">
          {RESERVATION_COPY[lang]}
        </p>

        <div className="mt-6 space-y-3 border-t border-primaryRed/20 pt-5 text-base md:text-lg">
          <p>
            <span className="font-semibold text-deepText">Email:</span>
            <br />
            <a
              href={`mailto:${EMAIL}`}
              className="text-primaryRed underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </p>
          <p>
            <span className="font-semibold text-deepText">
              {lang === "hr" ? "Telefon:" : "Phone:"}
            </span>
            <br />
            <a
              href={`tel:${PHONE.replace(/\s+/g, "")}`}
              className="text-primaryRed underline-offset-4 hover:underline"
            >
              {PHONE}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
