import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconHardHat,
  IconMessage,
  IconBot,
  IconCheckCircle,
  IconCalendar,
  IconGlobe,
  IconUsers,
  IconShield,
  IconTarget,
  IconStar,
  IconTrendingUp,
  IconMail,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pangea was built alongside real construction companies to solve real workforce management problems. Our story, our mission, and why we built this.",
};

const timeline = [
  {
    label: "The Problem",
    title: "We saw the gap firsthand",
    description:
      "Working with construction labour providers, we saw the same pattern everywhere: spreadsheets, WhatsApp groups, filing cabinets of expired certs, and admin teams drowning in paperwork. Enterprise solutions existed but cost a fortune and took months to implement. Small firms had nothing.",
  },
  {
    label: "The Insight",
    title: "Workers are already on WhatsApp",
    description:
      "98% of construction workers have WhatsApp on their phone. They don't want another app. They don't want a portal. The insight was simple: meet workers where they already are, and automate everything else behind the scenes.",
  },
  {
    label: "The Build",
    title: "Built with the industry, not for it",
    description:
      "Pangea was developed in partnership with real construction companies managing real workers on real sites. Every feature was tested in the field. Every workflow was validated by the people who use it daily. This isn't software designed in a vacuum.",
  },
  {
    label: "Today",
    title: "Ready for the industry's biggest shift",
    description:
      "The UK needs 240,000+ additional construction workers by 2029. The US faces similar shortages. Companies that can onboard, manage, and retain workers efficiently will win. Pangea gives them the tools to do exactly that.",
  },
];

const values = [
  {
    icon: IconTarget,
    title: "Solve the real problem",
    description: "We don't build features for feature lists. Every capability in Pangea exists because a construction company told us they needed it.",
  },
  {
    icon: IconMessage,
    title: "Meet people where they are",
    description: "Workers are on WhatsApp. Site managers are on Telegram. Dashboard staff are in the browser. We fit into existing habits, not the other way around.",
  },
  {
    icon: IconBot,
    title: "AI that just works",
    description: "AI should be invisible. It verifies certs, qualifies workers, and answers questions — without requiring anyone to understand how it works.",
  },
  {
    icon: IconShield,
    title: "Compliance is non-negotiable",
    description: "One expired CSCS card can shut a site down. We built Pangea so that can't happen. Automatic tracking, automatic enforcement, zero gaps.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>About Pangea</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            We&apos;re building the operating system construction never had
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Pangea exists because managing a construction workforce shouldn&apos;t require spreadsheets, filing cabinets, and a full-time admin team chasing expired certs by phone.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Our Mission</SectionLabel>
          <blockquote className="font-serif text-2xl sm:text-3xl text-white leading-relaxed mb-6">
            Make professional-grade workforce management accessible to every construction company — not just the ones with six-figure software budgets.
          </blockquote>
          <p className="text-white/50">
            Pangea brings enterprise capability to the 885,000 UK construction SMEs and 3.97 million US construction firms that are currently running on spreadsheets, WhatsApp groups, and hope.
          </p>
        </div>
      </Section>

      {/* Story timeline */}
      <Section>
        <SectionLabel>Our Story</SectionLabel>
        <SectionTitle>How we got here</SectionTitle>

        <div className="max-w-3xl space-y-12 mt-12">
          {timeline.map((item, i) => (
            <div key={item.label} className="flex gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center">
                  <span className="font-mono text-xs text-copper-400 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-forest-700/50 mt-3" />
                )}
              </div>
              <div className="pb-8">
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-400/60">
                  {item.label}
                </span>
                <h3 className="font-serif text-xl text-white mt-1 mb-3">{item.title}</h3>
                <p className="text-white/55 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionLabel>What We Believe</SectionLabel>
        <SectionTitle>Four principles that shape everything we build</SectionTitle>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-forest-900 rounded-xl p-6 border border-forest-700/50">
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper-400" />
                </div>
                <h3 className="font-serif text-base text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Market context */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Opportunity</SectionLabel>
          <SectionTitle className="text-center">
            Construction is ready for change
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            The construction industry is one of the least digitised sectors in the economy. That&apos;s not a criticism — it&apos;s an opportunity.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "885K", label: "UK Construction SMEs", sub: "15.8% of all UK businesses" },
              { value: "42%", label: "Zero HR Technology", sub: "Still paper-based" },
              { value: "240K+", label: "Workers Needed", sub: "UK construction by 2029" },
              { value: "8.3M", label: "US Workforce", sub: "3.97M firms" },
            ].map((s) => (
              <div key={s.label} className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 text-center">
                <div className="font-serif text-2xl text-copper-400 mb-1">{s.value}</div>
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70 mb-1">{s.label}</div>
                <div className="text-xs text-white/35">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Want to learn more?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Book a demo to see Pangea in action, or drop us an email to start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo
            </Link>
            <Link
              href="mailto:hello@coldlava.ai"
              className="inline-flex items-center gap-2 border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <IconMail className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
