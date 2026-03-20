import Image from "next/image";

interface ScreenshotProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function Screenshot({ src, alt, title, description }: ScreenshotProps) {
  return (
    <div className="space-y-4">
      <div className="relative rounded-xl overflow-hidden border border-forest-700/50 shadow-2xl shadow-black/30">
        {/* Browser chrome */}
        <div className="bg-forest-800 px-4 py-2.5 flex items-center gap-2 border-b border-forest-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 ml-3">
            <div className="bg-forest-900/50 rounded-md px-3 py-1 max-w-xs">
              <span className="text-[0.6rem] text-white/30 font-mono">pangaea.app</span>
            </div>
          </div>
        </div>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto"
          quality={90}
        />
      </div>
      <div>
        <h3 className="font-serif text-lg text-white mb-1">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function ScreenshotGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {children}
    </div>
  );
}

export function ScreenshotFull({ src, alt, title, description }: ScreenshotProps) {
  return (
    <div className="space-y-6">
      <div className="relative rounded-xl overflow-hidden border border-forest-700/50 shadow-2xl shadow-black/30">
        {/* Browser chrome */}
        <div className="bg-forest-800 px-4 py-2.5 flex items-center gap-2 border-b border-forest-700/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 ml-3">
            <div className="bg-forest-900/50 rounded-md px-3 py-1 max-w-xs">
              <span className="text-[0.6rem] text-white/30 font-mono">pangaea.app</span>
            </div>
          </div>
        </div>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto"
          quality={90}
        />
      </div>
      <div className="max-w-2xl">
        <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
        <p className="text-white/50 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
