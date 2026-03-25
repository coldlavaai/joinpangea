import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { IconTrendingUp, IconUsers, IconHardHat, IconBarChart, IconTarget, IconShield, IconZap, IconGlobe, IconCalendar, IconAlertTriangle, IconCheckCircle, IconClock, IconMessage, IconSearch, IconLock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Why Pangea",
  description:
    "Why construction companies choose Pangea: handle growing application volumes, give every site manager full visibility, automate compliance, and be ready for the future of construction labour.",
};

const aiProofStats = [
  { value: "25%", label: "AI handles only 25% of unpredictable physical work", source: "Goldman Sachs", icon: IconHardHat },
  { value: "52%", label: "View trade work as less vulnerable than white-collar roles", source: "Industry Survey", icon: IconShield },
  { value: "5.3%", label: "Skilled trades growth rate 2024–2034", source: "BlackRock", icon: IconTrendingUp },
  { value: "240K+", label: "Additional UK construction workers needed by 2029", source: "CITB", icon: IconUsers },
];

const migrationStats = [
  { value: "42%", label: "of Gen Z planning blue-collar careers", sub: "37% have bachelor's degrees", icon: IconUsers },
  { value: "40%", label: "of 2025 graduates chose trades over traditional careers", sub: "", icon: IconTrendingUp },
  { value: "88%", label: "of construction firms still partly paper-based", sub: "RICS 2024", icon: IconZap },
  { value: "£1,500", label: "lost per employee per year to paperwork", sub: "Re-flow/YouGov", icon: IconBarChart },
];

const competitors = [
  {
    name: "Construction Workforce Tools",
    weakness: "Enterprise-focused. Portal or app required. Hardware needed. Overkill for SMEs with under 100 workers.",
    pangea: "No app. Messaging-native. Built for 50+ workers. Lower price.",
  },
  {
    name: "Contractor Onboarding Platforms",
    weakness: "Web portal required. Enterprise sales cycle. General-purpose onboarding.",
    pangea: "Messaging-native. No portal. Construction-specific AI. Faster deployment.",
  },
  {
    name: "Enterprise HR Suites",
    weakness: "Heavy, expensive. Target 200+ employee firms. Months to implement. Module lock-in.",
    pangea: "Lightweight, deploy in days. Focused on the one problem SMEs actually have.",
  },
  {
    name: "Generic HR Onboarding",
    weakness: "Not built for construction. No cert intelligence. No CSCS verification. Form collection only.",
    pangea: "Construction-specific AI. Conversational onboarding. Industry knowledge built in.",
  },
  {
    name: "Site Hardware Solutions",
    weakness: "Physical hardware per site. High capex. No remote onboarding capability.",
    pangea: "Pure software. Any phone. No hardware. Remote pre-arrival onboarding.",
  },
];

const todayProblems = [
  {
    icon: IconClock,
    title: "Your admin team is drowning",
    desc: "£1,500 per employee per year lost to paperwork alone (Re-flow/YouGov). That&apos;s before you count the phone calls, the chasing, and the manual onboarding.",
  },
  {
    icon: IconSearch,
    title: "No visibility across sites",
    desc: "Site managers can&apos;t see who&apos;s available. Directors can&apos;t see compliance status. Nobody has the full picture without asking three different people.",
  },
  {
    icon: IconMessage,
    title: "Applications are piling up",
    desc: "You&apos;re getting 30, 50, 100 applications a week — but your team can only process a handful. Good workers slip through because nobody replied fast enough.",
  },
  {
    icon: IconShield,
    title: "Compliance is a ticking bomb",
    desc: "One expired CSCS card costs £875 minimum. One right-to-work failure can mean criminal prosecution. You know the risk — you just can&apos;t track it all manually.",
  },
  {
    icon: IconUsers,
    title: "Site managers are in the dark",
    desc: "They need to know who&apos;s coming, who&apos;s compliant, who&apos;s available. But they don&apos;t have login access to any system — they just ring the office.",
  },
  {
    icon: IconLock,
    title: "Enterprise software isn&apos;t the answer",
    desc: "You&apos;ve looked at the big platforms. They cost a fortune, take months to set up, and your team needs a week of training just to log a shift. You need something simpler.",
  },
];

const pangeaDifference = [
  {
    icon: IconZap,
    title: "Zero learning curve",
    desc: "Workers use messaging they already have on their phone. Site managers use simple commands. Dashboard staff get a clean interface they can learn in an afternoon. No training courses, no manuals.",
  },
  {
    icon: IconGlobe,
    title: "Complete transparency",
    desc: "Every worker, every document, every allocation, every message — in one place. Directors see the big picture. Site managers see their sites. Everyone works from the same data. No more asking around.",
  },
  {
    icon: IconTarget,
    title: "AI that stays out of your way",
    desc: "Pangea uses AI to qualify applicants, verify certs, and chase compliance. But you don&apos;t need to understand AI to use it. There are no algorithms to configure, no models to train. It reads a CSCS card. It asks a worker about their trade. It sends a reminder when a cert expires. Simple.",
  },
  {
    icon: IconBarChart,
    title: "Built for scale, priced for SMEs",
    desc: "Whether you&apos;re managing 15 workers or 200, Pangea handles the volume. Process hundreds of applications automatically. Manage compliance across dozens of sites. All for less than the cost of a single compliance fine.",
  },
];

export default function WhyPangeaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Pangea</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            You&apos;re growing. Your systems should grow with you.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Pangea gives construction companies the power of AI-driven workforce management — without the complexity. Whether you&apos;re handling 50 applications a week today or preparing for the wave of new workers entering the trades, Pangea keeps everything visible, compliant, and under control.
          </p>
        </div>
      </section>

      {/* Today's problems */}
      <Section dark>
        <SectionLabel>The Problem Today</SectionLabel>
        <SectionTitle>Sound familiar?</SectionTitle>
        <SectionDescription>
          These are the problems construction companies tell us about every week. If you recognise even two of them, Pangea will pay for itself.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todayProblems.map((item) => (
            <div key={item.title} className="bg-forest-900 rounded-xl p-6 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-copper-400" />
              </div>
              <h3 className="font-serif text-base text-white mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-white/50 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* The Pangea difference */}
      <Section>
        <SectionLabel>The Pangea Difference</SectionLabel>
        <SectionTitle>Powerful enough for enterprise. Simple enough for anyone.</SectionTitle>
        <SectionDescription>
          Pangea was designed for site managers who don&apos;t have time to learn new software, and operations teams who need real-time visibility without chasing people for updates.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 gap-8">
          {pangeaDifference.map((item) => (
            <div key={item.title} className="bg-forest-800 rounded-xl p-8 border border-forest-700/50">
              <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-copper-400" />
              </div>
              <h3 className="font-serif text-lg text-white mb-3" dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="text-sm text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Future-proofing */}
      <Section dark>
        <SectionLabel>The Bigger Picture</SectionLabel>
        <SectionTitle>And then there&apos;s what&apos;s coming next</SectionTitle>
        <SectionDescription>
          Pangea solves your problems today. But it also positions you for a structural shift in the construction labour market that&apos;s already underway.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiProofStats.map((s) => (
            <div
              key={s.label}
              className="bg-forest-900 rounded-xl p-6 border border-forest-700/50"
            >
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-3xl text-copper-400 mb-2">
                {s.value}
              </div>
              <p className="text-sm text-white/70 mb-2">{s.label}</p>
              <p className="text-xs text-white/40 font-mono">{s.source}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Great Migration */}
      <Section>
        <SectionLabel>The Influx</SectionLabel>
        <SectionTitle>Millions of new workers are entering the trades</SectionTitle>
        <SectionDescription>
          White-collar workers displaced by AI are moving into construction. Your applicant pipeline is about to get a lot bigger — and you need the systems to handle it.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {migrationStats.map((s) => (
            <div
              key={s.label}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-3xl text-copper-400 mb-2">
                {s.value}
              </div>
              <p className="text-sm text-white/70">{s.label}</p>
              {s.sub && (
                <p className="text-xs text-white/40 mt-1">{s.sub}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 bg-forest-800 rounded-xl p-8 border border-copper-500/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <IconTarget className="w-5 h-5 text-copper-400" />
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              <span className="text-copper-400 font-semibold">What this means for you:</span>{" "}
              Your applicant volume is going to increase — significantly. Every new worker still needs a CSCS check, a right-to-work verification, an H&amp;S induction, and a compliance sign-off before they touch a tool on site. The companies with systems to handle that volume will win. The ones still using spreadsheets and WhatsApp groups will drown.
            </p>
          </div>
        </div>
      </Section>

      {/* Market Size */}
      <Section dark>
        <SectionLabel>The Market</SectionLabel>
        <SectionTitle>Massive market. Zero solutions.</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                <IconGlobe className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400">
                United Kingdom
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-serif text-2xl text-white">885,000 SMEs</div>
                <div className="text-sm text-white/50">15.8% of all UK businesses are construction</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">300,000 workers lost</div>
                <div className="text-sm text-white/50">Since 2005. One third retiring by 2035.</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">42% have zero HR tech</div>
                <div className="text-sm text-white/50">Paper-based onboarding is still the norm</div>
              </div>
            </div>
          </div>
          <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                <IconGlobe className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400">
                United States
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-serif text-2xl text-white">3.97M firms</div>
                <div className="text-sm text-white/50">8.3M total workforce</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">499K workers needed</div>
                <div className="text-sm text-white/50">Annually through 2026+</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">$700B AI data centre capex</div>
                <div className="text-sm text-white/50">Meta, Microsoft, Amazon, Google, Oracle — all building</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Competitors */}
      <Section>
        <SectionLabel>The Competition</SectionLabel>
        <SectionTitle>No one serves the 50+ worker segment properly</SectionTitle>
        <SectionDescription>
          Enterprise solutions are too expensive and complex. Generic HR tools don&apos;t understand construction. Pangea occupies the unserved middle ground.
        </SectionDescription>
        <div className="space-y-4">
          {competitors.map((c) => (
            <div
              key={c.name}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 grid md:grid-cols-3 gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-forest-700/50 border border-forest-600/30 flex items-center justify-center flex-shrink-0">
                  <IconTarget className="w-5 h-5 text-white/40" />
                </div>
                <div className="font-mono text-sm font-semibold text-white/80">
                  {c.name}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconAlertTriangle className="w-3.5 h-3.5 text-white/40" />
                  <div className="font-mono text-xs uppercase tracking-wider text-white/40">
                    Their limitation
                  </div>
                </div>
                <p className="text-sm text-white/60">{c.weakness}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconCheckCircle className="w-3.5 h-3.5 text-copper-400" />
                  <div className="font-mono text-xs uppercase tracking-wider text-copper-400">
                    Pangea advantage
                  </div>
                </div>
                <p className="text-sm text-white/70">{c.pangea}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Solve today&apos;s problems. Be ready for tomorrow&apos;s growth.
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            See how Pangea can make your operations more efficient, give your team full visibility, and handle any volume of workers — now and in the future.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <IconCalendar className="w-5 h-5" />
            Book a Demo
          </Link>
        </div>
      </Section>
    </>
  );
}
