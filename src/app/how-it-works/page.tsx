import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Pangaea onboards construction workers via WhatsApp in 9 simple steps — from first message to site-ready, with AI cert verification and compliance automation.",
};

const workerJourney = [
  {
    step: "01",
    title: "Worker is invited",
    description:
      "Share a link, QR code, or send a WhatsApp message directly. Workers don't need to download anything — they just reply.",
    detail: "Works via WhatsApp (UK) or SMS (US). Workers can also self-register through a public intake form.",
  },
  {
    step: "02",
    title: "AI qualification",
    description:
      "Amber, our AI onboarding bot, collects essential information: name, trade, experience, location, availability, and right-to-work status.",
    detail: "7-step conversational flow. Supports English, Polish, and Romanian. Takes 3–5 minutes.",
  },
  {
    step: "03",
    title: "Cert photo upload",
    description:
      "Workers snap a photo of their CSCS card (UK) or OSHA cert (US). AI reads the card type, colour, expiry date, and cardholder name.",
    detail: "Vision AI identifies card type and flags expired, wrong-type, or unreadable cards instantly.",
  },
  {
    step: "04",
    title: "Right-to-work check",
    description:
      "Workers upload their passport, visa, or share code. The system captures and stores the document for employer verification.",
    detail: "I-9/E-Verify guidance for US workers. Secure storage with access controls.",
  },
  {
    step: "05",
    title: "H&S induction",
    description:
      "Workers complete a health & safety induction — video and quiz — directly in the WhatsApp conversation. Completion is logged automatically.",
    detail: "Custom induction content per site. Pass/fail tracking. Completion certificates generated.",
  },
  {
    step: "06",
    title: "Marked site-ready",
    description:
      "Once all documents are verified and induction is complete, the worker is automatically marked as available in the employer dashboard.",
    detail: "Status moves from 'Verifying' to 'Available'. Compliance score calculated across 24 data points.",
  },
  {
    step: "07",
    title: "Job offer sent",
    description:
      "When a labour request comes in, matching workers receive an offer via WhatsApp. They accept or decline with a simple reply.",
    detail: "Broadcast to top 3 candidates. 30-minute acceptance window. First YES wins the allocation.",
  },
  {
    step: "08",
    title: "Allocated to site",
    description:
      "Accepted workers are added to the site roster. They receive confirmation with site details, start date, and reporting instructions.",
    detail: "Automatic allocation lifecycle tracking. Site managers notified via Telegram.",
  },
  {
    step: "09",
    title: "Ongoing compliance",
    description:
      "Pangaea monitors cert expiry dates and sends automatic reminders at 90, 30, and 7 days. Non-compliant workers are blocked from new allocations.",
    detail: "Chase sequences via WhatsApp. Staff alerts for critical issues. Full audit trail.",
  },
];

const employerFeatures = [
  {
    title: "Worker Pipeline",
    description: "See every worker's status at a glance: Applied → Verifying → Inducted → Available → Working.",
  },
  {
    title: "Compliance Overview",
    description: "Real-time dashboard showing expiring certs, non-compliant workers, and audit risk across all sites.",
  },
  {
    title: "Labour Requests",
    description: "Create requests by trade, site, and duration. Search your pool, broadcast offers, and fill positions fast.",
  },
  {
    title: "Shift Tracking",
    description: "Log arrivals, breaks, and departures. Working Time Directive compliance checks built in.",
  },
  {
    title: "Weekly Timesheets",
    description: "Auto-generated timesheets with gross pay calculation and professional PDF export for payroll.",
  },
  {
    title: "Reports & Export",
    description: "Compliance reports, CSCS distribution, and performance metrics. One-click CSV export for audits.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>How It Works</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            Nine steps from stranger to site-ready
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Everything happens on WhatsApp. Workers don&apos;t download apps, create accounts, or fill in forms. They just reply to messages.
          </p>
        </div>
      </section>

      {/* Worker Journey */}
      <Section dark>
        <SectionLabel>The Worker Journey</SectionLabel>
        <SectionTitle>WhatsApp does the heavy lifting</SectionTitle>
        <div className="mt-12 space-y-6">
          {workerJourney.map((step) => (
            <div
              key={step.step}
              className="bg-forest-900 rounded-xl p-6 sm:p-8 border border-forest-700/50 flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center">
                <span className="font-mono text-sm font-semibold text-copper-400">
                  {step.step}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-white/40 italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Employer Dashboard */}
      <Section>
        <SectionLabel>For Employers</SectionLabel>
        <SectionTitle>One dashboard to manage it all</SectionTitle>
        <p className="text-lg text-white/60 max-w-2xl mb-12">
          While workers onboard via WhatsApp, employers manage everything from a clean, purpose-built web dashboard.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employerFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50"
            >
              <h3 className="font-serif text-lg text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">See it live</SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            We&apos;ll walk you through the full worker journey and employer dashboard in a 20-minute demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-block bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Book a Demo
            </Link>
            <Link
              href="/features"
              className="inline-block border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
