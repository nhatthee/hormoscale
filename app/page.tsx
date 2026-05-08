"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { glpCalculatorLinks } from "@/components/glp-links";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Header
        currentPath="/"
        title={
          <>
            GLP-1 Weight
            <br />
            <span className="whitespace-nowrap">
              <span className="text-[#73E0D1]">Loss</span> Calculators
            </span>
          </>
        }
        description="Estimate projected weight-loss outcomes across popular GLP-1 and related treatment profiles."
      />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap gap-3">
          <Link
            href="#choose-calculator"
            className="rounded-xl bg-[#F5A623] px-5 py-3 text-sm font-black text-[#2B2340] shadow-[0_8px_18px_rgba(245,166,35,0.35)] transition hover:-translate-y-0.5"
          >
            Explore Calculators
          </Link>
          <Link
            href="/ozempic-weight-loss-calculator"
            className="rounded-xl border-2 border-[#E9E3F4] bg-white px-5 py-3 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0]"
          >
            Start with Ozempic Calculator
          </Link>
        </div>
      </section>

      <section
        id="choose-calculator"
        className="mx-auto max-w-5xl px-4 pb-12 md:px-6 md:pb-14"
      >
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Choose Your Calculator
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {glpCalculatorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border-2 border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0] hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
          Why Hormoscale
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#E9E3F4] bg-white p-5">
            <h3 className="text-lg font-black text-[#6B3FA0]">
              Personalized projections
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#4F4862]">
              Get tailored estimates based on your baseline, goals, and timeline.
            </p>
          </article>
          <article className="rounded-2xl border border-[#E9E3F4] bg-white p-5">
            <h3 className="text-lg font-black text-[#6B3FA0]">
              Medication profile comparison
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#4F4862]">
              Compare projected outcomes across common GLP-1 and related profiles.
            </p>
          </article>
          <article className="rounded-2xl border border-[#E9E3F4] bg-white p-5">
            <h3 className="text-lg font-black text-[#6B3FA0]">
              Private and browser-based
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#4F4862]">
              Run estimates instantly in your browser without creating an account.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            How It Works
          </h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            <li className="rounded-xl bg-[#FAF7FF] p-4">
              <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                Step 1
              </p>
              <p className="mt-1 text-sm font-bold text-[#2B2340]">
                Enter your basics
              </p>
            </li>
            <li className="rounded-xl bg-[#FAF7FF] p-4">
              <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                Step 2
              </p>
              <p className="mt-1 text-sm font-bold text-[#2B2340]">
                Choose a treatment profile
              </p>
            </li>
            <li className="rounded-xl bg-[#FAF7FF] p-4">
              <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                Step 3
              </p>
              <p className="mt-1 text-sm font-bold text-[#2B2340]">
                Estimate your projected journey
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-2xl border border-[#F5A623]/40 bg-[#FFF9EE] p-5 md:p-6">
          <p className="text-sm leading-6 text-[#4F4862]">
            <span className="font-black text-[#6B3FA0]">Disclaimer:</span>{" "}
            Hormoscale is an educational calculator and does not provide medical
            advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Latest GLP-1 Articles
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4F4862]">
            Educational guides on GLP-1 medications, weight-loss timelines, and
            treatment comparisons.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              {
                href: "/blog/ozempic-weight-loss-timeline",
                label: "Ozempic Weight Loss Timeline",
              },
              {
                href: "/blog/how-long-does-wegovy-take-to-work",
                label: "How Long Does Wegovy Take to Work?",
              },
              {
                href: "/blog/tirzepatide-weight-loss-timeline",
                label: "Tirzepatide Weight Loss Timeline",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-xl border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-4 text-sm font-bold text-[#6B3FA0] transition hover:border-[#6B3FA0] hover:bg-white"
              >
                {article.label}
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-5 inline-flex rounded-xl bg-[#6B3FA0] px-5 py-3 text-sm font-black text-white transition hover:bg-[#5c3390]"
          >
            View All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}