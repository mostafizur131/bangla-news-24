import Image from "next/image";
import Link from "next/link";
import NavLinksWrapper from "./NavLinksWrapper";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full border-t-4 border-gray-800 bg-white">
      {/* Main Header */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-4 py-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:gap-4 lg:px-8">
        {/* Left Spacer */}
        <div className="hidden md:block" />

        {/* Center Logo + Date */}
        <Link
          href="/"
          className="flex min-w-0 items-center justify-center gap-2"
        >
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={50}
            height={50}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-xl font-bold leading-tight text-red-700 sm:text-2xl">
              Bangla News 24
            </h1>
            <p className="mt-1 text-xs text-neutral-500">{date}</p>
          </div>
        </Link>

        {/* Right: Auth Buttons / User Avatar */}
        <div className="flex items-center justify-center md:justify-end">
          <UserInfo />
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-neutral-100">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
          <NavLinksWrapper />
        </div>
      </div>
    </header>
  );
};

export default Header;
