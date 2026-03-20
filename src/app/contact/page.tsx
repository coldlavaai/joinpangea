import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section";
import { IconMail, IconCalendar, IconMapPin } from "@/components/icons";

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
              <IconMail className="w-6 h-6 text-copper-400" />
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
              <IconCalendar className="w-6 h-6 text-copper-400" />
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
              <IconMapPin className="w-6 h-6 text-copper-400" />
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
