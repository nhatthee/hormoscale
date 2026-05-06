"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { trackEvent } from "@/lib/gtag";

type LeadData = {
  source?: string;
  medication?: string;
  current_weight?: number;
  goal_weight?: number;
};

type Props = {
  open: boolean;
  leadData?: LeadData;
  pdfBase64?: string;
  onClose: () => void;
  onSuccess: () => void;
};

export function EmailCaptureModal({
  open,
  leadData,
  pdfBase64,
  onClose,
  onSuccess,
}: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!open) return null;

  function closeModal() {
    setSent(false);
    setEmail("");
    onClose();
  }

  async function handleSubmit() {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("leads").insert([
        {
          email: cleanEmail,
          source: leadData?.source ?? "free_pdf_report",
          medication: leadData?.medication ?? null,
          current_weight: leadData?.current_weight ?? null,
          goal_weight: leadData?.goal_weight ?? null,
        },
      ]);

      if (error && error.code !== "23505") {
        console.error(error);
        alert("Something went wrong while saving your email.");
        return;
      }

      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          medication: leadData?.medication ?? "",
          currentWeight: leadData?.current_weight ?? "",
          goalWeight: leadData?.goal_weight ?? "",
          pdfBase64: pdfBase64 ?? "",
        }),
      });

      if (!emailResponse.ok) {
        const data = await emailResponse.json().catch(() => null);
        console.error("Email send failed:", data);

        trackEvent("email_send_failed", {
          source: leadData?.source ?? "free_pdf_report",
          medication: leadData?.medication ?? "unknown",
        });

        alert("Email could not be sent, but your PDF will still download.");
      } else {
        trackEvent("email_submitted", {
          source: leadData?.source ?? "free_pdf_report",
          medication: leadData?.medication ?? "unknown",
        });

        setSent(true);
      }

      onSuccess();

      setTimeout(() => {
        closeModal();
      }, 1800);
    } catch (err) {
      console.error(err);
      alert("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        {sent ? (
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D7F4F1] text-2xl font-black text-[#4A2A75]">
              ✓
            </div>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-[#4A2A75]">
              Report sent to your email
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Your PDF download will begin shortly. Please check your inbox for
              your Hormoscale report with the PDF attached.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F5A623]">
              Free PDF Report
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#4A2A75]">
              Get your report by email
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Enter your email to receive your personalized GLP-1 report with
              the PDF attached, and download it instantly.
            </p>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-6 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-[#6B3FA0]"
            />

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 rounded-2xl border border-gray-200 px-4 py-3 font-semibold text-gray-700"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 rounded-2xl bg-[#F5A623] px-4 py-3 font-bold text-[#4A2A75] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send & Download"}
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-500">
              No spam. You can unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}