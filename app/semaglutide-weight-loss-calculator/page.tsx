import type { Metadata } from "next";
import { glpCalculatorPages } from "@/app/glp-calculator-pages";
import { MedicationCalculatorPage } from "@/components/MedicationCalculatorPage";

const config = glpCalculatorPages["semaglutide-weight-loss-calculator"];

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

export default function SemaglutideWeightLossCalculatorPage() {
  return <MedicationCalculatorPage config={config} />;
}
