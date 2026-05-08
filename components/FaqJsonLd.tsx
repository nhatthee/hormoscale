import type { GlpCalculatorFaq } from "@/app/glp-calculator-pages";

type FaqJsonLdProps = {
  faqs: GlpCalculatorFaq[];
  id?: string;
};

export function FaqJsonLd({ faqs, id = "faq-jsonld" }: FaqJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqs ?? []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const serializedSchema = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedSchema }}
    />
  );
}
