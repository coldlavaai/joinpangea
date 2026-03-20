import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Pangaea's full feature set: WhatsApp onboarding, AI cert verification, compliance automation, labour allocation, timesheets, recruitment, and more.",
};

const modules = [
  {
    label: "Onboarding",
    title: "WhatsApp-Native Worker Onboarding",
    description:
      "Workers onboard entirely through WhatsApp or SMS. No app downloads, no web portals, no login credentials. Our AI bot — Amber — guides each worker through qualification, document collection, and H&S induction in a single conversation.",
    capabilities: [
      "7-step AI qualification flow via WhatsApp/SMS",
      "Multi-language support (English, Polish, Romanian)",
      "Secure document upload links via messaging",
      "QR code and link-based invitations",
      "H&S induction video + quiz on mobile",
      "Automatic pipeline progression (Applied → Verifying → Inducted → Ready)",
    ],
  },
  {
    label: "Verification",
    title: "AI-Powered Cert Verification",
    description:
      "Workers snap a photo of their CSCS card, OSHA cert, or right-to-work document. AI reads the card type, colour, expiry date, and cardholder name — flagging issues instantly. Low-confidence results go to a manual review queue.",
    capabilities: [
      "CSCS card type and colour detection (Green, Blue, Gold, Black, Red)",
      "Automatic expiry date extraction",
      "Right-to-work document validation",
      "OSHA 10/30-Hour card verification (US)",
      "NYC Local Law 196 SST card tracking",
      "Manual review queue for edge cases",
    ],
  },
  {
    label: "Compliance",
    title: "Automated Compliance Management",
    description:
      "Never send a non-compliant worker to site. Pangaea tracks every document expiry, sends automatic reminders, and blocks workers from allocation when they fall out of compliance.",
    capabilities: [
      "Document expiry tracking (90, 30, 7-day alerts)",
      "Automatic WhatsApp reminders to workers",
      "Staff alerts for critical compliance issues",
      "Auto-block non-compliant workers from new allocations",
      "Compliance dashboard with risk scoring",
      "One-click audit export (CSV) for HSE/OSHA inspections",
    ],
  },
  {
    label: "Allocation",
    title: "Smart Labour Allocation",
    description:
      "Create labour requests by site, trade, and duration. Search your verified workforce pool and broadcast offers to the best-matched workers. First to accept wins — positions filled in hours, not days.",
    capabilities: [
      "Pool search by trade, experience, location, and availability",
      "Broadcast offers to top candidates (30-minute acceptance window)",
      "First-to-accept allocation logic",
      "Quick-assign from worker profiles",
      "Multi-site management with headcount tracking",
      "Allocation lifecycle tracking (pending → confirmed → active → completed)",
    ],
  },
  {
    label: "Timesheets",
    title: "Shifts & Timesheet Management",
    description:
      "Track arrivals, breaks, and departures. Auto-generate weekly timesheets with Working Time Directive compliance checks. Export professional PDF invoices for payroll.",
    capabilities: [
      "Manual shift creation with scheduled vs. actual tracking",
      "Break minute logging",
      "Working Time Directive (WTD) compliance flags",
      "Weekly timesheet auto-generation",
      "Day rate or hourly rate (with overtime) calculation",
      "PDF export for payroll processing",
    ],
  },
  {
    label: "Recruitment",
    title: "Job Adverts & Recruitment",
    description:
      "Create job adverts with AI-generated copy, publish across platforms, and track performance. Link adverts directly to labour requests for seamless pipeline management.",
    capabilities: [
      "AI-powered job advert copy generation",
      "Multi-platform posting (Facebook, LinkedIn, Indeed)",
      "Impression, click, and application tracking",
      "Link adverts to labour requests",
      "Template library for common roles",
      "Draft → Active → Paused → Ended lifecycle",
    ],
  },
  {
    label: "AI Assistant",
    title: "Rex — Your AI Operations Manager",
    description:
      "Rex is a conversational AI assistant that understands your entire workforce. Search for workers, check compliance status, create labour requests, and generate reports — all through natural language.",
    capabilities: [
      "Natural language workforce search",
      "Compliance status queries",
      "Labour request creation via conversation",
      "Document and allocation management",
      "Thread-based conversations with full context",
      "12+ integrated tools for operations tasks",
    ],
  },
  {
    label: "Messaging",
    title: "WhatsApp & Telegram Integration",
    description:
      "Two-way WhatsApp messaging with workers and Telegram commands for site managers. Every message logged, every interaction tracked.",
    capabilities: [
      "WhatsApp Business API (UK) and Twilio SMS (US)",
      "Template-based messaging for compliance (doc reminders, offers, alerts)",
      "24-hour conversation window management",
      "Telegram bot for site managers (arrivals, NCRs, requests)",
      "Admin notification bot for critical alerts",
      "Full message history and audit trail",
    ],
  },
  {
    label: "Reporting",
    title: "Compliance Reports & Analytics",
    description:
      "Real-time dashboards showing document expiry timelines, CSCS card distribution, WTD compliance, and non-conformance trends. Everything exportable for audits.",
    capabilities: [
      "Document expiry timeline (30/60/90-day view)",
      "CSCS card distribution by type",
      "Working Time Directive compliance tracking",
      "Non-conformance report tracking (9 incident types, 3 severities)",
      "RAP scoring (Attitude, Reliability, Professionalism)",
      "CSV export for all reports",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Features</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            Every tool you need to manage your workforce
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Nine integrated modules covering the full worker lifecycle — from first WhatsApp message to final timesheet.
          </p>
        </div>
      </section>

      {/* Modules */}
      {modules.map((m, i) => (
        <Section key={m.label} dark={i % 2 === 0}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>{m.label}</SectionLabel>
              <SectionTitle>{m.title}</SectionTitle>
              <p className="text-white/60 leading-relaxed text-lg">
                {m.description}
              </p>
            </div>
            <div className="bg-forest-900/50 rounded-xl p-8 border border-forest-700/50">
              <h4 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-6">
                Key Capabilities
              </h4>
              <ul className="space-y-4">
                {m.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper-400 flex-shrink-0" />
                    <span className="text-sm text-white/70">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">See it in action</SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Book a 20-minute demo and we&apos;ll walk you through the features that matter most to your business.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Book a Demo
          </Link>
        </div>
      </Section>
    </>
  );
}
