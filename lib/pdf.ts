import jsPDF from "jspdf";
import type { CalculationResults } from "@/components/results/types";

type GenerateResultsPDFProps = {
  results: CalculationResults;
  interpretation: string;
  recommendedPlan: string[];
  risks: string[];
  goalAssessment: string;
};

function buildResultsPDF({
  results,
  interpretation,
  recommendedPlan,
  risks,
  goalAssessment,
}: GenerateResultsPDFProps) {
  const pdf = new jsPDF("p", "mm", "a4");
  const margin = 16;
  let y = 18;

  pdf.setFillColor(107, 63, 160);
  pdf.rect(0, 0, 210, 42, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.text("Hormoscale GLP-1 Results", margin, y);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.text("Weight Management Projection", margin, y + 10);

  y = 58;

  function addPageIfNeeded(requiredSpace = 24) {
    if (y + requiredSpace > 282) {
      pdf.addPage();
      y = 24;
    }
  }

  function sectionTitle(title: string) {
    addPageIfNeeded(18);
    pdf.setTextColor(42, 26, 74);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.text(title, margin, y);
    y += 9;
  }

  function paragraph(text: string) {
    pdf.setTextColor(74, 74, 106);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    const lines = pdf.splitTextToSize(text, 178);
    addPageIfNeeded(lines.length * 5 + 8);
    pdf.text(lines, margin, y);
    y += lines.length * 5 + 8;
  }

  function bulletList(items: string[]) {
    pdf.setTextColor(74, 74, 106);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    items.forEach((item) => {
      const lines = pdf.splitTextToSize(`• ${item}`, 174);
      addPageIfNeeded(lines.length * 5 + 6);
      pdf.text(lines, margin, y);
      y += lines.length * 5 + 3;
    });

    y += 5;
  }

  sectionTitle("Personalized Projection");
  paragraph(
    `Medication: ${results.medicationName}
Projected Loss: ${results.projectedLoss}
Body Weight Lost: ${results.projectedLossPercent}
Projected Weight: ${results.projectedWeight}`
  );

  sectionTitle("Health Metrics");
  paragraph(
    `Current BMI: ${results.bmiStart} (${results.bmiStartCategory})
Projected BMI: ${results.bmiEnd} (${results.bmiEndCategory})
Daily Calories: ${results.dailyCalories}
Progress Toward Goal: ${results.progressPercent}%`
  );

  sectionTitle("Interpretation");
  paragraph(interpretation);

  sectionTitle("Recommended Plan");
  bulletList(recommendedPlan);

  sectionTitle("Considerations / Risks");
  bulletList(risks);

  sectionTitle("Goal Assessment");
  paragraph(goalAssessment);

  sectionTitle("Milestone Timeline");
  results.timeline.forEach((item) => {
    addPageIfNeeded(20);

    pdf.setTextColor(42, 26, 74);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(item.month, margin, y);
    y += 6;

    pdf.setTextColor(74, 74, 106);
    pdf.setFont("helvetica", "normal");
    pdf.text(pdf.splitTextToSize(item.detail, 178), margin, y);
    y += 12;
  });

  sectionTitle("Medical Disclaimer");
  pdf.setTextColor(122, 96, 0);
  paragraph(
    "This tool provides estimates for informational purposes only. Individual results vary. GLP-1 medications may require prescription and medical supervision. Please consult a healthcare provider before starting or adjusting any weight-management treatment."
  );

  return pdf;
}

export function generateResultsPDF(props: GenerateResultsPDFProps) {
  const pdf = buildResultsPDF(props);
  pdf.save("hormoscale-glp1-results.pdf");
}

export function generateResultsPDFBase64(props: GenerateResultsPDFProps) {
  const pdf = buildResultsPDF(props);
  return pdf.output("datauristring").split(",")[1];
}