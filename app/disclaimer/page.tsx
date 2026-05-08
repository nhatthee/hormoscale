import Link from "next/link";

const disclaimerSections = [
  {
    title: "Not medical advice",
    body: "Hormoscale provides educational calculator estimates and general informational content only. Nothing on this page or elsewhere on this website should be interpreted as medical advice, diagnosis, or treatment.",
  },
  {
    title: "No doctor-patient relationship",
    body: "Using Hormoscale, reading site content, or submitting calculator inputs does not create a doctor-patient or other clinical relationship between you and Hormoscale or any affiliated party.",
  },
  {
    title: "Calculator limitations",
    body: "Calculator outputs are projections based on simplified assumptions. Real outcomes vary due to clinical history, adherence, nutrition, movement, sleep, stress, and many other factors not fully captured by modeling tools.",
  },
  {
    title: "Medication information limitations",
    body: "Medication references on Hormoscale are educational summaries only. They are not comprehensive prescribing guidance and should not be used to start, stop, or change any treatment.",
  },
  {
    title: "Emergency warning",
    body: "If you think you are having a medical emergency, call 911 (or your local emergency number) immediately. Do not delay urgent care based on website content.",
  },
  {
    title: "Consult a licensed clinician",
    body: "Always consult a licensed U.S. healthcare professional for personalized decisions about weight management, GLP-1-related treatment options, testing, dosing, and follow-up care.",
  },
  {
    title: "Data/privacy note",
    body: "Please review our privacy practices to understand how data is handled. Avoid entering sensitive health or personally identifying information beyond what is necessary for educational calculator use.",
  },
] as const;

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground md:py-12">
      <section className="mx-auto max-w-4xl rounded-[20px] border border-[#E9E3F4] bg-white p-6 shadow-[0_6px_32px_rgba(107,63,160,0.15)] md:p-8">
        <Link href="/" className="text-sm font-black text-[#6B3FA0]">
          ← Back to Home
        </Link>

        <h1 className="mt-5 text-4xl font-black tracking-[-0.03em] text-[#6B3FA0]">
          Medical Disclaimer
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4F4862]">
          Hormoscale is a U.S.-facing educational GLP-1 calculator website. Use
          this content to support informed conversations with your licensed
          clinician, not as a substitute for direct medical care.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {disclaimerSections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-[#E9E3F4] bg-[#FAF7FF] p-4"
            >
              <h2 className="text-base font-black text-[#6B3FA0]">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#4F4862]">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-xl border border-[#F5A623]/50 bg-[#FFF9EE] p-4">
          <h2 className="text-base font-black text-[#6B3FA0]">Explore more</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link
              href="/privacy"
              className="rounded-lg border border-[#E9E3F4] bg-white px-3 py-2 font-bold text-[#6B3FA0] transition hover:border-[#73E0D1]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="rounded-lg border border-[#E9E3F4] bg-white px-3 py-2 font-bold text-[#6B3FA0] transition hover:border-[#73E0D1]"
            >
              Terms
            </Link>
            <Link
              href="/wegovy-weight-loss-calculator"
              className="rounded-lg border border-[#E9E3F4] bg-white px-3 py-2 font-bold text-[#6B3FA0] transition hover:border-[#73E0D1]"
            >
              GLP-1 Calculators
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}