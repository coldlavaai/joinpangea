import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { WhatsAppChat } from "@/components/phone-mockup";
import {
  IconMessage,
  IconSearch,
  IconShield,
  IconClipboard,
  IconClock,
  IconBot,
  IconCheckCircle,
  IconTrendingUp,
  IconZap,
  IconUsers,
  IconFileCheck,
  IconBarChart,
  IconHardHat,
  IconMapPin,
  IconCalendar,
  IconPound,
  IconStar,
  IconCamera,
  IconTarget,
  IconGlobe,
  IconLock,
} from "@/components/icons";

const stats = [
  { value: "885K", label: "UK Construction SMEs", sub: "15.8% of all UK businesses" },
  { value: "£875+", label: "Minimum HSE Fine", sub: "Per incident, 96% conviction rate" },
  { value: "15–20%", label: "Agency Markup", sub: "Per worker per hour, ongoing" },
  { value: "88%", label: "Still Partly Paper-Based", sub: "RICS Digitalisation Report, 2024" },
  { value: "£1,500", label: "Lost Per Employee Per Year", sub: "Re-flow / YouGov UK survey, 2019" },
  { value: "60%+", label: "Onboarding Time Saved", sub: "With Pangea automation" },
];

const features = [
  {
    title: "WhatsApp Onboarding",
    description: "Workers onboard via WhatsApp or SMS. No apps to download, no portals to navigate. Collect certs, right-to-work, and H&S sign-off in minutes — not days.",
    icon: IconMessage,
    details: [
      "7-step AI qualification flow",
      "Multi-language (EN, PL, RO)",
      "Secure doc upload via messaging",
      "QR code & link invitations",
    ],
  },
  {
    title: "AI Cert Verification",
    description: "Workers photograph their CSCS card and right-to-work documents. AI reads the card type, expiry date, and cardholder — flagging issues before they reach site.",
    icon: IconSearch,
    details: [
      "CSCS colour & type detection",
      "Automatic expiry extraction",
      "Right-to-work validation",
      "Manual review queue for edge cases",
    ],
  },
  {
    title: "Compliance Automation",
    description: "Automatic expiry tracking, WhatsApp chase sequences, and blocking rules. One missed cert can shut a site down — Pangea makes sure it never happens.",
    icon: IconShield,
    details: [
      "90/30/7-day expiry alerts",
      "Auto-block non-compliant workers",
      "One-click audit export (CSV)",
      "Staff alerts for critical issues",
    ],
  },
  {
    title: "Labour Allocation",
    description: "Match workers to requests by trade, experience, location, and availability. Broadcast offers to top candidates and fill positions in hours.",
    icon: IconClipboard,
    details: [
      "Pool search & smart matching",
      "Broadcast to top 3 candidates",
      "First-to-accept wins allocation",
      "Multi-site headcount tracking",
    ],
  },
  {
    title: "Shifts & Timesheets",
    description: "Track arrivals, breaks, and departures. Auto-generate weekly timesheets with WTD compliance checks and professional PDF export for payroll.",
    icon: IconClock,
    details: [
      "Scheduled vs actual tracking",
      "WTD compliance flags",
      "Gross pay calculation",
      "PDF export for payroll",
    ],
  },
  {
    title: "AI Assistant",
    description: "Rex, your AI operations manager. Search your workforce, create requests, check compliance — all through natural conversation in the dashboard.",
    icon: IconBot,
    details: [
      "Natural language queries",
      "12+ integrated tools",
      "Thread-based context",
      "Instant compliance checks",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Worker receives a WhatsApp message",
    description:
      "Invite workers via link, QR code, or direct message. Amber, our AI bot, qualifies them in minutes — collecting trade, experience, certs, and availability through natural conversation.",
    icon: IconMessage,
  },
  {
    number: "02",
    title: "AI verifies their documents",
    description:
      "Workers photograph their CSCS card, right-to-work docs, and ID. Vision AI reads and validates instantly. H&S induction completed on their phone — video and quiz, logged automatically.",
    icon: IconCamera,
  },
  {
    number: "03",
    title: "You manage everything from one dashboard",
    description:
      "See your entire workforce pipeline: Applied, Verifying, Inducted, Available, Working. Allocate workers to sites, track compliance, generate timesheets, and export reports — all in one place.",
    icon: IconBarChart,
  },
];

// WhatsApp conversation data — Amber qualification flow
const amberQualificationMessages = [
  {
    type: "incoming" as const,
    text: (
      <>
        Hello, I&apos;m Amber from Pangea.
        <br /><br />
        Thank you for getting in touch. I have a few questions to check your suitability for the role.
        <br /><br />
        First — do you hold a valid CSCS card?
      </>
    ),
    time: "09:15",
  },
  { type: "outgoing" as const, text: "Yes, I have a blue skilled worker card", time: "09:16" },
  {
    type: "incoming" as const,
    text: (
      <>
        Blue skilled worker — that covers most sites.
        <br /><br />
        What is your trade, and how many years of experience do you have?
      </>
    ),
    time: "09:16",
  },
  { type: "outgoing" as const, text: "Groundworker, 6 years", time: "09:17" },
  {
    type: "incoming" as const,
    text: (
      <>
        Groundworker, 6 years — noted.
        <br /><br />
        Do you have the right to work in the UK?
      </>
    ),
    time: "09:17",
  },
  { type: "outgoing" as const, text: "Yes, British citizen", time: "09:18" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Pre-qualification complete</strong></span>
        <br />
        CSCS, trade, and right to work confirmed.
        <br /><br />
        Here&apos;s your secure document upload link:
        <br />
        <span className="text-[#53bdeb] underline">joinpangea.ai/apply/t8k3m2</span>
        <br /><br />
        Please upload your CSCS card, photo ID, and proof of right to work.
      </>
    ),
    time: "09:18",
  },
  { type: "outgoing" as const, text: "All three uploaded", time: "09:24" },
  {
    type: "incoming" as const,
    text: (
      <>
        Documents received. Checking now...
      </>
    ),
    time: "09:24",
  },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> CSCS card verified — Blue Skilled Worker, exp. 03/2028</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> Right to work confirmed</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> Photo ID accepted</span>
        <br />
        Your site induction is ready:
        <br />
        <span className="text-[#53bdeb] underline">joinpangea.ai/induction/4829</span>
      </>
    ),
    time: "09:25",
  },
  { type: "outgoing" as const, text: "Induction completed", time: "09:38" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Induction complete</strong></span>
        <br />
        You are now site-ready. We will be in touch when a suitable shift becomes available.
        <br /><br />
        Welcome to Pangea.
      </>
    ),
    time: "09:38",
  },
];

// Shift offer flow
const shiftOfferMessages = [
  {
    type: "incoming" as const,
    text: (
      <>
        Hi Bogdan,
        <br /><br />
        Shift available for you:
        <br /><br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> Birmingham Curzon Gateway, B4 7LR</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCalendar className="w-3 h-3 text-white/60" /></span> Monday 24 Mar, 07:30 start</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconPound className="w-3 h-3 text-white/60" /></span> £185/day</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconHardHat className="w-3 h-3 text-white/60" /></span> Steel Fixer</span>
        <br />
        Reply YES to accept
      </>
    ),
    time: "16:00",
  },
  { type: "outgoing" as const, text: "YES", time: "16:03" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Shift Confirmed</strong></span>
        <br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> Birmingham Curzon Gateway, B4 7LR</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCalendar className="w-3 h-3 text-white/60" /></span> Mon 24th Mar, 07:30</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconUsers className="w-3 h-3 text-white/60" /></span> Report to: Mike Hartley (Site Manager)</span>
        <br />
        Complete your site induction:
        <br />
        <span className="text-[#53bdeb] underline">pangea.app/induction/7823</span>
      </>
    ),
    time: "16:03",
  },
  { type: "outgoing" as const, text: "All done", time: "16:09" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Induction complete</strong></span>
        <br />
        You&apos;re all set for tomorrow. See you on site.
      </>
    ),
    time: "16:09",
  },
];

// Site manager NCR flow
const ncrMessages = [
  {
    type: "outgoing" as const,
    text: "Worker P43-0847 Marcus Osei no show this morning at Birmingham Jewellery Quarter",
    time: "07:45",
  },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconAlertTriangle className="w-3 h-3 text-amber-400" /></span> <strong className="text-white">NCR #182 Logged</strong></span>
        <br />
        ID: P43-0847 — Marcus Osei
        <br />
        Site: Birmingham Jewellery Quarter
        <br />
        Type: No-show
        <br />
        Status: Flagged on profile
        <br /><br />
        Need a replacement?
      </>
    ),
    time: "07:45",
  },
  { type: "outgoing" as const, text: "Yes asap please", time: "07:46" },
  {
    type: "incoming" as const,
    text: (
      <>
        Searching labour pool...
        <br /><br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconSearch className="w-3 h-3 text-white/60" /></span> <strong className="text-white">Available Labourers:</strong></span>
        <br />
        1. Helen Kozlowski (P43-0012)
        <br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconStar className="w-3 h-3 text-copper-400" /></span> 4.9</span> · <span className="flex items-center gap-1 inline-flex"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> 1.5mi</span> · £142
        <br /><br />
        2. Graham Constantin (P43-0013)
        <br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconStar className="w-3 h-3 text-copper-400" /></span> 4.7</span> · <span className="flex items-center gap-1 inline-flex"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> 2mi</span> · £148
        <br /><br />
        Sending offers now...
      </>
    ),
    time: "07:47",
  },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Helen Kozlowski confirmed</strong></span>
        <br />
        ID: P43-0012
        <br />
        ETA: 08:15
      </>
    ),
    time: "07:49",
  },
];

function IconAlertTriangle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-forest-700)_0%,_transparent_60%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-copper-900)_0%,_transparent_50%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-mono text-sm sm:text-base font-semibold uppercase tracking-widest text-copper-400 mb-6">
                Construction & Recruitment Workforce Management
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
                Every system says it does{" "}
                <span className="text-copper-400">everything.</span>
                <br />
                None of them do.
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-4 leading-relaxed">
                From workforce visibility and compliance to messaging, onboarding and admin — fully automated, fully connected, and tailored to how you run your business.
              </p>
              <p className="text-lg text-copper-400/80 font-light tracking-wide mb-10">
                Complete visibility. Total control. Zero guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/compliance"
                  className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
                >
                  Get Your Free Compliance Score
                </Link>
                <Link
                  href="/demo"
                  className="border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Hero phone mockup — Amber qualification */}
            <div className="hidden lg:flex justify-center">
              <WhatsAppChat
                contactName="Amber — Pangea"
                contactStatus="online"
                messages={amberQualificationMessages}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative bg-gradient-to-r from-forest-800 via-forest-800/90 to-forest-800 border-y border-forest-700/20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-forest-800/30 backdrop-blur-sm rounded-xl p-5 border border-forest-700/15 hover:border-copper-500/20 hover:bg-forest-800/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_-5px_rgba(193,127,89,0.12)] text-center">
                <div className="font-serif text-3xl sm:text-4xl text-copper-400 mb-1">
                  {s.value}
                </div>
                <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white/80 mb-1">
                  {s.label}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The Problem</SectionLabel>
          <SectionTitle className="text-center">
            Broken systems are holding you back
          </SectionTitle>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            Construction businesses are being held back by broken systems. Companies and recruitment agencies managing 50+ workers are stuck between spreadsheets and expensive software — with little real-time worker visibility, constant admin, and compliance risks that are easy to miss. One expired CSCS card can cost £875. Multiple gaps can shut a site down. And with HMRC tightening CIS rules, the financial exposure is only getting worse.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)]">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconShield className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">£875+</div>
              <div className="text-sm text-white/60">Minimum HSE fine per incident. 96% conviction rate. £33M in fines last year.</div>
            </div>
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)]">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconPound className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">30–40%</div>
              <div className="text-sm text-white/60">Agency markup per worker per hour — an ongoing cost most companies accept as unavoidable</div>
            </div>
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)]">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconClock className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">15–30 hrs</div>
              <div className="text-sm text-white/60">Per week spent on admin, chasing docs, and manual onboarding. In recruitment, that&apos;s your resourcer AND admin team combined.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* See it in action — CTA */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>See the Platform</SectionLabel>
          <SectionTitle>See it for yourself</SectionTitle>
          <p className="text-lg text-white/60 leading-relaxed mb-10">
            Pangea is best experienced live. Book a 30-minute demo and we&apos;ll walk you through the platform — tailored to your business, your workforce, and the problems you&apos;re actually trying to solve.
          </p>
          <Link
            href="/demo"
            className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg inline-block"
          >
            Book a Demo
          </Link>
        </div>
      </Section>

      {/* Built for today */}
      <Section dark>
        <SectionLabel>Built for Today</SectionLabel>
        <SectionTitle>The operating system behind modern construction</SectionTitle>
        <SectionDescription>
          Pangea brings workforce management, recruitment and payroll into one seamless platform — built specifically for the realities of construction. From first contact to first payment, every stage is handled in one place. Onboarding, compliance checks, right to work, certifications and documentation are structured, automated and fully auditable. Powerful admin controls give complete visibility across projects, workers and agencies, while integrated messaging keeps everyone connected — from office to site — without the noise. For construction companies, recruiters and payroll providers, Pangea replaces fragmented systems with one intelligent platform — reducing risk, saving time and enabling you to scale with confidence.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: IconTarget,
              title: "Total Workforce Visibility & Control",
              desc: "See exactly who is on site, what they\u2019re qualified to do, and where they\u2019re working \u2014 in real time. Move labour between sites quickly, plan ahead, and stay in control of workforce demand before it becomes a problem.",
            },
            {
              icon: IconShield,
              title: "Built-In Compliance Control",
              desc: "Keep right to work, certifications and documentation fully up to date in one place. Automatically flag expired cards and ID, and verify workers directly against Government Right to Work \u2014 reducing risk and keeping every site compliant.",
            },
            {
              icon: IconZap,
              title: "One System. No Workarounds.",
              desc: "Replace spreadsheets, outdated or inherited CRMs, and disconnected tools with one structured system. Manage workforce, projects and communication without duplication, gaps or chasing information.",
            },
            {
              icon: IconGlobe,
              title: "Built Around Real Site Operations",
              desc: "Works across multiple sites, teams and ways of working \u2014 whether that\u2019s mobile, desktop, or existing communication tools. No disruption, no retraining \u2014 it fits around your operation.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)]">
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper-400" />
                </div>
                <h3 className="font-serif text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Who it's for */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Who It&apos;s For</SectionLabel>
          <SectionTitle>If this is how you&apos;re running your workforce, something needs to change</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="space-y-5">
              {[
                "Your business is growing, but onboarding can\u2019t keep up",
                "You\u2019ve had a compliance scare \u2014 expired CSCS, missed right to work",
                "Your team spends more time on admin than placing or managing workers",
                "You\u2019re constantly chasing documents that never come back",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {[
                "You\u2019re managing labour across multiple sites with no clear visibility",
                "Site teams need information but can\u2019t access it when they need it",
                "Your database is outdated, unreliable, and rarely used properly",
                "You know there\u2019s a better way \u2014 but existing systems are too complex or expensive",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-copper-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-white/60 text-sm mt-8">
            If even two of these sound familiar, you&apos;re not alone — and it&apos;s costing you time, money, and control.
          </p>
          <div className="mt-10 bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-copper-500/20 hover:border-copper-500/30 transition-all duration-300">
            <p className="text-lg text-white/80 leading-relaxed">
              <span className="text-copper-400 font-semibold">Built for labour-driven industries. Designed for control.</span> Pangea replaces generic systems with a platform built specifically for construction, recruitment and labour supply — where workforce, compliance and onboarding are critical from day one. No searching through spreadsheets. No relying on disconnected tools. Just structured, reliable information when you need it. Built for businesses managing 50+ workers who need control without the overhead.
            </p>
          </div>
        </div>
      </Section>

      {/* Top 3 pillars */}
      <Section dark>
        <SectionLabel>Why Pangea</SectionLabel>
        <SectionTitle>Three things no other system gives you</SectionTitle>
        <div className="grid sm:grid-cols-3 gap-8 mt-10 mb-16">
          <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-center group">
            <div className="w-14 h-14 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5 mx-auto group-hover:border-copper-500/40 transition-colors">
              <svg className="w-7 h-7 text-copper-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="12" y="20" width="24" height="20" rx="2" />
                <path d="M16 20V14a8 8 0 0116 0v6" />
                <circle cx="24" cy="31" r="3" />
                <path d="M24 34v3" />
                <path d="M8 28h4M36 28h4M8 36h4M36 36h4" />
              </svg>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-copper-400/60 mb-3">01</div>
            <h3 className="font-serif text-xl text-white mb-3">A Clean, Controlled Workforce Database</h3>
            <p className="text-sm text-white/50 leading-relaxed">Every worker verified, compliant, skills-graded and ready for site. No duplicate records. No outdated information. No guesswork — just a workforce you can rely on.</p>
          </div>
          <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-center group">
            <div className="w-14 h-14 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5 mx-auto group-hover:border-copper-500/40 transition-colors">
              <svg className="w-7 h-7 text-copper-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="10" />
                <circle cx="24" cy="24" r="4" />
                <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
                <path d="M13 13l3 3M32 32l3 3M13 35l3-3M32 16l3-3" />
              </svg>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-copper-400/60 mb-3">02</div>
            <h3 className="font-serif text-xl text-white mb-3">Real-Time Workforce Visibility</h3>
            <p className="text-sm text-white/50 leading-relaxed">Know who&apos;s working, where they are, and whether they&apos;re compliant — in real time. Linked to timesheets, payroll and communication, all in one place. No blind spots.</p>
          </div>
          <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-center group">
            <div className="w-14 h-14 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5 mx-auto group-hover:border-copper-500/40 transition-colors">
              <svg className="w-7 h-7 text-copper-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 8a16 16 0 0113.86 8" />
                <path d="M37.86 16A16 16 0 0130 40.78" />
                <path d="M30 40.78A16 16 0 0110.14 32" />
                <path d="M10.14 32A16 16 0 0124 8" />
                <polygon points="38,12 42,18 34,18" fill="currentColor" />
                <polygon points="28,42 34,40 30,34" fill="currentColor" />
                <polygon points="8,30 6,24 14,26" fill="currentColor" />
                <polygon points="22,6 20,12 26,10" fill="currentColor" />
              </svg>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-copper-400/60 mb-3">03</div>
            <h3 className="font-serif text-xl text-white mb-3">End-to-End Workforce Management in One System</h3>
            <p className="text-sm text-white/50 leading-relaxed">Advertise, resource, onboard, verify, manage timesheets and payroll — all connected in one place. No handovers, no gaps, no disconnected processes.</p>
          </div>
        </div>

        <SectionLabel>What Pangea Does</SectionLabel>
        <SectionTitle>Everything you need. Nothing you don&apos;t.</SectionTitle>
        <SectionDescription>
          Six core modules that cover the entire worker lifecycle — from first contact to final timesheet.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] group"
              >
                <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-copper-400" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-copper-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {f.description}
                </p>
                <ul className="space-y-2">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-white/50">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-copper-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors inline-flex items-center gap-2"
          >
            Explore all features
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* WhatsApp Flows */}
      <Section>
        <SectionLabel>Live Workflows</SectionLabel>
        <SectionTitle>See what your workers see</SectionTitle>
        <SectionDescription>
          Real WhatsApp conversations powered by Pangea. Workers onboard, accept shifts, and resolve issues — all without leaving their messaging app.
        </SectionDescription>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12 items-start">
          {/* Flow 1: Qualification */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                  <IconMessage className="w-4 h-4 text-copper-400" />
                </div>
                <h3 className="font-serif text-lg text-white">AI Qualification</h3>
              </div>
              <p className="text-sm text-white/50 mb-4">
                Amber qualifies new applicants through natural conversation. Trade, experience, CSCS, and right-to-work — checked in under 4 minutes.
              </p>
            </div>
            <div className="flex justify-center">
              <WhatsAppChat
                contactName="Amber — Pangea"
                contactStatus="online"
                messages={amberQualificationMessages}
              />
            </div>
          </div>

          {/* Flow 2: Shift Offer */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                  <IconClipboard className="w-4 h-4 text-copper-400" />
                </div>
                <h3 className="font-serif text-lg text-white">Shift Offer</h3>
              </div>
              <p className="text-sm text-white/50 mb-4">
                Workers receive shift offers with full details. One-word reply to confirm. Induction link sent automatically.
              </p>
            </div>
            <div className="flex justify-center">
              <WhatsAppChat
                contactName="Pangea"
                contactStatus="online"
                messages={shiftOfferMessages}
                variant="galaxy"
              />
            </div>
          </div>

          {/* Flow 3: NCR + Replacement */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                  <IconZap className="w-4 h-4 text-copper-400" />
                </div>
                <h3 className="font-serif text-lg text-white">Incident + Replacement</h3>
              </div>
              <p className="text-sm text-white/50 mb-4">
                Site manager reports a no-show. System logs the NCR, searches the pool, and sends a replacement — all in under 5 minutes.
              </p>
            </div>
            <div className="flex justify-center">
              <WhatsAppChat
                contactName="Pangea Site Bot"
                contactStatus="online"
                messages={ncrMessages}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Platform Lifecycle — Cyclical */}
      <Section dark>
        <SectionLabel>The Worker Lifecycle</SectionLabel>
        <SectionTitle>A continuous cycle. Not a one-off process.</SectionTitle>
        <SectionDescription>
          Your best operatives go around again. Build a trusted, compliant labour pool and stop paying agencies to find workers you already know.
        </SectionDescription>

        {/* Main flow — top row */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start justify-center gap-0 min-w-[900px] pt-8 pb-2">
            {[
              { label: "Advertise", sub: "Indeed, LinkedIn, Facebook", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><path d="M17 3l4 4-8 8H9v-4l8-8z" /></svg> },
              { label: "Source", sub: "Pool search, referrals", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" /></svg> },
              { label: "Onboard", sub: "WhatsApp qualification", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg> },
              { label: "Verify", sub: "CSCS, RTW, CIS, ID", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg> },
              { label: "Allocate", sub: "Offer, confirm, assign", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
              { label: "Track", sub: "Shifts, attendance, GPS", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></svg> },
              { label: "Pay", sub: "Timesheets, payroll", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> },
              { label: "Monitor", sub: "Expiry alerts, compliance", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
              { label: "Score", sub: "RAP, performance, grade", icon: <svg className="w-6 h-6 text-copper-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2 w-[90px]">
                  <div className="w-14 h-14 rounded-2xl bg-forest-800/60 backdrop-blur-sm border border-copper-500/20 flex items-center justify-center hover:border-copper-500/40 hover:bg-forest-800/80 hover:scale-110 transition-all duration-300 cursor-default">
                    {step.icon}
                  </div>
                  <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70">{step.label}</span>
                  <span className="text-[0.55rem] text-white/30 text-center leading-tight">{step.sub}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center mx-1 -mt-8">
                    <div className="w-8 h-px border-t border-dashed border-copper-500/30" />
                    <svg className="w-2.5 h-2.5 text-copper-500/40 -ml-0.5" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M4 1l6 5-6 5V1z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loop-back indicator */}
        <div className="flex justify-center mt-4 mb-2">
          <div className="bg-forest-800/40 backdrop-blur-sm border border-copper-500/15 rounded-xl px-6 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-copper-400 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6" />
              <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
            </svg>
            <span className="text-sm text-white/50">
              <span className="text-copper-400 font-semibold">Top-scored operatives loop back</span> — reuse your best workers without going back to agencies
            </span>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Three steps. Zero paperwork.</SectionTitle>
          <div className="space-y-12 mt-12">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.number} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper-400" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-copper-400/60 mb-1">Step {s.number}</div>
                    <h3 className="font-serif text-xl text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12">
            <Link
              href="/how-it-works"
              className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              See the full worker journey
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Cost savings */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Cost Saving</SectionLabel>
          <SectionTitle className="text-center">
            See what Pangea saves your business
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Every business is different. But the cost of doing nothing is always the same: wasted hours, compliance risk, and money leaving your business every week. Here&apos;s where it goes.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-left">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                <IconShield className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">Compliance fines</div>
              <div className="font-serif text-4xl sm:text-5xl text-white mb-3"><span className="animate-pulse-glow inline-block text-red-400/90">£875+</span></div>
              <p className="text-sm text-white/50 leading-relaxed">
                Per incident. HSE prosecutes with a 96% conviction rate. One expired CSCS card, one missed right-to-work check, one uninducted worker on site. Pangea tracks it all automatically.
              </p>
            </div>
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-left">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                <IconPound className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">Agency markup</div>
              <div className="font-serif text-4xl sm:text-5xl text-white mb-3"><span className="animate-pulse-glow inline-block text-amber-400/90">30&ndash;40%</span></div>
              <p className="text-sm text-white/50 leading-relaxed">
                Per worker, per hour, ongoing. Build your own compliant labour pool and reduce your dependency on agencies. The savings compound every single week.
              </p>
            </div>
            <div className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)] text-left">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                <IconClock className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">Admin hours</div>
              <div className="font-serif text-4xl sm:text-5xl text-white mb-3"><span className="animate-pulse-glow inline-block text-amber-400/90">15&ndash;30 hrs/wk</span></div>
              <p className="text-sm text-white/50 leading-relaxed">
                Chasing paperwork, checking certs, coordinating by WhatsApp group. In recruitment, Pangea replaces the work of your entire resourcer and admin team.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <IconTrendingUp className="w-5 h-5" />
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section dark>
        <SectionLabel>The Platform</SectionLabel>
        <SectionTitle>More than just onboarding</SectionTitle>
        <SectionDescription>
          Pangea covers the full lifecycle of construction workforce management — from first contact through to payroll.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: IconMessage, title: "WhatsApp & SMS", desc: "Two-way messaging with workers. Template-based compliance messages. Full audit trail." },
            { icon: IconFileCheck, title: "Document Management", desc: "Upload, verify, and track every cert, ID, and right-to-work document. Vision AI validation." },
            { icon: IconUsers, title: "Workforce Pipeline", desc: "Track every worker from application to site-ready. 8-stage status progression with compliance gates." },
            { icon: IconClipboard, title: "Labour Requests", desc: "Create requests by trade, site, and duration. Smart pool search and broadcast offers." },
            { icon: IconClock, title: "Shift & Timesheet", desc: "Log shifts, track WTD compliance, auto-generate timesheets with PDF export." },
            { icon: IconShield, title: "Compliance Engine", desc: "Expiry tracking, auto-reminders, blocking rules, and one-click audit export." },
            { icon: IconBot, title: "AI Assistants", desc: "Rex for operations queries. Amber for worker qualification. Both powered by purpose-built construction AI." },
            { icon: IconBarChart, title: "Reports & Analytics", desc: "Compliance dashboards, CSCS distribution, RAP scoring, and exportable reports." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(193,127,89,0.15)]">
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper-400" />
                </div>
                <h3 className="font-serif text-base text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Platform screenshots */}
      <Section>
        <SectionLabel>The Dashboard</SectionLabel>
        <SectionTitle>This is what your team sees every day</SectionTitle>
        <SectionDescription>
          Real screenshots from the Pangea platform. No mockups, no renders — this is the actual system your team will use.
        </SectionDescription>

        {/* Dashboard full-width */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden border border-forest-700/20 shadow-2xl shadow-black/40 hover:shadow-[0_0_60px_-10px_rgba(193,127,89,0.1)] transition-all duration-500">
            <div className="bg-forest-800/80 backdrop-blur-sm px-4 py-2.5 flex items-center gap-2 border-b border-forest-700/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 ml-3">
                <div className="bg-forest-900/50 rounded-md px-3 py-1 max-w-xs">
                  <span className="text-[0.6rem] text-white/30 font-mono">app.joinpangea.ai/dashboard</span>
                </div>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/dashboard.png" alt="Pangea Dashboard" className="w-full h-auto" />
          </div>
          <div className="mt-4 max-w-2xl">
            <h3 className="font-serif text-lg text-white mb-1">Operations Dashboard</h3>
            <p className="text-sm text-white/50">Compliance alerts, today&apos;s attendance, quick actions, and recent activity — everything your operations team needs at a glance.</p>
          </div>
        </div>

        {/* Feature screens grid — row 1 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/screenshots/operatives.png", title: "Workforce Pipeline", desc: "Every worker tracked by status, trade, compliance, and RAP score. Filter, search, and export across your entire pool." },
            { src: "/screenshots/feature-operative-profile.png", title: "Operative Profile", desc: "Full worker profile with pay rate, trade, contact details, documents, allocations, and compliance status in one view." },
            { src: "/screenshots/feature-ncr-detail.png", title: "Incident Management", desc: "Log safety breaches, no-shows, and conduct issues. Auto-block non-compliant workers. Track resolution with full audit trail." },
            { src: "/screenshots/feature-comms-thread.png", title: "WhatsApp Conversations", desc: "Two-way messaging with every operative. Full message history, delivery status, and inbound replies — all logged automatically." },
            { src: "/screenshots/assistant.png", title: "Rex AI Assistant", desc: "Ask Rex anything about your workforce in plain English. Search workers, check compliance, view timesheets — through natural conversation." },
            { src: "/screenshots/documents.png", title: "Document Verification", desc: "AI-powered cert checking with expiry tracking. Verify or reject with reasons. Auto-block non-compliant workers." },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-forest-700/20 shadow-xl shadow-black/20 hover:shadow-[0_0_40px_-8px_rgba(193,127,89,0.1)] hover:border-copper-500/15 transition-all duration-500">
                <div className="bg-forest-800/80 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-forest-700/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.title} className="w-full h-auto" loading="lazy" />
              </div>
              <div>
                <h3 className="font-serif text-base text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-forest-700/30 to-transparent" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/20">More screens</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-forest-700/30 to-transparent" />
        </div>

        {/* Feature screens grid — row 2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/screenshots/sites.png", title: "Site Management", desc: "All active sites with addresses, contacts, headcount, and compliance status. One view across every location you manage." },
            { src: "/screenshots/allocations.png", title: "Labour Allocations", desc: "See who is allocated where, with trade, dates, and status. Drag-and-drop scheduling across your entire workforce." },
            { src: "/screenshots/timesheets.png", title: "Timesheets & Payroll", desc: "Auto-generated weekly timesheets with scheduled vs actual hours, WTD flags, and gross pay. Export PDF for payroll in one click." },
            { src: "/screenshots/feature-shifts.png", title: "Shift Scheduling", desc: "Create and manage shifts by site, trade, and date. See coverage gaps at a glance. Workers receive offers automatically." },
            { src: "/screenshots/feature-allocation-detail.png", title: "Allocation Detail", desc: "Drill into any allocation to see worker details, shift history, compliance status, and communication timeline." },
            { src: "/screenshots/feature-audit-log.png", title: "Audit Trail", desc: "Every action logged. Document verifications, status changes, message sends, and compliance decisions — all timestamped and exportable." },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-forest-700/20 shadow-xl shadow-black/20 hover:shadow-[0_0_40px_-8px_rgba(193,127,89,0.1)] hover:border-copper-500/15 transition-all duration-500">
                <div className="bg-forest-800/80 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-forest-700/20">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.title} className="w-full h-auto" loading="lazy" />
              </div>
              <div>
                <h3 className="font-serif text-base text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/platform"
            className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors inline-flex items-center gap-2"
          >
            See all 15 platform screens
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Trusted by Construction</SectionLabel>
          <SectionTitle className="text-center">
            Built with the industry, for the industry
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12">
            Pangea was developed alongside real construction labour providers managing hundreds of workers across multiple sites.
          </p>
          <div className="relative bg-forest-800/40 backdrop-blur-md rounded-2xl p-14 border border-copper-500/15 shadow-[0_0_60px_-10px_rgba(193,127,89,0.1)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-copper-900)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
            {/* Decorative quote mark */}
            <svg className="absolute top-6 left-6 w-32 h-32 text-copper-500/[0.08] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
              <path d="M30 65c-8 0-14-3-18-9S6 44 6 36c0-10 3-18 9-24S28 2 38 2v14c-6 0-11 2-14 5s-5 8-5 13h11c4 0 7 1 9 4s3 6 3 10v7c0 4-1 7-3 10s-5 4-9 4zm46 0c-8 0-14-3-18-9S52 44 52 36c0-10 3-18 9-24S74 2 84 2v14c-6 0-11 2-14 5s-5 8-5 13h11c4 0 7 1 9 4s3 6 3 10v7c0 4-1 7-3 10s-5 4-9 4z" />
            </svg>
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <IconHardHat className="w-7 h-7 text-copper-400" />
              </div>
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white/80 italic leading-relaxed mb-8">
                &ldquo;We were spending two full days a week just chasing CSCS cards and right-to-work documents. Now it happens automatically on WhatsApp. The workers actually respond.&rdquo;
              </blockquote>
              <div className="text-base text-white/50">
                — Operations Manager, UK Labour Provider
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_70%)] opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Get AI into your business or get left behind
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Find out where your compliance gaps are costing you, or let us clean your workforce database for free. See the difference Pangea makes before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compliance"
              className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
            >
              Get Your Free Compliance Score
            </Link>
            <Link
              href="/demo"
              className="border border-copper-500/50 hover:border-copper-400 text-copper-400 hover:text-copper-300 font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
            >
              Clean Your Database Free
            </Link>
            <Link
              href="/demo"
              className="border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
