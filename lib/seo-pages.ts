export const seoPages = {
    "ozempic-weight-loss-calculator": {
      medication: "Ozempic",
      title: "Ozempic Weight Loss Calculator",
      description:
        "Estimate your projected Ozempic weight loss, BMI changes, milestone timeline, and personalized GLP-1 report.",
    },
    "wegovy-weight-loss-calculator": {
      medication: "Wegovy",
      title: "Wegovy Weight Loss Calculator",
      description:
        "Estimate your projected Wegovy weight loss journey, BMI changes, milestones, and personalized GLP-1 report.",
    },
    "mounjaro-weight-loss-calculator": {
      medication: "Mounjaro",
      title: "Mounjaro Weight Loss Calculator",
      description:
        "Estimate your projected Mounjaro weight loss, BMI changes, milestone timeline, and personalized metabolic report.",
    },
    "semaglutide-weight-loss-calculator": {
      medication: "Semaglutide",
      title: "Semaglutide Weight Loss Calculator",
      description:
        "Estimate projected semaglutide weight loss, BMI changes, milestones, and personalized GLP-1 insights.",
    },
    "tirzepatide-weight-loss-calculator": {
      medication: "Tirzepatide",
      title: "Tirzepatide Weight Loss Calculator",
      description:
        "Estimate projected tirzepatide weight loss, BMI changes, milestone timeline, and personalized metabolic insights.",
    },
  } as const;
  
  export type SeoPageSlug = keyof typeof seoPages;