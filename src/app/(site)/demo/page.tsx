import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { IconCheckCircle, IconMail, IconClock, IconZap, IconStar } from "@/components/icons";
import { CalEmbed } from "./cal-embed";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a 30-minute demo of Pangea. See how messaging-native workforce management can transform your construction operations.",
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
                See Pangea in action
              </h1>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Book a 30-minute call and we&apos;ll walk you through the full platform — from WhatsApp onboarding to compliance dashboard. No commitment, no hard sell.
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
                    <IconCheckCircle className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                    <IconMail className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-copper-400">
                    Prefer email?
                  </h3>
                </div>
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

            {/* Cal.com inline embed */}
            <div className="min-h-[600px]">
              <CalEmbed />
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
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-3">
                <IconClock className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-3xl text-copper-400 mb-1">30 min</div>
              <div className="text-sm text-white/50">Demo call length</div>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-3">
                <IconZap className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-3xl text-copper-400 mb-1">2–3 weeks</div>
              <div className="text-sm text-white/50">From demo to live</div>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-3">
                <IconStar className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-3xl text-copper-400 mb-1">Month 1</div>
              <div className="text-sm text-white/50">ROI breakeven</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
