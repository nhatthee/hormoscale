"use client";

import { useMemo, useState } from "react";
import type { CalculationResults } from "@/components/results/types";
import { trackEvent } from "@/lib/gtag";

type Unit = "imperial" | "metric";
type Sex = "male" | "female";
export type Medication =
  | "semaglutide-high"
  | "semaglutide-low"
  | "tirzepatide"
  | "liraglutide"
  | "none";

type CalculatorFormProps = {
  onCalculate: (results: CalculationResults) => void;
  defaultMedication?: Medication;
  medicationHelperText?: string;
};

const medicationData: Record<
  Medication,
  {
    name: string;
    percentLoss: number;
  }
> = {
  "semaglutide-high": {
    name: "Wegovy",
    percentLoss: 0.147,
  },
  "semaglutide-low": {
    name: "Ozempic",
    percentLoss: 0.1,
  },
  tirzepatide: {
    name: "Mounjaro / Zepbound",
    percentLoss: 0.206,
  },
  liraglutide: {
    name: "Saxenda",
    percentLoss: 0.075,
  },
  none: {
    name: "Lifestyle Only",
    percentLoss: 0.035,
  },
};

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Obese I";
  if (bmi < 40) return "Obese II";
  return "Obese III";
}

export function CalculatorForm({
  onCalculate,
  defaultMedication = "semaglutide-high",
  medicationHelperText,
}: CalculatorFormProps) {
  const [unit, setUnit] = useState<Unit>("imperial");
  const [age, setAge] = useState("47");
  const [sex, setSex] = useState<Sex>("male");

  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("1");
  const [heightCm, setHeightCm] = useState("155");

  const [weightLbs, setWeightLbs] = useState("180");
  const [weightKg, setWeightKg] = useState("82");

  const [goalWeight, setGoalWeight] = useState("148");
  const [medication, setMedication] = useState<Medication>(defaultMedication);
  const [duration, setDuration] = useState("12");
  const [activity, setActivity] = useState("1.1");

  const currentWeightValue =
    unit === "imperial" ? Number(weightLbs) || 180 : Number(weightKg) || 82;

  const goalMin = unit === "imperial" ? 90 : 40;
  const goalMax = Math.max(goalMin + 1, currentWeightValue - 1);
  const goalUnit = unit === "imperial" ? "lbs" : "kg";

  const medicationOptions = useMemo(
    () =>
      [
        ["semaglutide-high", "Wegovy"],
        ["semaglutide-low", "Ozempic"],
        ["tirzepatide", "Mounjaro / Zepbound"],
        ["liraglutide", "Saxenda"],
        ["none", "Lifestyle Only"],
      ] as const,
    []
  );

  function clampGoalForCurrentWeight(currentWeight: number, minGoal: number) {
    const safeMax = Math.max(minGoal + 1, currentWeight - 1);
    const currentGoal = Number(goalWeight) || minGoal;

    if (currentGoal >= currentWeight) {
      return String(Math.max(minGoal, currentWeight - 1));
    }

    if (currentGoal > safeMax) {
      return String(safeMax);
    }

    if (currentGoal < minGoal) {
      return String(minGoal);
    }

    return String(currentGoal);
  }

  function updateCurrentWeight(value: string) {
    if (unit === "imperial") {
      setWeightLbs(value);
    } else {
      setWeightKg(value);
    }

    const current = Number(value);
    if (!current) return;

    const minGoal = unit === "imperial" ? 90 : 40;
    setGoalWeight(clampGoalForCurrentWeight(current, minGoal));
  }

  function updateGoalWeight(value: string) {
    const nextGoal = Number(value);
    const current = currentWeightValue;

    if (!nextGoal) {
      setGoalWeight(value);
      return;
    }

    if (nextGoal >= current) {
      setGoalWeight(String(Math.max(goalMin, current - 1)));
      return;
    }

    if (nextGoal < goalMin) {
      setGoalWeight(String(goalMin));
      return;
    }

    setGoalWeight(value);
  }

  function handleUnitChange(nextUnit: Unit) {
    if (nextUnit === unit) return;

    if (nextUnit === "metric") {
      const currentLbs = Number(weightLbs) || 180;
      const currentGoalLbs = Number(goalWeight) || 148;

      const nextWeightKg = Math.round(currentLbs * 0.453592);
      const nextGoalKg = Math.round(currentGoalLbs * 0.453592);

      setWeightKg(String(nextWeightKg));
      setGoalWeight(String(Math.min(nextGoalKg, nextWeightKg - 1)));

      const totalInches = (Number(feet) || 5) * 12 + (Number(inches) || 1);
      setHeightCm(String(Math.round(totalInches * 2.54)));
    } else {
      const currentKg = Number(weightKg) || 82;
      const currentGoalKg = Number(goalWeight) || 67;

      const nextWeightLbs = Math.round(currentKg * 2.20462);
      const nextGoalLbs = Math.round(currentGoalKg * 2.20462);

      setWeightLbs(String(nextWeightLbs));
      setGoalWeight(String(Math.min(nextGoalLbs, nextWeightLbs - 1)));

      const cm = Number(heightCm) || 155;
      const totalInches = cm / 2.54;
      const ft = Math.floor(totalInches / 12);
      const inch = Math.round(totalInches - ft * 12);

      setFeet(String(ft));
      setInches(String(inch));
    }

    setUnit(nextUnit);
  }

  function handleCalculate() {
    const parsedAge = Number(age) || 35;
    const months = Number(duration);
    const activityFactor = Number(activity);
    const med = medicationData[medication];

    let currentWeightKg = 0;
    let heightMeters = 0;
    let goalWeightKg = 0;

    if (unit === "imperial") {
      const lbs = Number(weightLbs);
      const ft = Number(feet) || 0;
      const inch = Number(inches) || 0;
      const totalInches = ft * 12 + inch;
      const goalLbs = Number(goalWeight);

      if (!lbs || !totalInches || !goalLbs) {
        alert("Please enter your height, current weight, and goal weight.");
        return;
      }

      currentWeightKg = lbs * 0.453592;
      heightMeters = totalInches * 0.0254;
      goalWeightKg = goalLbs * 0.453592;
    } else {
      const kg = Number(weightKg);
      const cm = Number(heightCm);
      const goalKg = Number(goalWeight);

      if (!kg || !cm || !goalKg) {
        alert("Please enter your height, current weight, and goal weight.");
        return;
      }

      currentWeightKg = kg;
      heightMeters = cm / 100;
      goalWeightKg = goalKg;
    }

    if (goalWeightKg >= currentWeightKg) {
      alert("Goal weight must be lower than your current weight.");
      return;
    }

    if (heightMeters <= 0 || currentWeightKg <= 0) {
      alert("Please enter valid numbers.");
      return;
    }

    const bmr =
      10 * currentWeightKg +
      6.25 * (heightMeters * 100) -
      5 * parsedAge +
      (sex === "male" ? 5 : -161);

    const tdee = bmr * (sex === "male" ? 1.55 : 1.5) * activityFactor;
    const dailyCalories = Math.round(tdee * 0.8);

    const scaleFactor = Math.min(1, months / 12);
    const projectedLossKg = currentWeightKg * med.percentLoss * scaleFactor;
    const estimatedWeightKg = currentWeightKg - projectedLossKg;
    const projectedWeightKg = Math.max(estimatedWeightKg, goalWeightKg);
    const actualLossKg = Math.max(0, currentWeightKg - projectedWeightKg);

    const bmiStart = currentWeightKg / (heightMeters * heightMeters);
    const bmiEnd = projectedWeightKg / (heightMeters * heightMeters);

    const convert = unit === "imperial" ? 2.20462 : 1;
    const displayUnit = unit === "imperial" ? "lbs" : "kg";

    const startWeight = currentWeightKg * convert;
    const projectedWeight = projectedWeightKg * convert;
    const goalDisplayWeight = goalWeightKg * convert;
    const projectedLoss = actualLossKg * convert;

    const progressPercent =
      startWeight <= goalDisplayWeight
        ? 0
        : Math.min(
            100,
            Math.max(
              0,
              ((startWeight - projectedWeight) /
                (startWeight - goalDisplayWeight)) *
                100
            )
          );

    const milestoneMonths = [1, 3, 6, months].filter(
      (value, index, array) => array.indexOf(value) === index
    );

    const timeline = milestoneMonths.map((month) => {
      const factor = Math.min(1, month / 12);
      const rawLossKg = currentWeightKg * med.percentLoss * factor;
      const monthEstimatedWeightKg = currentWeightKg - rawLossKg;
      const monthProjectedWeightKg = Math.max(
        monthEstimatedWeightKg,
        goalWeightKg
      );
      const monthActualLossKg = currentWeightKg - monthProjectedWeightKg;

      return {
        month: `Month ${month}`,
        detail: `~${(monthActualLossKg * convert).toFixed(
          1
        )} ${displayUnit} lost · Projected weight: ${(
          monthProjectedWeightKg * convert
        ).toFixed(1)} ${displayUnit}`,
      };
    });

    trackEvent("calculator_used", {
      medication: med.name,
      unit,
      duration_months: months,
      activity_level: activityFactor,
      sex,
    });

    onCalculate({
      medicationName: med.name,
      projectedLoss: `${projectedLoss.toFixed(1)} ${displayUnit}`,
      projectedLossPercent: `${((actualLossKg / currentWeightKg) * 100).toFixed(
        1
      )}%`,
      projectedWeight: `${projectedWeight.toFixed(1)} ${displayUnit}`,
      startWeight: `${startWeight.toFixed(1)} ${displayUnit}`,
      goalWeight: `${goalDisplayWeight.toFixed(1)} ${displayUnit}`,
      bmiStart: bmiStart.toFixed(1),
      bmiStartCategory: getBmiCategory(bmiStart),
      bmiEnd: bmiEnd.toFixed(1),
      bmiEndCategory: getBmiCategory(bmiEnd),
      dailyCalories: dailyCalories.toLocaleString(),
      progressPercent: Math.round(progressPercent),
      timeline,
    });

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  return (
    <section
      id="calculator"
      className="rounded-[20px] border border-border bg-card p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8"
    >
      <div className="mb-7 flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-teal-pale text-xl">
          ⚖️
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-muted">
            Calculator
          </p>
          <h2 className="text-xl font-black tracking-[-0.02em] text-primary">
            Units & Basic Info
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
            Measurement System
          </label>

          <div className="grid grid-cols-2 gap-1 rounded-xl bg-teal-pale p-1">
            <button
              type="button"
              onClick={() => handleUnitChange("imperial")}
              className={`rounded-lg px-4 py-3 text-sm font-black ${
                unit === "imperial"
                  ? "bg-teal text-white shadow-[0_2px_8px_rgba(75,191,191,0.35)]"
                  : "text-teal"
              }`}
            >
              Imperial
            </button>

            <button
              type="button"
              onClick={() => handleUnitChange("metric")}
              className={`rounded-lg px-4 py-3 text-sm font-black ${
                unit === "metric"
                  ? "bg-teal text-white shadow-[0_2px_8px_rgba(75,191,191,0.35)]"
                  : "text-teal"
              }`}
            >
              Metric
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
              Age
            </span>

            <input
              type="number"
              value={age}
              min="18"
              max="100"
              onChange={(event) => setAge(event.target.value)}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            />
          </label>

          <label>
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
              Sex
            </span>

            <select
              value={sex}
              onChange={(event) => setSex(event.target.value as Sex)}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        {unit === "imperial" ? (
          <div className="grid gap-5 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
                Height
              </span>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  value={feet}
                  min="3"
                  max="8"
                  onChange={(event) => setFeet(event.target.value)}
                  placeholder="ft"
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
                />

                <input
                  type="number"
                  value={inches}
                  min="0"
                  max="11"
                  onChange={(event) => setInches(event.target.value)}
                  placeholder="in"
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
                />
              </div>
            </label>

            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
                Current Weight
              </span>

              <input
                type="number"
                value={weightLbs}
                min="50"
                onChange={(event) => updateCurrentWeight(event.target.value)}
                className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
              />
            </label>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
                Height
              </span>

              <input
                type="number"
                value={heightCm}
                min="90"
                onChange={(event) => setHeightCm(event.target.value)}
                placeholder="cm"
                className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
              />
            </label>

            <label>
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
                Current Weight
              </span>

              <input
                type="number"
                value={weightKg}
                min="25"
                onChange={(event) => updateCurrentWeight(event.target.value)}
                placeholder="kg"
                className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
              />
            </label>
          </div>
        )}

        <div>
          <label className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
            Goal Weight ({goalUnit})
          </label>

          <div className="rounded-xl bg-background p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted">Lighter</span>

              <strong className="text-lg font-black text-primary">
                {goalWeight} {goalUnit}
              </strong>

              <span className="text-sm text-muted">Current</span>
            </div>

            <input
              type="range"
              min={goalMin}
              max={goalMax}
              value={Math.min(Number(goalWeight), goalMax)}
              onChange={(event) => updateGoalWeight(event.target.value)}
              className="w-full accent-primary"
            />
          </div>

          <p className="mt-2 text-xs leading-5 text-muted">
            Goal weight must be lower than your current weight. Current max:{" "}
            <strong>
              {goalMax} {goalUnit}
            </strong>
          </p>
        </div>

        <div>
          <label className="mb-3 block text-xs font-black uppercase tracking-[0.08em] text-muted">
            Select Calculation Profile
          </label>
          <p className="mb-3 text-xs leading-5 text-muted">
            Switch between medication profiles to compare projected weight-loss
            outcomes.
          </p>

          <div className="flex flex-wrap gap-3">
            {medicationOptions.map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setMedication(value)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-black transition hover:border-primary-light hover:text-primary ${
                  medication === value
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {medicationHelperText ? (
            <p className="mt-3 text-xs leading-5 text-muted">
              {medicationHelperText}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
              Treatment Duration
            </span>

            <select
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            >
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
              <option value="24">24 months</option>
            </select>
          </label>

          <label>
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-muted">
              Activity Level
            </span>

            <select
              value={activity}
              onChange={(event) => setActivity(event.target.value)}
              className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 outline-none transition focus:border-teal focus:bg-white"
            >
              <option value="0.9">Sedentary</option>
              <option value="1.0">Lightly Active</option>
              <option value="1.1">Moderately Active</option>
              <option value="1.2">Very Active</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-[14px] bg-gradient-to-br from-primary to-teal px-6 py-4 text-lg font-black text-white shadow-[0_6px_24px_rgba(107,63,160,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(107,63,160,0.4)]"
        >
          Calculate My Weight Loss Journey →
        </button>
      </div>
    </section>
  );
}