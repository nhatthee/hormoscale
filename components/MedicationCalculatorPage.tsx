"use client";

import { GLPWeightLossCalculatorPage } from "@/app/components/GLPWeightLossCalculatorPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { GlpCalculatorPageConfig } from "@/app/glp-calculator-pages";

type MedicationCalculatorPageProps = {
  config: GlpCalculatorPageConfig;
};

export function MedicationCalculatorPage({ config }: MedicationCalculatorPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header
        title={
          <>
            <span className="text-[#F5A623]">{config.medicationName}</span> Weight Loss
            <br />
            <span className="text-[#73E0D1]">Calculator</span>
          </>
        }
        description={config.intro}
      />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-[0_10px_24px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0] md:text-3xl">
            {config.h1}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#4F4862]">{config.intro}</p>
        </div>
      </section>

      <GLPWeightLossCalculatorPage
        className="mx-auto max-w-5xl space-y-8 px-4 py-2 md:px-6"
        defaultMedication={config.defaultMedication}
        medicationHelperText={config.medicationHelperText}
      />

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            {config.seoHeading}
          </h2>
          <p className="mt-4 leading-7 text-[#4F4862]">{config.seoBody}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
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

      <Footer />
    </main>
  );
}
