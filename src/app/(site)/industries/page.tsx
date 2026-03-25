import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconHardHat,
  IconUsers,
  IconShield,
  IconMessage,
  IconCheckCircle,
  IconClipboard,
  IconClock,
  IconCalendar,
  IconMapPin,
  IconTrendingUp,
  IconSearch,
  IconBot,
  IconFileCheck,
  IconBarChart,
  IconZap,
  IconTarget,
  IconStar,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Pangea serves construction, rail, industrial, commercial, medical, teaching, and recruitment sectors. See how it fits your workforce.",
};

const industries = [
  {
    title: "Labour Agencies & Providers",
    icon: IconUsers,
    tagline: "Manage hundreds of workers across dozens of sites",
    description:
      "You process 50+ applications a week, manage workers across multiple client sites, and spend half your day chasing certs. Pangea automates the intake, verifies documents with AI, and gives you a single dashboard across every site you supply to.",
    painPoints: [
      "High application volume with manual screening",
      "Compliance liability across multiple client sites",
      "Workers ghosting after initial contact",
      "Paper-based onboarding taking 3-5 days per worker",
    ],
    howPangeaHelps: [
      "Amber AI qualifies applicants on WhatsApp in under 4 minutes",
      "Auto-chase workers who drop off mid-onboarding",
      "Compliance dashboard with per-client site views",
      "Broadcast shift offers to matched workers, first-to-accept wins",
    ],
  },
  {
    title: "Scaffolding Contractors",
    icon: IconHardHat,
    tagline: "CISRS cards, height compliance, and rapid crew deployment",
    description:
      "Scaffolding is one of the most compliance-heavy trades in construction. Every operative needs valid CISRS cards, harness training certs, and site-specific inductions. Pangea tracks it all and blocks non-compliant workers from allocation automatically.",
    painPoints: [
      "CISRS card expiry tracking across large teams",
      "Height-work certification requirements vary by site",
      "Urgent crew deployment for emergency scaffold strikes",
      "Subcontractor compliance evidence for principal contractors",
    ],
    howPangeaHelps: [
      "AI reads CISRS card photos — type, level, and expiry extracted instantly",
      "Cascading alerts at 90, 30, and 7 days before expiry",
      "Pool search by CISRS level for rapid crew assembly",
      "One-click CSV audit export for principal contractor compliance checks",
    ],
  },
  {
    title: "Civil Engineering & Groundworks",
    icon: IconMapPin,
    tagline: "Multi-site coordination with high worker turnover",
    description:
      "Civil projects run long timelines with shifting labour needs. You might need 40 groundworkers this week and 15 next week, across three sites. Pangea lets you flex your workforce without losing visibility or compliance coverage.",
    painPoints: [
      "Fluctuating headcount across long-duration projects",
      "CPCS plant operator card tracking",
      "Workers moving between sites without updated inductions",
      "Timesheet collection from remote or rural sites",
    ],
    howPangeaHelps: [
      "Multi-site headcount tracking with live allocation views",
      "CPCS card verification alongside CSCS — all AI-powered",
      "Site-specific H&S inductions delivered on workers\u2019 phones",
      "Digital timesheets with WTD compliance and PDF export",
    ],
  },
  {
    title: "Mechanical & Electrical (M&E)",
    icon: IconZap,
    tagline: "Specialist qualifications, tight project timelines",
    description:
      "M&E contractors deal with specialist certifications — ECS cards, Gas Safe, JIB grades — on top of standard CSCS requirements. Pangea handles multi-cert tracking per worker, so you know exactly who is qualified for what, at all times.",
    painPoints: [
      "Multiple certifications per worker (ECS, Gas Safe, JIB, CSCS)",
      "Electricians and plumbers needed at specific project phases",
      "Right-to-work verification for agency-supplied labour",
      "Keeping compliance evidence current for Tier 1 audits",
    ],
    howPangeaHelps: [
      "Track unlimited document types per worker profile",
      "AI verification for trade-specific cards and certs",
      "Configurable compliance rules by trade and site",
      "Auto-generated compliance reports for client audits",
    ],
  },
  {
    title: "Demolition & Dismantling",
    icon: IconTarget,
    tagline: "High-risk operations demand bulletproof compliance",
    description:
      "Demolition is classified as high-risk work. Every operative needs enhanced safety training, and principal contractors will audit your records. Pangea gives you audit-ready compliance at all times, with automatic enforcement.",
    painPoints: [
      "Enhanced health and safety requirements for high-risk work",
      "NDTG cards and specialist demolition qualifications",
      "Frequent HSE and principal contractor audits",
      "High worker turnover with rapid onboarding needs",
    ],
    howPangeaHelps: [
      "H&S induction videos and quizzes delivered via WhatsApp",
      "Document requirements configurable per project risk level",
      "Auto-block workers with expired or missing critical certs",
      "Complete audit trail — every message, document, and decision logged",
    ],
  },
  {
    title: "Recruitment & Staffing",
    icon: IconSearch,
    tagline: "Labour supply, gangmaster compliance, and white-label AI",
    description:
      "Whether you are a labour supply company, a gangmaster licence holder, or a specialist construction recruitment agency, Pangea automates your entire pipeline. Qualify candidates on WhatsApp, verify compliance in seconds, and place workers faster than the competition. Pangea is also available as a white-label platform for recruitment agencies — including CV AI summarisation and a fully branded system your clients never know you did not build yourself.",
    painPoints: [
      "Candidates dropping out of slow onboarding processes",
      "Gangmaster licence compliance and audit evidence",
      "Manual matching of candidates to client requirements",
      "No single source of truth across consultants' spreadsheets",
      "Clients demanding compliance evidence at short notice",
    ],
    howPangeaHelps: [
      "WhatsApp onboarding keeps candidates engaged (98% open rate)",
      "Instant compliance reports per candidate or per client site",
      "White-label option: your branding, your domain, CV AI summarisation built in",
      "AI-powered job advert generation and multi-platform posting",
      "Centralised workforce pool searchable by any team member",
    ],
  },
  {
    title: "Rail",
    icon: IconShield,
    tagline: "PTS, safety-critical compliance, and Network Rail standards",
    description:
      "Rail projects demand PTS certification, safety-critical medical clearances, and strict Network Rail standards. Pangea tracks every qualification per operative and blocks non-compliant workers from allocation automatically. Whether you manage 50 or 500 rail operatives, compliance is always audit-ready.",
    painPoints: [
      "PTS card and safety-critical certification tracking",
      "Network Rail sponsor requirements and audit evidence",
      "Managing sentinel records alongside standard compliance",
      "High penalties for non-compliant workers on track",
    ],
    howPangeaHelps: [
      "AI reads PTS cards and extracts competency, level, and expiry",
      "Cascading alerts at 90, 30, and 7 days before cert expiry",
      "Configurable compliance rules per rail project and sponsor",
      "Complete audit trail for Network Rail and ORR inspections",
    ],
  },
  {
    title: "Industrial & Commercial",
    icon: IconBarChart,
    tagline: "Factories, warehouses, and commercial builds at scale",
    description:
      "Industrial and commercial projects require large, flexible workforces with trade-specific certifications. From warehouse fit-outs to factory construction, Pangea manages multi-site headcount, tracks specialist qualifications, and keeps compliance tight across every contractor and subcontractor.",
    painPoints: [
      "Fluctuating headcount across multiple commercial sites",
      "Trade-specific certs varying by project type",
      "Subcontractor compliance evidence for principal contractors",
      "Rapid mobilisation for short-notice industrial shutdowns",
    ],
    howPangeaHelps: [
      "Multi-site allocation views with live headcount tracking",
      "Unlimited document types tracked per worker profile",
      "Broadcast shift offers to matched workers, first-to-accept wins",
      "One-click compliance export for client and HSE audits",
    ],
  },
  {
    title: "Teaching & Education",
    icon: IconClipboard,
    tagline: "DBS checks, safeguarding, and supply teacher management",
    description:
      "Education staffing demands rigorous safeguarding compliance. DBS checks, QTS verification, prohibition list clearance, and reference checks must all be current before a teacher steps into a classroom. Pangea automates the entire vetting pipeline and gives you audit-ready records for every placement.",
    painPoints: [
      "DBS check tracking and renewal management",
      "QTS and prohibition list verification",
      "Safeguarding training expiry across large supply pools",
      "Schools demanding compliance packs at short notice",
    ],
    howPangeaHelps: [
      "AI-powered document verification for DBS, QTS, and training certs",
      "Automated safeguarding compliance dashboards per school",
      "WhatsApp-based onboarding keeps supply teachers engaged",
      "Instant compliance packs generated per candidate or per school",
    ],
  },
  {
    title: "Medical & Healthcare",
    icon: IconStar,
    tagline: "Clinical compliance, revalidation tracking, and rapid placement",
    description:
      "Healthcare recruitment sits at the intersection of urgency and compliance. NMC pins, GMC registration, mandatory training, and DBS checks must all be verified before a single shift. Pangea tracks every credential, automates expiry alerts, and lets you place compliant staff faster than manual processes ever could.",
    painPoints: [
      "NMC, GMC, and HCPC registration verification",
      "Mandatory training modules with varied renewal cycles",
      "DBS and occupational health clearance tracking",
      "Urgent shift fill with compliant-only candidates",
    ],
    howPangeaHelps: [
      "Multi-credential tracking per clinician with AI verification",
      "Cascading alerts for revalidation and training expiry",
      "Pool search by qualification, specialism, and compliance status",
      "White-label option available for healthcare recruitment agencies",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Industries</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl">
            Built for industries that move people
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mb-6">
            Pangea started in construction and is expanding into rail, industrial, commercial, teaching, and medical sectors. Every industry has its own compliance requirements, workforce patterns, and operational challenges. Pangea adapts to all of them — for businesses managing 50+ workers.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {industries.map((ind) => (
              <a
                key={ind.title}
                href={`#${ind.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="bg-forest-800 border border-forest-700/50 rounded-full px-4 py-1.5 text-white/60 hover:text-copper-400 hover:border-copper-500/30 transition-colors"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((ind, i) => {
        const Icon = ind.icon;
        return (
          <Section
            key={ind.title}
            dark={i % 2 === 0}
            id={ind.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-copper-400" />
                  </div>
                  <SectionLabel>{ind.tagline}</SectionLabel>
                </div>
                <SectionTitle>{ind.title}</SectionTitle>
                <p className="text-white/60 leading-relaxed text-lg mb-8">
                  {ind.description}
                </p>
                <Link
                  href="/demo"
                  className="inline-block bg-copper-500 hover:bg-copper-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="space-y-6">
                {/* Pain points */}
                <div className="bg-forest-900/50 rounded-xl p-6 border border-forest-700/50">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-4">
                    The Challenge
                  </h4>
                  <ul className="space-y-3">
                    {ind.painPoints.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                        <span className="text-sm text-white/50">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How Pangea helps */}
                <div className="bg-forest-900/50 rounded-xl p-6 border border-copper-500/15">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-4">
                    How Pangea Helps
                  </h4>
                  <ul className="space-y-3">
                    {ind.howPangeaHelps.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <IconCheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/70">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Don&apos;t see your sector?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Pangea works for any business managing a mobile workforce of 50+ people — across all construction sectors (except landscape), rail, industrial, commercial, teaching, and medical. Book a demo and we&apos;ll show you how it fits your specific operations.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <IconCalendar className="w-5 h-5" />
            Book a Demo
          </Link>
        </div>
      </Section>
    </>
  );
}
