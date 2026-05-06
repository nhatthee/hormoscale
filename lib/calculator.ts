/**
 * Pure calculator helpers — no React imports.
 * Implement BMR, projections, and BMI category logic here.
 */

export function calculateBMR(
  _weightKg: number,
  _heightCm: number,
  _ageYears: number,
  _sex: "male" | "female",
): number {
  return 0;
}

export function calculateProjection(
  _currentWeightKg: number,
  _weeklyLossKg: number,
  _weeks: number,
): { projectedWeightKg: number } {
  return { projectedWeightKg: 0 };
}

export function getBmiCategory(_bmi: number): string {
  return "";
}
