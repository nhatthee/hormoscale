import type { CalculationResults } from "./types";

type ProgressSectionProps = {
  results: CalculationResults;
};

export function ProgressSection({ results }: ProgressSectionProps) {
  return (
    <div className="rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-teal-pale text-xl">
          📈
        </div>

        <h3 className="text-xl font-black text-primary">
          Weight Loss Progress
        </h3>
      </div>

      <div className="mb-2 flex justify-between text-sm text-muted">
        <span>{results.startWeight}</span>
        <span>{results.goalWeight} goal</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal to-primary transition-all duration-700"
          style={{ width: `${results.progressPercent}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-muted">
        Projected to reach {results.projectedWeight} —{" "}
        <strong className="text-primary">{results.progressPercent}%</strong>{" "}
        toward your goal.
      </p>
    </div>
  );
}