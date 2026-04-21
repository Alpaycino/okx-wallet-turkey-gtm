import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OKX Wallet Türkiye | 6-Month Go-To-Market Strategy",
  description:
    "Execution plan for converting Turkish CEX traders into active on-chain OKX Wallet users. A localized CeDeFi GTM model across education, KOL networks, and ecosystem partnerships.",
  openGraph: {
    title: "OKX Wallet Türkiye | GTM Strategy",
    description:
      "6-month Turkish Web3 growth plan — localized education, KOL-driven community growth, and CeDeFi onboarding.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-okx-bg text-okx-text antialiased">{children}</body>
    </html>
  );
}
