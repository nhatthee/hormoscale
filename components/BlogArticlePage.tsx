import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-articles";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { BlogPostingJsonLd } from "@/components/BlogPostingJsonLd";

type BlogArticlePageProps = {
  post: BlogArticle;
};

export function BlogArticlePage({ post }: BlogArticlePageProps) {
  const disclaimerText =
    "Hormoscale articles are educational only and do not provide medical advice, diagnosis, treatment recommendations, or guaranteed outcomes.";

  return (
    <>
      <BlogPostingJsonLd
        post={{
          slug: post.slug,
          title: post.title,
          description: post.description,
          canonical: post.seo.canonical,
        }}
      />
      <FaqJsonLd faqs={post.faq} id={`faq-jsonld-${post.slug}`} />

      <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
        <Header
          currentPath="/blog"
          title={
            <>
              Hormoscale
              <br />
              <span className="whitespace-nowrap">
                <span className="text-[#73E0D1]">Education</span> Hub
              </span>
            </>
          }
          description={post.title}
        />

        <section className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-10">
          <article className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
              Blog Article
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[#6B3FA0] md:text-4xl">
              {post.heroTitle}
            </h1>
            <p className="mt-4 leading-7 text-[#4F4862]">{post.heroDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-[#FBF8FF] px-3 py-1 font-black text-[#6B3FA0]">
                {post.category}
              </span>
              <span className="rounded-full bg-[#FFF9EE] px-3 py-1 font-black text-[#7A5A1F]">
                {post.readingTime}
              </span>
              <span className="rounded-full bg-[#EFFCF9] px-3 py-1 font-black text-[#1F7069]">
                {post.publishDate}
              </span>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="space-y-4">
            {post.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.06)] md:p-8"
              >
                <h2 className="text-xl font-black text-[#6B3FA0]">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-[#4F4862]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">Summary</h2>
            <p className="mt-4 leading-7 text-[#4F4862]">{post.summary}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">FAQ</h2>
            <div className="mt-5 space-y-4">
              {post.faq.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-xl border border-[#F0E8FB] bg-[#FAF7FF] p-4"
                >
                  <h3 className="font-bold text-[#6B3FA0]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4F4862]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
              Related Calculators
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.relatedCalculators.map((link) => (
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

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
              Related Comparisons
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.relatedComparisons.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-[#E9E3F4] bg-white px-4 py-3 text-sm font-bold text-[#6B3FA0] transition hover:border-[#73E0D1]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
              Related Articles
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.relatedArticles.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-[#E9E3F4] bg-white px-4 py-3 text-sm font-bold text-[#6B3FA0] transition hover:border-[#73E0D1]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#F5A623]/45 bg-[#FFF9EE] p-5 md:p-6">
            <p className="text-sm leading-6 text-[#4F4862]">
              <span className="font-black text-[#6B3FA0]">Disclaimer:</span>{" "}
              {disclaimerText}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
              {post.cta.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#4F4862]">{post.cta.description}</p>
            <Link
              href={post.cta.href}
              className="mt-4 inline-flex rounded-xl bg-[#6B3FA0] px-5 py-3 text-sm font-black text-white transition hover:bg-[#5c3390]"
            >
              {post.cta.label}
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
