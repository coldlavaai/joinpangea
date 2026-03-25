"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/industries", label: "Industries" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/about", label: "About" },
  { href: "/watch", label: "Watch" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-900/80 backdrop-blur-xl border-b border-forest-700/20 shadow-[0_1px_20px_0_rgba(193,127,89,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/pangea-logo.png"
              alt="Pangea"
              width={140}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-copper-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="bg-copper-500 hover:bg-copper-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-forest-800/60 backdrop-blur-xl border-t border-forest-700/20 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-white/70 hover:text-copper-400 transition-colors py-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setOpen(false)}
            className="block bg-copper-500 hover:bg-copper-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
