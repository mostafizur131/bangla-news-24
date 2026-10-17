"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavs {
  scrapable: boolean;
  slug: string;
  title: string;
  topicId: string;
  url: string;
}

const NavLinks = ({ navs }: { navs: INavs[] }) => {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname === href;

    return `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-red-700 text-white"
        : "text-neutral-700 hover:bg-red-50 hover:text-red-700"
    }`;
  };

  return (
    <nav className="mb-0 flex w-full items-center justify-start gap-2 overflow-x-auto whitespace-nowrap px-2 py-3 sm:justify-center sm:gap-5">
      <Link
        href="/"
        className={getLinkClass("/")}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        হোম
      </Link>

      {navs.map((nav) => {
        const href = `/category/${nav.slug}`;

        return (
          <Link
            href={href}
            key={nav.topicId}
            className={getLinkClass(href)}
            aria-current={pathname === href ? "page" : undefined}
          >
            {nav.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
