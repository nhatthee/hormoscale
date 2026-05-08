import Link from "next/link";
import type { ReactNode } from "react";
import { MobileCalculatorDrawer } from "@/components/MobileCalculatorDrawer";

type HeaderProps = {
  title?: ReactNode;
  description?: string;
  currentPath?: string;
};

export function Header({ title, description, currentPath }: HeaderProps) {
  const heroTitle = title ?? (
    <>
      Your <span className="text-[#73E0D1]">Weight</span>
      <br />
      <span className="whitespace-nowrap">
        <span className="text-[#73E0D1]">Loss</span> Journey Calculator
      </span>
    </>
  );
  const heroDescription =
    description ??
    "Estimate your progress with GLP-1 medications like Wegovy, Ozempic, and Mounjaro — personalized to your goals.";

  return (
    <header className="relative overflow-hidden bg-[#6B3FA0]">
      {/* Background glow */}
      <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-sm" />
      <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-sm" />

      <div className="relative mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
        <div className="md:flex md:items-start md:justify-between md:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="mx-auto inline-flex items-center gap-2.5 md:mx-0"
          >
            {/* H Box */}
            <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#F5A623] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <span className="text-4xl font-black leading-none text-[#6B3FA0]">
                H
              </span>
            </span>

            {/* Brand Text */}
            <span className="flex flex-col leading-none">
              <span className="text-[1rem] font-light uppercase tracking-[-0.01em] text-white">
                Hormoscale
              </span>

              <span className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-white/90">
                Weight Management Tools
              </span>
            </span>
          </Link>
          <MobileCalculatorDrawer currentPath={currentPath} />
        </div>

        {/* Hero Title */}
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
          {heroTitle}
        </h1>

        {/* Hero Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
          {heroDescription}
        </p>
      </div>
    </header>
  );
}