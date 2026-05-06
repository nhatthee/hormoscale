import type { CalculationResults } from "./types";

type MetricsGridProps = {
  results: CalculationResults;
};

export function MetricsGrid({ results }: MetricsGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <StatCard
        label="Current BMI"
        value={results.bmiStart}
        sub={results.bmiStartCategory}
        borderClass="border-t-teal"
      />

      <StatCard
        label="Projected BMI"
        value={results.bmiEnd}
        sub={results.bmiEndCategory}
        borderClass="border-t-accent"
      />

      <StatCard
        label="Daily Calories"
        value={results.dailyCalories}
        sub="Estimated target"
        borderClass="border-t-primary"
      />
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  borderClass,
}: {
  label: string;
  value: string;
  sub: string;
  borderClass: string;
}) {
  return (
    <div
      className={`rounded-2xl border-t-4 ${borderClass} bg-card p-5 shadow-[0_4px_20px_rgba(107,63,160,0.15)]`}
    >
      <p className="text-xs font-black uppercase tracking-[0.08em] text-muted">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black leading-none text-primary">
        {value}
      </p>

      <p className="mt-2 text-sm text-muted">{sub}</p>
    </div>
  );
}