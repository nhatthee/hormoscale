import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/BlogArticlePage";
import { BLOG_ARTICLE_MAP, BLOG_ARTICLES } from "@/lib/blog-articles";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLE_MAP[slug];

  if (!article) {
    return {};
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: { canonical: article.seo.canonical },
    openGraph: {
      title: article.seo.openGraphTitle,
      description: article.seo.openGraphDescription,
      url: article.seo.canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.openGraphTitle,
      description: article.seo.openGraphDescription,
    },
  };
}

export default async function BlogArticleDynamicPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = BLOG_ARTICLE_MAP[slug];

  if (!article) {
    notFound();
  }

  return <BlogArticlePage post={article} />;
}
