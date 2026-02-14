import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professional LinkedIn Banner Creator | Free Online Design Tool",
  description:
    "Design stunning LinkedIn profile banners with our free online tool. Choose from thousands of professional images, customize with your name and job title, and download instantly in perfect dimensions.",
  keywords: "LinkedIn banner, LinkedIn header, profile banner maker, professional banner design, LinkedIn cover photo, free banner creator, social media graphics",
  authors: [{ name: "LinkedIn Banner Studio" }],
  openGraph: {
    title: "Professional LinkedIn Banner Creator | Free Online Design Tool",
    description: "Create eye-catching LinkedIn profile banners in minutes. Free, easy-to-use, and professionally designed.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "LinkedIn Banner Studio",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free online tool to create professional LinkedIn profile banners. Choose from thousands of images and customize with your information.",
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
          <link rel="canonical" href="https://wallnn-wallpapers.netlify.app" />
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
