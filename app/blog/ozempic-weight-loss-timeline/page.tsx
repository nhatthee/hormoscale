import type { Metadata } from "next";
import { blogPosts } from "@/app/blog/blog-posts";
import { BlogArticlePage } from "@/components/BlogArticlePage";

const post = blogPosts["ozempic-weight-loss-timeline"];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: post.canonical },
  openGraph: {
    title: post.title,
    description: post.description,
    url: post.canonical,
  },
};

export default function OzempicWeightLossTimelinePage() {
  return <BlogArticlePage post={post} />;
}
