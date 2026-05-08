import type { Metadata } from "next";
import { glpCalculatorPages } from "@/app/glp-calculator-pages";
import { MedicationCalculatorPage } from "@/components/MedicationCalculatorPage";

const config = glpCalculatorPages["tirzepatide-weight-loss-calculator"];

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

export default function TirzepatideWeightLossCalculatorPage() {
  return <MedicationCalculatorPage config={config} />;
}
