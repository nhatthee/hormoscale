import type { Metadata } from "next";
import { glpComparisonPages } from "@/app/glp-comparison-pages";
import { ComparisonPage } from "@/components/ComparisonPage";
import { FaqJsonLd } from "@/components/FaqJsonLd";

const config = glpComparisonPages["wegovy-vs-ozempic"];

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

export default function WegovyVsOzempicPage() {
  return (
    <>
      <FaqJsonLd faqs={config.faqs} id={`faq-jsonld-${config.slug}`} />
      <ComparisonPage config={config} />
    </>
  );
}
