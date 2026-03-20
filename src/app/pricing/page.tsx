import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import { IconCheckCircle, IconUsers, IconZap, IconStar, IconGlobe, IconPound, IconShield, IconMessage, IconBarChart, IconBriefcase, IconClock, IconCalendar } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for construction workforce management. Plans from £497/mo (UK) and $597/mo (US). Setup included.",
};

const ukPlans = [
  {
    name: "Starter",
    workers: "Up to 30 workers",
    price: "£497",
    setup: "£1,497 setup",
    features: [
      "WhatsApp onboarding",
      "CSCS AI verification",
      "Right-to-work capture",
      "H&S induction + quiz",
      "Cert expiry auto-alerts",
      "Employer dashboard",
    ],
    featured: false,
  },
  {
    name: "Growth",
    workers: "31–100 workers",
    price: "£797",
    setup: "£2,497 setup",
    features: [
      "Everything in Starter",
      "Multi-site management",
      "Job assignment & roster",
      "Compliance audit export",
      "Labour request broadcasting",
      "Performance scoring (RAP)",
    ],
    featured: true,
  },
  {
    name: "Scale",
    workers: "101–200+ workers",
    price: "£1,197",
    setup: "£3,997+ setup",
    features: [
      "Everything in Growth",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
      "Custom reporting",
    ],
    featured: false,
  },
];

const usPlans = [
  {
    name: "Starter",
    workers: "Up to 30 workers",
    price: "$597",
    setup: "$1,997 setup",
    features: [
      "SMS onboarding (Twilio)",
      "OSHA card AI verification",
      "I-9 / E-Verify guidance",
      "Safety orientation + quiz",
      "Cert expiry auto-alerts",
      "Employer dashboard",
    ],
    featured: false,
  },
  {
    name: "Growth",
    workers: "31–100 workers",
    price: "$997",
    setup: "$3,497 setup",
    features: [
      "Everything in Starter",
      "NYC SST card tracking",
      "Spanish language support",
      "Multi-site management",
      "Labour request broadcasting",
      "Compliance audit export",
    ],
    featured: true,
  },
  {
    name: "Scale",
    workers: "101–200+ workers",
    price: "$1,497",
    setup: "$4,997+ setup",
    features: [
      "Everything in Growth",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
      "Custom reporting",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "What's included in the setup fee?",
    a: "Full system configuration, WhatsApp/SMS channel setup, custom branding, H&S induction content creation, staff training, and data migration from existing spreadsheets if needed.",
    icon: IconBriefcase,
  },
  {
    q: "Are there any per-worker charges?",
    a: "No. Your monthly fee covers your entire workforce up to the plan limit. WhatsApp/SMS messaging costs are included.",
    icon: IconUsers,
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade at any time. If your workforce grows beyond your plan limit, we'll move you to the next tier automatically.",
    icon: IconZap,
  },
  {
    q: "What if I have more than 200 workers?",
    a: "Contact us for custom enterprise pricing. We'll build a plan around your specific needs.",
    icon: IconBarChart,
  },
  {
    q: "Is there a contract?",
    a: "Annual contracts with a discount, or month-to-month. Either way, you can cancel at any time with 30 days notice.",
    icon: IconShield,
  },
  {
    q: "How long does setup take?",
    a: "Most customers are live within 2–3 weeks. That includes configuration, training, and importing your existing workforce data.",
    icon: IconClock,
  },
];

function PricingCard({
  plan,
  period,
}: {
  plan: (typeof ukPlans)[0];
  period: string;
}) {
  return (
    <div
      className={`rounded-xl p-8 border ${
        plan.featured
          ? "border-copper-500 bg-forest-800 relative"
          : "border-forest-700/50 bg-forest-900"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-copper-500 text-white text-xs font-mono uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1.5">
          <IconStar className="w-3 h-3" />
          Most Popular
        </div>
      )}
      <div className="font-mono text-xs uppercase tracking-wider text-copper-400 mb-1">
        {plan.name}
      </div>
      <div className="text-sm text-white/50 mb-4">{plan.workers}</div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-serif text-4xl text-white">{plan.price}</span>
        <span className="text-white/50 text-sm">{period}</span>
      </div>
      <div className="text-xs text-white/40 mb-8">{plan.setup}</div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <IconCheckCircle className="w-4 h-4 text-copper-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/70">{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/demo"
        className={`block text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
          plan.featured
            ? "bg-copper-500 hover:bg-copper-600 text-white"
            : "border border-forest-600 hover:border-forest-400 text-white/80 hover:text-white"
        }`}
      >
        Book a Demo
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            No hidden fees. No per-user charges. Just one monthly price based on your workforce size. Pays for itself in month one.
          </p>
        </div>
      </section>

      {/* UK Pricing */}
      <Section dark>
        <div className="text-center mb-12">
          <SectionLabel>United Kingdom</SectionLabel>
          <SectionTitle className="text-center">UK Plans</SectionTitle>
          <p className="text-sm text-white/50 flex items-center justify-center gap-2">
            <IconGlobe className="w-4 h-4 text-copper-400" />
            All prices in GBP. WhatsApp-based onboarding. CSCS and right-to-work verification.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ukPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} period="/mo" />
          ))}
        </div>
      </Section>

      {/* US Pricing */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>United States</SectionLabel>
          <SectionTitle className="text-center">US Plans</SectionTitle>
          <p className="text-sm text-white/50 flex items-center justify-center gap-2">
            <IconGlobe className="w-4 h-4 text-copper-400" />
            All prices in USD. SMS-based onboarding. OSHA and I-9/E-Verify support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} period="/mo" />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <SectionTitle className="text-center">
            Frequently asked questions
          </SectionTitle>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-forest-700/50 pb-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-copper-500/10 border border-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <faq.icon className="w-5 h-5 text-copper-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Ready to get started?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Book a demo and we&apos;ll recommend the right plan for your business.
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
