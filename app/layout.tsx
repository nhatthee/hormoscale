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
  metadataBase: new URL("https://hormoscale.com"),
  title: "GLP-1 Weight Loss Calculator | Hormoscale",
  description:
    "Estimate your projected GLP-1 weight loss journey with personalized metabolic insights.",
  keywords: [
    "GLP-1 calculator",
    "weight loss calculator",
    "Wegovy calculator",
    "Ozempic calculator",
    "Mounjaro calculator",
    "semaglutide weight loss",
    "tirzepatide weight loss",
  ],
  openGraph: {
    title: "GLP-1 Weight Loss Calculator | Hormoscale",
    description:
      "Estimate your projected GLP-1 weight loss journey with personalized metabolic insights.",
    url: "https://hormoscale.com",
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
      "Estimate your projected GLP-1 weight loss journey with personalized metabolic insights.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
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