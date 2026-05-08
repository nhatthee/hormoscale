import Link from "next/link";
import type { BlogPostConfig } from "@/app/blog/blog-posts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { BlogPostingJsonLd } from "@/components/BlogPostingJsonLd";

type BlogArticlePageProps = {
  post: BlogPostConfig;
};

export function BlogArticlePage({ post }: BlogArticlePageProps) {
  return (
    <>
      <BlogPostingJsonLd post={post} />
      <FaqJsonLd faqs={post.faqs} id={`faq-jsonld-${post.slug}`} />

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
              {post.title}
            </h1>
            <p className="mt-4 leading-7 text-[#4F4862]">{post.heroIntro}</p>
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
                <p className="mt-3 leading-7 text-[#4F4862]">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
          <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">FAQ</h2>
            <div className="mt-5 space-y-4">
              {post.faqs.map((faq) => (
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
              {post.disclaimer}
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
