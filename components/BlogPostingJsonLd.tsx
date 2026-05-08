type BlogPostingJsonLdData = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
};

type BlogPostingJsonLdProps = {
  post: BlogPostingJsonLdData;
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
