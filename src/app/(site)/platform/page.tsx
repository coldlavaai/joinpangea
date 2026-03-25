import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconBarChart,
  IconBot,
  IconCalendar,
  IconClipboard,
  IconClock,
  IconFileCheck,
  IconHardHat,
  IconMapPin,
  IconMessage,
  IconShield,
  IconUsers,
  IconZap,
  IconStar,
  IconAlertTriangle,
  IconBriefcase,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the Pangea platform. 15 integrated modules covering workforce management, compliance, timesheets, recruitment, and AI — built for construction.",
};

const modules = [
  {
    icon: IconBarChart,
    title: "Operations Dashboard",
    description: "Compliance alerts, attendance tracking, quick actions, and a real-time activity feed — everything your operations team needs at a glance.",
  },
  {
    icon: IconUsers,
    title: "Workforce Pipeline",
    description: "Every worker tracked from first application to active site deployment. Filter by status, trade, compliance score, or data completeness. 8-stage progression with bulk actions and 21 configurable columns.",
  },
  {
    icon: IconClipboard,
    title: "Labour Requests",
    description: "Create requests by trade, headcount, dates, and rates. Search your verified pool for matches and broadcast offers to the best-fit workers. Track fill rates across all open positions.",
  },
  {
    icon: IconMapPin,
    title: "Site Management",
    description: "Full site profiles with location, contacts, project value, and assigned staff. Link sites to requests, allocations, and shifts. Site-specific induction management.",
  },
  {
    icon: IconCalendar,
    title: "Allocations",
    description: "Track every worker allocation from offer through to completion. Full lifecycle visibility: when the offer was sent, accepted, when the worker arrived, and when they finished.",
  },
  {
    icon: IconClock,
    title: "Shifts & Timesheets",
    description: "Log shifts with scheduled vs actual times, break tracking, and Working Time Directive compliance flags. Auto-generate weekly timesheets with gross pay calculation and PDF export for payroll.",
  },
  {
    icon: IconFileCheck,
    title: "Document Verification",
    description: "AI-powered cert checking with CSCS card type and colour detection, expiry date extraction, and right-to-work validation. Verify or reject with reasons. Auto-block on expiry.",
  },
  {
    icon: IconAlertTriangle,
    title: "Non-Conformance Reports",
    description: "Log incidents across 9 types (no-show, safety breach, conduct, etc.) with 3 severity levels. Auto-block on critical. Resolution tracking and full audit trail.",
  },
  {
    icon: IconShield,
    title: "Compliance Reports",
    description: "Five report sections: compliance summary, document expiry timeline (90/30/7 day), right-to-work status, CSCS distribution, and Working Time Directive tracking. One-click CSV export for HSE audits.",
  },
  {
    icon: IconMessage,
    title: "Integrated Communications",
    description: "Full message history for every worker interaction — qualification, document requests, shift offers, compliance reminders. Every thread linked to its operative record with complete audit trail.",
  },
  {
    icon: IconBriefcase,
    title: "Recruitment",
    description: "AI-generated job advert copy from a brief description. Multi-platform publishing with impression, click, and application tracking. Linked to labour requests for end-to-end pipeline visibility.",
  },
  {
    icon: IconBot,
    title: "Rex AI Assistant",
    description: "Conversational AI that understands your entire operation. Search workers, check compliance, create requests, and generate reports — all through natural language. 12+ integrated tools.",
  },
  {
    icon: IconZap,
    title: "Activity Feed",
    description: "Real-time log of every event across the system — document submissions, offer responses, shift arrivals, NCRs, compliance changes. Filter by category, fully timestamped and linked.",
  },
  {
    icon: IconStar,
    title: "Settings & Admin",
    description: "Organisation config, staff management with role-based access (Admin, Staff, Site Manager, Auditor), trade categories, email templates with live preview, and notification settings.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>The Platform</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            14 integrated modules. One system.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Everything you need to manage your workforce — from first contact to final timesheet. Built for construction, designed for clarity.
          </p>
        </div>
      </section>

      {/* Module grid */}
      <Section dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] group"
              >
                <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-copper-400" />
                </div>
                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-copper-400 transition-colors">
                  {m.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            See it live
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Pangea is best experienced in person. Book a 30-minute demo and we&apos;ll walk you through the platform — tailored to your business, your workforce, and the way you operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
