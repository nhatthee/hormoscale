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
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6B3FA0] text-lg font-black text-white shadow-lg shadow-purple-500/20">
              H
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-[#2B2340]">
                Hormoscale
              </p>

              <p className="text-sm text-[#6F6785]">
                GLP-1 Weight Management Tools
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#6F6785]">
          <Link
            href="/disclaimer"
            className="transition-colors hover:text-[#6B3FA0]"
          >
            Disclaimer
          </Link>

          <Link
            href="/privacy"
            className="transition-colors hover:text-[#6B3FA0]"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition-colors hover:text-[#6B3FA0]"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}