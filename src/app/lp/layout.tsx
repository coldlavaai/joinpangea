import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pangea — Stop Chasing Paperwork",
  description:
    "Construction workforce management on WhatsApp. Onboard workers, verify certs, and manage compliance — all from their phone.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal sticky header — logo + CTA only */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-md border-b border-forest-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Image
              src="/pangea-logo.png"
              alt="Pangea"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
            <Link
              href="/demo"
              className="bg-copper-500 hover:bg-copper-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Minimal footer */}
      <footer className="bg-forest-900 border-t border-forest-700/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/pangea-mark.png"
              alt="Pangea"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Pangea. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Full Website
            </Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">
              Contact
            </Link>
            <Link href="mailto:hello@coldlava.ai" className="hover:text-white/60 transition-colors">
              hello@coldlava.ai
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
