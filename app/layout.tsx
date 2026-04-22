import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpay · Türkiye Web3 Go-To-Market Case Study",
  description:
    "A personal case study by Alpay: a localized 6-month Türkiye Web3 go-to-market playbook across education, KOL networks, and ecosystem partnerships. Independent work, not affiliated with any company.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Alpay · Türkiye Web3 GTM Case Study",
    description:
      "Independent 6-month Türkiye Web3 GTM case study by Alpay.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-okx-bg text-okx-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
