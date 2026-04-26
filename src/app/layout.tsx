import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krisharyan.dev"),
  title: "Krish Aryan | Fullstack Developer — Portfolio",
  description:
    "Krish Aryan is a Fullstack Developer specializing in React, Next.js, Node.js, Go, and React Native. Building scalable web and mobile applications with modern technologies.",
  keywords: [
    "Krish Aryan",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Go Developer",
    "React Native Developer",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Krish Aryan" }],
  creator: "Krish Aryan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krisharyan.dev",
    siteName: "Krish Aryan Portfolio",
    title: "Krish Aryan | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, Node.js, Go, and React Native. Available for freelance work.",
    images: [
      {
        url: "/images/hero-portrait.png",
        width: 1200,
        height: 630,
        alt: "Krish Aryan - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Aryan | Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, Node.js, Go, and React Native.",
    images: ["/images/hero-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-white font-sans">
        {children}
      </body>
    </html>
  );
}
