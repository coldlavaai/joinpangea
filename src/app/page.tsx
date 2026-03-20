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
} from "@/components/icons";

const stats = [
  { value: "885K", label: "UK Construction SMEs", sub: "15.8% of all UK businesses" },
  { value: "3.97M", label: "US Construction Firms", sub: "8.3M total workforce" },
  { value: "42%", label: "Zero HR Technology", sub: "Paper-based onboarding is the norm" },
  { value: "98%", label: "SMS Open Rate", sub: "vs 20% for email" },
  { value: "240K+", label: "UK Workers Needed", sub: "by 2029" },
  { value: "60%+", label: "Onboarding Time Saved", sub: "With Pangaea automation" },
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
    description: "Workers snap a photo of their CSCS card or OSHA cert. AI reads the card type, expiry date, and cardholder — flagging issues before they reach site.",
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
    description: "Automatic expiry tracking, WhatsApp chase sequences, and blocking rules. One missed cert can shut a site down — Pangaea makes sure it never happens.",
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
        Hi there! I&apos;m Amber from Pangaea.
        <br /><br />
        Thanks for getting in touch. I&apos;ve got a few quick questions to check you&apos;re a good fit.
        <br /><br />
        First up — do you have a valid CSCS card?
      </>
    ),
    time: "09:15",
  },
  { type: "outgoing" as const, text: "Yeah I've got a blue skilled worker card", time: "09:16" },
  {
    type: "incoming" as const,
    text: (
      <>
        Blue skilled worker — great, that covers most sites.
        <br /><br />
        Do you have the right to work in the UK?
      </>
    ),
    time: "09:16",
  },
  { type: "outgoing" as const, text: "Yes born here", time: "09:17" },
  {
    type: "incoming" as const,
    text: (
      <>
        Perfect. And what trade are you in? For example — labourer, bricklayer, carpenter, groundworker?
      </>
    ),
    time: "09:17",
  },
  { type: "outgoing" as const, text: "Groundworker, 6 years experience", time: "09:18" },
  {
    type: "incoming" as const,
    text: (
      <>
        6 years as a groundworker — solid.
        <br /><br />
        You&apos;re qualified. I&apos;m creating your profile now and you&apos;ll receive a secure link to upload your documents.
        <br /><br />
        Welcome aboard.
      </>
    ),
    time: "09:18",
  },
];

// Shift offer flow
const shiftOfferMessages = [
  {
    type: "incoming" as const,
    text: (
      <>
        Hi Marcus,
        <br /><br />
        Shift available for you:
        <br /><br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> Riverside Plaza, SE1 7PB</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCalendar className="w-3 h-3 text-white/60" /></span> Tomorrow, 07:00 start</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconPound className="w-3 h-3 text-white/60" /></span> £185/day</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconHardHat className="w-3 h-3 text-white/60" /></span> Groundworker</span>
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
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> Riverside Plaza, SE1 7PB</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCalendar className="w-3 h-3 text-white/60" /></span> Wed 12th Mar, 07:00</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconUsers className="w-3 h-3 text-white/60" /></span> Report to: Dan (Site Manager)</span>
        <br />
        Complete your site induction:
        <br />
        <span className="text-[#53bdeb] underline">pangaea.app/induction/7823</span>
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
    text: "Worker PG-0394 Jake Turner no show this morning at Canary Wharf",
    time: "07:45",
  },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconAlertTriangle className="w-3 h-3 text-amber-400" /></span> <strong className="text-white">NCR #182 Logged</strong></span>
        <br />
        ID: PG-0394 — Jake Turner
        <br />
        Site: Canary Wharf
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
        1. Sarah Chen (PG-0281)
        <br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconStar className="w-3 h-3 text-copper-400" /></span> 4.9</span> · <span className="flex items-center gap-1 inline-flex"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> 1.5mi</span> · £165
        <br /><br />
        2. Tom Harris (PG-0445)
        <br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconStar className="w-3 h-3 text-copper-400" /></span> 4.7</span> · <span className="flex items-center gap-1 inline-flex"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> 2mi</span> · £170
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
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span> <strong className="text-white">Sarah Chen confirmed</strong></span>
        <br />
        ID: PG-0281
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
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-copper-400 mb-6">
                Construction Workforce Management
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-8">
                From application{" "}
                <span className="text-copper-400">to site-ready</span>
                <br />
                in hours, not weeks
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                We automate everything between finding a worker and getting them on site — cert verified, right-to-work checked, H&S signed off — all on their phone, no paperwork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/demo"
                  className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/how-it-works"
                  className="border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Hero phone mockup — Amber qualification */}
            <div className="hidden lg:flex justify-center">
              <WhatsAppChat
                contactName="Amber — Pangaea"
                contactStatus="online"
                messages={amberQualificationMessages}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-forest-800 border-y border-forest-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl text-copper-400 mb-1">
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-white/80 mb-1">
                  {s.label}
                </div>
                <div className="text-xs text-white/40">{s.sub}</div>
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
            Still chasing paperwork?
          </SectionTitle>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            Construction companies with 10–200 workers are stuck between spreadsheets and enterprise software that costs a fortune. Admin teams spend 15–30 hours a week chasing certs, checking right-to-work, and coordinating by WhatsApp group. One missed CSCS expiry costs £875 minimum. One compliance gap can shut your site down.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconPound className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">£113K–£273K</div>
              <div className="text-sm text-white/60">Annual waste for a 50-worker UK firm without automation</div>
            </div>
            <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconClock className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">15–30 hrs</div>
              <div className="text-sm text-white/60">Per week spent on admin, chasing docs, and manual onboarding</div>
            </div>
            <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconUsers className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-serif text-2xl text-copper-400 mb-2">1 in 3</div>
              <div className="text-sm text-white/60">Workers quit in their first 90 days due to poor onboarding</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section dark>
        <SectionLabel>What Pangaea Does</SectionLabel>
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
                className="bg-forest-900 rounded-xl p-8 border border-forest-700/50 hover:border-copper-500/30 transition-colors group"
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
          Real WhatsApp conversations powered by Pangaea. Workers onboard, accept shifts, and resolve issues — all without leaving their messaging app.
        </SectionDescription>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
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
                contactName="Amber — Pangaea"
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
                contactName="Pangaea"
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
                contactName="Pangaea Site Bot"
                contactStatus="online"
                messages={ncrMessages}
              />
            </div>
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

      {/* ROI */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The ROI</SectionLabel>
          <SectionTitle className="text-center">
            Pays for itself in month one
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            For a 50-worker firm, Pangaea costs less than a single compliance fine. The average customer saves 12–46x their investment in year one.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-forest-800 rounded-xl p-8 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconTrendingUp className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                UK
              </div>
              <div className="font-serif text-4xl text-white mb-2">12–46x</div>
              <div className="text-sm text-white/60 mb-6">Return on investment</div>
              <div className="border-t border-forest-700/50 pt-4 space-y-3 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Annual waste without Pangaea</span>
                  <span className="text-white font-mono">£113K–£273K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Pangaea annual cost</span>
                  <span className="text-copper-400 font-mono">£5,964–£9,564</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-forest-700/30">
                  <span className="text-white/50">Breakeven</span>
                  <span className="text-copper-400 font-mono">Month 1</span>
                </div>
              </div>
            </div>
            <div className="bg-forest-800 rounded-xl p-8 border border-forest-700/50">
              <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                <IconTrendingUp className="w-5 h-5 text-copper-400" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                US
              </div>
              <div className="font-serif text-4xl text-white mb-2">14–64x</div>
              <div className="text-sm text-white/60 mb-6">Return on investment</div>
              <div className="border-t border-forest-700/50 pt-4 space-y-3 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Annual waste without Pangaea</span>
                  <span className="text-white font-mono">$172K–$460K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Pangaea annual cost</span>
                  <span className="text-copper-400 font-mono">$7,164–$11,964</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-forest-700/30">
                  <span className="text-white/50">Breakeven</span>
                  <span className="text-copper-400 font-mono">Month 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section dark>
        <SectionLabel>The Platform</SectionLabel>
        <SectionTitle>More than just onboarding</SectionTitle>
        <SectionDescription>
          Pangaea covers the full lifecycle of construction workforce management — from first contact through to payroll.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: IconMessage, title: "WhatsApp & SMS", desc: "Two-way messaging with workers. Template-based compliance messages. Full audit trail." },
            { icon: IconFileCheck, title: "Document Management", desc: "Upload, verify, and track every cert, ID, and right-to-work document. Vision AI validation." },
            { icon: IconUsers, title: "Workforce Pipeline", desc: "Track every worker from application to site-ready. 8-stage status progression with compliance gates." },
            { icon: IconClipboard, title: "Labour Requests", desc: "Create requests by trade, site, and duration. Smart pool search and broadcast offers." },
            { icon: IconClock, title: "Shift & Timesheet", desc: "Log shifts, track WTD compliance, auto-generate timesheets with PDF export." },
            { icon: IconShield, title: "Compliance Engine", desc: "Expiry tracking, auto-reminders, blocking rules, and one-click audit export." },
            { icon: IconBot, title: "AI Assistants", desc: "Rex for operations queries. Amber for worker qualification. Both powered by Claude AI." },
            { icon: IconBarChart, title: "Reports & Analytics", desc: "Compliance dashboards, CSCS distribution, RAP scoring, and exportable reports." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-forest-900 rounded-xl p-6 border border-forest-700/50">
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

      {/* Testimonials */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Trusted by Construction</SectionLabel>
          <SectionTitle className="text-center">
            Built with the industry, for the industry
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12">
            Pangaea was developed alongside real construction labour providers managing hundreds of workers across multiple sites.
          </p>
          <div className="bg-forest-800 rounded-xl p-12 border border-forest-700/50">
            <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-6">
              <IconHardHat className="w-6 h-6 text-copper-400" />
            </div>
            <blockquote className="font-serif text-xl text-white/80 italic leading-relaxed mb-6">
              &ldquo;We were spending two full days a week just chasing CSCS cards and right-to-work documents. Now it happens automatically on WhatsApp. The workers actually respond.&rdquo;
            </blockquote>
            <div className="text-sm text-white/50">
              — Operations Manager, UK Labour Provider
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
            Ready to stop chasing paperwork?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a 20-minute demo and see how Pangaea can transform your workforce operations. No commitment, no hard sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
            >
              Book a Demo
            </Link>
            <Link
              href="mailto:hello@coldlava.ai"
              className="border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-lg"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
