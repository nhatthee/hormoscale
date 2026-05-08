"use client";

import { useState } from "react";
import Link from "next/link";
import { glpCalculatorLinks } from "@/components/glp-links";

type MobileCalculatorDrawerProps = {
  currentPath?: string;
};

export function MobileCalculatorDrawer({ currentPath }: MobileCalculatorDrawerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
        className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white md:inline-flex"
      >
        <span className="text-2xl leading-none">☰</span>
      </button>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E9E3F4] bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-5xl grid-cols-3 px-4 py-2">
          <Link
            href="/"
            aria-label="Go home"
            className="flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-xs font-bold text-[#6B3FA0]"
          >
            <span className="text-lg leading-none">⌂</span>
            <span>Home</span>
          </Link>

          <button
            type="button"
            aria-label="Search calculators"
            onClick={() => setIsSearchOpen(true)}
            className="flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-xs font-bold text-[#6B3FA0]"
          >
            <span className="text-lg leading-none">⌕</span>
            <span>Search</span>
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-xs font-bold text-[#6B3FA0]"
          >
            <span className="text-lg leading-none">☰</span>
            <span>Menu</span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu backdrop"
          className={`absolute inset-0 bg-[#2B2340]/55 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={`absolute bottom-3 right-3 top-3 flex w-[88%] max-w-md flex-col overflow-y-auto rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-[105%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-[#6B3FA0]">
              Explore Other GLP-1 Calculators
            </h2>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg p-2 text-[#6B3FA0]"
            >
              ✕
            </button>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#4F4862]">
            Compare projected weight-loss outcomes across popular GLP-1 and
            related treatment profiles.
          </p>

          <div className="mt-5 space-y-2">
            {glpCalculatorLinks.map((link) => {
              const isCurrent = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl border px-4 py-3 text-sm font-black ${
                    isCurrent
                      ? "border-[#D7C8EF] bg-[#F3ECFF] text-[#8B73B2] opacity-70"
                      : "border-[#E9E3F4] bg-[#FAF7FF] text-[#6B3FA0]"
                  }`}
                >
                  {link.label}
                  {isCurrent ? " (Current)" : ""}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <div className="mx-auto flex w-full items-center justify-center gap-5 border-t border-[#E9E3F4] pt-4 text-sm">
              <Link
                href="/privacy"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#6F6785] transition-colors hover:text-[#6B3FA0]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#6F6785] transition-colors hover:text-[#6B3FA0]"
              >
                Terms
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div
        className={`fixed inset-0 z-50 ${
          isSearchOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close search backdrop"
          className={`absolute inset-0 bg-[#2B2340]/55 transition-opacity duration-200 ${
            isSearchOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsSearchOpen(false)}
        />

        <section
          className={`absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-2xl transition-all duration-200 ${
            isSearchOpen
              ? "-translate-y-1/2 opacity-100"
              : "translate-y-[-45%] opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-[#6B3FA0]">
              Search Hormoscale
            </h2>
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setIsSearchOpen(false)}
              className="rounded-lg p-2 text-[#6B3FA0]"
            >
              ✕
            </button>
          </div>

          <input
            type="search"
            placeholder="Search calculators, medications, or topics"
            className="mt-4 w-full rounded-xl border-2 border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm outline-none focus:border-[#73E0D1] focus:bg-white"
          />

          <div className="mt-4 space-y-2">
            {[
              ...glpCalculatorLinks,
              { href: "/disclaimer", label: "Disclaimer" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSearchOpen(false)}
                className="block rounded-xl border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
