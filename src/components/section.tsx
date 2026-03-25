import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 overflow-hidden noise-overlay ${dark ? "bg-forest-800" : "bg-forest-900"} ${className}`}
    >
      {/* Atmospheric radial gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          dark
            ? "bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-forest-700)_0%,_transparent_60%)] opacity-30"
            : "bg-[radial-gradient(ellipse_at_top_left,_var(--color-copper-900)_0%,_transparent_50%)] opacity-15"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-copper-400 mb-4">
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg text-white/60 max-w-2xl mb-12">{children}</p>
  );
}
