import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Construction compliance made simple. CSCS verification, right-to-work checks, OSHA certification, H&S inductions — all automated through Pangaea.",
};

const ukCompliance = [
  {
    title: "CSCS Card Verification",
    rule: '"No Card, No Work" on ~80% of UK construction sites',
    risk: "Workers turned away at gate. Site shutdown by principal contractor.",
    how: "Workers photograph their CSCS card via WhatsApp. AI reads card type (colour), expiry date, and cardholder name. Expired or invalid cards are flagged instantly.",
  },
  {
    title: "Right to Work",
    rule: "Up to 5 years imprisonment and unlimited fines for employing illegal workers",
    risk: "Criminal prosecution. Business closure. Reputational damage.",
    how: "Workers upload passport, visa, or share code. Documents stored securely with audit trail. Expiry tracking for time-limited permissions.",
  },
  {
    title: "H&S Site Induction",
    rule: "Required under CDM 2015. Must be completed before first shift.",
    risk: "HSE prosecution. Fee for Intervention (minimum £875/hour). 96% conviction rate.",
    how: "Workers complete video induction and quiz via WhatsApp. Completion logged automatically. Certificates generated per site.",
  },
  {
    title: "CIS Tax Status",
    rule: "Critical from April 2026 — HMRC shifting PAYE liability",
    risk: "Employer becomes liable for worker tax. Backdated assessments.",
    how: "CIS status captured during onboarding. Verification tracked in worker profile. Alerts when status changes.",
  },
];

const usCompliance = [
  {
    title: "OSHA 10/30-Hour Training",
    rule: "Mandatory in 7+ states. Required for all NYC construction workers.",
    risk: "Serious violation: $16,131 each. Willful: $161,323 each.",
    how: "Workers photograph OSHA card. AI validates card type and completion. Expiry tracking where applicable.",
  },
  {
    title: "NYC Local Law 196 (SST)",
    rule: "Site Safety Training cards required for all NYC construction workers",
    risk: "Work stoppage. Fines per worker per day. DOB enforcement.",
    how: "SST card tracking built into worker profiles. Automatic alerts for missing or expiring cards.",
  },
  {
    title: "I-9 Employment Eligibility",
    rule: "Federal requirement. All employers must verify work authorisation.",
    risk: "$272–$27,457 per worker. Criminal penalties for pattern violations.",
    how: "Guided I-9 document collection via SMS. E-Verify integration guidance. Secure document storage.",
  },
  {
    title: "OSHA Site Safety",
    rule: "Employers must provide safe workplace and document training",
    risk: "Stop-work orders. Criminal referral for willful violations causing death.",
    how: "Safety orientation delivered via SMS with quiz verification. Completion records exportable for OSHA audits.",
  },
];

const fines = [
  { body: "HSE", type: "Fee for Intervention", amount: "£875/hr", note: "Minimum charge per inspector hour" },
  { body: "HSE", type: "Prosecution fines", amount: "Up to £800K+", note: "96% conviction rate (2024/25)" },
  { body: "Home Office", type: "Illegal worker penalty", amount: "£45,000/worker", note: "First offence, per worker" },
  { body: "OSHA", type: "Serious violation", amount: "$16,131", note: "Per violation" },
  { body: "OSHA", type: "Willful violation", amount: "$161,323", note: "Per violation" },
  { body: "ICE/USCIS", type: "I-9 violation", amount: "$272–$27,457", note: "Per worker, per violation" },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Compliance</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            One missed cert can shut your site down
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Construction compliance isn&apos;t optional. CSCS cards, right-to-work, OSHA certs, H&S inductions — Pangaea tracks it all automatically so you never get caught out.
          </p>
        </div>
      </section>

      {/* Fines */}
      <section className="bg-forest-800 border-y border-forest-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-8 text-center">
            The cost of non-compliance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fines.map((f) => (
              <div
                key={f.type}
                className="bg-forest-900 rounded-lg p-5 border border-forest-700/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-white/40">{f.body}</span>
                </div>
                <div className="font-serif text-xl text-copper-400 mb-1">
                  {f.amount}
                </div>
                <div className="text-sm text-white/70 mb-1">{f.type}</div>
                <div className="text-xs text-white/40">{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Compliance */}
      <Section>
        <SectionLabel>United Kingdom</SectionLabel>
        <SectionTitle>UK compliance requirements</SectionTitle>
        <SectionDescription>
          How Pangaea handles each critical compliance area for UK construction.
        </SectionDescription>
        <div className="space-y-6">
          {ukCompliance.map((c) => (
            <div
              key={c.title}
              className="bg-forest-800 rounded-xl p-6 sm:p-8 border border-forest-700/50"
            >
              <h3 className="font-serif text-xl text-white mb-4">{c.title}</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                    The Rule
                  </div>
                  <p className="text-sm text-white/70">{c.rule}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-red-400/80 mb-2">
                    The Risk
                  </div>
                  <p className="text-sm text-white/70">{c.risk}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-2">
                    How Pangaea Helps
                  </div>
                  <p className="text-sm text-white/70">{c.how}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* US Compliance */}
      <Section dark>
        <SectionLabel>United States</SectionLabel>
        <SectionTitle>US compliance requirements</SectionTitle>
        <SectionDescription>
          From OSHA to I-9, Pangaea covers the compliance landscape for US construction.
        </SectionDescription>
        <div className="space-y-6">
          {usCompliance.map((c) => (
            <div
              key={c.title}
              className="bg-forest-900 rounded-xl p-6 sm:p-8 border border-forest-700/50"
            >
              <h3 className="font-serif text-xl text-white mb-4">{c.title}</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                    The Rule
                  </div>
                  <p className="text-sm text-white/70">{c.rule}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-red-400/80 mb-2">
                    The Risk
                  </div>
                  <p className="text-sm text-white/70">{c.risk}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-2">
                    How Pangaea Helps
                  </div>
                  <p className="text-sm text-white/70">{c.how}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Automation */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Automation</SectionLabel>
          <SectionTitle className="text-center">
            Compliance that runs itself
          </SectionTitle>
          <p className="text-lg text-white/60 mb-12">
            Pangaea doesn&apos;t just store documents — it actively monitors and enforces compliance across your entire workforce.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Expiry Tracking",
                desc: "Every document expiry date is monitored. Automatic alerts at 90, 30, and 7 days before expiry.",
              },
              {
                title: "Chase Sequences",
                desc: "Workers with missing or expired documents receive automatic WhatsApp reminders until resolved.",
              },
              {
                title: "Auto-Block",
                desc: "Non-compliant workers are automatically blocked from new site allocations. No manual intervention needed.",
              },
              {
                title: "Audit Export",
                desc: "One-click CSV export of all compliance data. Ready for HSE or OSHA inspection in seconds.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-forest-800 rounded-xl p-6 border border-forest-700/50"
              >
                <h3 className="font-serif text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Stop risking fines. Start automating compliance.
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            See how Pangaea can protect your business from compliance gaps.
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
