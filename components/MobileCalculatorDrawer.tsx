"use client";

import { useState } from "react";
import Link from "next/link";
import { glpCalculatorLinks } from "@/components/glp-links";

type MobileCalculatorDrawerProps = {
  currentPath?: string;
};

export function MobileCalculatorDrawer({ currentPath }: MobileCalculatorDrawerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const comparisonLinks = [
    { href: "/wegovy-vs-ozempic", label: "Wegovy vs Ozempic" },
    { href: "/mounjaro-vs-wegovy", label: "Mounjaro vs Wegovy" },
    { href: "/tirzepatide-vs-semaglutide", label: "Tirzepatide vs Semaglutide" },
  ] as const;

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

          <Link
            href="/blog"
            aria-label="Go to blog"
            className="flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-xs font-bold text-[#6B3FA0]"
          >
            <span className="text-lg leading-none">📰</span>
            <span>Blog</span>
          </Link>

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
          className={`absolute bottom-3 right-3 top-3 flex w-[88%] max-w-[400px] flex-col overflow-y-auto rounded-2xl border border-[#E9E3F4] bg-white p-4 shadow-2xl transition-transform duration-300 ease-out sm:max-w-[340px] md:max-w-[400px] ${
            isMenuOpen ? "translate-x-0" : "translate-x-[105%]"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#6B3FA0] bg-white">
                <span className="text-2xl font-black leading-none text-[#6B3FA0]">
                  H
                </span>
              </span>
              <span className="text-sm font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                Hormoscale
              </span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg p-2 text-[#6B3FA0]"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 border-b border-[#E9E3F4] pb-3">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#6B3FA0]">
              Explore
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                <span className="text-base leading-none">⚖️</span>
                GLP-1 Calculators
              </p>
              <span className="text-sm text-[#6B3FA0]">⌄</span>
            </div>
            {glpCalculatorLinks.map((link) => {
              const isCurrent = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-black ${
                    isCurrent
                      ? "border-[#D7C8EF] bg-[#F3ECFF] text-[#8B73B2] opacity-70"
                      : "border-[#E9E3F4] bg-[#FBF8FF] text-[#6B3FA0]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-sm">›</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                <span className="text-base leading-none">🔀</span>
                Comparisons
              </p>
              <span className="text-sm text-[#6B3FA0]">⌄</span>
            </div>
            {comparisonLinks.map((link) => {
              const isCurrent = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-black ${
                    isCurrent
                      ? "border-[#D7C8EF] bg-[#F3ECFF] text-[#8B73B2] opacity-70"
                      : "border-[#E9E3F4] bg-[#FBF8FF] text-[#6B3FA0]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-sm">›</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <div className="grid gap-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-[#E9E3F4] bg-[#FBF8FF] px-4 py-3"
              >
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                  <span className="text-base leading-none">⌂</span>
                  Home
                </span>
                <span className="text-[#6B3FA0]">›</span>
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-[#E9E3F4] bg-[#FBF8FF] px-4 py-3"
              >
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                  <span className="text-base leading-none">✎</span>
                  Blog
                </span>
                <span className="text-[#6B3FA0]">›</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
