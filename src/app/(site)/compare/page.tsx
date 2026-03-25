import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconCheckCircle,
  IconCalendar,
  IconMessage,
  IconShield,
  IconClock,
  IconBot,
  IconUsers,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How Pangea Compares",
  description:
    "See how Pangea compares to generic HR platforms, recruitment CRMs, and enterprise workforce tools. Built specifically for labour-driven industries.",
};

function IconX({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

const existingSolutions = [
  {
    category: "Construction Workforce Tools",
    limitation: "Basic scheduling and compliance without AI. Limited automation, no intelligent onboarding, no document verification.",
  },
  {
    category: "Contractor Onboarding Platforms",
    limitation: "Portal-based onboarding requiring app downloads and manual form filling. No AI document reading. Workers drop off before completing.",
  },
  {
    category: "Generic HR Onboarding",
    limitation: "Built for office-based hiring. No understanding of CSCS cards, trade certifications, or site-based compliance requirements.",
  },
  {
    category: "Site Access & Time Tracking",
    limitation: "Hardware-dependent kiosks and beacons. Solves time tracking but ignores recruitment, compliance, and workforce communication.",
  },
  {
    category: "Recruitment CRMs",
    limitation: "Built for white-collar agencies. Expensive, complex, requires dedicated admin. No construction-specific compliance or automated onboarding.",
  },
  {
    category: "Enterprise ATS Platforms",
    limitation: "Focused on permanent hiring funnels. Not designed for high-volume temp labour or compliance-heavy industries.",
  },
  {
    category: "Enterprise HR & Payroll Suites",
    limitation: "Massive implementations — 6+ months, consultants required. Overkill for companies with 50-500 workers who need speed, not complexity.",
  },
  {
    category: "General Hiring Platforms",
    limitation: "Job posting and applicant tracking for office roles. No understanding of construction compliance, trade certs, or site workforce management.",
  },
];

const pangeaAdvantages = [
  {
    feature: "AI-powered onboarding",
    description: "Workers onboard in under 4 minutes through messaging. No app downloads, no portals, no training required.",
    competitorGap: "No existing solution offers messaging-native onboarding with AI document reading.",
  },
  {
    feature: "PQQ automation",
    description: "Pangea stores your health & safety docs, compliance certs, ISO standards, and policies. When a PQQ lands, AI pulls the right answers from your stored data.",
    competitorGap: "No existing solution offers PQQ automation using stored company data.",
  },
  {
    feature: "CV AI summarisation",
    description: "AI reads, summarises, and white-labels CVs for recruitment agencies. Send professional candidate profiles to clients in seconds, not hours.",
    competitorGap: "No existing solution offers AI-powered CV summarisation for white-label recruitment.",
  },
  {
    feature: "Automated database cleaning",
    description: "Clean and re-engage your entire operative database through automated outreach. Conversational re-engagement that updates records and refreshes compliance.",
    competitorGap: "No existing solution offers automated database cleaning as a built-in service.",
  },
  {
    feature: "Resourcer + admin replacement",
    description: "Pangea handles the work of both your resourcer and admin teams. AI manages candidate sourcing, onboarding, compliance, and shift allocation in one system.",
    competitorGap: "Existing solutions solve one piece. Pangea replaces entire roles.",
  },
  {
    feature: "Industry-specific AI",
    description: "Rex and Amber are purpose-built AI assistants that understand construction, labour-hire, and compliance. Not generic chatbots bolted onto a CRM.",
    competitorGap: "Generic platforms offer basic AI chat. Pangea's AI understands your industry.",
  },
];

const comparisonRows = [
  {
    feature: "Worker onboarding",
    competitors: "Portal-based, app downloads, manual forms",
    pangea: "AI-powered messaging, under 4 minutes",
  },
  {
    feature: "CSCS / cert verification",
    competitors: "Upload to portal, manual review",
    pangea: "AI reads card photo instantly",
  },
  {
    feature: "PQQ / tendering",
    competitors: "Not offered",
    pangea: "AI pulls answers from stored company data",
  },
  {
    feature: "CV summarisation",
    competitors: "Not offered",
    pangea: "AI white-labels CVs for recruitment agencies",
  },
  {
    feature: "Database cleaning",
    competitors: "Not offered",
    pangea: "Automated outreach, conversational re-engagement",
  },
  {
    feature: "Compliance tracking",
    competitors: "Manual config, basic alerts",
    pangea: "Auto-alerts at 90/30/7 days, auto-block expired workers",
  },
  {
    feature: "Shift allocation",
    competitors: "Portal-based scheduling",
    pangea: "Broadcast offers, first-to-accept wins",
  },
  {
    feature: "Worker communication",
    competitors: "Email, app notifications, portals",
    pangea: "Messaging-native, integrated into every workflow",
  },
  {
    feature: "Setup time",
    competitors: "1-6 months (enterprise implementations)",
    pangea: "2-3 weeks",
  },
  {
    feature: "Industry focus",
    competitors: "Generic HR/recruitment or single-purpose tools",
    pangea: "Built specifically for labour-driven industries",
  },
];

const scenarios = [
  {
    icon: IconUsers,
    title: "Your resourcers are drowning",
    description: "You have resourcers sourcing candidates, admin staff processing paperwork, and managers chasing compliance. Three roles doing what one system should handle.",
    result: "Pangea handles the work of both your resourcer and admin teams. AI sources, onboards, and manages compliance. Your people focus on relationships, not paperwork.",
  },
  {
    icon: IconShield,
    title: "PQQs eat your week",
    description: "Every tender means digging through folders for your health & safety policy, ISO certs, insurance docs, and compliance records. You answer the same questions differently every time.",
    result: "Pangea stores all your company data — policies, certs, ISO standards — and auto-fills PQQ responses using AI. Tendering goes from days to minutes.",
  },
  {
    icon: IconBot,
    title: "Your database is dead weight",
    description: "You have thousands of operatives on file but half have expired certs, wrong numbers, or haven't worked in years. Your database is a liability, not an asset.",
    result: "Pangea cleans your database through automated outreach. Conversational re-engagement that updates records, refreshes compliance, and turns dead data into active workers.",
  },
  {
    icon: IconZap,
    title: "You tried generic HR software",
    description: "You paid for an enterprise ATS or recruitment CRM. Your team barely uses it. Workers won't download the app. It doesn't understand CSCS cards, trade certs, or site compliance. You're back to spreadsheets.",
    result: "Pangea is built for your industry. Workers communicate through messaging they already use. AI reads trade cards, tracks compliance, and allocates shifts. Zero learning curve.",
  },
];

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Compare</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            Existing solutions weren&apos;t built
            <br />
            <span className="text-copper-400">for your industry.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mb-4">
            Generic HR platforms, recruitment CRMs, and enterprise suites don&apos;t understand construction, labour supply, or site-based compliance. Pangea does.
          </p>
        </div>
      </section>

      {/* Existing solutions grid */}
      <Section dark>
        <SectionLabel>Existing Solutions</SectionLabel>
        <SectionTitle>What&apos;s out there — and where it falls short</SectionTitle>
        <p className="text-white/50 max-w-2xl mb-10">
          Most platforms solve one piece of the puzzle. None of them cover the full lifecycle of workforce management for labour-driven industries.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {existingSolutions.map((c) => (
            <div key={c.category} className="bg-forest-800 rounded-xl border border-forest-700/50 p-5">
              <h3 className="font-serif text-white text-base mb-1">{c.category}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{c.limitation}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature comparison table */}
      <Section>
        <SectionLabel>Feature Comparison</SectionLabel>
        <SectionTitle>Side by side</SectionTitle>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-forest-700/50">
                <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-wider text-white/40 w-[25%]">
                  Capability
                </th>
                <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-wider text-white/30 w-[37%]">
                  Existing Solutions
                </th>
                <th className="text-left py-4 px-4 font-mono text-xs uppercase tracking-wider text-copper-400 w-[38%]">
                  Pangea
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-forest-700/30 hover:bg-forest-700/10 transition-colors">
                  <td className="py-4 px-4 font-serif text-white text-sm">{row.feature}</td>
                  <td className="py-4 px-4 text-white/35 text-xs leading-relaxed">{row.competitors}</td>
                  <td className="py-4 px-4 text-copper-400/80 text-xs leading-relaxed font-medium">{row.pangea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Unique differentiators */}
      <Section dark>
        <SectionLabel>Only Pangea</SectionLabel>
        <SectionTitle>Capabilities no existing solution offers</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {pangeaAdvantages.map((a) => (
            <div key={a.feature} className="bg-forest-800 rounded-xl border border-copper-500/15 p-6">
              <h3 className="font-serif text-copper-400 text-base mb-2">{a.feature}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{a.description}</p>
              <div className="flex items-start gap-2">
                <IconCheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-copper-400/70 leading-relaxed">{a.competitorGap}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Scenarios */}
      <Section>
        <SectionLabel>Sound Familiar?</SectionLabel>
        <SectionTitle>Where are you today?</SectionTitle>

        <div className="space-y-8 mt-10 max-w-4xl">
          {scenarios.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-forest-800 rounded-xl border border-forest-700/50 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-copper-400" />
                    </div>
                    <h3 className="font-serif text-lg text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    {s.description}
                  </p>
                  <div className="bg-forest-900/50 rounded-lg p-5 border border-copper-500/15">
                    <div className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-400 block mb-1">
                          With Pangea
                        </span>
                        <p className="text-sm text-white/70 leading-relaxed">{s.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Bottom line */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The Bottom Line</SectionLabel>
          <SectionTitle className="text-center">
            Built for your industry. Designed for total control.
          </SectionTitle>
          <p className="text-lg text-white/60 mb-4">
            Generic HR systems, recruitment CRMs, and enterprise platforms were not built for labour-driven industries. Pangea was. AI-powered onboarding, PQQ automation, CV summarisation, and database cleaning — capabilities no existing solution offers.
          </p>
          <p className="text-white/40 mb-10">
            Purpose-built for companies with 50+ workers who need to move fast.
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
