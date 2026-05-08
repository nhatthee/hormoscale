"use client";

import { GLPWeightLossCalculatorPage } from "@/app/components/GLPWeightLossCalculatorPage";
import { ExploreCalculatorsSection } from "@/components/ExploreCalculatorsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { GlpCalculatorPageConfig } from "@/app/glp-calculator-pages";

type MedicationCalculatorPageProps = {
  config: GlpCalculatorPageConfig;
};

export function MedicationCalculatorPage({ config }: MedicationCalculatorPageProps) {
  return (
    <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Header
        title={
          <>
            <span className="text-[#F5A623]">{config.medicationName}</span> Weight
            <br />
            <span className="whitespace-nowrap">
              Loss <span className="text-[#73E0D1]">Calculator</span>
            </span>
          </>
        }
        description={config.intro}
        currentPath={`/${config.slug}`}
      />

      <GLPWeightLossCalculatorPage
        className="mx-auto max-w-5xl space-y-6 px-4 py-8 md:space-y-8 md:px-6 md:py-10"
        defaultMedication={config.defaultMedication}
        medicationHelperText={config.medicationHelperText}
      />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            {config.seoHeading}
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.seoBody}</p>
          <div className="mt-5 space-y-4">
            <p className="leading-7 text-[#4F4862]">{config.treatmentOverview}</p>
            <p className="leading-7 text-[#4F4862]">{config.expectedContext}</p>
            <p className="leading-7 text-[#4F4862]">{config.comparisonCopy}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {config.educationalCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-[0_8px_20px_rgba(107,63,160,0.06)]"
            >
              <h3 className="text-base font-black text-[#6B3FA0]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4F4862]">{card.body}</p>
            </article>
          ))}
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

      <ExploreCalculatorsSection currentPath={`/${config.slug}`} />

      <Footer />
    </main>
  );
}
