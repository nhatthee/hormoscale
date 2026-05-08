import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E9E3F4] bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#6B3FA0] shadow-lg shadow-purple-500/20">
              <span className="text-4xl font-bold leading-none text-white">
                H
              </span>
            </div>

            <div>
            <p className="text-[1rem] font-light uppercase tracking-tight text-[#2B2340]">
              Hormoscale
            </p>

            <p className="mt-0 text-[10px] font-light uppercase tracking-[0.08em] text-[#6F6785]">
              Weight Management Tools
            </p>
          </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#6F6785]">
          <Link href="/disclaimer" className="transition-colors hover:text-[#6B3FA0]">
            Disclaimer
          </Link>

          <Link href="/privacy" className="transition-colors hover:text-[#6B3FA0]">
            Privacy
          </Link>

          <Link href="/terms" className="transition-colors hover:text-[#6B3FA0]">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}