import type { GlpCalculatorFaq } from "@/app/glp-calculator-pages";

export type ComparisonDifference = {
  title: string;
  detail: string;
};

export type ComparisonPageConfig = {
  slug:
    | "wegovy-vs-ozempic"
    | "mounjaro-vs-wegovy"
    | "tirzepatide-vs-semaglutide";
  title: string;
  description: string;
  canonical: string;
  h1: string;
  summary: string;
  mechanismComparison: string;
  weightLossOverview: string;
  lifestyleConsiderations: string;
  keyDifferences: ComparisonDifference[];
  faqs: GlpCalculatorFaq[];
  relatedCalculatorLinks: Array<{
    href: string;
    label: string;
  }>;
};

const siteUrl = "https://www.hormoscale.com";

export const glpComparisonPages: Record<
  ComparisonPageConfig["slug"],
  ComparisonPageConfig
> = {
  "wegovy-vs-ozempic": {
    slug: "wegovy-vs-ozempic",
    title: "Wegovy vs Ozempic Comparison",
    description:
      "Compare Wegovy vs Ozempic with educational insights on mechanism context, projected weight-loss ranges, and lifestyle planning considerations.",
    canonical: `${siteUrl}/wegovy-vs-ozempic`,
    h1: "Wegovy vs Ozempic",
    summary:
      "Wegovy and Ozempic share semaglutide as an active compound, but they are often discussed in different treatment contexts. This educational page helps you compare planning assumptions in a structured format.",
    mechanismComparison:
      "Both pathways are semaglutide-based GLP-1 approaches. Comparison usually focuses on treatment framing, dose intent, and progression context rather than guaranteed response.",
    weightLossOverview:
      "Projected ranges can differ by baseline profile, adherence, and lifestyle factors. Use comparisons to understand potential trend direction, not exact outcomes.",
    lifestyleConsiderations:
      "Meal consistency, movement routines, sleep quality, and long-term follow-up habits can significantly influence how real progress compares with model estimates.",
    keyDifferences: [
      {
        title: "Treatment context",
        detail:
          "Wegovy is commonly discussed in obesity-focused pathways, while Ozempic has type 2 diabetes origins with overlapping weight-management discussion.",
      },
      {
        title: "Milestone pacing",
        detail:
          "Some planning scenarios model different pace assumptions for early and mid-stage milestones between these semaglutide pathways.",
      },
      {
        title: "Expectation framing",
        detail:
          "Comparisons are most useful when interpreted as directional guidance with individualized variability in mind.",
      },
    ],
    faqs: [
      {
        question: "Is Wegovy always stronger than Ozempic?",
        answer:
          "Not always. Comparison depends on context, dosing framework, and individual response patterns. This page is educational and not a treatment directive.",
      },
      {
        question: "Can this comparison predict exact weight loss?",
        answer:
          "No. It provides informational expectations only and should be reviewed alongside professional clinical guidance.",
      },
    ],
    relatedCalculatorLinks: [
      { href: "/wegovy-weight-loss-calculator", label: "Wegovy Weight Loss Calculator" },
      { href: "/ozempic-weight-loss-calculator", label: "Ozempic Weight Loss Calculator" },
      { href: "/semaglutide-weight-loss-calculator", label: "Semaglutide Weight Loss Calculator" },
    ],
  },
  "mounjaro-vs-wegovy": {
    slug: "mounjaro-vs-wegovy",
    title: "Mounjaro vs Wegovy Comparison",
    description:
      "Explore Mounjaro vs Wegovy educational comparisons across mechanism context, expected weight-loss trends, and adherence-focused lifestyle factors.",
    canonical: `${siteUrl}/mounjaro-vs-wegovy`,
    h1: "Mounjaro vs Wegovy",
    summary:
      "Mounjaro (tirzepatide context) and Wegovy (semaglutide context) are often compared in weight-management planning. This page summarizes key educational differences and shared expectations.",
    mechanismComparison:
      "Mounjaro discussions often reference dual GIP/GLP-1 signaling context, while Wegovy is associated with a semaglutide GLP-1 pathway. Mechanism context does not guarantee any individual result.",
    weightLossOverview:
      "Some models estimate different trend ranges over similar timelines. Individual outcomes remain variable and are influenced by adherence and baseline status.",
    lifestyleConsiderations:
      "Routine strength training, dietary consistency, hydration, and follow-up planning are commonly emphasized when comparing longer-range trajectory quality.",
    keyDifferences: [
      {
        title: "Pathway framing",
        detail:
          "Mounjaro is frequently discussed with dual-pathway language, while Wegovy is framed around semaglutide GLP-1 treatment context.",
      },
      {
        title: "Projection assumptions",
        detail:
          "Comparative planning tools may model distinct loss-percent assumptions for timeline checkpoints.",
      },
      {
        title: "Monitoring approach",
        detail:
          "Users often compare not only scale trends but also appetite patterns and sustainability markers across both options.",
      },
    ],
    faqs: [
      {
        question: "Is Mounjaro better than Wegovy for everyone?",
        answer:
          "No. There is no universal answer. This comparison is informational only and does not replace personalized clinical evaluation.",
      },
      {
        question: "Should I switch treatments based on this page?",
        answer:
          "No. Treatment decisions should be made with a licensed clinician based on your full medical context.",
      },
    ],
    relatedCalculatorLinks: [
      { href: "/mounjaro-weight-loss-calculator", label: "Mounjaro Weight Loss Calculator" },
      { href: "/wegovy-weight-loss-calculator", label: "Wegovy Weight Loss Calculator" },
      { href: "/tirzepatide-weight-loss-calculator", label: "Tirzepatide Weight Loss Calculator" },
    ],
  },
  "tirzepatide-vs-semaglutide": {
    slug: "tirzepatide-vs-semaglutide",
    title: "Tirzepatide vs Semaglutide Comparison",
    description:
      "Compare tirzepatide vs semaglutide with educational mechanism differences, projected trend context, and practical lifestyle considerations.",
    canonical: `${siteUrl}/tirzepatide-vs-semaglutide`,
    h1: "Tirzepatide vs Semaglutide",
    summary:
      "Tirzepatide and semaglutide are frequently compared in newer weight-management discussions. This page gives educational, non-prescriptive context for side-by-side understanding.",
    mechanismComparison:
      "Tirzepatide is often presented in dual-pathway terms, while semaglutide is discussed as a broader GLP-1 compound category used across multiple branded pathways.",
    weightLossOverview:
      "Comparison models can show different milestone pacing assumptions, but real-world outcomes remain dependent on individual context and consistency.",
    lifestyleConsiderations:
      "Sustainable progress usually depends on habits such as protein-forward nutrition, movement consistency, sleep quality, and long-term adherence planning.",
    keyDifferences: [
      {
        title: "Compound vs pathway lens",
        detail:
          "Semaglutide is often discussed as a category across pathways, while tirzepatide is framed as a distinct newer treatment class context.",
      },
      {
        title: "Timeline interpretation",
        detail:
          "Comparisons are most useful when evaluating trend ranges across multiple milestones instead of week-to-week noise.",
      },
      {
        title: "Planning complexity",
        detail:
          "Users often need clearer expectation framing when comparing newer treatment classes against established compound categories.",
      },
    ],
    faqs: [
      {
        question: "Can this page tell me which option is right for me?",
        answer:
          "No. It is educational content only and does not provide medical recommendations or individualized treatment advice.",
      },
      {
        question: "Are outcomes guaranteed with either pathway?",
        answer:
          "No. Outcome variability is expected, and projections should be treated as informational planning guidance.",
      },
    ],
    relatedCalculatorLinks: [
      { href: "/tirzepatide-weight-loss-calculator", label: "Tirzepatide Weight Loss Calculator" },
      { href: "/semaglutide-weight-loss-calculator", label: "Semaglutide Weight Loss Calculator" },
      { href: "/mounjaro-weight-loss-calculator", label: "Mounjaro Weight Loss Calculator" },
    ],
  },
};
