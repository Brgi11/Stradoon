"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

const CSV_HREF =
  "/downloads/57470495260_BISTRO-SLASTICARNICA_STRADOON_PLACA-6-DUBROVNIK_JV1_USLUGE_0001_20261117_SSMM.csv";
const CSV_FILENAME =
  "57470495260_BISTRO-SLASTICARNICA_STRADOON_PLACA-6-DUBROVNIK_JV1_USLUGE_0001_20261117_SSMM.csv";
const EFFECTIVE_DATE = "17. 11. 2026.";

type PriceRow = {
  name: string;
  quantity: string;
  anchorPrice: string;
  specialSale: string;
  currentPrice: string;
};

const copy = {
  hr: {
    title: "Cjenik / Price list",
    venueType: "Bistro – slastičarnica",
    publicName: "Javni naziv",
    adminName: "Administrativni naziv prostora",
    code: "Oznaka poslovnog prostora",
    address: "Adresa objekta",
    effective: "Datum početka primjene",
    intro:
      "JUŽNI VJETAR d.o.o. u bistrou – slastičarnici Stradoon pruža usluge pripreme i posluživanja hrane i pića.",
    defined:
      "Cijene jela, pića i ostalih stavki s jelovnika određene su ovim cjenikom. Ne formiraju se pojedinačnim upitom.",
    anchor:
      "Sidrena cijena je cijena koja je vrijedila 10. 9. 2026. Ističe se uz cijenu na snazi, i kada je jednaka toj cijeni.",
    csv: "Sukladno važećim propisima o javnoj objavi cijena, cjenik s pripadajućim sidrenim cijenama dostupan je za preuzimanje u strojno čitljivom CSV formatu.",
    download: "Preuzmi cjenik (CSV)",
    colItem: "Naziv",
    colQty: "Količina",
    colAnchor: "Sidrena cijena",
    colSpecial: "Poseban oblik prodaje",
    colCurrent: "Cijena",
    seat: "Sjedište",
    loading: "Učitavanje cjenika…",
    empty: "Cjenik se trenutačno ne može prikazati."
  },
  en: {
    title: "Cjenik / Price list",
    venueType: "Bistro and patisserie",
    publicName: "Public name",
    adminName: "Administrative name of the premises",
    code: "Premises code",
    address: "Address",
    effective: "Effective from",
    intro: "JUŽNI VJETAR d.o.o. serves food and drinks at the Stradoon bistro and patisserie.",
    defined:
      "Prices for dishes, drinks and the other items on the menu are set by this price list. They are not quoted individually on request.",
    anchor:
      "The anchor price is the price in effect on 10 September 2026. It is shown next to the current price, including when the two amounts are the same.",
    csv: "In line with the rules on public price disclosure, the price list and its anchor prices are available for download in a machine-readable CSV format.",
    download: "Download price list (CSV)",
    colItem: "Item",
    colQty: "Quantity",
    colAnchor: "Anchor price",
    colSpecial: "Special form of sale",
    colCurrent: "Price",
    seat: "Registered office",
    loading: "Loading the price list…",
    empty: "The price list cannot be displayed right now."
  }
} as const;

function unquote(cell: string) {
  const value = cell.trim();
  if (value.startsWith('"') && value.endsWith('"')) return value.slice(1, -1);
  return value;
}

function formatEuro(value: string) {
  const price = value.trim();
  if (!price || price.includes("€")) return price;
  return `${price} €`;
}

function parsePriceRows(text: string): PriceRow[] {
  const rows: PriceRow[] = [];
  for (const line of text.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    const cells = line.split(";").map(unquote);
    const [rawName, retail, specialSale, base] = cells;
    if (!rawName || rawName === "Naziv usluge" || !retail || !/^\d/.test(retail)) continue;
    const parts = rawName.split("·").map((part) => part.trim());
    rows.push({
      name: parts[0],
      quantity: parts.slice(1).join(" · ") || "—",
      anchorPrice: formatEuro(base ?? ""),
      specialSale,
      currentPrice: formatEuro(retail)
    });
  }
  return rows;
}

function specialSaleLabel(value: string, language: "hr" | "en") {
  const normalized = value.trim().toUpperCase();
  if (language === "en" && normalized === "NE") return "No";
  if (language === "en" && normalized === "DA") return "Yes";
  return value;
}

export default function CjenikPage() {
  const { language } = useLanguage();
  const t = copy[language];
  const [rows, setRows] = useState<PriceRow[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch(CSV_HREF)
      .then((response) => {
        if (!response.ok) throw new Error("Price list request failed");
        return response.text();
      })
      .then((text) => {
        if (cancelled) return;
        setRows(parsePriceRows(text));
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <article className="bg-white py-10 text-deepText md:py-16">
      <div className="container-elegant max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="font-cardo text-3xl tracking-wide text-primaryRed md:text-5xl">{t.title}</h1>
          <p className="mt-4 text-2xl tracking-[0.14em] text-deepText md:text-3xl">STRADOON</p>
          <p className="mt-2 text-lg text-deepText/80">{t.venueType}</p>
          <p className="text-lg text-deepText/80">Placa 6, 20000 Dubrovnik</p>
        </header>

        <dl className="mb-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-deepText/50">{t.publicName}</dt>
            <dd className="mt-1">STRADOON</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-deepText/50">{t.code}</dt>
            <dd className="mt-1">JV1</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-deepText/50">{t.address}</dt>
            <dd className="mt-1">Placa 6, 20000 Dubrovnik</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-deepText/50">{t.adminName}</dt>
            <dd className="mt-1">ISU</dd>
          </div>
        </dl>

        <div className="mb-10 space-y-4 text-base leading-relaxed text-deepText/85">
          <p>{t.intro}</p>
          <p>{t.defined}</p>
          <p>{t.anchor}</p>
          <p>{t.csv}</p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-lg text-primaryRed">
            {t.effective}: {EFFECTIVE_DATE}
          </p>
          <a
            href={CSV_HREF}
            download={CSV_FILENAME}
            className="inline-flex items-center justify-center rounded-md border border-primaryRed px-4 py-2 text-sm text-primaryRed transition hover:bg-primaryRed hover:text-ivory"
          >
            {t.download}
          </a>
        </div>

        {status !== "ready" ? (
          <p className="text-deepText/70">{status === "loading" ? t.loading : t.empty}</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-deepText/15">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-ivory text-primaryRed">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 font-normal">{t.colItem}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-normal">{t.colQty}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-normal">{t.colAnchor}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-normal">{t.colSpecial}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-normal">{t.colCurrent}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={`${row.name}-${row.quantity}-${index}`} className="border-t border-deepText/10">
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="whitespace-nowrap px-4 py-2">{row.quantity}</td>
                    <td className="whitespace-nowrap px-4 py-2">{row.anchorPrice}</td>
                    <td className="px-4 py-2">{specialSaleLabel(row.specialSale, language)}</td>
                    <td className="whitespace-nowrap px-4 py-2">{row.currentPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <footer className="mt-16 border-t border-deepText/15 pt-8 text-center text-deepText/80">
          <p className="text-lg text-primaryRed">JUŽNI VJETAR d.o.o.</p>
          <p className="mt-2">
            {t.seat}: Placa 6, 20000 Dubrovnik
          </p>
          <p>OIB: 57470495260</p>
        </footer>
      </div>
    </article>
  );
}
