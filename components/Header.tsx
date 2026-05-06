import Link from "next/link";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-[#6B3FA0]">
      <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-sm" />
      <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-white/10 blur-sm" />

      <div className="relative mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full bg-[#F5A623] px-4 py-2 text-[#4A2A75] shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.20)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A2A75] text-sm font-black text-white">
            H
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-sm font-black tracking-tight">
              Hormoscale
            </span>

            <span className="mt-1 text-[9px] font-black uppercase tracking-[0.18em]">
              GLP-1 Weight Management Tools
            </span>
          </span>
        </Link>

        <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
          Your <span className="text-[#73E0D1]">Weight Loss</span>
          <br />
          Journey Calculator
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
          Estimate your progress with GLP-1 medications like Wegovy, Ozempic,
          and Mounjaro — personalized to your goals.
        </p>
      </div>
    </header>
  );
}