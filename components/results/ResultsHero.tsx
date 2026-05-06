import type { CalculationResults } from "./types";

type ResultsHeroProps = {
  results: CalculationResults;
};

export function ResultsHero({ results }: ResultsHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-primary-dark to-primary p-6 text-white shadow-[0_6px_32px_rgba(107,63,160,0.20)] md:p-8">
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl opacity-20">
        🎯
      </div>

      <div className="relative z-10">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-accent-light">
          Personalized Projection
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
          Your estimated result
        </h2>

        <p className="mt-3 text-sm text-white/75">
          Based on your inputs and selected option:{" "}
          <strong>{results.medicationName}</strong>
        </p>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          <ResultHeroStat value={results.projectedLoss} label="Projected Loss" />
          <ResultHeroStat
            value={results.projectedLossPercent}
            label="Body Weight Lost"
          />
          <ResultHeroStat
            value={results.projectedWeight}
            label="Projected Weight"
          />
        </div>
      </div>
    </div>
  );
}

function ResultHeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-4xl font-black leading-none text-teal-light">
        {value}
      </p>

      <p className="mt-2 text-xs font-black uppercase tracking-[0.1em] text-white/70">
        {label}
      </p>
    </div>
  );
}