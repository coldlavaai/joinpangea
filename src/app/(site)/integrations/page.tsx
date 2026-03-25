import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconMessage,
  IconCalendar,
  IconBarChart,
  IconGlobe,
  IconMail,
  IconFileCheck,
  IconClock,
  IconCheckCircle,
  IconSend,
  IconUsers,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Pangea integrates with WhatsApp, Telegram, Microsoft Outlook, and more. See how everything connects.",
};

const activeIntegrations = [
  {
    name: "WhatsApp Business API",
    category: "Messaging",
    icon: IconMessage,
    description:
      "Two-way WhatsApp messaging with workers via Twilio. Template-based compliance messages, shift offers, document reminders, and AI-powered onboarding conversations. Full audit trail of every message.",
    features: [
      "Pre-approved message templates for compliance",
      "24-hour conversation window management",
      "Secure document upload links",
      "Automated re-engagement for dropped conversations",
    ],
  },
  {
    name: "Telegram Bot",
    category: "Messaging",
    icon: IconSend,
    description:
      "Dedicated Telegram bots for site managers and admin notifications. Report incidents, check arrivals, and receive critical alerts without accessing the dashboard.",
    features: [
      "Site manager command bot",
      "Admin notification bot for critical alerts",
      "Real-time shift and NCR notifications",
      "Webhook-based instant delivery",
    ],
  },
  {
    name: "Microsoft Outlook / 365",
    category: "Email",
    icon: IconMail,
    description:
      "Delegated OAuth integration with Microsoft 365. Send emails from your own business Outlook account directly through the Pangea dashboard. Tokens managed and auto-refreshed.",
    features: [
      "Send emails as your business domain",
      "OAuth 2.0 secure authentication",
      "Auto-refresh tokens",
      "Connect and disconnect from settings",
    ],
  },
  {
    name: "Twilio SMS",
    category: "Messaging",
    icon: IconMessage,
    description:
      "SMS-based onboarding and notifications for the US market. Same automation as WhatsApp, delivered via text message for workers who prefer or require SMS.",
    features: [
      "US market worker communication",
      "OSHA and I-9 compliance reminders",
      "Delivery status tracking",
      "Fallback when WhatsApp unavailable",
    ],
  },
];

const comingSoon = [
  {
    name: "Payroll Systems",
    icon: IconClock,
    description: "Direct timesheet export to Sage, Xero, QuickBooks, and other payroll platforms.",
  },
  {
    name: "Google Maps",
    icon: IconGlobe,
    description: "Distance-based worker matching, travel time estimates, and site location mapping.",
  },
  {
    name: "Indeed & LinkedIn",
    icon: IconUsers,
    description: "Post job adverts directly to job boards and track applications back into Pangea.",
  },
  {
    name: "Calendar Sync",
    icon: IconCalendar,
    description: "Two-way sync with Google Calendar and Outlook for shift scheduling.",
  },
  {
    name: "Donseed API",
    icon: IconFileCheck,
    description: "Live CSCS card validation against the official CITB database.",
  },
  {
    name: "Power BI & Reporting",
    icon: IconBarChart,
    description: "Push workforce analytics directly into Power BI or custom BI dashboards.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Integrations</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            Connected to the tools your business runs on
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Pangea integrates with the messaging platforms your workers use, the AI that powers intelligent automation, and the systems your back office relies on.
          </p>
        </div>
      </section>

      {/* Active integrations */}
      <Section dark>
        <SectionLabel>Live Integrations</SectionLabel>
        <SectionTitle>Built in and working today</SectionTitle>
        <SectionDescription>
          These integrations are active in every Pangea deployment. No additional setup or licensing required.
        </SectionDescription>

        <div className="space-y-6">
          {activeIntegrations.map((int) => {
            const Icon = int.icon;
            return (
              <div
                key={int.name}
                className="bg-forest-900 rounded-xl border border-forest-700/50 p-8 hover:border-copper-500/20 transition-colors"
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-copper-400" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-white">{int.name}</h3>
                        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-400/60">
                          {int.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {int.description}
                    </p>
                  </div>
                  <div className="bg-forest-800/50 rounded-lg p-6 border border-forest-700/30">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {int.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <IconCheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/65">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Coming soon */}
      <Section>
        <SectionLabel>Coming Soon</SectionLabel>
        <SectionTitle>On our roadmap</SectionTitle>
        <SectionDescription>
          These integrations are in development or planned. Want to prioritise one for your deployment? Let us know.
        </SectionDescription>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {comingSoon.map((int) => {
            const Icon = int.icon;
            return (
              <div
                key={int.name}
                className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[0.5rem] uppercase tracking-wider text-white/25 bg-forest-700/30 px-2 py-0.5 rounded">
                    Planned
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-copper-500/5 border border-copper-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper-400/50" />
                </div>
                <h3 className="font-serif text-base text-white/80 mb-2">{int.name}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{int.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* API */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Open API</SectionLabel>
          <SectionTitle className="text-center">
            Need a custom integration?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Pangea&apos;s Scale plan includes API access for custom integrations with your existing systems. Connect your payroll, project management, or ERP platform directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <IconCalendar className="w-5 h-5" />
              Discuss Your Requirements
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
