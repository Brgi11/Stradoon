import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-primaryRed/20 bg-primaryRed py-10 text-ivory">
      <div className="container-elegant text-center">
        <div className="mx-auto h-10 w-40 md:h-12 md:w-48">
          <Image
            src="/images/stradoon white logo.png"
            alt="Stradoon logo"
            width={192}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="mt-3 text-sm text-ivory/90">Dubrovnik</p>
        <p className="mt-3 text-xs text-ivory/70">
          &copy; {new Date().getFullYear()} Stradoon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
