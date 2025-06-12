// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or any other font you prefer
import "./globals.css";
import Layout from "./components/layout"; // Import your new Layout component

const inter = Inter({ subsets: ["latin"] }); // Replace with your chosen font

export const metadata: Metadata = {
  title: "Kikelomo Balogun - Loved, Called, and Chosen", // A good default title
  description:
    "Discover your identity in Christ with Kikelomo Balogun's free book and biblical encouragements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {" "}
          {/* Wrap your children with the Layout component */}
          {children}
        </Layout>
      </body>
    </html>
  );
}
