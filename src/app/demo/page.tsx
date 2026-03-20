import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a 20-minute demo of Pangaea. See how messaging-native workforce management can transform your construction operations.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Book a Demo</SectionLabel>
              <h1 className="font-serif text-4xl sm:text-5xl text-white mb-6">
                See Pangaea in action
              </h1>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Book a 20-minute call and we&apos;ll walk you through the full platform — from WhatsApp onboarding to compliance dashboard. No commitment, no hard sell.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="font-mono text-xs uppercase tracking-wider text-copper-400">
                  What you&apos;ll see
                </h3>
                {[
                  "Live WhatsApp onboarding flow — watch a worker qualify in real time",
                  "AI cert verification — snap a CSCS card and see instant validation",
                  "Employer dashboard — workforce pipeline, compliance status, allocations",
                  "Automated compliance — expiry tracking, chase sequences, audit export",
                  "ROI calculation for your specific business",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
                <h3 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-3">
                  Prefer email?
                </h3>
                <p className="text-sm text-white/60 mb-3">
                  Drop us a line and we&apos;ll get back to you within 24 hours.
                </p>
                <Link
                  href="mailto:hello@coldlava.ai"
                  className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors"
                >
                  hello@coldlava.ai &rarr;
                </Link>
              </div>
            </div>

            {/* Cal.com embed placeholder */}
            <div className="bg-forest-800 rounded-xl border border-forest-700/50 p-8 lg:p-12 min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-copper-400"
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
                <h3 className="font-serif text-xl text-white mb-3">
                  Calendar booking coming soon
                </h3>
                <p className="text-sm text-white/50 mb-6 max-w-sm mx-auto">
                  We&apos;re setting up our booking calendar. In the meantime, email us to arrange a demo.
                </p>
                <Link
                  href="mailto:hello@coldlava.ai?subject=Pangaea%20Demo%20Request"
                  className="inline-block bg-copper-500 hover:bg-copper-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Email to Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle className="text-center">
            Trusted by construction professionals
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12">
            Built alongside real labour providers managing hundreds of workers across multiple UK sites.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="font-serif text-3xl text-copper-400 mb-1">20 min</div>
              <div className="text-sm text-white/50">Demo call length</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-copper-400 mb-1">2–3 weeks</div>
              <div className="text-sm text-white/50">From demo to live</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-copper-400 mb-1">Month 1</div>
              <div className="text-sm text-white/50">ROI breakeven</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
