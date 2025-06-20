// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or any other font you prefer
import "./globals.css";
import Layout from "./components/layout"; // Import your new Layout component
import { GA_TRACKING_ID } from "@/lib/gtag";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] }); // Replace with your chosen font

export const metadata: Metadata = {
  title: "Kikelomo Balogun - Loved, Called, and Chosen", // A good default title
  description:
    "Discover your identity in Christ with Kikelomo Balogun's free book and biblical encouragements.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
