"use client";

import { useState } from "react";
import { CalculatorForm } from "@/components/CalculatorForm";
import type { Medication } from "@/components/CalculatorForm";
import { Results } from "@/components/results/Results";
import type { CalculationResults } from "@/components/results/types";

type GLPWeightLossCalculatorPageProps = {
  className?: string;
  defaultMedication?: Medication;
  medicationHelperText?: string;
};

export function GLPWeightLossCalculatorPage({
  className = "mx-auto max-w-5xl space-y-8 px-4 py-10 md:px-6 md:py-12",
  defaultMedication,
  medicationHelperText,
}: GLPWeightLossCalculatorPageProps) {
  const [results, setResults] = useState<CalculationResults | null>(null);

  return (
    <section className={className}>
      <CalculatorForm
        onCalculate={setResults}
        defaultMedication={defaultMedication}
        medicationHelperText={medicationHelperText}
      />
      <Results results={results} />
    </section>
  );
}
