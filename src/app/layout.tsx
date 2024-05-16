import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Määritellään tyypit JSX-elementeille
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Määritellään HTML-elementit, joita käytetään
      html: React.HTMLProps<HTMLHtmlElement>;
      head: React.HTMLProps<HTMLHeadElement>;
      title: React.HTMLProps<HTMLTitleElement>;
      meta: React.HTMLProps<HTMLMetaElement>;
      body: React.HTMLProps<HTMLBodyElement>;
    }
  }
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilari Schmidt - Portfolio",
  description: "Tutustu Ilari Schmidtin osaamiseen ja toteuttamiin projekteihin.",
  authors: ["Ilari Schmidt"], // Korjattu authors-kenttä
  keywords: ["Ilari Schmidt", "portfolio", "digistrategia", "digimarkkinointi", "web kehitys", "analytiikka", "CRM", "sales development"],
  image: "/images/portfolio-preview.jpg",
  url: "https://www.portfolio.ilarischmidt.com/",
  type: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
            <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
