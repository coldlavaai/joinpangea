import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/section";
import {
  IconShield,
  IconLock,
  IconGlobe,
  IconCheckCircle,
  IconFileCheck,
  IconUsers,
  IconCalendar,
  IconMail,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Trust & Security",
  description:
    "How Pangea protects your workforce data. GDPR compliance, UK data residency, encryption, access controls, and audit trails.",
};

const principles = [
  {
    icon: IconLock,
    title: "Encrypted at Rest and in Transit",
    description:
      "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Document uploads (CSCS cards, right-to-work evidence, ID photos) are stored in private, authenticated storage buckets. No public URLs, no unprotected access.",
  },
  {
    icon: IconGlobe,
    title: "UK Data Residency",
    description:
      "Your data is hosted in London (eu-west-2). Worker PII, compliance documents, and message history never leave UK jurisdiction. This matters for GDPR, and it matters for your clients who require UK-only data processing.",
  },
  {
    icon: IconShield,
    title: "Row-Level Security",
    description:
      "Every database table is protected by row-level security policies. Users can only access data belonging to their organisation. Service-level operations (webhooks, cron jobs) use isolated service accounts that bypass user-level permissions only where necessary.",
  },
  {
    icon: IconUsers,
    title: "Role-Based Access Control",
    description:
      "Three permission levels — Admin, Manager, and Viewer — control what each team member can see and do. Admins manage settings and users. Managers handle operations. Viewers see reports without write access.",
  },
  {
    icon: IconFileCheck,
    title: "Complete Audit Trail",
    description:
      "Every action is logged: document uploads, verification decisions, message sends, allocation changes, compliance overrides. Audit logs are immutable and exportable. If an HSE inspector asks what happened and when, you have the answer.",
  },
  {
    icon: IconCheckCircle,
    title: "Secure Authentication",
    description:
      "Session-based authentication with secure HTTP-only cookies. No passwords stored in plain text. Optional integration with Microsoft 365 OAuth for enterprise single sign-on. Invite-based user onboarding with expiry controls.",
  },
];

const gdprDetails = [
  {
    title: "Lawful Basis",
    description: "Worker data is processed under legitimate interest (workforce management) and contractual necessity (employment/engagement). Consent is obtained where required for marketing communications.",
  },
  {
    title: "Data Minimisation",
    description: "We only collect and store data necessary for workforce management: identification, qualifications, right-to-work evidence, contact details, and employment history. Nothing more.",
  },
  {
    title: "Right to Access & Erasure",
    description: "Workers and organisations can request a full export of their data or request deletion. Soft-delete architecture ensures data can be recovered during grace periods before permanent removal.",
  },
  {
    title: "Data Processing Agreements",
    description: "All sub-processors (hosting, messaging, AI processing, edge delivery) have appropriate DPAs in place. We maintain a register of all third-party data processors and their compliance status.",
  },
  {
    title: "Breach Notification",
    description: "In the event of a data breach, we notify affected organisations within 72 hours as required by GDPR Article 33. We maintain an incident response plan and conduct regular security reviews.",
  },
  {
    title: "International Transfers",
    description: "AI processing may involve transient data processing outside the UK. This is covered by Standard Contractual Clauses and the data is not stored outside UK/EU jurisdiction.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Trust &amp; Security</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            Your workers&apos; data is safe with us
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Pangea handles sensitive personal data — right-to-work documents, CSCS cards, ID photos, and contact details. We treat that responsibility seriously. Here&apos;s how we protect it.
          </p>
        </div>
      </section>

      {/* Security principles */}
      <Section dark>
        <SectionLabel>Security Architecture</SectionLabel>
        <SectionTitle>Built secure from day one</SectionTitle>
        <SectionDescription>
          Security isn&apos;t a feature we bolted on — it&apos;s foundational to how Pangea is built.
        </SectionDescription>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-forest-900 rounded-xl p-6 border border-forest-700/50">
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-copper-400" />
                </div>
                <h3 className="font-serif text-base text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* GDPR */}
      <Section>
        <SectionLabel>GDPR Compliance</SectionLabel>
        <SectionTitle>Full UK GDPR compliance</SectionTitle>
        <SectionDescription>
          Pangea is designed to meet the requirements of the UK General Data Protection Regulation and the Data Protection Act 2018.
        </SectionDescription>

        <div className="max-w-4xl space-y-6">
          {gdprDetails.map((item) => (
            <div
              key={item.title}
              className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <IconCheckCircle className="w-4 h-4 text-copper-400" />
              </div>
              <div>
                <h3 className="font-serif text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Infrastructure */}
      <Section dark>
        <SectionLabel>Infrastructure</SectionLabel>
        <SectionTitle>Where your data lives</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl">
          {[
            { label: "Database", value: "Supabase PostgreSQL", sub: "London (eu-west-2)" },
            { label: "Document Storage", value: "Private Bucket", sub: "Authenticated access only" },
            { label: "Application", value: "Vercel Edge", sub: "London (lhr1)" },
            { label: "Messaging", value: "Twilio", sub: "WhatsApp Business API" },
          ].map((item) => (
            <div key={item.label} className="bg-forest-900 rounded-xl p-6 border border-forest-700/50">
              <div className="font-mono text-[0.6rem] uppercase tracking-wider text-copper-400/60 mb-2">
                {item.label}
              </div>
              <div className="font-serif text-base text-white mb-1">{item.value}</div>
              <div className="text-xs text-white/40">{item.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Questions about security?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            We&apos;re happy to discuss our security practices, complete vendor security questionnaires, or provide additional documentation for your compliance team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hello@coldlava.ai?subject=Security%20Inquiry"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <IconMail className="w-5 h-5" />
              Contact Security Team
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
