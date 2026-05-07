import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hormoscale.com"),

  title: {
    default: "GLP-1 Weight Loss Calculator | Hormoscale",
    template: "%s | Hormoscale",
  },

  description:
    "Use Hormoscale's free GLP-1 weight loss calculator to estimate projected weight loss, BMI changes, milestone timelines, and personalized insights for medications like Ozempic, Wegovy, Mounjaro, semaglutide, and tirzepatide.",

  keywords: [
    "GLP-1 calculator",
    "GLP-1 weight loss calculator",
    "weight loss calculator",
    "Ozempic calculator",
    "Wegovy calculator",
    "Mounjaro calculator",
    "semaglutide weight loss calculator",
    "tirzepatide weight loss calculator",
    "GLP-1 weight loss projection",
    "BMI calculator",
    "medical weight loss calculator",
    "metabolic health calculator",
  ],

  authors: [{ name: "Hormoscale" }],
  creator: "Hormoscale",
  publisher: "Hormoscale",

  alternates: {
    canonical: "https://www.hormoscale.com",
  },

  openGraph: {
    title: "GLP-1 Weight Loss Calculator | Hormoscale",
    description:
      "Estimate your GLP-1 weight loss journey with personalized projections, BMI changes, milestone timelines, and PDF report insights.",
    url: "https://www.hormoscale.com",
    siteName: "Hormoscale",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hormoscale GLP-1 Weight Loss Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Weight Loss Calculator | Hormoscale",
    description:
      "Estimate your projected GLP-1 weight loss, BMI changes, milestone timeline, and personalized report.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hormoscale",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://www.hormoscale.com",
  description:
    "Hormoscale is a free GLP-1 weight loss calculator designed to estimate projected weight loss, BMI changes, milestone timelines, and personalized metabolic insights.",
  keywords:
    "GLP-1 calculator, Ozempic calculator, Wegovy calculator, Mounjaro calculator, semaglutide, tirzepatide, weight loss calculator",
  creator: {
    "@type": "Organization",
    name: "Hormoscale",
    url: "https://www.hormoscale.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <GoogleAnalytics />

        {children}

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}