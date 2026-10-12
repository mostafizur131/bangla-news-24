import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4 py-8 sm:px-8 lg:px-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl lg:min-h-162.5lg:grid-cols-2">
        {/* Left Panel — Desktop */}
        <section className="hidden flex-col justify-between bg-[#c9000b] p-10 text-white lg:flex xl:p-16">
          <Link href="/" className="text-3xl font-extrabold">
            বাংলা সংবাদ
          </Link>

          <div className="max-w-md">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              স্বাগতম
            </p>
            <h2 className="text-4xl font-bold leading-tight xl:text-5xl">
              আপনার পছন্দের খবর, এক জায়গায়।
            </h2>
            <p className="mt-5 text-base leading-8 text-white/85">
              অ্যাকাউন্ট তৈরি করুন এবং সহজেই আপনার পছন্দের সংবাদ পড়ুন।
            </p>
          </div>

          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} বাংলা সংবাদ
          </p>
        </section>

        {/* Right Panel — Form */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-lg">
            <Link
              href="/"
              className="mb-8 inline-block text-xl font-extrabold text-red-600 lg:hidden"
            >
              বাংলা সংবাদ
            </Link>

            <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              সাইন আপ
            </h1>
            <p className="mt-3 text-sm leading-6 text-neutral-500 sm:text-base">
              নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন।
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  নাম
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="আপনার নাম লিখুন"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Image URL
                </label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  ইমেইল
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  পাসওয়ার্ড
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-neutral-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#c9000b] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
              >
                সাইন আপ করুন
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-neutral-600 sm:text-base">
              অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/signin"
                className="font-semibold text-red-600 hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
