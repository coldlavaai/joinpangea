import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/platform", label: "Platform" },
    { href: "/integrations", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/demo", label: "Book a Demo" },
  ],
  Solutions: [
    { href: "/industries", label: "Industries" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/compare", label: "Compare" },
    { href: "/compliance", label: "Compliance Guide" },
    { href: "/why-pangea", label: "Why Pangea" },
  ],
  Resources: [
    { href: "/watch", label: "Watch" },
    { href: "/blog", label: "Blog" },
    { href: "/security", label: "Trust & Security" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "mailto:hello@coldlava.ai", label: "hello@coldlava.ai" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-forest-900 border-t border-forest-700/20">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/30 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-8 bg-gradient-to-b from-copper-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/pangea-logo-tagline.png"
              alt="Pangea — Built on solid ground"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm text-white/50 max-w-xs">
              Messaging-native workforce management for construction.
              No apps. No portals. Just results.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-copper-400 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-forest-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Pangea. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
