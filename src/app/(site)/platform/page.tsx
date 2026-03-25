import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { Screenshot, ScreenshotFull, ScreenshotGrid } from "@/components/screenshot";
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
  IconSearch,
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
    "See the Pangea platform in action. Dashboard, workforce management, compliance tracking, AI assistant, timesheets, and more — screenshots of every module.",
};

const modules = [
  {
    icon: IconBarChart,
    screenshot: "/screenshots/dashboard.png",
    title: "Dashboard",
    headline: "Your operations at a glance",
    description:
      "The dashboard gives you an instant overview of your entire workforce operation. Compliance alerts surface expiring documents and blocked operatives. Today's attendance shows who arrived, who didn't show, and who's still awaited. Quick actions let you log a RAP score, add an operative, create a request, or log an NCR in one click. Recent activity keeps you connected to everything happening across all sites.",
    capabilities: [
      "Compliance alerts with expiry countdown",
      "Real-time attendance tracking",
      "Quick action buttons for common tasks",
      "Recent activity feed across all sites",
      "Operative, site, and request counters",
    ],
  },
  {
    icon: IconUsers,
    screenshot: "/screenshots/operatives.png",
    title: "Workforce Pipeline",
    headline: "Every worker, every status, one view",
    description:
      "The operatives page is the heart of Pangea. Every worker in your system — from first-time applicant to active site worker — lives here. Filter by status, trade, compliance score, or data completeness. Toggle between table, card, and compact views. Sort by RAP score, last worked date, or charge rate. Bulk select for group actions. The search bar finds workers by name, phone, reference number, or NI number instantly.",
    capabilities: [
      "8-stage status tracking (Prospect to Working)",
      "Filter by compliance, trade, status, or data issues",
      "RAP score display with colour coding",
      "CSCS card type visibility at a glance",
      "Bulk select and export",
      "21 configurable table columns",
    ],
  },
  {
    icon: IconClipboard,
    screenshot: "/screenshots/requests.png",
    title: "Labour Requests",
    headline: "Create, search, fill",
    description:
      "When a site needs workers, create a labour request with trade, headcount, dates, and rates. The system searches your verified pool for matching operatives and lets you broadcast offers via WhatsApp. Track fill rates across all requests — pending, searching, partial, or fulfilled. Link requests to sites and see exactly how many positions are open at any moment.",
    capabilities: [
      "Request creation with trade, headcount, and rate",
      "Pool search by trade, experience, and location",
      "Broadcast offers to top-matched workers",
      "Fill rate tracking per request",
      "Status lifecycle (Pending to Fulfilled)",
    ],
  },
  {
    icon: IconMapPin,
    screenshot: "/screenshots/sites.png",
    title: "Site Management",
    headline: "All your projects, all your locations",
    description:
      "Every construction site your company operates is managed here. Site details include location, key contacts, project value, main duties, and assigned staff. Link sites to labour requests, allocations, and shifts. Site managers can be assigned per location, controlling what they see and manage in their Telegram and dashboard access.",
    capabilities: [
      "Full site profiles with contact details",
      "Staff assignment per site",
      "Linked labour requests and allocations",
      "Project value and timeline tracking",
      "Site-specific induction management",
    ],
  },
  {
    icon: IconCalendar,
    screenshot: "/screenshots/allocations.png",
    title: "Allocations",
    headline: "From offer to completion",
    description:
      "Track every worker allocation through its full lifecycle. When a worker accepts a shift offer, the allocation is created and moves from pending through confirmed, active, and completed. View allocations by status, site, or worker. See the full timeline: when the offer was sent, when it was accepted, when the worker arrived, and when they finished.",
    capabilities: [
      "Full allocation lifecycle tracking",
      "Status progression (Pending to Completed)",
      "Linked to operatives, sites, and requests",
      "Offer acceptance tracking with timestamps",
      "Termination and no-show recording",
    ],
  },
  {
    icon: IconClock,
    screenshot: "/screenshots/shifts.png",
    title: "Shift Tracking",
    headline: "Scheduled vs actual, with compliance built in",
    description:
      "Log every shift with scheduled and actual start/end times. Track break minutes. The system automatically flags Working Time Directive violations — overnight shifts, consecutive days without rest, and insufficient breaks. Shifts feed directly into weekly timesheet generation.",
    capabilities: [
      "Scheduled vs actual time comparison",
      "Break minute tracking and deduction",
      "WTD compliance flags and alerts",
      "Overtime detection",
      "Direct link to timesheet generation",
    ],
  },
  {
    icon: IconClock,
    screenshot: "/screenshots/timesheets.png",
    title: "Timesheets",
    headline: "Auto-generated, ready for payroll",
    description:
      "Weekly timesheets are generated automatically from shift data. Each timesheet shows total hours, total days, and gross pay calculation — supporting both day rates and hourly rates with overtime. Approve timesheets with one click and export to PDF for payroll processing or client invoicing. Track status: pending, approved, or paid.",
    capabilities: [
      "Auto-generated from shift data",
      "Day rate and hourly rate support",
      "Gross pay calculation with overtime",
      "PDF export for payroll",
      "Approval workflow (Pending to Paid)",
    ],
  },
  {
    icon: IconFileCheck,
    screenshot: "/screenshots/documents.png",
    title: "Document Verification",
    headline: "AI-powered cert checking and expiry tracking",
    description:
      "Every document uploaded by a worker lands here for verification. Vision AI reads CSCS cards, extracting card type, colour, expiry date, and cardholder name. Documents can be verified or rejected with a reason. The expiry timeline shows what's expiring in the next 7, 30, or 90 days. Non-verified or expired documents automatically block workers from new allocations.",
    capabilities: [
      "Vision AI document analysis",
      "CSCS card type and colour detection",
      "Expiry date extraction and tracking",
      "Verify/reject with reason logging",
      "Auto-block on expiry or rejection",
    ],
  },
  {
    icon: IconAlertTriangle,
    screenshot: "/screenshots/ncrs.png",
    title: "Non-Conformance Reports",
    headline: "Track every incident, protect your sites",
    description:
      "Log and track non-conformance reports across 9 incident types: no-show, walk-off, late arrival, safety breach, drugs/alcohol, conduct, attitude, workmanship, and other. Each NCR records severity (minor, major, critical), linked operative, site, and resolution status. Critical NCRs can automatically block workers from future allocations. Site managers can raise NCRs directly from Telegram.",
    capabilities: [
      "9 incident types with 3 severity levels",
      "Linked to operative and site",
      "Auto-block on critical severity",
      "Resolution tracking and closure",
      "Telegram integration for site managers",
    ],
  },
  {
    icon: IconShield,
    screenshot: "/screenshots/reports.png",
    title: "Compliance Reports",
    headline: "Know exactly where your risk sits",
    description:
      "Five compliance report sections in one view. The compliance summary shows blocked operatives and upcoming expiries. Expiring documents are grouped by 90, 30, and 7-day windows. Right-to-work status breaks down verified, unverified, and time-limited workers. CSCS compliance shows card distribution by type. Working Time Directive tracking flags any breaches across the current week. Everything exports to CSV for HSE audits.",
    capabilities: [
      "Compliance summary with block counts",
      "Document expiry timeline (90/30/7 day)",
      "Right-to-work verification status",
      "CSCS card distribution by type",
      "WTD compliance tracking",
      "One-click CSV export for audits",
    ],
  },
  {
    icon: IconMessage,
    screenshot: "/screenshots/comms.png",
    title: "Communications",
    headline: "Every message, fully auditable",
    description:
      "The full WhatsApp message history for every worker interaction. See every message sent and received — qualification conversations, document requests, shift offers, compliance reminders, and more. Each thread is linked to its operative record. Complete audit trail for compliance and dispute resolution.",
    capabilities: [
      "Full WhatsApp message history",
      "Per-operative conversation threads",
      "Template message tracking",
      "Delivery and read status",
      "Complete audit trail",
    ],
  },
  {
    icon: IconBriefcase,
    screenshot: "/screenshots/adverts.png",
    title: "Recruitment",
    headline: "AI-generated adverts with performance tracking",
    description:
      "Create job adverts with AI-generated copy from a brief description. Publish across Facebook, LinkedIn, Indeed, and other platforms. Track impressions, clicks, and applications per platform. Link adverts to labour requests for end-to-end pipeline visibility from ad impression to worker on site.",
    capabilities: [
      "AI copy generation from brief",
      "Multi-platform publishing",
      "Impression, click, and application tracking",
      "Linked to labour requests",
      "Template library for common roles",
    ],
  },
  {
    icon: IconBot,
    screenshot: "/screenshots/assistant.png",
    title: "Rex AI Assistant",
    headline: "Ask anything about your workforce",
    description:
      "Rex is a conversational AI assistant that understands your entire operation. Ask questions in plain English: \"How many operatives are working today?\", \"Show me operatives with expired CSCS cards\", \"What sites are active right now?\", \"Any open NCRs this week?\" Rex has 12+ integrated tools and can search workers, check compliance, view timesheets, and generate summaries — all through natural conversation. Previous conversations are saved for context.",
    capabilities: [
      "Natural language queries about your workforce",
      "12+ integrated operational tools",
      "Suggested questions for quick access",
      "Thread-based conversations with memory",
      "Compliance checks and status queries",
      "Available worker searches by trade and location",
    ],
  },
  {
    icon: IconZap,
    screenshot: "/screenshots/activity.png",
    title: "Activity Feed",
    headline: "Real-time log of everything that happens",
    description:
      "A real-time feed of every event across the system — operative actions, document submissions, offer responses, shift arrivals, NCRs, compliance changes, email sends, and more. Filter by event type: All, Telegram, Applications, Documents, Offers, Compliance, Email, Imports. Every action is timestamped and linked to the relevant record for full traceability.",
    capabilities: [
      "17+ event types tracked",
      "Filter by category (Documents, Offers, Compliance, etc.)",
      "Timestamped with linked records",
      "Email log for all outgoing communications",
      "Import history tracking",
    ],
  },
  {
    icon: IconStar,
    screenshot: "/screenshots/settings.png",
    title: "Settings & Admin",
    headline: "Configure everything in one place",
    description:
      "Organisation settings, staff user management, trade category configuration, site-to-staff assignments, email template editing, and integration setup. Invite new staff with role-based access (admin, staff, site manager, auditor). Each role controls what the user can see and do. Telegram chat ID capture for notification delivery. Email templates use a WYSIWYG editor with live preview.",
    capabilities: [
      "Organisation profile configuration",
      "Staff user management with role-based access",
      "4 roles: Admin, Staff, Site Manager, Auditor",
      "Custom trade category management",
      "Email template editor with live preview",
      "Telegram and notification settings",
    ],
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
            See every module. Know exactly what you&apos;re getting.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            No vague promises — here&apos;s the actual system. Every screen, every feature, every capability. Built for construction, designed for clarity.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      {modules.map((m, i) => {
        const Icon = m.icon;
        return (
          <Section key={m.title} dark={i % 2 === 0}>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-copper-400" />
                </div>
                <div>
                  <SectionLabel>{m.title}</SectionLabel>
                </div>
              </div>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Screenshot - takes 3 cols */}
                <div className="lg:col-span-3">
                  <div className="relative rounded-xl overflow-hidden border border-forest-700/50 shadow-2xl shadow-black/30">
                    <div className="bg-forest-800 px-4 py-2.5 flex items-center gap-2 border-b border-forest-700/50">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <div className="flex-1 ml-3">
                        <div className="bg-forest-900/50 rounded-md px-3 py-1 max-w-xs">
                          <span className="text-[0.6rem] text-white/30 font-mono">pangea.app/{m.title.toLowerCase().replace(/\s+/g, '-')}</span>
                        </div>
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.screenshot}
                      alt={`Pangea ${m.title}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Description - takes 2 cols */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl text-white mb-3">{m.headline}</h2>
                    <p className="text-sm text-white/60 leading-relaxed">{m.description}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                      Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {m.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-copper-400 flex-shrink-0" />
                          <span className="text-sm text-white/70">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Want to see it live?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            These screenshots show the real system. Book a 20-minute demo and we&apos;ll walk you through it with your own data.
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
