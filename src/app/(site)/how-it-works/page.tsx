import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import {
  IconSend,
  IconBot,
  IconCamera,
  IconUpload,
  IconHardHat,
  IconCheckCircle,
  IconBriefcase,
  IconMapPin,
  IconRefresh,
  IconUsers,
  IconShield,
  IconSearch,
  IconClock,
  IconBarChart,
  IconFileCheck,
  IconPound,
} from "@/components/icons";
import { WhatsAppChat } from "@/components/phone-mockup";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Pangea onboards construction workers via WhatsApp in 9 simple steps — from first message to site-ready, with AI cert verification and compliance automation.",
};

const stepIcons: Record<string, React.ReactNode> = {
  "01": <IconSend className="w-5 h-5 text-copper-400" />,
  "02": <IconBot className="w-5 h-5 text-copper-400" />,
  "03": <IconCamera className="w-5 h-5 text-copper-400" />,
  "04": <IconUpload className="w-5 h-5 text-copper-400" />,
  "05": <IconHardHat className="w-5 h-5 text-copper-400" />,
  "06": <IconCheckCircle className="w-5 h-5 text-copper-400" />,
  "07": <IconBriefcase className="w-5 h-5 text-copper-400" />,
  "08": <IconMapPin className="w-5 h-5 text-copper-400" />,
  "09": <IconRefresh className="w-5 h-5 text-copper-400" />,
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
    detail: "7-step conversational flow. Supports English, Polish, and Romanian. Takes 3-5 minutes.",
  },
  {
    step: "03",
    title: "Cert photo upload",
    description:
      "Workers photograph their CSCS card and right-to-work documents. AI reads the card type, colour, expiry date, and cardholder name.",
    detail: "Vision AI identifies card type and flags expired, wrong-type, or unreadable cards instantly.",
  },
  {
    step: "04",
    title: "Right-to-work check",
    description:
      "Workers upload their passport, visa, or share code. The system captures and stores the document for employer verification.",
    detail: "Government Right to Work checking service integration. Secure storage with access controls.",
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
      "Pangea monitors cert expiry dates and sends automatic reminders at 90, 30, and 7 days. Non-compliant workers are blocked from new allocations.",
    detail: "Chase sequences via WhatsApp. Staff alerts for critical issues. Full audit trail.",
  },
];

const certPhotoMessages = [
  {
    type: "incoming" as const,
    text: "Nice one, that's your details all saved. Now I need to verify your CSCS card. Can you send me a photo of the front of the card?",
    time: "14:32",
  },
  {
    type: "outgoing" as const,
    text: "[Photo: CSCS Green Labourer card]",
    time: "14:33",
  },
  {
    type: "outgoing" as const,
    text: "there you go mate, took it just now",
    time: "14:33",
  },
  {
    type: "incoming" as const,
    text: "Got it, thanks. I can see that's a Green CSCS Labourer card for Darren Mitchell, expiry 04/2028. Everything checks out — card is valid and in date.",
    time: "14:33",
  },
  {
    type: "incoming" as const,
    text: "Next up I need your right-to-work document. Can you send a photo of your passport or share your Home Office share code?",
    time: "14:34",
  },
];

const inductionMessages = [
  {
    type: "incoming" as const,
    text: "Right, last step — quick H&S induction for the Meridian Tower project. 5 questions, takes about 2 minutes. Ready?",
    time: "15:01",
  },
  {
    type: "outgoing" as const,
    text: "yeah go on",
    time: "15:01",
  },
  {
    type: "incoming" as const,
    text: "Question 1: You notice a colleague working at height without clipping on their harness lanyard. What do you do?\n\nA) Carry on, it's not your problem\nB) Stop them and remind them to clip on\nC) Report it at the end of the shift\nD) Shout up to warn them",
    time: "15:02",
  },
  {
    type: "outgoing" as const,
    text: "B",
    time: "15:02",
  },
  {
    type: "incoming" as const,
    text: "Correct. You should always intervene immediately if someone is at risk. Never leave it until later — a fall from height can be fatal in seconds. Moving on to question 2...",
    time: "15:02",
  },
];

const employerFeatures = [
  {
    icon: <IconUsers className="w-6 h-6 text-copper-400" />,
    title: "Worker Pipeline",
    description: "See every worker's status at a glance: Applied, Verifying, Inducted, Available, Working. Filter by trade, location, or compliance score. Bulk actions for managing large pools.",
  },
  {
    icon: <IconShield className="w-6 h-6 text-copper-400" />,
    title: "Compliance Overview",
    description: "Real-time dashboard showing expiring certs, non-compliant workers, and audit risk across all sites. Automatic alerts at 90, 30, and 7 days before expiry.",
  },
  {
    icon: <IconSearch className="w-6 h-6 text-copper-400" />,
    title: "Labour Requests",
    description: "Create requests by trade, site, and duration. Search your pool, broadcast offers via WhatsApp, and fill positions fast. First-to-accept allocation system.",
  },
  {
    icon: <IconClock className="w-6 h-6 text-copper-400" />,
    title: "Shift Tracking",
    description: "Log arrivals, breaks, and departures. Working Time Directive compliance checks built in. Automatic overtime calculation and break enforcement alerts.",
  },
  {
    icon: <IconPound className="w-6 h-6 text-copper-400" />,
    title: "Weekly Timesheets",
    description: "Auto-generated timesheets with gross pay calculation and professional PDF export for payroll. CIS deduction support for subcontractors.",
  },
  {
    icon: <IconBarChart className="w-6 h-6 text-copper-400" />,
    title: "Reports & Export",
    description: "Compliance reports, CSCS distribution, and performance metrics. One-click CSV export for audits. Site-level and organisation-level views.",
  },
  {
    icon: <IconFileCheck className="w-6 h-6 text-copper-400" />,
    title: "Document Vault",
    description: "Centralised storage for all worker documents — CSCS cards, passports, right-to-work evidence. Version history and expiry tracking on every file.",
  },
  {
    icon: <IconMapPin className="w-6 h-6 text-copper-400" />,
    title: "Multi-site Management",
    description: "Manage workers across multiple sites from a single dashboard. Site-specific inductions, rosters, and compliance requirements.",
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
          {workerJourney.map((step, index) => (
            <div key={step.step}>
              <div className="bg-forest-900 rounded-xl p-6 sm:p-8 border border-forest-700/50 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center">
                  {stepIcons[step.step]}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-copper-400/60">
                      Step {step.step}
                    </span>
                    <h3 className="font-serif text-xl text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-white/40 italic">{step.detail}</p>
                </div>
              </div>

              {/* WhatsApp mockup after step 3 (cert photo) */}
              {step.step === "03" && (
                <div className="mt-8 mb-4 flex flex-col items-center">
                  <p className="text-sm text-white/40 mb-6 text-center max-w-md">
                    Workers snap and send their cert photo directly in WhatsApp. AI verifies it in seconds.
                  </p>
                  <WhatsAppChat
                    contactName="Amber - Pangea"
                    contactStatus="online"
                    messages={certPhotoMessages}
                    variant="iphone"
                  />
                </div>
              )}

              {/* WhatsApp mockup after step 5 (H&S induction) */}
              {step.step === "05" && (
                <div className="mt-8 mb-4 flex flex-col items-center">
                  <p className="text-sm text-white/40 mb-6 text-center max-w-md">
                    The induction quiz runs entirely inside WhatsApp. No links, no apps, no login screens.
                  </p>
                  <WhatsAppChat
                    contactName="Amber - Pangea"
                    contactStatus="online"
                    messages={inductionMessages}
                    variant="galaxy"
                  />
                </div>
              )}
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {employerFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50"
            >
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                {f.icon}
              </div>
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
