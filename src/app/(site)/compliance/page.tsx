import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import { IconShield, IconAlertTriangle, IconCheckCircle, IconClock, IconMessage, IconLock, IconFileCheck, IconGlobe, IconCalendar, IconClipboard, IconBarChart } from "@/components/icons";
import { ComplianceCalculator } from "@/components/compliance-calculator";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "UK construction compliance is tightening fast. HMRC PAYE shifts, Building Safety Act, IR35, CDM 2015, HSE prosecutions. Get your free compliance score.",
};

const regulatoryChanges = [
  {
    date: "April 2026",
    urgency: "imminent" as const,
    title: "HMRC PAYE Liability Shift",
    body: "HMRC is tightening CIS rules. Companies using self-employed subcontractors without proper verification could become liable for PAYE, National Insurance, and backdated penalties. If you cannot prove correct worker status and CIS verification, HMRC treats them as your employees \u2014 and sends you the bill.",
    penalty: "Unlimited",
  },
  {
    date: "Rolling out now",
    urgency: "active" as const,
    title: "Building Safety Act 2022",
    body: "The Building Safety Act is phasing in mandatory competence requirements across all construction roles. Principal contractors must demonstrate that every worker on site holds the right qualifications for their role. No paper trail, no defence.",
    penalty: "Unlimited",
  },
  {
    date: "Ongoing enforcement",
    urgency: "active" as const,
    title: "IR35 Off-Payroll Rules",
    body: "HMRC is actively investigating construction firms for IR35 non-compliance. If your subcontractors are deemed to be disguised employees, you are liable for their unpaid tax, NI, and penalties \u2014 potentially years of backdated assessments.",
    penalty: "Unlimited",
  },
  {
    date: "2024/25 stats",
    urgency: "active" as const,
    title: "HSE Fee for Intervention",
    body: "HSE charges a minimum of \u00a3875 per inspector hour under Fee for Intervention. In 2024/25, HSE prosecutions had a 96% conviction rate and resulted in over \u00a333M in fines. One site visit can cost you thousands before a fine is even issued.",
    penalty: "\u00a3875/hr min",
  },
  {
    date: "Since 2015",
    urgency: "ongoing" as const,
    title: "CDM 2015 Non-Compliance",
    body: "CDM 2015 has been law for over a decade, yet HSE finds widespread non-compliance among smaller contractors. Missing construction phase plans, no pre-construction information, incomplete induction records. These are the violations that trigger Fee for Intervention and prosecution.",
    penalty: "Up to \u00a3800K+",
  },
];

const ukCompliance = [
  {
    title: "HMRC CIS & PAYE Compliance",
    icon: IconBarChart,
    rule: "From April 2026, HMRC is shifting PAYE liability onto companies that cannot prove correct CIS verification and worker status classification",
    risk: "Full PAYE and NI liability for every unverified subcontractor. Backdated assessments going back years. Penalties and interest on top.",
    how: "CIS verification status captured during onboarding. Worker status classification documented with evidence trail. Automatic alerts when verification expires. Audit-ready reports for HMRC enquiries.",
  },
  {
    title: "IR35 / Off-Payroll Status",
    icon: IconLock,
    rule: "Medium and large companies must determine the employment status of every subcontractor. Getting it wrong means you pay their tax.",
    risk: "Backdated PAYE, NI, and apprenticeship levy for every misclassified worker. Interest and penalties. HMRC investigations lasting months.",
    how: "Worker engagement details captured at onboarding \u2014 contract type, supervision level, substitution rights. Status determination stored against each worker profile. Full audit trail.",
  },
  {
    title: "CSCS Card Verification",
    icon: IconShield,
    rule: "\u201CNo Card, No Work\u201D on ~80% of UK construction sites. Building Safety Act now adding competence requirements on top.",
    risk: "Workers turned away at gate. Site shutdown by principal contractor. Non-compliance with Building Safety Act competence duties.",
    how: "Workers photograph their CSCS card via WhatsApp. AI reads card type, expiry date, and cardholder name. Expired or invalid cards flagged instantly.",
  },
  {
    title: "Right to Work",
    icon: IconFileCheck,
    rule: "Up to 5 years imprisonment and unlimited fines for employing illegal workers",
    risk: "Criminal prosecution. Business closure. Reputational damage.",
    how: "Workers upload passport, visa, or share code. Documents stored securely with audit trail. Expiry tracking for time-limited permissions.",
  },
  {
    title: "CDM 2015 Duties",
    icon: IconClipboard,
    rule: "Principal contractors must ensure all workers are inducted, competent, and site-specific risks are communicated before work begins",
    risk: "HSE prosecution with 96% conviction rate. Fee for Intervention at \u00a3875/hr minimum.",
    how: "Site-specific inductions delivered via WhatsApp. Pre-construction information acknowledged by each worker. All records exportable for HSE inspection in seconds.",
  },
  {
    title: "HSE Fee for Intervention",
    icon: IconAlertTriangle,
    rule: "HSE charges \u00a3875/hr minimum for any material breach found on site. 96% conviction rate. \u00a333M+ in fines in 2024/25.",
    risk: "A single site visit can cost thousands. Prosecution fines regularly exceed \u00a3100K for SMEs. Directors can face personal liability.",
    how: "Complete, always-current compliance record for every worker. Missing documents trigger automatic chase sequences. Non-compliant workers blocked from allocation.",
  },
];

const fines = [
  { body: "HMRC", type: "CIS / PAYE liability", amount: "Unlimited", severity: "critical" as const },
  { body: "HMRC", type: "IR35 non-compliance", amount: "Unlimited", severity: "critical" as const },
  { body: "Home Office", type: "Illegal worker penalty", amount: "\u00a345,000/worker", severity: "critical" as const },
  { body: "HSE", type: "Fee for Intervention", amount: "\u00a3875/hr", severity: "high" as const },
  { body: "HSE", type: "Prosecution fines", amount: "\u00a333M total", severity: "high" as const },
  { body: "HSE", type: "CDM 2015 breach", amount: "Up to \u00a3800K+", severity: "high" as const },
  { body: "BSR", type: "Building Safety Act breach", amount: "Unlimited", severity: "critical" as const },
  { body: "OSHA", type: "Serious violation", amount: "$16,131", severity: "medium" as const },
  { body: "OSHA", type: "Willful violation", amount: "$161,323", severity: "critical" as const },
  { body: "ICE/USCIS", type: "I-9 violation", amount: "$272\u2013$27,457", severity: "medium" as const },
];

const automationFeatures = [
  { title: "Expiry Tracking", desc: "Every document expiry date is monitored. Automatic alerts at 90, 30, and 7 days before expiry.", icon: IconClock },
  { title: "Chase Sequences", desc: "Workers with missing or expired documents receive automatic WhatsApp reminders until resolved.", icon: IconMessage },
  { title: "Auto-Block", desc: "Non-compliant workers are automatically blocked from new site allocations. No manual intervention needed.", icon: IconLock },
  { title: "Audit Export", desc: "One-click CSV export of all compliance data. Ready for HSE inspection in seconds.", icon: IconFileCheck },
];

const severityStyles = {
  critical: { bg: "bg-red-500/8", border: "border-red-500/20", text: "text-red-400", glow: "shadow-red-500/5" },
  high: { bg: "bg-orange-500/6", border: "border-orange-500/15", text: "text-orange-400", glow: "shadow-orange-500/5" },
  medium: { bg: "bg-amber-500/5", border: "border-amber-500/15", text: "text-amber-400", glow: "shadow-amber-500/5" },
};

const urgencyStyles = {
  imminent: { dot: "bg-red-500", pulse: true, label: "text-red-400", border: "border-l-red-500" },
  active: { dot: "bg-orange-400", pulse: true, label: "text-orange-400", border: "border-l-orange-400" },
  ongoing: { dot: "bg-amber-400", pulse: false, label: "text-amber-400", border: "border-l-amber-400" },
};

export default function CompliancePage() {
  return (
    <>
      {/* Calculator hero — glass effect */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-forest-700)_0%,_transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(193,127,89,0.06)_0%,_transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Free Compliance Assessment</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto">
            Get your compliance score<br className="hidden sm:block" /> in 2 minutes
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-14">
            Answer 10 questions about how you manage your workforce. We will calculate your compliance risk score, identify your biggest gaps, and estimate your annual financial exposure.
          </p>
          <ComplianceCalculator />
        </div>
      </section>

      {/* ── Fines grid — impactful numbers ── */}
      <section className="relative bg-forest-800 border-y border-forest-700/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(239,68,68,0.04)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-500/8 border border-red-500/15 rounded-full px-4 py-1.5 mb-4">
              <IconAlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-red-400/80">The cost of non-compliance</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white">These are the numbers that matter</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {fines.map((f) => {
              const s = severityStyles[f.severity];
              return (
                <div key={f.type} className={`relative rounded-xl p-5 border ${s.bg} ${s.border} backdrop-blur-sm shadow-lg ${s.glow} hover:scale-[1.02] transition-transform`}>
                  <div className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30 mb-3">{f.body}</div>
                  <div className={`font-serif text-2xl ${s.text} mb-1.5`}>{f.amount}</div>
                  <div className="text-xs text-white/50">{f.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regulatory changes — timeline style ── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>What is changing</SectionLabel>
          <SectionTitle>Five regulatory shifts you cannot ignore</SectionTitle>
          <SectionDescription>
            These are not future risks \u2014 they are active enforcement priorities. If you are not tracking these today, you are already behind.
          </SectionDescription>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-red-500/40 via-orange-400/30 to-amber-400/20 hidden sm:block" />

            <div className="space-y-5">
              {regulatoryChanges.map((r, i) => {
                const u = urgencyStyles[r.urgency];
                return (
                  <div key={r.title} className="relative flex gap-5 sm:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-shrink-0 w-10 items-start pt-7">
                      <div className="relative">
                        <div className={`w-3 h-3 rounded-full ${u.dot}`} />
                        {u.pulse && <div className={`absolute inset-0 w-3 h-3 rounded-full ${u.dot} animate-ping opacity-40`} />}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-xl bg-forest-800/60 backdrop-blur-sm border border-forest-700/30 ${u.border} border-l-[3px] p-6 sm:p-7 hover:bg-forest-800/80 transition-colors group`}>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <span className={`font-mono text-[0.6rem] uppercase tracking-wider ${u.label}`}>{r.date}</span>
                          <h3 className="font-serif text-lg sm:text-xl text-white mt-1 group-hover:text-copper-400 transition-colors">{r.title}</h3>
                        </div>
                        {r.penalty && (
                          <div className="flex-shrink-0 bg-red-500/8 border border-red-500/15 rounded-lg px-3 py-1.5">
                            <div className="text-[0.55rem] font-mono uppercase text-red-400/60">Penalty</div>
                            <div className="text-sm font-serif text-red-400">{r.penalty}</div>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-white/45 leading-relaxed">{r.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pangea handles it */}
          <div className="mt-10 rounded-xl bg-gradient-to-r from-copper-500/8 to-forest-800/40 border border-copper-500/15 p-8 text-center backdrop-blur-sm">
            <p className="font-serif text-xl text-copper-400 mb-2">Pangea handles all of this automatically.</p>
            <p className="text-sm text-white/45 max-w-2xl mx-auto">
              Every worker onboarded through Pangea has their CIS status verified, IR35 determination documented, CSCS card validated, competence checked, and induction completed \u2014 before they set foot on site.
            </p>
          </div>
        </div>
      </Section>

      {/* ── UK Compliance — glassmorphic cards ── */}
      <Section dark>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center backdrop-blur-sm">
            <IconGlobe className="w-5 h-5 text-copper-400" />
          </div>
          <SectionLabel>United Kingdom</SectionLabel>
        </div>
        <SectionTitle>UK compliance requirements</SectionTitle>
        <SectionDescription>How Pangea handles each critical compliance area for UK construction.</SectionDescription>
        <div className="space-y-4">
          {ukCompliance.map((c) => (
            <div key={c.title} className="group rounded-xl bg-forest-900/50 backdrop-blur-sm border border-forest-700/20 hover:border-forest-600/40 transition-all overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-copper-500/8 border border-copper-500/15 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-serif text-xl text-white group-hover:text-copper-400 transition-colors">{c.title}</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="rounded-lg bg-forest-800/40 p-4 border border-forest-700/20">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <IconClipboard className="w-3.5 h-3.5 text-white/30" />
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/30">The Rule</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{c.rule}</p>
                  </div>
                  <div className="rounded-lg bg-red-500/4 p-4 border border-red-500/10">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <IconAlertTriangle className="w-3.5 h-3.5 text-red-400/60" />
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-red-400/60">The Risk</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{c.risk}</p>
                  </div>
                  <div className="rounded-lg bg-copper-500/4 p-4 border border-copper-500/10">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <IconCheckCircle className="w-3.5 h-3.5 text-copper-400/60" />
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-400/60">How Pangea Helps</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">{c.how}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Automation — glass cards ── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>Automation</SectionLabel>
          <SectionTitle className="text-center">Compliance that runs itself</SectionTitle>
          <p className="text-lg text-white/50 mb-12">
            Pangea doesn&apos;t just store documents \u2014 it actively monitors and enforces compliance across your entire workforce.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {automationFeatures.map((item) => (
              <div key={item.title} className="group rounded-xl bg-forest-800/40 backdrop-blur-sm p-6 border border-forest-700/20 hover:border-copper-500/20 hover:bg-forest-800/60 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-copper-500/8 border border-copper-500/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-copper-400" />
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-copper-400 transition-colors">{item.title}</h3>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA — ties back to calculator ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(193,127,89,0.06)_0%,_transparent_60%)]" />
        <div className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle className="text-center">April 2026 is coming. Are you ready?</SectionTitle>
          <p className="text-lg text-white/50 mb-10">
            HMRC PAYE liability shifts, Building Safety Act competence requirements, IR35 investigations, HSE Fee for Intervention \u2014 Pangea handles all of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compliance"
              className="inline-flex items-center justify-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg shadow-lg shadow-copper-500/15"
            >
              <IconShield className="w-5 h-5" />
              Get Your Compliance Score
            </Link>
            <Link href="/demo"
              className="inline-flex items-center justify-center gap-2 border border-forest-600 hover:border-forest-400 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
