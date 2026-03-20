import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Pangaea — Construction Workforce Management",
    template: "%s | Pangaea",
  },
  description:
    "Messaging-native workforce management for construction. Automate onboarding, compliance, and labour allocation — all on WhatsApp. Built for 10–200 worker firms.",
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
    title: "Pangaea — Construction Workforce Management",
    description:
      "Automate everything between finding a worker and getting them on site. Cert verified, right-to-work checked, H&S signed off — all on their phone.",
    url: "https://joinpangea.ai",
    siteName: "Pangaea",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/pangaea-square-tagline.png",
        width: 1200,
        height: 1200,
        alt: "Pangaea — Built on solid ground",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangaea — Construction Workforce Management",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/pangaea-mark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-forest-900 text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
