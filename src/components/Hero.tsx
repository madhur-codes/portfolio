import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 px-[6vw] max-w-[1400px] mx-auto overflow-hidden"
    >
      {/* Background architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 flex justify-between z-0">
        <div className="w-[1px] h-full bg-[var(--border-line-strong)]" />
        <div className="w-[1px] h-full bg-[var(--border-line-strong)] hidden sm:block" />
        <div className="w-[1px] h-full bg-[var(--border-line-strong)]" />
        <div className="w-[1px] h-full bg-[var(--border-line-strong)] hidden md:block" />
        <div className="w-[1px] h-full bg-[var(--border-line-strong)] hidden lg:block" />
        <div className="w-[1px] h-full bg-[var(--border-line-strong)]" />
      </div>

      {/* Top right corner index */}
      <div className="absolute top-28 right-[6vw] text-right text-xs tracking-widest text-[var(--text-secondary)] leading-relaxed hidden sm:block z-10">
        <p className="font-semibold text-[var(--text-primary)]">INDIA</p>
        <p>DEVELOPER</p>
        <p>CREATIVE TECHNOLOGIST</p>
      </div>

      <div className="relative z-10 flex flex-col justify-center">
        {/* Eyebrow badge */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[var(--text-secondary)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] animate-pulse" />
          <span>{PERSONAL_INFO.degree}</span>
        </div>

        {/* Subtitle Name */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-[var(--text-secondary)] mb-2">
          {PERSONAL_INFO.name}
        </p>

        {/* Big Editorial Headline */}
        <h1 className="font-display text-[clamp(44px,9vw,150px)] font-bold tracking-tight uppercase leading-[0.95] text-[var(--text-primary)] mb-8">
          <span className="block">I BUILD DIGITAL</span>
          <span className="block italic font-normal text-[var(--accent-red)] font-serif">
            Experiences.
          </span>
        </h1>

        {/* Description & CTA Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 pt-4 border-t border-[var(--border-line)] max-w-5xl">
          <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => scrollTo('#work')}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--accent-red)] text-white font-display text-xs font-bold tracking-widest uppercase hover:bg-[var(--accent-red-hover)] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[var(--accent-red)]/20 group"
              data-hoverable
            >
              <span>VIEW MY WORK</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="font-display text-xs font-bold tracking-widest uppercase text-[var(--text-primary)] relative py-1 group border-b border-[var(--border-line-strong)] hover:border-[var(--accent-red)] transition-colors"
              data-hoverable
            >
              <span>LET'S CONNECT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 sm:mt-24 flex items-center gap-4 text-xs tracking-widest text-[var(--text-secondary)] uppercase">
        <span>SCROLL TO EXPLORE</span>
        <div className="w-12 h-[1px] bg-[var(--border-line-strong)] relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-4 bg-[var(--accent-red)] animate-[marquee_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
