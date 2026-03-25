import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconMessage,
  IconCamera,
  IconShield,
  IconUsers,
  IconClock,
  IconBot,
  IconSend,
  IconBarChart,
  IconBriefcase,
  IconFileCheck,
  IconGlobe,
  IconUpload,
  IconTarget,
  IconHardHat,
  IconAlertTriangle,
  IconCheckCircle,
  IconMapPin,
  IconCalendar,
  IconSearch,
  IconLock,
  IconZap,
  IconRefresh,
  IconClipboard,
  IconPound,
  IconStar,
  IconPhone,
  IconTrendingUp,
} from "@/components/icons";
import { WhatsAppChat } from "@/components/phone-mockup";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Pangea's full feature set: WhatsApp onboarding, AI cert verification, compliance automation, labour allocation, timesheets, recruitment, and more.",
};

const modules = [
  {
    label: "Onboarding",
    title: "WhatsApp-Native Worker Onboarding",
    icon: "message",
    description:
      "Workers onboard entirely through WhatsApp or SMS. No app downloads, no web portals, no login credentials. Our AI bot -- Amber -- guides each worker through qualification, document collection, and H&S induction in a single conversation. The entire process takes under 15 minutes and works on any phone.",
    capabilities: [
      "7-step AI qualification flow via WhatsApp/SMS",
      "Multi-language support (English, Polish, Romanian, Portuguese)",
      "Secure document upload links via messaging",
      "QR code and link-based invitations for site posters and referrals",
      "H&S induction video + quiz delivered on mobile",
      "Automatic pipeline progression (Applied > Verifying > Inducted > Ready)",
      "Smart retry logic -- re-engages workers who drop off mid-flow",
      "Trade and skill auto-categorisation from free-text responses",
    ],
  },
  {
    label: "Verification",
    title: "AI-Powered Cert Verification",
    icon: "camera",
    description:
      "Workers photograph their CSCS card and right-to-work documents. AI reads the card type, colour, expiry date, and cardholder name — flagging issues instantly. Low-confidence results go to a manual review queue so nothing slips through the cracks.",
    capabilities: [
      "CSCS card type and colour detection (Green, Blue, Gold, Black, Red)",
      "Automatic expiry date extraction and validation",
      "Right-to-work document validation (passport, visa, share code)",
      "CIS verification and UTR number tracking",
      "Trade-specific qualification checks",
      "Manual review queue for low-confidence or edge-case results",
      "Side-by-side comparison of submitted photo vs. extracted data",
      "Duplicate detection -- flags if same card uploaded by different workers",
    ],
  },
  {
    label: "Compliance",
    title: "Automated Compliance Management",
    icon: "shield",
    description:
      "Never send a non-compliant worker to site. Pangea tracks every document expiry, sends automatic reminders via WhatsApp, and blocks workers from allocation when they fall out of compliance. Your compliance dashboard gives you a single view of risk across your entire workforce.",
    capabilities: [
      "Document expiry tracking with cascading alerts (90, 30, 7-day warnings)",
      "Automatic WhatsApp reminders sent directly to workers",
      "Staff alerts for critical compliance issues via WhatsApp and email",
      "Auto-block non-compliant workers from new allocations",
      "Compliance dashboard with colour-coded risk scoring",
      "One-click audit export (CSV) for HSE inspections",
      "Per-worker compliance timeline showing full document history",
      "Configurable document requirements by trade and site",
    ],
  },
  {
    label: "Allocation",
    title: "Smart Labour Allocation",
    icon: "users",
    description:
      "Create labour requests by site, trade, and duration. Search your verified workforce pool and broadcast offers to the best-matched workers via WhatsApp. First to accept wins -- positions filled in hours, not days. No more phone tag or spreadsheet juggling.",
    capabilities: [
      "Pool search by trade, experience, location, and availability",
      "Broadcast offers to top candidates (30-minute acceptance window)",
      "First-to-accept allocation logic -- eliminates back-and-forth",
      "Quick-assign from worker profiles for urgent fills",
      "Multi-site management with live headcount tracking",
      "Allocation lifecycle tracking (pending > confirmed > active > completed)",
      "Conflict detection -- prevents double-booking workers across sites",
      "Historical allocation data for forecasting future demand",
    ],
  },
  {
    label: "Timesheets",
    title: "Shifts & Timesheet Management",
    icon: "clock",
    description:
      "Track arrivals, breaks, and departures. Auto-generate weekly timesheets with Working Time Directive compliance checks built in. Export professional PDF invoices for payroll -- no more chasing paper timesheets or deciphering handwriting.",
    capabilities: [
      "Manual shift creation with scheduled vs. actual time tracking",
      "Break minute logging with automatic deduction",
      "Working Time Directive (WTD) compliance flags and alerts",
      "Weekly timesheet auto-generation grouped by worker and site",
      "Day rate or hourly rate calculation (with overtime multipliers)",
      "PDF export for payroll processing and client invoicing",
      "Supervisor approval workflow before finalisation",
      "Holiday and absence tracking integrated into shift calendar",
    ],
  },
  {
    label: "Recruitment",
    title: "Job Adverts & Recruitment",
    icon: "briefcase",
    description:
      "Create job adverts with AI-generated copy, publish across platforms, and track performance in real time. Link adverts directly to labour requests for seamless pipeline management from first impression to first day on site.",
    capabilities: [
      "AI-powered job advert copy generation from a brief description",
      "Multi-platform posting (Facebook, LinkedIn, Indeed, Gumtree)",
      "Impression, click, and application tracking per platform",
      "Link adverts to labour requests for end-to-end pipeline",
      "Template library for common construction and trade roles",
      "Draft > Active > Paused > Ended lifecycle management",
      "Cost-per-hire tracking across campaigns",
      "Automatic re-posting for hard-to-fill positions",
    ],
  },
  {
    label: "AI Assistant",
    title: "Rex -- Your AI Operations Manager",
    icon: "bot",
    description:
      "Rex is a conversational AI assistant that understands your entire workforce. Search for workers, check compliance status, create labour requests, and generate reports -- all through natural language. Rex gets smarter with every interaction and learns your preferences.",
    capabilities: [
      "Natural language workforce search (e.g. 'Find me 3 Gold CSCS bricklayers near Manchester')",
      "Compliance status queries across individuals or entire sites",
      "Labour request creation and management via conversation",
      "Document and allocation management through chat commands",
      "Thread-based conversations with full operational context",
      "12+ integrated tools for operations tasks",
      "Proactive suggestions based on upcoming expiries and gaps",
      "Exportable summaries and reports generated on demand",
    ],
  },
  {
    label: "Messaging",
    title: "WhatsApp & Telegram Integration",
    icon: "send",
    description:
      "Two-way WhatsApp messaging with workers and Telegram commands for site managers. Every message logged, every interaction tracked. Your workers are already on WhatsApp -- meet them where they are instead of forcing them onto another platform.",
    capabilities: [
      "WhatsApp Business API (UK) and Twilio SMS (US) integration",
      "Template-based messaging for compliance (doc reminders, offers, alerts)",
      "24-hour conversation window management with automatic re-engagement",
      "Telegram bot for site managers (arrivals, NCRs, requests)",
      "Admin notification bot for critical alerts and escalations",
      "Full message history and audit trail per worker",
      "Broadcast messaging to groups filtered by trade, site, or status",
      "Read receipt and delivery status tracking",
    ],
  },
  {
    label: "Reporting",
    title: "Compliance Reports & Analytics",
    icon: "barchart",
    description:
      "Real-time dashboards showing document expiry timelines, CSCS card distribution, WTD compliance, and non-conformance trends. Everything exportable for audits. Know exactly where your risk sits at any moment.",
    capabilities: [
      "Document expiry timeline (30/60/90-day view) with drill-down",
      "CSCS card distribution by type with trend analysis",
      "Working Time Directive compliance tracking across all sites",
      "Non-conformance report tracking (9 incident types, 3 severities)",
      "RAP scoring (Attitude, Reliability, Professionalism) per worker",
      "CSV export for all reports -- compatible with any payroll system",
      "Customisable date ranges and site-level filtering",
      "Scheduled report delivery via email (daily, weekly, monthly)",
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  message: <IconMessage className="w-6 h-6 text-copper-400" />,
  camera: <IconCamera className="w-6 h-6 text-copper-400" />,
  shield: <IconShield className="w-6 h-6 text-copper-400" />,
  users: <IconUsers className="w-6 h-6 text-copper-400" />,
  clock: <IconClock className="w-6 h-6 text-copper-400" />,
  briefcase: <IconBriefcase className="w-6 h-6 text-copper-400" />,
  bot: <IconBot className="w-6 h-6 text-copper-400" />,
  send: <IconSend className="w-6 h-6 text-copper-400" />,
  barchart: <IconBarChart className="w-6 h-6 text-copper-400" />,
};

const onboardingMessages = [
  {
    type: "incoming" as const,
    text: "Hi! I'm Amber, your onboarding assistant at Pangea. Let's get you set up -- it only takes a few minutes. What's your full name?",
    time: "09:01",
  },
  {
    type: "outgoing" as const,
    text: "Hi Amber. It's Tomasz Kowalski",
    time: "09:02",
  },
  {
    type: "incoming" as const,
    text: "Great to meet you, Tomasz! When is the earliest you could start on site?",
    time: "09:02",
  },
  {
    type: "outgoing" as const,
    text: "I could start next Monday",
    time: "09:03",
  },
  {
    type: "incoming" as const,
    text: "Perfect. Do you have your own PPE -- hard hat, hi-vis vest, and steel-toe boots?",
    time: "09:03",
  },
  {
    type: "outgoing" as const,
    text: "I have boots and hi-vis but I need a new hard hat",
    time: "09:04",
  },
  {
    type: "incoming" as const,
    text: "No problem -- we'll arrange one for your first day. Last question: do you have your own transport to get to site, or will you need info on public transport links?",
    time: "09:04",
  },
  {
    type: "outgoing" as const,
    text: "I drive so transport is sorted",
    time: "09:05",
  },
  {
    type: "incoming" as const,
    text: "Brilliant. Next step: I need a photo of your CSCS card (front and back). You can snap it now or use this secure upload link:",
    time: "09:05",
  },
];

const complianceMessages = [
  {
    type: "incoming" as const,
    text: "Hi Darren, this is an automated reminder from Pangea. Your CSCS Blue Skilled Worker card expires in 30 days (19 April 2026).",
    time: "08:00",
  },
  {
    type: "incoming" as const,
    text: "To avoid being blocked from site allocations, please renew your card and send us a photo of the new one. You can reply to this message with a photo or use the link below.",
    time: "08:00",
  },
  {
    type: "outgoing" as const,
    text: "Thanks for the heads up. I've already applied for renewal, just waiting for the new card to arrive",
    time: "08:45",
  },
  {
    type: "incoming" as const,
    text: "Good to hear. We will check back in 14 days. Once you receive the new card, photograph it and send it here — we will verify it automatically.",
    time: "08:45",
  },
  {
    type: "incoming" as const,
    text: "If it hasn't arrived by 12 April, your profile will be flagged and you won't be eligible for new site allocations until we have the updated card on file.",
    time: "08:46",
  },
  {
    type: "outgoing" as const,
    text: "Understood, I'll send it as soon as it lands",
    time: "08:50",
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
          <p className="text-lg text-white/60 max-w-2xl mb-6">
            Nine integrated modules covering the full worker lifecycle -- from first WhatsApp message to final timesheet. Designed for construction teams who need power without complexity.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-forest-800/40 backdrop-blur-sm border border-forest-700/20 rounded-full px-4 py-1.5 text-white/60 hover:border-copper-500/20 hover:text-white/80 transition-all duration-300">No training required</span>
            <span className="bg-forest-800/40 backdrop-blur-sm border border-forest-700/20 rounded-full px-4 py-1.5 text-white/60 hover:border-copper-500/20 hover:text-white/80 transition-all duration-300">Works on any phone</span>
            <span className="bg-forest-800/40 backdrop-blur-sm border border-forest-700/20 rounded-full px-4 py-1.5 text-white/60 hover:border-copper-500/20 hover:text-white/80 transition-all duration-300">Live in 2--3 weeks</span>
            <span className="bg-forest-800/40 backdrop-blur-sm border border-forest-700/20 rounded-full px-4 py-1.5 text-white/60 hover:border-copper-500/20 hover:text-white/80 transition-all duration-300">AI built in, not bolted on</span>
          </div>
        </div>
      </section>

      {/* Modules */}
      {modules.map((m, i) => {
        const showOnboardingChat = m.label === "Onboarding";
        const showComplianceChat = m.label === "Compliance";

        return (
          <Section key={m.label} dark={i % 2 === 0}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(193,127,89,0.15)]">
                    {iconMap[m.icon]}
                  </div>
                  <SectionLabel>{m.label}</SectionLabel>
                </div>
                <SectionTitle>{m.title}</SectionTitle>
                <p className="text-white/60 leading-relaxed text-lg">
                  {m.description}
                </p>
              </div>
              <div className="space-y-8">
                <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300">
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

                {showOnboardingChat && (
                  <div className="flex justify-center">
                    <WhatsAppChat
                      contactName="Amber (Pangea)"
                      contactStatus="online"
                      messages={onboardingMessages}
                    />
                  </div>
                )}

                {showComplianceChat && (
                  <div className="flex justify-center">
                    <WhatsAppChat
                      contactName="Pangea Compliance"
                      contactStatus="automated"
                      messages={complianceMessages}
                    />
                  </div>
                )}
              </div>
            </div>
          </Section>
        );
      })}

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
