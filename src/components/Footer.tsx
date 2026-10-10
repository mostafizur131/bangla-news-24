import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-neutral-950 text-neutral-300">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block text-2xl font-extrabold tracking-tight text-white"
          >
            Bangla <span className="text-red-600">News 24</span>
          </Link>

          <p className="max-w-sm text-sm leading-7 text-neutral-400">
            দেশ-বিদেশের সর্বশেষ খবর, গুরুত্বপূর্ণ সংবাদ ও সমসাময়িক ঘটনাবলি
            জানতে থাকুন আমাদের সঙ্গে।
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-red-400"
          >
            হোম পেজে ফিরে যান
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-4 text-base font-bold text-white">
            গুরুত্বপূর্ণ লিংক
          </h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-red-500">
                হোম
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-red-500">
                সর্বশেষ সংবাদ
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-red-500">
                সর্বাধিক পঠিত
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="mb-4 text-base font-bold text-white">সংবাদ বিভাগ</h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/category/politics"
                className="transition-colors hover:text-red-500"
              >
                রাজনীতি
              </Link>
            </li>
            <li>
              <Link
                href="/category/world"
                className="transition-colors hover:text-red-500"
              >
                বিশ্ব
              </Link>
            </li>
            <li>
              <Link
                href="/category/sports"
                className="transition-colors hover:text-red-500"
              >
                খেলাধুলা
              </Link>
            </li>
            <li>
              <Link
                href="/category/technology"
                className="transition-colors hover:text-red-500"
              >
                প্রযুক্তি
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="mb-4 text-base font-bold text-white">
            আমাদের সম্পর্কে
          </h2>

          <p className="text-sm leading-7 text-neutral-400">
            পাঠকদের কাছে তথ্যবহুল, নির্ভরযোগ্য ও সময়োপযোগী সংবাদ পৌঁছে দেওয়াই
            আমাদের লক্ষ্য।
          </p>

          <p className="mt-4 text-xs leading-6 text-neutral-500">
            সত্য ও বস্তুনিষ্ঠ সংবাদ পরিবেশনে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:px-8 md:text-left">
          <p className="text-xs leading-6 text-neutral-500 sm:text-sm">
            © {currentYear} বাংলা সংবাদ। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <Link
            href="/"
            className="text-xs text-neutral-400 transition-colors hover:text-red-500 sm:text-sm"
          >
            সর্বশেষ খবর জানতে আমাদের সঙ্গে থাকুন
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
