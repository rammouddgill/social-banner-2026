import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free LinkedIn Banner Creator | Design Professional Profile Headers Online",
  description:
    "Design stunning LinkedIn profile banners with our free online banner creator. Browse premium quality images, personalize with your name and headline, and download in optimal LinkedIn dimensions - no sign-up required.",
  keywords: "LinkedIn banner creator, profile header design, online banner maker, LinkedIn cover photo, personalized banner tool, free profile graphics, LinkedIn header creator",
  authors: [{ name: "Digital Banner Studio" }],
  openGraph: {
    title: "Free LinkedIn Banner Creator | Design Professional Profile Headers Online",
    description: "Craft eye-catching LinkedIn profile banners in minutes. Free to use, professional designs, and ready-to-download banners.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Digital Banner Studio - LinkedIn Header Creator",
    "applicationCategory": "DesignApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Create stunning LinkedIn profile banners with our free online design tool. Featuring a comprehensive image collection with quick customization and instant download functionality.",
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
          <link rel="canonical" href="https://styleoftheday.com" />
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