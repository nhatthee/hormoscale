import type { BlogPostConfig } from "@/app/blog/blog-posts";

type BlogPostingJsonLdProps = {
  post: BlogPostConfig;
};

export function BlogPostingJsonLd({ post }: BlogPostingJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: post.canonical,
    mainEntityOfPage: post.canonical,
    publisher: {
      "@type": "Organization",
      name: "Hormoscale",
      url: "https://www.hormoscale.com",
    },
    author: {
      "@type": "Organization",
      name: "Hormoscale",
    },
  };
  const serializedSchema = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      id={`blog-jsonld-${post.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedSchema }}
    />
  );
}
