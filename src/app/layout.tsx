import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pangea — Construction Workforce Management",
    template: "%s | Pangea",
  },
  description:
    "Messaging-native workforce management for construction. Automate onboarding, compliance, and labour allocation — all on WhatsApp. Built for 50+ worker firms.",
  keywords: [
    "construction workforce management",
    "construction onboarding",
    "CSCS verification",
    "construction compliance",
    "WhatsApp onboarding",
    "labour management",
    "construction HR software",
    "workforce automation",
    "construction recruitment",
    "site worker management",
  ],
  openGraph: {
    title: "Pangea — Construction Workforce Management",
    description:
      "Automate everything between finding a worker and getting them on site. Cert verified, right-to-work checked, H&S signed off — all on their phone.",
    url: "https://joinpangea.ai",
    siteName: "Pangea",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangea — Construction Workforce Management",
    description:
      "Messaging-native workforce management for construction. No apps, no portals — just WhatsApp.",
  },
  metadataBase: new URL("https://joinpangea.ai"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/pangea-mark.png" />
      </head>
      <body className="bg-forest-900 text-white font-sans antialiased">
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
