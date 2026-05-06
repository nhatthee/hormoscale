"use client";

import type { CalculationResults } from "./types";
import { ResultsHero } from "./ResultsHero";
import { MetricsGrid } from "./MetricsGrid";
import { ProgressSection } from "./ProgressSection";
import { MilestoneTimeline } from "./MilestoneTimeline";
import { PersonalizedTips } from "./PersonalizedTips";
import { InterpretationCard } from "./InterpretationCard";
import { RecommendedPlan } from "./RecommendedPlan";
import { RiskConsiderations } from "./RiskConsiderations";
import { GoalAssessment } from "./GoalAssessment";
import { ResultsActions } from "./ResultsActions";
import { Disclaimer } from "./Disclaimer";
import {
  getConsiderations,
  getGoalAssessment,
  getInterpretation,
  getRecommendedPlan,
} from "@/lib/results";

type ResultsProps = {
  results: CalculationResults | null;
};

export function Results({ results }: ResultsProps) {
  if (!results) {
    return (
      <section
        id="results"
        className="rounded-[20px] border border-border bg-card p-6 text-center shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8"
      >
        <p className="text-sm font-black uppercase tracking-[0.14em] text-muted">
          Results
        </p>

        <h2 className="mt-3 text-2xl font-black text-primary">
          Your projection will appear here
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
          Enter your details and calculate your estimated GLP-1
          weight-management projection.
        </p>
      </section>
    );
  }

  const interpretation = getInterpretation(results);
  const recommendedPlan = getRecommendedPlan(results);
  const risks = getConsiderations(results);
  const goalAssessment = getGoalAssessment(results);

  return (
    <section id="results" className="space-y-8">
      <ResultsHero results={results} />
      <MetricsGrid results={results} />
      <ProgressSection results={results} />

      <InterpretationCard text={interpretation} />
      <RecommendedPlan items={recommendedPlan} />
      <RiskConsiderations items={risks} />
      <GoalAssessment text={goalAssessment} />

      <MilestoneTimeline timeline={results.timeline} />
      <PersonalizedTips medicationName={results.medicationName} />

      <ResultsActions
        results={results}
        interpretation={interpretation}
        recommendedPlan={recommendedPlan}
        risks={risks}
        goalAssessment={goalAssessment}
      />

      <Disclaimer />
    </section>
  );
}