import Link from "next/link";
import { blogPostList } from "@/app/blog/blog-posts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BlogIndexPage() {
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
        <div className="grid gap-4 md:grid-cols-2">
          {blogPostList.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-[#E9E3F4] bg-white p-6 shadow-[0_8px_20px_rgba(107,63,160,0.08)]"
            >
              <h2 className="text-xl font-black text-[#6B3FA0]">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4F4862]">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex rounded-lg border border-[#E9E3F4] bg-[#FAF7FF] px-4 py-2 text-sm font-black text-[#6B3FA0] transition hover:border-[#6B3FA0]"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
