import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <div className="font-mono text-sm text-copper-400 mb-4">404</div>
        <h1 className="font-serif text-4xl text-white mb-4">Page not found</h1>
        <p className="text-white/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
