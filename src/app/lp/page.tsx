import Link from "next/link";
import { ComplianceCalculator } from "@/components/compliance-calculator";
import { WhatsAppChat } from "@/components/phone-mockup";
import {
  IconMessage,
  IconShield,
  IconSearch,
  IconClipboard,
  IconClock,
  IconBot,
  IconCheckCircle,
  IconUsers,
  IconPound,
  IconHardHat,
  IconMapPin,
  IconCalendar,
  IconStar,
} from "@/components/icons";

// Condensed Amber qualification — the money shot
const amberMessages = [
  {
    type: "incoming" as const,
    text: (
      <>
        Hi! I&apos;m Amber from Pangea. A few quick questions to get you set up.
        <br /><br />
        Do you have a valid CSCS card?
      </>
    ),
    time: "09:15",
  },
  { type: "outgoing" as const, text: "Yeah blue skilled worker card", time: "09:16" },
  {
    type: "incoming" as const,
    text: "Great. What trade are you in?",
    time: "09:16",
  },
  { type: "outgoing" as const, text: "Groundworker, 6 years", time: "09:17" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span>
          <strong className="text-white">Qualified</strong>
        </span>
        <br />
        Profile created. Sending your secure doc upload link now.
        <br /><br />
        Welcome aboard.
      </>
    ),
    time: "09:17",
  },
];

// Shift offer — shows the allocation power
const offerMessages = [
  {
    type: "incoming" as const,
    text: (
      <>
        Hi Bogdan, shift available:
        <br /><br />
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconMapPin className="w-3 h-3 text-white/60" /></span> Birmingham Curzon Gateway, B4 7LR</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconCalendar className="w-3 h-3 text-white/60" /></span> Tomorrow 07:00</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3"><IconPound className="w-3 h-3 text-white/60" /></span> &pound;185/day</span>
        <br />
        Reply YES to accept
      </>
    ),
    time: "16:00",
  },
  { type: "outgoing" as const, text: "YES", time: "16:02" },
  {
    type: "incoming" as const,
    text: (
      <>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-3"><IconCheckCircle className="w-3 h-3 text-[#00a884]" /></span>
          <strong className="text-white">Confirmed</strong>
        </span>
        <br />
        See you on site. Induction link:
        <br />
        <span className="text-[#53bdeb] underline">pangea.app/induction/7823</span>
      </>
    ),
    time: "16:02",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-14 overflow-hidden">
        {/* Atmospheric gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,_var(--color-forest-700)_0%,_transparent_60%)] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,_var(--color-copper-900)_0%,_transparent_50%)] opacity-25" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-copper-500/10 border border-copper-500/20 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400">
                  Construction &amp; Recruitment Workforce Management
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-white leading-[1.08] mb-6">
                Onboard workers
                <br />
                <span className="text-copper-400">on WhatsApp.</span>
                <br />
                Not spreadsheets.
              </h1>

              <p className="text-lg text-white/55 max-w-lg mb-10 leading-relaxed">
                Cert verified. Right-to-work checked. H&S signed off. All on their phone, in under 15 minutes. No apps. No portals.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="#compliance-score"
                  className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-all text-lg shadow-lg shadow-copper-500/20 hover:shadow-copper-500/30 hover:-translate-y-0.5"
                >
                  Get Your Free Compliance Score
                </Link>
                <Link
                  href="/demo"
                  className="border border-forest-600 hover:border-forest-400 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
                >
                  Book a Demo
                </Link>
              </div>

              {/* Quick trust signals */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/35">
                <span className="flex items-center gap-1.5">
                  <IconCheckCircle className="w-3.5 h-3.5 text-copper-400/60" />
                  No app downloads
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheckCircle className="w-3.5 h-3.5 text-copper-400/60" />
                  Live in 2-3 weeks
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheckCircle className="w-3.5 h-3.5 text-copper-400/60" />
                  AI built in
                </span>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute -inset-8 bg-copper-500/5 rounded-full blur-3xl" />
                <div className="relative">
                  <WhatsAppChat
                    contactName="Amber — Pangea"
                    contactStatus="online"
                    messages={amberMessages}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN STATS ===== */}
      <section className="bg-forest-800 border-y border-forest-700/40 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "15-30 hrs", label: "Per week", sub: "spent chasing certs and docs manually" },
              { value: "42%", label: "Zero HR tech", sub: "of construction firms still paper-based" },
              { value: "1 in 3", label: "Workers quit", sub: "in first 90 days from poor onboarding" },
              { value: "60%+", label: "Time saved", sub: "with Pangea automated onboarding" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-forest-800/40 backdrop-blur-sm border border-forest-700/20 rounded-xl p-4">
                <div className="font-serif text-2xl sm:text-3xl text-copper-400 mb-1">{s.value}</div>
                <div className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70 mb-1">{s.label}</div>
                <div className="text-[0.7rem] text-white/35">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
              Sound familiar?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Your business is growing.
              <br />
              Your systems aren&apos;t.
            </h2>
            <p className="text-white/50 leading-relaxed">
              You&apos;re managing 50+ workers across multiple sites with spreadsheets, WhatsApp groups, and a filing cabinet of expired certs. One compliance gap can shut your site down.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: IconPound,
                stat: "£113K-£273K",
                label: "Annual waste",
                desc: "Admin time, missed leads, compliance penalties, rework",
              },
              {
                icon: IconClock,
                stat: "3-5 days",
                label: "To onboard one worker",
                desc: "Chasing docs by phone, waiting for post, re-entering data",
              },
              {
                icon: IconShield,
                stat: "£875+",
                label: "Per CSCS fine",
                desc: "One expired card on site = instant HSE penalty",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 text-center">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <div className="font-serif text-2xl text-copper-400 mb-1">{item.stat}</div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70 mb-2">{item.label}</div>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT PANGAEA DOES (6 features, tight grid) ===== */}
      <section className="bg-forest-800 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
            The Platform
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Everything between finding a worker
            <br className="hidden sm:block" />
            and getting them on site
          </h2>
          <p className="text-white/50 mb-12 max-w-xl">
            Six integrated modules. One dashboard. Zero paperwork.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: IconMessage,
                title: "WhatsApp Onboarding",
                desc: "AI bot qualifies workers via WhatsApp in under 4 minutes. Trade, certs, right-to-work, availability.",
                highlight: "No apps to download",
              },
              {
                icon: IconSearch,
                title: "AI Cert Verification",
                desc: "Workers photograph their CSCS card. AI reads type, expiry, and cardholder instantly.",
                highlight: "Vision AI powered",
              },
              {
                icon: IconShield,
                title: "Compliance Automation",
                desc: "90/30/7-day expiry alerts via WhatsApp. Auto-block non-compliant workers. One-click audit export.",
                highlight: "Never miss an expiry",
              },
              {
                icon: IconClipboard,
                title: "Labour Allocation",
                desc: "Broadcast shift offers to matched workers. First to accept wins. Positions filled in hours, not days.",
                highlight: "Smart pool matching",
              },
              {
                icon: IconClock,
                title: "Shifts & Timesheets",
                desc: "Track arrivals and departures. Auto-generate timesheets with WTD compliance. PDF export for payroll.",
                highlight: "WTD compliant",
              },
              {
                icon: IconBot,
                title: "Rex AI Assistant",
                desc: "Ask Rex anything about your workforce in plain English. Search, allocate, report -- by conversation.",
                highlight: "Natural language",
              },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-forest-900/60 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 hover:border-copper-500/20 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-copper-400" />
                    </div>
                    <span className="font-mono text-[0.55rem] uppercase tracking-wider text-copper-400/60 bg-copper-500/5 px-2 py-0.5 rounded">
                      {f.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2 group-hover:text-copper-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/features"
              className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              See all 9 modules in detail
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LIVE WHATSAPP DEMO ===== */}
      <section className="py-20 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
                See It Working
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
                Workers respond on WhatsApp.
                <br />
                <span className="text-copper-400">Because they&apos;re already on it.</span>
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                No new app to install. No portal to remember. Workers get shift offers on WhatsApp, reply YES, and they&apos;re confirmed. Induction link sent automatically.
              </p>

              <div className="space-y-4">
                {[
                  "98% open rate vs 20% for email",
                  "Offers accepted in under 5 minutes",
                  "Full audit trail of every message",
                  "Template-based compliance messaging",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <IconCheckCircle className="w-4 h-4 text-copper-400 flex-shrink-0" />
                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-copper-500/5 rounded-full blur-3xl" />
                <div className="relative">
                  <WhatsAppChat
                    contactName="Pangea"
                    contactStatus="online"
                    messages={offerMessages}
                    variant="galaxy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — 3 steps ===== */}
      <section className="bg-forest-800 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
              How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Three steps. Zero paperwork.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: IconMessage,
                title: "Worker gets a WhatsApp message",
                desc: "Invite via link, QR code, or direct message. Amber qualifies them in under 4 minutes -- trade, certs, right-to-work, availability.",
              },
              {
                step: "02",
                icon: IconSearch,
                title: "AI verifies their documents",
                desc: "Workers photograph their CSCS card and ID. Vision AI validates instantly. H&S induction completed on their phone.",
              },
              {
                step: "03",
                icon: IconClipboard,
                title: "You manage from one dashboard",
                desc: "Workforce pipeline, compliance status, allocations, timesheets, reports. Everything your operations team needs.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="relative bg-forest-900/60 backdrop-blur-sm rounded-xl p-8 border border-forest-700/20 hover:border-copper-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="font-mono text-5xl font-bold text-copper-500/10 absolute top-4 right-6">
                    {s.step}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-copper-400" />
                    </div>
                    <h3 className="font-serif text-lg text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COST SAVINGS ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
              The Numbers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Pays for itself in month one
            </h2>
            <p className="text-white/50">
              Every week you run without Pangea, you&apos;re leaking money in three places.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: IconShield,
                stat: "\u00a3875+",
                label: "Compliance fines",
                desc: "Per incident. One expired CSCS card on site triggers an instant HSE penalty. Pangea auto-blocks non-compliant workers before they arrive.",
              },
              {
                icon: IconPound,
                stat: "30-40%",
                label: "Agency markup",
                desc: "What agencies charge on top of day rates. Build your own verified bench of workers and cut out the middleman entirely.",
              },
              {
                icon: IconClock,
                stat: "15-30 hrs",
                label: "Admin per week",
                desc: "Chasing certs, updating spreadsheets, onboarding by phone. Pangea automates the lot and gives you back your week.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 text-center hover:border-copper-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <div className="font-serif text-2xl text-copper-400 mb-1">{item.stat}</div>
                  <div className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70 mb-2">{item.label}</div>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="relative bg-forest-800 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_70%)] opacity-15" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-6">
            <IconHardHat className="w-6 h-6 text-copper-400" />
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl text-white/80 italic leading-relaxed mb-6">
            &ldquo;We were spending two full days a week just chasing CSCS cards and right-to-work documents. Now it happens automatically on WhatsApp. The workers actually respond.&rdquo;
          </blockquote>
          <div className="text-sm text-white/40">
            — Operations Manager, UK Labour Provider
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
              Built For You
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Fits between the WhatsApp groups you&apos;ve outgrown
              <br className="hidden sm:block" />
              and the enterprise platforms you don&apos;t need
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: IconUsers,
                title: "Labour Providers",
                desc: "Managing 50+ workers across multiple sites. Need visibility, compliance control, and faster onboarding.",
              },
              {
                icon: IconHardHat,
                title: "Subcontractors",
                desc: "Growing teams, scaling operations. Too big for spreadsheets, too lean for enterprise software.",
              },
              {
                icon: IconClipboard,
                title: "Recruitment Agencies",
                desc: "High application volumes, compliance-heavy sectors. Need to qualify fast and track everything.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-forest-800/40 backdrop-blur-sm rounded-xl p-6 border border-forest-700/20 text-center hover:border-copper-500/20 hover:scale-[1.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-serif text-base text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE SCORE ===== */}
      <section id="compliance-score" className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-forest-700)_0%,_transparent_50%)] opacity-30" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">Free Assessment</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Get your compliance score in 2 minutes</h2>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto">Answer 10 questions about how you manage your workforce. We will calculate your risk score and estimate your annual financial exposure.</p>
          <ComplianceCalculator />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_60%)] opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-forest-700)_0%,_transparent_50%)] opacity-30" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-copper-400 mb-4 block">
            Get Started
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Get AI into your business
            <br />
            or get left behind
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Book a 30-minute demo. We&apos;ll show you the full platform with your use case in mind. No commitment, no hard sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#compliance-score"
              className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-10 py-4 rounded-lg text-center transition-all text-lg shadow-lg shadow-copper-500/20 hover:shadow-copper-500/30 hover:-translate-y-0.5"
            >
              Get Your Free Compliance Score
            </Link>
            <Link
              href="/demo"
              className="border border-forest-600 hover:border-forest-400 text-white/70 hover:text-white font-semibold px-10 py-4 rounded-lg text-center transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-white/25">
            Built alongside real UK construction labour providers. Serving UK and US markets.
          </p>
        </div>
      </section>
    </>
  );
}
