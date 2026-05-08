"use client";

import { GLPWeightLossCalculatorPage } from "@/app/components/GLPWeightLossCalculatorPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <GLPWeightLossCalculatorPage />

      <Footer />
    </main>
  );
}