import type { Metadata } from "next";
import { glpCalculatorPages } from "@/app/glp-calculator-pages";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { MedicationCalculatorPage } from "@/components/MedicationCalculatorPage";

const config = glpCalculatorPages["wegovy-weight-loss-calculator"];

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.canonical,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.canonical,
  },
};

export default function WegovyWeightLossCalculatorPage() {
  return (
    <>
      <FaqJsonLd faqs={config.faqs} id={`faq-jsonld-${config.slug}`} />
      <MedicationCalculatorPage config={config} />
    </>
  );
}
