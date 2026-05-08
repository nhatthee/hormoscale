import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BlogIndexPage() {
  const featured = BLOG_ARTICLES.slice(0, 3);
  const byCategory = (category: (typeof BLOG_ARTICLES)[number]["category"]) =>
    BLOG_ARTICLES.filter((article) => article.category === category);

  return (
    <main className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Header
        currentPath="/blog"
        title={
          <>
            Hormoscale
            <br />
            <span className="whitespace-nowrap">
              <span className="text-[#73E0D1]">GLP-1</span> Education Blog
            </span>
          </>
        }
        description="Educational articles to help you understand GLP-1 and related treatment planning topics."
      />

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Featured Articles
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featured.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-[#E9E3F4] bg-[#FBF8FF] p-4"
              >
                <h3 className="text-base font-black text-[#6B3FA0]">{article.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4F4862]">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-3 inline-flex rounded-lg border border-[#E9E3F4] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]"
                >
                  Read
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {(
        [
          "Weight Loss Guides",
          "GLP-1 Medication Education",
          "Comparisons",
          "Beginner Resources",
        ] as const
      ).map((category) => {
        const items = byCategory(category);
        return (
          <section
            key={category}
            className="mx-auto max-w-5xl px-4 pb-8 md:px-6 md:pb-12"
          >
            <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
              {category}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {items.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-[#E9E3F4] bg-white p-5 shadow-[0_8px_20px_rgba(107,63,160,0.06)]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[#6B3FA0]">
                    {article.readingTime}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-[#6B3FA0]">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4F4862]">
                    {article.description}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-4 inline-flex rounded-lg border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-2 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0]"
                  >
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)] md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-[#6B3FA0]">
            Explore Calculator Tools
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#4F4862]">
            Use Hormoscale calculators and comparison pages alongside educational
            reading for stronger planning context.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/wegovy-weight-loss-calculator"
              className="rounded-xl border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm font-black text-[#6B3FA0]"
            >
              Wegovy Calculator
            </Link>
            <Link
              href="/mounjaro-vs-wegovy"
              className="rounded-xl border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-3 text-sm font-black text-[#6B3FA0]"
            >
              Mounjaro vs Wegovy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
