"use client";

import { useState } from "react";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import {
  generateResultsPDF,
  generateResultsPDFBase64,
} from "@/lib/pdf";
import { trackEvent } from "@/lib/gtag";
import type { CalculationResults } from "./types";
import { toNumber } from "./types";

type ResultsActionsProps = {
  results: CalculationResults;
  interpretation: string;
  recommendedPlan: string[];
  risks: string[];
  goalAssessment: string;
};

export function ResultsActions({
  results,
  interpretation,
  recommendedPlan,
  risks,
  goalAssessment,
}: ResultsActionsProps) {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const pdfPayload = {
    results,
    interpretation,
    recommendedPlan,
    risks,
    goalAssessment,
  };

  function openEmailModal() {
    trackEvent("pdf_modal_opened", {
      source: "results_actions",
      medication: results.medicationName,
    });

    setEmailModalOpen(true);
  }

  function downloadReport() {
    generateResultsPDF(pdfPayload);

    trackEvent("pdf_downloaded", {
      source: "free_pdf_report",
      medication: results.medicationName,
    });
  }

  return (
    <>
      <section className="rounded-[32px] bg-[#6B3FA0] px-8 py-10 text-white shadow-[0_20px_60px_rgba(107,63,160,0.22)]">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#F5A623]">
          Free Report
        </p>

        <h3 className="mt-3 text-3xl font-black tracking-tight">
          Download your personalized GLP-1 report
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
          Save your projected weight-loss journey, milestone timeline, BMI
          changes, and personalized recommendations as a beautifully formatted
          PDF report.
        </p>

        <div className="mt-8 flex flex-col items-start">
          <button
            type="button"
            onClick={openEmailModal}
            className="rounded-full bg-[#F5A623] px-8 py-4 text-sm font-black text-[#4A2A75] shadow-[0_10px_30px_rgba(245,166,35,0.35)] transition hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(245,166,35,0.45)]"
          >
            Get Free PDF Report
          </button>

          <p className="mt-3 text-sm text-white/60">
            Email delivery • Instant download
          </p>
        </div>
      </section>

      <EmailCaptureModal
        open={emailModalOpen}
        leadData={{
          source: "free_pdf_report",
          medication: results.medicationName,
          current_weight: toNumber(results.startWeight),
          goal_weight: toNumber(results.goalWeight),
        }}
        pdfBase64={generateResultsPDFBase64(pdfPayload)}
        onClose={() => setEmailModalOpen(false)}
        onSuccess={downloadReport}
      />
    </>
  );
}