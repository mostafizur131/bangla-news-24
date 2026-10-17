"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      await authClient.signOut();
      setIsOpen(false);
      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Failed to sign out:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  // Avoid showing incorrect authentication buttons while loading.
  if (isPending) {
    return (
      <div className="h-10 w-24 animate-pulse rounded-md bg-neutral-100" />
    );
  }

  // User is not signed in.
  if (!user) {
    return (
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/signin"
          className="hidden text-sm font-medium text-neutral-700 transition hover:text-red-700 sm:inline-block"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  // User is signed in.
  const initials = (user.name || user.email || "U")
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <div className="relative flex items-center justify-end">
      {/* Avatar Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open user menu"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-full border border-neutral-200 p-1 pr-3 transition hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={user.name || "User avatar"}
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
            {initials}
          </span>
        )}

        <span className="hidden max-w-32 truncate text-sm font-medium text-neutral-700 sm:block">
          {user.name || "ব্যবহারকারী"}
        </span>

        <svg
          className={`h-4 w-4 text-neutral-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close user menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 top-full z-50 mt-3 w-64 max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
            {/* User Details */}
            <div className="border-b border-neutral-100 px-4 py-4">
              <p className="truncate text-sm font-semibold text-neutral-900">
                {user.name || "ব্যবহারকারী"}
              </p>

              <p className="mt-1 truncate text-xs text-neutral-500">
                {user.email}
              </p>
            </div>

            {/* Sign Out */}
            <div className="p-2">
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
