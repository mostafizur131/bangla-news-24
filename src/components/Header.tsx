import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full border-t-4 border-gray-800 bg-white">
      <div className="relative mx-auto flex min-h-24 max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:min-h-24 md:flex-row md:items-center md:justify-center md:gap-0">
        {/* Logo + Date */}
        <div className="flex items-center justify-center gap-2 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={50}
            height={50}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />

          <div className="min-w-0">
            <h2 className="whitespace-nowrap  text-xl font-bold text-red-700 sm:text-2xl">
              Bangla News 24
            </h2>

            <p className="text-xs text-neutral-500">{date}</p>
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center justify-end gap-3 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
          <button
            type="button"
            className="hidden cursor-pointer text-sm font-medium text-neutral-700 transition hover:text-red-700 sm:inline-block"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
