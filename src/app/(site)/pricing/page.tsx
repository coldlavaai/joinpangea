import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { IconCheckCircle, IconUsers, IconZap, IconShield, IconBarChart, IconBriefcase, IconClock, IconCalendar } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Tailored pricing for construction and recruitment workforce management. Per-user licensing. Book a demo for a quote.",
};

const included = [
  { title: "Full platform access", desc: "Every module included — onboarding, compliance, allocations, timesheets, messaging, AI assistant, reports." },
  { title: "WhatsApp and SMS channels", desc: "Two-way messaging with workers built in. Template-based compliance messages with full audit trail." },
  { title: "AI-powered verification", desc: "CSCS card reading, right-to-work validation, document expiry tracking, and automated chase sequences." },
  { title: "Dedicated onboarding", desc: "System configuration, branding, data migration, staff training, and channel setup — all included in your setup." },
  { title: "Rex AI assistant", desc: "Natural language queries across your entire workforce database. Search, report, and manage through conversation." },
  { title: "Ongoing support", desc: "Priority support, regular check-ins, and system updates. Your team is never on their own." },
];

const faqs = [
  {
    q: "How is pricing structured?",
    a: "Per-user licensing. Each team member who uses Pangea — whether a manager, admin, or consultant — pays a monthly licence fee. Workers don't need licences. Book a demo and we'll quote based on your team size and requirements.",
    icon: IconBarChart,
  },
  {
    q: "Is there a setup fee?",
    a: "Yes. Setup covers full system configuration, WhatsApp and SMS channel setup, custom branding, compliance content, staff training, and data migration. The fee depends on your specific requirements — we'll scope it during your demo.",
    icon: IconBriefcase,
  },
  {
    q: "Is there a minimum contract?",
    a: "Annual contracts with a discount, or month-to-month. Either way, you can cancel with 30 days notice.",
    icon: IconCalendar,
  },
  {
    q: "How long does setup take?",
    a: "Most customers are live within 2 to 3 weeks. That includes configuration, training, and importing your existing workforce data.",
    icon: IconClock,
  },
  {
    q: "What if we have a large workforce?",
    a: "Pangea scales with you. Whether you manage 50 workers or 5,000, the per-user model means you only pay for the people managing the system, not the workers in it.",
    icon: IconUsers,
  },
  {
    q: "Can we white-label the platform?",
    a: "Yes. Recruitment agencies can brand Pangea as their own system — including custom branding, domain, and client-facing features like AI CV summarisation.",
    icon: IconZap,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Tailored to your business
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-4">
            Per-user licensing that scales with your team. Every licence includes full platform access — onboarding, compliance, AI, messaging, timesheets, and reporting.
          </p>
          <p className="font-serif text-xl text-copper-400">
            No per-worker charges. No hidden fees.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-forest-800/40 backdrop-blur-md rounded-2xl p-12 border border-copper-500/20 hover:border-copper-500/30 shadow-[0_0_60px_-10px_rgba(193,127,89,0.1)] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
            <div className="relative w-14 h-14 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <IconShield className="w-7 h-7 text-copper-400" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">
              Premium positioning. Tailored pricing.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
              Every business is different. We scope your requirements, configure the platform to match, and quote a price that reflects the value you receive. No generic tiers. No one-size-fits-all.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo for Your Quote
            </Link>
          </div>
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <SectionTitle className="text-center">
          Every licence includes everything
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {included.map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-forest-800/40 backdrop-blur-sm rounded-xl p-4 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300">
              <IconCheckCircle className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-base text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <SectionTitle className="text-center">
            Frequently asked questions
          </SectionTitle>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-forest-800/30 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <faq.icon className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Ready to get started?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Book a demo and we&apos;ll scope a plan that fits your business, your team, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get Your Free Compliance Score
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
