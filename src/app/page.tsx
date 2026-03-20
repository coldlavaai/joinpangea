import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";

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
    description: "Workers onboard via WhatsApp or SMS. No apps to download, no portals to navigate. Collect certs, right-to-work, and H&S sign-off in minutes.",
    icon: "💬",
  },
  {
    title: "AI Cert Verification",
    description: "Workers snap a photo of their CSCS card or OSHA cert. AI reads the card type, expiry date, and cardholder — flagging issues instantly.",
    icon: "🔍",
  },
  {
    title: "Compliance Automation",
    description: "Automatic expiry tracking, chase sequences, and blocking rules. Never send a non-compliant worker to site again.",
    icon: "🛡️",
  },
  {
    title: "Labour Allocation",
    description: "Match workers to requests by trade, experience, location, and availability. Broadcast offers and fill positions in hours, not days.",
    icon: "📋",
  },
  {
    title: "Shifts & Timesheets",
    description: "Track arrivals, breaks, and departures. Auto-generate weekly timesheets with WTD compliance checks and PDF export.",
    icon: "⏱️",
  },
  {
    title: "AI Assistant",
    description: "Rex, your AI operations manager. Search your workforce, create requests, check compliance — all through natural conversation.",
    icon: "🤖",
  },
];

const steps = [
  {
    number: "01",
    title: "Worker receives a WhatsApp message",
    description: "Invite workers via link, QR code, or direct message. Our AI bot qualifies them in minutes — collecting trade, experience, certs, and availability.",
  },
  {
    number: "02",
    title: "AI verifies their documents",
    description: "Workers photograph their CSCS card, right-to-work docs, and ID. AI reads and validates instantly. H&S induction completed on their phone.",
  },
  {
    number: "03",
    title: "You manage everything from one dashboard",
    description: "See your entire workforce pipeline. Allocate workers to sites, track compliance, generate timesheets, and run reports — all in one place.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-forest-700)_0%,_transparent_60%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-copper-900)_0%,_transparent_50%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
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
              <div className="font-serif text-2xl text-copper-400 mb-2">£113K–£273K</div>
              <div className="text-sm text-white/60">Annual waste for a 50-worker UK firm without automation</div>
            </div>
            <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
              <div className="font-serif text-2xl text-copper-400 mb-2">15–30 hrs</div>
              <div className="text-sm text-white/60">Per week spent on admin, chasing docs, and manual onboarding</div>
            </div>
            <div className="bg-forest-800 rounded-xl p-6 border border-forest-700/50">
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
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-forest-900 rounded-xl p-8 border border-forest-700/50 hover:border-copper-500/30 transition-colors group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-copper-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors"
          >
            Explore all features &rarr;
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Three steps. Zero paperwork.</SectionTitle>
          <div className="space-y-12 mt-12">
            {steps.map((s) => (
              <div key={s.number} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-copper-500/10 border border-copper-500/30 flex items-center justify-center">
                  <span className="font-mono text-sm font-semibold text-copper-400">
                    {s.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/how-it-works"
              className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors"
            >
              See the full worker journey &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* ROI */}
      <Section dark>
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The ROI</SectionLabel>
          <SectionTitle className="text-center">
            Pays for itself in month one
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            For a 50-worker firm, Pangaea costs less than a single compliance fine. The average customer saves 12–46x their investment in year one.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                UK
              </div>
              <div className="font-serif text-4xl text-white mb-2">12–46x</div>
              <div className="text-sm text-white/60 mb-6">Return on investment</div>
              <div className="border-t border-forest-700/50 pt-4 space-y-2 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Annual waste without Pangaea</span>
                  <span className="text-white font-mono">£113K–£273K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Pangaea annual cost</span>
                  <span className="text-copper-400 font-mono">£5,964–£9,564</span>
                </div>
              </div>
            </div>
            <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
              <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                US
              </div>
              <div className="font-serif text-4xl text-white mb-2">14–64x</div>
              <div className="text-sm text-white/60 mb-6">Return on investment</div>
              <div className="border-t border-forest-700/50 pt-4 space-y-2 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Annual waste without Pangaea</span>
                  <span className="text-white font-mono">$172K–$460K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Pangaea annual cost</span>
                  <span className="text-copper-400 font-mono">$7,164–$11,964</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials placeholder */}
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
