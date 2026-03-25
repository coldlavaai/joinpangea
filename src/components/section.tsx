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
      className={`relative py-24 sm:py-32 overflow-hidden noise-overlay ${dark ? "bg-forest-800" : "bg-forest-900"} ${className}`}
    >
      {/* Atmospheric radial gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          dark
            ? "bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-forest-700)_0%,_transparent_60%)] opacity-25"
            : "bg-[radial-gradient(ellipse_at_top_left,_var(--color-copper-900)_0%,_transparent_50%)] opacity-10"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-copper-400 mb-5">
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
      className={`font-serif text-3xl sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15] text-white mb-8 tracking-[-0.01em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-relaxed text-white/55 max-w-2xl mb-14">{children}</p>
  );
}
