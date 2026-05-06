import type { CalculationResults } from "@/components/results/types";
import { toNumber } from "@/components/results/types";

export function getInterpretation(results: CalculationResults) {
  const bmiStart = toNumber(results.bmiStart);
  const bmiEnd = toNumber(results.bmiEnd);
  const lossPercent = toNumber(results.projectedLossPercent);

  if (bmiEnd < 18.5) {
    return "Your projected BMI may move into a low range. This goal should be reviewed carefully with a clinician to ensure weight loss remains safe and medically appropriate.";
  }

  if (bmiStart >= 35) {
    return `You are currently in the ${results.bmiStartCategory} category. Based on this projection, ${results.medicationName} may support a meaningful reduction toward the ${results.bmiEndCategory} range. Because your starting BMI is elevated, clinician-guided monitoring is especially important throughout the process.`;
  }

  if (bmiStart >= 30) {
    return `You are currently in the ${results.bmiStartCategory} category. With ${results.medicationName}, you are projected to reach the ${results.bmiEndCategory} range. A projected ${lossPercent.toFixed(
      1
    )}% reduction may be clinically meaningful when paired with nutrition, hydration, activity, and follow-up care.`;
  }

  if (bmiStart >= 25) {
    return `You are currently in the ${results.bmiStartCategory} range. Your projection suggests a move toward ${results.bmiEndCategory}. The main focus should be sustainable fat loss, muscle preservation, and long-term weight maintenance rather than rapid reduction.`;
  }

  return "Your current BMI is within a lower-risk range. If weight management is still a goal, the focus should be body composition, metabolic health, nutrition quality, and clinician guidance rather than aggressive weight loss.";
}

export function getRecommendedPlan(results: CalculationResults) {
  const bmiStart = toNumber(results.bmiStart);
  const progress = results.progressPercent;
  const med = results.medicationName.toLowerCase();

  const plan: string[] = [];

  if (med.includes("lifestyle")) {
    plan.push(
      "Focus on nutrition structure, calorie awareness, protein intake, and consistent activity before considering medication-based support."
    );
  } else {
    plan.push(
      `Use ${results.medicationName} only under appropriate medical supervision, with regular review of tolerance, dosage, and progress.`
    );
  }

  if (bmiStart >= 30) {
    plan.push(
      "Schedule progress reviews every 4–6 weeks to monitor weight trend, side effects, appetite control, and metabolic markers."
    );
  } else {
    plan.push(
      "Review progress every 6–8 weeks and focus on sustainable habits that can continue after the active weight-loss phase."
    );
  }

  plan.push(
    "Prioritize protein intake and resistance training to help preserve lean muscle during weight loss."
  );

  if (progress < 60) {
    plan.push(
      "Your selected goal may require stronger adherence, a longer timeline, or additional lifestyle support."
    );
  } else if (progress >= 80) {
    plan.push(
      "Your current projection is close to your selected goal, so consistency and maintenance planning should be a priority."
    );
  } else {
    plan.push(
      "Your projection shows meaningful progress, but reaching the full goal may require continued consistency beyond the selected duration."
    );
  }

  return plan;
}

export function getConsiderations(results: CalculationResults) {
  const bmiStart = toNumber(results.bmiStart);
  const progress = results.progressPercent;
  const med = results.medicationName.toLowerCase();

  const risks: string[] = [];

  if (!med.includes("lifestyle")) {
    risks.push(
      "Digestive symptoms such as nausea, fullness, constipation, or reflux may occur, especially during dose changes."
    );
    risks.push(
      "Reduced appetite may also reduce protein, micronutrient, and fluid intake, so nutrition quality matters."
    );
  } else {
    risks.push(
      "Lifestyle-only progress may be slower and depends heavily on consistency with nutrition, activity, sleep, and adherence."
    );
  }

  if (bmiStart >= 35) {
    risks.push(
      "Because your starting BMI is elevated, medical monitoring may be important for blood pressure, glucose, lipids, and other metabolic markers."
    );
  }

  if (progress < 50) {
    risks.push(
      "The current projection may not fully reach your target within the selected timeframe, so expectations should be reviewed."
    );
  }

  risks.push(
    "This estimate does not replace medical advice, diagnosis, lab review, or an individualized treatment plan."
  );

  return risks;
}

export function getGoalAssessment(results: CalculationResults) {
  const progress = results.progressPercent;
  const bmiEnd = toNumber(results.bmiEnd);

  if (bmiEnd < 18.5) {
    return "Your selected goal may be too aggressive because the projected BMI could approach or enter a low range. A clinician should review whether this target is appropriate.";
  }

  if (progress >= 90) {
    return "Your goal appears highly achievable based on the current projection. The next priority should be maintaining results, preserving muscle, and building habits that continue beyond the weight-loss phase.";
  }

  if (progress >= 70) {
    return `Your goal appears realistic based on the current projection. You are projected to reach ${results.projectedWeight}, which is ${results.progressPercent}% toward your selected goal of ${results.goalWeight}.`;
  }

  if (progress >= 40) {
    return `Your goal appears possible, but may require a longer timeline or stronger adherence. You are projected to reach ${results.projectedWeight}, which is ${results.progressPercent}% toward your goal.`;
  }

  return "Your selected goal may be aggressive for the current timeframe. Consider extending the duration, reviewing the target weight, or adding more structured clinical and lifestyle support.";
}