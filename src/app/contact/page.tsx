import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Pangaea team. Email us at hello@coldlava.ai or book a demo call.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-white/60">
            Whether you&apos;re ready for a demo or just have questions, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-forest-800 rounded-xl p-8 border border-forest-700/50 text-center">
            <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-copper-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Email</h3>
            <Link
              href="mailto:hello@coldlava.ai"
              className="text-copper-400 hover:text-copper-300 text-sm transition-colors"
            >
              hello@coldlava.ai
            </Link>
            <p className="text-xs text-white/40 mt-2">
              We reply within 24 hours
            </p>
          </div>

          <div className="bg-forest-800 rounded-xl p-8 border border-forest-700/50 text-center">
            <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-copper-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Book a Demo</h3>
            <Link
              href="/demo"
              className="text-copper-400 hover:text-copper-300 text-sm transition-colors"
            >
              Schedule a call &rarr;
            </Link>
            <p className="text-xs text-white/40 mt-2">
              20-minute walkthrough
            </p>
          </div>

          <div className="bg-forest-800 rounded-xl p-8 border border-forest-700/50 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-copper-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg text-white mb-2">Location</h3>
            <p className="text-sm text-white/60">United Kingdom</p>
            <p className="text-xs text-white/40 mt-2">
              Serving UK &amp; US markets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
