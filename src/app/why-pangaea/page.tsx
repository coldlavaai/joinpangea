import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";

export const metadata: Metadata = {
  title: "Why Pangaea",
  description:
    "Why construction needs Pangaea now: the AI-proof thesis, massive market opportunity, and why no competitor serves the 10–200 worker segment.",
};

const aiProofStats = [
  { value: "25%", label: "AI handles only 25% of unpredictable physical work", source: "Goldman Sachs" },
  { value: "52%", label: "View trade work as less vulnerable than white-collar roles", source: "Industry Survey" },
  { value: "5.3%", label: "Skilled trades growth rate 2024–2034", source: "BlackRock" },
  { value: "663K+", label: "US construction job openings yearly through 2033", source: "BLS" },
];

const migrationStats = [
  { value: "42%", label: "of Gen Z planning blue-collar careers", sub: "37% have bachelor's degrees" },
  { value: "40%", label: "of 2025 graduates chose trades over traditional careers", sub: "" },
  { value: "55K", label: "US tech job cuts in 2025 attributed to AI", sub: "Workers flowing into trades" },
  { value: "47%", label: "of skilled trades workers out-earn median college grad", sub: "" },
];

const competitors = [
  {
    name: "Boxcore",
    weakness: "Enterprise-focused. Portal/app required. Hardware needed. Overkill for SMEs with <100 workers.",
    pangaea: "No app. Messaging-native. Built for 10–200 workers. Lower price.",
  },
  {
    name: "GoContractor",
    weakness: "Web portal required. Enterprise sales cycle. General-purpose onboarding.",
    pangaea: "WhatsApp/SMS native. No portal. Construction-specific AI. Faster deployment.",
  },
  {
    name: "Arcoro",
    weakness: "Heavy, expensive. Targets 200+ employee firms. Months to implement. Module lock-in.",
    pangaea: "Lightweight, deploy in days. Focused on the one problem SMEs actually have.",
  },
  {
    name: "WorkBright",
    weakness: "Generic — not construction. No cert intelligence. No OSHA verification. Form collection only.",
    pangaea: "Construction-specific AI. Conversational onboarding. Industry knowledge built in.",
  },
  {
    name: "SmartBarrel",
    weakness: "Physical hardware per site. High capex. No remote onboarding capability.",
    pangaea: "Pure software. Any phone. No hardware. Remote pre-arrival onboarding.",
  },
];

export default function WhyPangaeaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Pangaea</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            Construction is the last industry AI can&apos;t automate
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            As AI displaces white-collar workers, millions are entering construction. Every career-changer needs verification, induction, and compliance sign-off before stepping on site. That&apos;s where we come in.
          </p>
        </div>
      </section>

      {/* AI-Proof Thesis */}
      <Section dark>
        <SectionLabel>The Opportunity</SectionLabel>
        <SectionTitle>AI can&apos;t lay bricks</SectionTitle>
        <SectionDescription>
          While AI transforms white-collar work, construction remains stubbornly human. The physical, unpredictable nature of the work means demand for workers is growing, not shrinking.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiProofStats.map((s) => (
            <div
              key={s.label}
              className="bg-forest-900 rounded-xl p-6 border border-forest-700/50"
            >
              <div className="font-serif text-3xl text-copper-400 mb-2">
                {s.value}
              </div>
              <p className="text-sm text-white/70 mb-2">{s.label}</p>
              <p className="text-xs text-white/40 font-mono">{s.source}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Great Migration */}
      <Section>
        <SectionLabel>The Great Migration</SectionLabel>
        <SectionTitle>Millions of workers are switching to trades</SectionTitle>
        <SectionDescription>
          White-collar workers displaced by AI are moving into construction. This isn&apos;t a prediction — it&apos;s already happening.
        </SectionDescription>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {migrationStats.map((s) => (
            <div
              key={s.label}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 text-center"
            >
              <div className="font-serif text-3xl text-copper-400 mb-2">
                {s.value}
              </div>
              <p className="text-sm text-white/70">{s.label}</p>
              {s.sub && (
                <p className="text-xs text-white/40 mt-1">{s.sub}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 bg-forest-800 rounded-xl p-8 border border-copper-500/20">
          <p className="text-lg text-white/80 leading-relaxed">
            <span className="text-copper-400 font-semibold">The conclusion:</span>{" "}
            AI doesn&apos;t threaten construction jobs — it funnels millions of displaced workers toward them. Every career-changer needs verification, induction, and compliance before touching a tool on site. That&apos;s a massive, growing market that no one is serving properly.
          </p>
        </div>
      </Section>

      {/* Market Size */}
      <Section dark>
        <SectionLabel>The Market</SectionLabel>
        <SectionTitle>Massive market. Zero solutions.</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
            <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-6">
              United Kingdom
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-serif text-2xl text-white">885,000 SMEs</div>
                <div className="text-sm text-white/50">15.8% of all UK businesses are construction</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">300,000 workers lost</div>
                <div className="text-sm text-white/50">Since 2005. One third retiring by 2035.</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">42% have zero HR tech</div>
                <div className="text-sm text-white/50">Paper-based onboarding is still the norm</div>
              </div>
            </div>
          </div>
          <div className="bg-forest-900 rounded-xl p-8 border border-forest-700/50">
            <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-6">
              United States
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-serif text-2xl text-white">3.97M firms</div>
                <div className="text-sm text-white/50">8.3M total workforce</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">499K workers needed</div>
                <div className="text-sm text-white/50">Annually through 2026+</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-white">$700B AI data centre capex</div>
                <div className="text-sm text-white/50">Meta, Microsoft, Amazon, Google, Oracle — all building</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Competitors */}
      <Section>
        <SectionLabel>The Competition</SectionLabel>
        <SectionTitle>No one serves the 10–200 worker segment</SectionTitle>
        <SectionDescription>
          Enterprise solutions are too expensive and complex. Generic HR tools don&apos;t understand construction. Pangaea occupies the unserved middle ground.
        </SectionDescription>
        <div className="space-y-4">
          {competitors.map((c) => (
            <div
              key={c.name}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 grid md:grid-cols-3 gap-6"
            >
              <div>
                <div className="font-mono text-sm font-semibold text-white/80 mb-1">
                  {c.name}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                  Their limitation
                </div>
                <p className="text-sm text-white/60">{c.weakness}</p>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-2">
                  Pangaea advantage
                </div>
                <p className="text-sm text-white/70">{c.pangaea}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            The market is ready. The product is built.
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            See why construction companies are switching from spreadsheets and WhatsApp groups to Pangaea.
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
