import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LinkedIn Banner Maker | Create Professional Profile Banners Free",
  description:
    "Create professional LinkedIn profile banners instantly with our easy-to-use online tool. Access thousands of high-quality images, add your name and title, then download in perfect LinkedIn dimensions - completely free.",
  keywords: "LinkedIn banner maker, LinkedIn profile header, banner creator online, professional LinkedIn cover, custom banner design, free LinkedIn graphics, social profile banner",
  authors: [{ name: "Banner Creation Studio" }],
  openGraph: {
    title: "LinkedIn Banner Maker | Create Professional Profile Banners Free",
    description: "Build stunning LinkedIn profile banners effortlessly. Completely free, professional templates, and instant downloads.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Professional Banner Creation Studio",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Professional banner maker for creating LinkedIn profile headers online. Free access to extensive image library with instant customization and download capabilities.",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Works with modern browsers."
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
              <meta name="google-adsense-account" content="ca-pub-5619524773397022"/>
          <link rel="canonical" href="https://worldwidejobshub.online" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}