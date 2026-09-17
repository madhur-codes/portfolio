import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PHILOSOPHY_PANELS } from '../data/portfolioData';

export function HorizontalPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const progress = (el.scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < maxScroll - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#0E0D0C] text-[#F7F5F1] relative overflow-hidden">
      {/* Header with section title & controls */}
      <div className="px-[6vw] max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#B3231C] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#B3231C]" />
            <span>DISCIPLINES & PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F7F5F1]">
            Engineering &amp; Aesthetics
          </h2>
        </div>

        {/* Prev / Next navigation buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            aria-label="Previous card"
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#B3231C] hover:text-[#B3231C] disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white transition-all"
            data-hoverable
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            aria-label="Next card"
            className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#B3231C] hover:text-[#B3231C] disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white transition-all"
            data-hoverable
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Cards Reel */}
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-[6vw] pb-10 cursor-grab active:cursor-grabbing"
      >
        {PHILOSOPHY_PANELS.map((panel) => (
          <div
            key={panel.num}
            className="shrink-0 w-[82vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] max-w-[480px] p-8 sm:p-10 rounded-2xl bg-[#171615] border border-white/10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all duration-300 hover:border-[#B3231C]/60 group"
          >
            <div>
              {/* Pillar Number */}
              <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#B3231C] mb-8 uppercase font-bold">
                <span>{panel.num}</span>
                <span className="text-white/40">{panel.highlight}</span>
              </div>

              {/* Big Title */}
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F7F5F1] leading-none mb-6">
                <span>{panel.title}</span>
                {panel.subtitle && (
                  <span className="block italic font-normal text-[#B3231C] font-serif text-3xl sm:text-4xl mt-1">
                    {panel.subtitle}
                  </span>
                )}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/60 font-body leading-relaxed border-t border-white/10 pt-6">
              {panel.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Track Progress */}
      <div className="px-[6vw] max-w-[1400px] mx-auto mt-6 flex items-center justify-between text-xs font-mono text-white/40 tracking-widest uppercase">
        <span>SWIPE OR USE ARROWS</span>
        <div className="w-36 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-[#B3231C] transition-all duration-150"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
