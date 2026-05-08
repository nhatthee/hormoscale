import Link from "next/link";
import { glpCalculatorLinks } from "@/components/glp-links";

type ExploreCalculatorsSectionProps = {
  currentPath?: string;
};

export function ExploreCalculatorsSection({
  currentPath,
}: ExploreCalculatorsSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-14">
      <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
        <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
          Explore GLP-1 Calculators
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {glpCalculatorLinks.map((link) => {
            const isCurrent = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`rounded-xl border-2 px-4 py-3 text-sm font-black transition ${
                  isCurrent
                    ? "border-[#D7C8EF] bg-[#F3ECFF] text-[#8B73B2] opacity-70"
                    : "border-[#E9E3F4] bg-[#FAF7FF] text-[#6B3FA0] hover:border-[#6B3FA0] hover:bg-white"
                }`}
              >
                {link.label}
                {isCurrent ? " (Current)" : ""}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
