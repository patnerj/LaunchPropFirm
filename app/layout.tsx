import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaunchPropFirm — Own a Prop Trading Firm. Launch in Days, Not Months.",
  description:
    "The complete white-label platform behind a funded-trader business — challenges, live market pricing, payments, payouts, certificates — installed under your brand for a one-time price.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
