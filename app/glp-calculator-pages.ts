import type { Medication } from "@/components/CalculatorForm";

export type GlpCalculatorFaq = {
  question: string;
  answer: string;
};

export type GlpEducationalCard = {
  title: string;
  body: string;
};

export type GlpCalculatorPageConfig = {
  slug:
    | "ozempic-weight-loss-calculator"
    | "wegovy-weight-loss-calculator"
    | "mounjaro-weight-loss-calculator"
    | "semaglutide-weight-loss-calculator"
    | "tirzepatide-weight-loss-calculator";
  medicationName: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  canonical: string;
  seoHeading: string;
  seoBody: string;
  treatmentOverview: string;
  expectedContext: string;
  comparisonCopy: string;
  educationalCards: GlpEducationalCard[];
  faqs: GlpCalculatorFaq[];
  defaultMedication: Medication;
  medicationHelperText?: string;
};

const siteUrl = "https://www.hormoscale.com";

export const glpCalculatorPages: Record<
  GlpCalculatorPageConfig["slug"],
  GlpCalculatorPageConfig
> = {
  "ozempic-weight-loss-calculator": {
    slug: "ozempic-weight-loss-calculator",
    medicationName: "Ozempic",
    title: "Ozempic Weight Loss Calculator",
    description:
      "Estimate your Ozempic weight loss progress with our free GLP-1 calculator.",
    h1: "Ozempic Weight Loss Calculator",
    intro:
      "Use our ozempic weight loss calculator to estimate your progress timeline, projected weight changes, and BMI trend based on your goals.",
    canonical: `${siteUrl}/ozempic-weight-loss-calculator`,
    seoHeading: "How this Ozempic calculator helps",
    seoBody:
      "This page is designed for people researching Ozempic outcomes in a practical way. Enter your measurements, choose your timeline, and get a clear projection you can discuss with your healthcare provider.",
    treatmentOverview:
      "Ozempic is a semaglutide-based medication originally used in type 2 diabetes care and often discussed in weight-management planning at lower semaglutide dosing ranges.",
    expectedContext:
      "Weight change with Ozempic can vary by baseline health, adherence, nutrition, and activity. This calculator is intended to frame realistic ranges, not guaranteed outcomes.",
    comparisonCopy:
      "Compared with higher-dose semaglutide pathways, Ozempic scenarios may show different pacing in projected milestones. Use this page to compare trend direction and planning assumptions.",
    educationalCards: [
      {
        title: "Expected milestone timeline",
        body: "Review month 1, 3, 6, and long-range checkpoints to understand how slower early changes may still compound over time.",
      },
      {
        title: "BMI improvement context",
        body: "A gradual BMI shift can still be clinically meaningful when sustained alongside nutrition quality, sleep, and routine movement.",
      },
      {
        title: "Adherence considerations",
        body: "Consistent follow-through with prescribed use and follow-up visits often has more impact than short-term intensity.",
      },
    ],
    defaultMedication: "semaglutide-low",
    faqs: [
      {
        question: "Is this ozempic weight loss calculator a medical diagnosis?",
        answer:
          "No. It provides educational projections only and should not replace guidance from your licensed healthcare clinician.",
      },
      {
        question: "How accurate are Ozempic projections?",
        answer:
          "Results vary based on dose, adherence, nutrition, activity, and health history. Use projections as a planning benchmark, not a guarantee.",
      },
    ],
  },
  "wegovy-weight-loss-calculator": {
    slug: "wegovy-weight-loss-calculator",
    medicationName: "Wegovy",
    title: "Wegovy Weight Loss Calculator",
    description:
      "Estimate your Wegovy weight loss progress with our free GLP-1 calculator.",
    h1: "Wegovy Weight Loss Calculator",
    intro:
      "Use our wegovy weight loss calculator to estimate realistic progress milestones and visualize where your weight trend may land over time.",
    canonical: `${siteUrl}/wegovy-weight-loss-calculator`,
    seoHeading: "Plan your Wegovy milestones",
    seoBody:
      "This calculator helps you translate your current stats into a practical Wegovy projection. Review estimated loss percentages, timeline checkpoints, and outcome ranges in one place.",
    treatmentOverview:
      "Wegovy is an obesity-focused semaglutide treatment pathway. People often use it within structured plans that combine medication support and behavior-based routines.",
    expectedContext:
      "Projected outcomes can differ based on dose progression, consistency, lifestyle patterns, and clinical supervision. Use this estimate as informational context only.",
    comparisonCopy:
      "When compared with lower-dose semaglutide profiles, Wegovy-oriented projections may show different loss percentages over the same timeline.",
    educationalCards: [
      {
        title: "Projected milestone pacing",
        body: "Use timeline checkpoints to compare short-term vs. longer-term expectations and avoid over-weighting early fluctuations.",
      },
      {
        title: "Appetite-control context",
        body: "Many users focus on hunger-regulation patterns and meal consistency when evaluating progress trends.",
      },
      {
        title: "Lifestyle optimization",
        body: "Protein intake, resistance training, and sleep quality can influence how closely real outcomes track projected ranges.",
      },
    ],
    defaultMedication: "semaglutide-high",
    faqs: [
      {
        question: "Can this wegovy weight loss calculator predict exact results?",
        answer:
          "No tool can predict exact outcomes. It estimates trends based on published response ranges and your entered values.",
      },
      {
        question: "Should I change treatment based on this page alone?",
        answer:
          "No. Always confirm treatment decisions with your healthcare provider, including dosing and safety considerations.",
      },
    ],
  },
  "mounjaro-weight-loss-calculator": {
    slug: "mounjaro-weight-loss-calculator",
    medicationName: "Mounjaro",
    title: "Mounjaro Weight Loss Calculator",
    description:
      "Estimate your Mounjaro weight loss progress with our free GLP-1 calculator.",
    h1: "Mounjaro Weight Loss Calculator",
    intro:
      "Try our mounjaro weight loss calculator to estimate projected weight loss, compare your target against likely timelines, and track expected BMI improvement.",
    canonical: `${siteUrl}/mounjaro-weight-loss-calculator`,
    seoHeading: "Estimate your Mounjaro progress",
    seoBody:
      "Use this Mounjaro-focused calculator as a planning tool before your next check-in. It turns your baseline inputs into a clean projection that is easy to review and save.",
    treatmentOverview:
      "Mounjaro is associated with tirzepatide, which is commonly described as a dual GIP/GLP-1 pathway and may be discussed in modern metabolic care conversations.",
    expectedContext:
      "Response ranges can vary substantially by individual context, treatment continuity, and lifestyle factors. This page provides educational projection support.",
    comparisonCopy:
      "Compared with single-pathway GLP-1 profiles, dual-pathway tirzepatide scenarios are often evaluated for differences in timeline trajectory and appetite-management patterns.",
    educationalCards: [
      {
        title: "Dual-pathway context",
        body: "GIP/GLP-1 discussion often centers on appetite signaling, meal behavior, and long-range metabolic support rather than short-term guarantees.",
      },
      {
        title: "Weight and BMI milestones",
        body: "Tracking both scale trends and BMI category movement can provide a fuller view of progress quality over time.",
      },
      {
        title: "Sustainable routine planning",
        body: "Hydration, activity consistency, and realistic nutrition targets help maintain adherence through longer treatment windows.",
      },
    ],
    defaultMedication: "tirzepatide",
    faqs: [
      {
        question: "Who should use a mounjaro weight loss calculator?",
        answer:
          "Adults who want a structured estimate of potential weight-change trends can use it as an educational planning tool.",
      },
      {
        question: "Does this account for lifestyle factors?",
        answer:
          "Yes, activity level and timeline inputs influence projections, but real-world outcomes still depend on diet, adherence, and medical context.",
      },
    ],
  },
  "semaglutide-weight-loss-calculator": {
    slug: "semaglutide-weight-loss-calculator",
    medicationName: "Semaglutide",
    title: "Semaglutide Weight Loss Calculator",
    description:
      "Estimate your semaglutide weight loss progress with our free GLP-1 calculator.",
    h1: "Semaglutide Weight Loss Calculator",
    intro:
      "Our semaglutide weight loss calculator gives you a fast estimate of expected progress so you can set measurable goals and timeline checkpoints.",
    canonical: `${siteUrl}/semaglutide-weight-loss-calculator`,
    seoHeading: "Semaglutide projection overview",
    seoBody:
      "Semaglutide can produce different outcomes across users. This calculator helps you model possible ranges and goal progress using a standardized approach.",
    treatmentOverview:
      "Semaglutide is a broader compound category used across different branded treatment approaches, each with distinct dosing intent and clinical context.",
    expectedContext:
      "Because semaglutide pathways vary, projections should be interpreted as directional guidance. Individual outcomes depend on clinical and behavioral variables.",
    comparisonCopy:
      "Use this page to compare semaglutide-style expectations against other profiles, focusing on trend quality and milestone timing rather than exact promises.",
    educationalCards: [
      {
        title: "Compound-level perspective",
        body: "Thinking in compound categories can help clarify why branded pathways with shared ingredients may still perform differently in practice.",
      },
      {
        title: "Milestone interpretation",
        body: "Month-to-month variability is common; evaluate trend consistency over multiple checkpoints before drawing conclusions.",
      },
      {
        title: "Behavioral alignment",
        body: "Structured nutrition, movement, and follow-up planning can improve how closely real-world progress aligns with projections.",
      },
    ],
    defaultMedication: "semaglutide-high",
    medicationHelperText:
      "Semaglutide is the active ingredient used in medications such as Wegovy and Ozempic. This calculator uses the closest weight-loss medication profile.",
    faqs: [
      {
        question: "Is semaglutide the same as Ozempic or Wegovy?",
        answer:
          "Semaglutide is the active ingredient. Brand, indication, and prescribing approach can differ by product and patient profile.",
      },
      {
        question: "Can I use this for long-term planning?",
        answer:
          "Yes, this page is useful for scenario planning, but follow-up with your clinician is essential for long-term treatment decisions.",
      },
    ],
  },
  "tirzepatide-weight-loss-calculator": {
    slug: "tirzepatide-weight-loss-calculator",
    medicationName: "Tirzepatide",
    title: "Tirzepatide Weight Loss Calculator",
    description:
      "Estimate your tirzepatide weight loss progress with our free GLP-1 calculator.",
    h1: "Tirzepatide Weight Loss Calculator",
    intro:
      "Use our tirzepatide weight loss calculator to estimate your expected weight-loss path, milestone timing, and projected body-weight trend.",
    canonical: `${siteUrl}/tirzepatide-weight-loss-calculator`,
    seoHeading: "What to expect with tirzepatide projections",
    seoBody:
      "This page gives a clean, data-driven estimate for tirzepatide outcomes using your personal inputs. It is helpful for setting realistic expectations before follow-up visits.",
    treatmentOverview:
      "Tirzepatide is often discussed within newer weight-loss treatment approaches and is associated with dual-pathway signaling in metabolic-health care.",
    expectedContext:
      "Real outcomes can differ based on adherence, dose strategy, activity, nutrition, and baseline health. Treat projections as educational planning references.",
    comparisonCopy:
      "Compared with single-pathway profiles, tirzepatide scenarios may present different pacing assumptions across milestone periods.",
    educationalCards: [
      {
        title: "Expected timeline ranges",
        body: "Use staged checkpoints to judge trend direction instead of reacting to short-term variance.",
      },
      {
        title: "Appetite and routine signals",
        body: "Many users monitor hunger patterns, meal regularity, and recovery habits as part of progress evaluation.",
      },
      {
        title: "Adherence and follow-up",
        body: "Regular clinician check-ins and practical habit support are central for sustainable long-range outcomes.",
      },
    ],
    defaultMedication: "tirzepatide",
    medicationHelperText:
      "Tirzepatide is the active ingredient used in medications such as Zepbound and Mounjaro. This calculator uses the closest available medication profile.",
    faqs: [
      {
        question: "Does this tirzepatide weight loss calculator replace physician guidance?",
        answer:
          "No. It is an educational estimator and is not a substitute for personalized medical advice.",
      },
      {
        question: "Can I compare medications with this calculator?",
        answer:
          "You can run different scenarios, but medical suitability should always be discussed with your prescribing clinician.",
      },
    ],
  },
};
