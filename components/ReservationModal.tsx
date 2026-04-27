"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/components/LanguageContext";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { language } = useLanguage();
  const lang = language;
  const [formType, setFormType] = useState<"reservation" | "inquiry">("reservation");
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.documentElement.classList.add("modal-open");
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.documentElement.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const handleFormTypeChange = (newType: "reservation" | "inquiry") => {
    setFormType(newType);
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/70 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-ivory p-5 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 text-3xl font-bold leading-none text-primaryRed hover:text-primaryRed/70"
        >
          ×
        </button>

        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-type" value={formType} />

            <h2 className="mb-4 pr-8 font-cardo text-2xl font-bold text-primaryRed">
              {formType === "reservation"
                ? lang === "hr"
                  ? "Rezervacija"
                  : "Reservation"
                : lang === "hr"
                  ? "Upit"
                  : "Inquiry"}
            </h2>

            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                {lang === "hr" ? "Tip" : "Type"}
              </label>
              <select
                name="type"
                value={formType}
                onChange={(e) => handleFormTypeChange(e.target.value as "reservation" | "inquiry")}
                className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
              >
                <option value="reservation">
                  {lang === "hr" ? "Rezervacija" : "Reservation"}
                </option>
                <option value="inquiry">
                  {lang === "hr" ? "Upit" : "Inquiry"}
                </option>
              </select>
            </div>

            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                {lang === "hr" ? "Ime i prezime" : "Full Name"} *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
              />
            </div>

            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                formType === "reservation" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mb-3">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                  {lang === "hr" ? "Telefon" : "Phone"} ({lang === "hr" ? "opcija" : "optional"})
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
                />
              </div>

              <div className="mb-3 grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                    {lang === "hr" ? "Datum" : "Date"} *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required={formType === "reservation"}
                    min={getMinDate()}
                    className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                    {lang === "hr" ? "Vrijeme" : "Time"} *
                  </label>
                  <input
                    type="time"
                    name="time"
                    required={formType === "reservation"}
                    className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                  {lang === "hr" ? "Broj osoba" : "Guests"} *
                </label>
                <select
                  name="guests"
                  required={formType === "reservation"}
                  className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
                >
                  <option value="">--</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? (lang === "hr" ? "osoba" : "guest") : (lang === "hr" ? "osobe" : "guests")}
                    </option>
                  ))}
                  <option value="10+">
                    10+ ({lang === "hr" ? "upišite u poruci" : "specify in message"})
                  </option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-deepText">
                {lang === "hr" ? "Poruka" : "Message"}
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full border border-primaryRed/30 bg-white px-3 py-2 text-sm text-deepText focus:border-primaryRed focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primaryRed py-2.5 text-sm font-bold uppercase tracking-wide text-ivory transition hover:bg-primaryRed/90"
            >
              {lang === "hr" ? "Pošalji" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}