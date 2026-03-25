import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionLabel, SectionTitle } from "@/components/section";
import {
  IconCalendar,
  IconCheckCircle,
  IconMessage,
  IconSearch,
  IconShield,
  IconClipboard,
  IconClock,
  IconBot,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Watch",
  description:
    "Watch Pangea in action. Product walkthrough videos showing WhatsApp onboarding, AI cert verification, compliance automation, and more.",
};

function IconPlay({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const upcomingVideos = [
  {
    title: "Full Platform Walkthrough",
    duration: "5 min",
    description: "End-to-end tour of the Pangea dashboard — from worker pipeline to compliance reports.",
    icon: IconClipboard,
  },
  {
    title: "WhatsApp Onboarding Flow",
    duration: "3 min",
    description: "Watch Amber qualify a real worker via WhatsApp in under 4 minutes.",
    icon: IconMessage,
  },
  {
    title: "AI Cert Verification",
    duration: "2 min",
    description: "See how Vision AI reads a CSCS card photo and extracts type, expiry, and holder details.",
    icon: IconSearch,
  },
  {
    title: "Compliance Automation",
    duration: "3 min",
    description: "How automatic expiry tracking, WhatsApp reminders, and blocking rules work together.",
    icon: IconShield,
  },
  {
    title: "Labour Allocation & Shift Offers",
    duration: "3 min",
    description: "Pool search, broadcast offers, first-to-accept — filling positions in hours.",
    icon: IconClock,
  },
  {
    title: "Rex AI Assistant",
    duration: "2 min",
    description: "Natural language workforce queries and operations commands in the dashboard.",
    icon: IconBot,
  },
];

export default function WatchPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Watch</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            See Pangea in action
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Short product walkthroughs showing exactly how Pangea works — from WhatsApp onboarding to compliance automation.
          </p>
        </div>
      </section>

      {/* Featured video placeholder */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-forest-900 rounded-xl border border-forest-700/50 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-copper-900)_0%,_transparent_70%)] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-forest-700)_0%,_transparent_50%)] opacity-30" />

            <div className="relative text-center z-10">
              <div className="w-20 h-20 rounded-full bg-copper-500/20 border-2 border-copper-500/40 flex items-center justify-center mx-auto mb-6 group-hover:bg-copper-500/30 group-hover:border-copper-500/60 transition-all group-hover:scale-105">
                <IconPlay className="w-8 h-8 text-copper-400 ml-1" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">
                Product walkthrough coming soon
              </h3>
              <p className="text-sm text-white/45 max-w-md mx-auto">
                We&apos;re recording a full platform walkthrough. In the meantime, book a live demo and we&apos;ll show you everything in person.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <IconCalendar className="w-5 h-5" />
              Book a Live Demo Instead
            </Link>
          </div>
        </div>
      </Section>

      {/* Upcoming videos */}
      <Section>
        <SectionLabel>Coming Soon</SectionLabel>
        <SectionTitle>Videos in production</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {upcomingVideos.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-forest-800 rounded-xl border border-forest-700/50 overflow-hidden"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-forest-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-forest-700)_0%,_transparent_70%)] opacity-30" />
                  <div className="relative flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-copper-500/15 border border-copper-500/25 flex items-center justify-center">
                      <IconPlay className="w-4 h-4 text-copper-400/60 ml-0.5" />
                    </div>
                    <span className="font-mono text-[0.55rem] uppercase tracking-wider text-white/25">
                      Coming soon
                    </span>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 bg-black/60 rounded px-2 py-0.5">
                    <span className="font-mono text-[0.6rem] text-white/60">{v.duration}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-4 h-4 text-copper-400 flex-shrink-0" />
                    <h3 className="font-serif text-sm text-white">{v.title}</h3>
                  </div>
                  <p className="text-xs text-white/45 leading-relaxed">{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Notify */}
      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="text-center">
            Want to be notified when videos are live?
          </SectionTitle>
          <p className="text-lg text-white/60 mb-8">
            Drop us an email and we&apos;ll let you know when our product walkthroughs are ready to watch.
          </p>
          <Link
            href="mailto:hello@coldlava.ai?subject=Notify%20me%20when%20Pangea%20videos%20are%20live"
            className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Notified
          </Link>
        </div>
      </Section>
    </>
  );
}
