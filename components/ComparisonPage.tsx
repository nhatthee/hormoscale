import Link from "next/link";
import type { ComparisonPageConfig } from "@/app/glp-comparison-pages";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type ComparisonPageProps = {
  config: ComparisonPageConfig;
};

export function ComparisonPage({ config }: ComparisonPageProps) {
  return (
    <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Header
        currentPath={`/${config.slug}`}
        title={
          <>
            {config.h1}
            <br />
            <span className="whitespace-nowrap">
              <span className="text-[#73E0D1]">Comparison</span> Guide
            </span>
          </>
        }
        description={config.summary}
      />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Comparison Summary
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
          Key Differences
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {config.keyDifferences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-[0_8px_20px_rgba(107,63,160,0.06)]"
            >
              <h3 className="text-base font-black text-[#6B3FA0]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4F4862]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Mechanism Comparison
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.mechanismComparison}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Weight-Loss Expectation Overview
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.weightLossOverview}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Lifestyle Considerations
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.lifestyleConsiderations}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">FAQ</h2>
          <div className="mt-5 space-y-4">
            {config.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-[#F0E8FB] bg-[#FAF7FF] p-4"
              >
                <h3 className="font-bold text-[#6B3FA0]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4F4862]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Related Calculators
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {config.relatedCalculatorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border-2 border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0] hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
