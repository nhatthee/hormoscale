"use client";

import { useState } from "react";
import { CalculatorForm } from "@/components/CalculatorForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Results } from "@/components/results/Results";
import type { CalculationResults } from "@/components/results/types";

export default function HomePage() {
  const [results, setResults] = useState<CalculationResults | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-5xl space-y-8 px-4 py-10 md:px-6 md:py-12">
        <CalculatorForm onCalculate={setResults} />
        <Results results={results} />
      </section>

      <Footer />
    </main>
  );
}