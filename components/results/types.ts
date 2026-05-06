export type CalculationResults = {
    medicationName: string;
    projectedLoss: string;
    projectedLossPercent: string;
    projectedWeight: string;
    startWeight: string;
    goalWeight: string;
    bmiStart: string;
    bmiStartCategory: string;
    bmiEnd: string;
    bmiEndCategory: string;
    dailyCalories: string;
    progressPercent: number;
    timeline: {
      month: string;
      detail: string;
    }[];
  };
  
  export function toNumber(value: string) {
    return Number(value.replace(/[^\d.]/g, "")) || 0;
  }