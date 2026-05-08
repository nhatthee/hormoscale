import type { Medication } from "@/components/CalculatorForm";

export type GlpCalculatorFaq = {
  question: string;
  answer: string;
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
