import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilari Schmidt - Portfolio",
  description: "Tutustu Ilari Schmidtin osaamiseen ja toteuttamiin projekteihin.",
  author: "Ilari Schmidt",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
