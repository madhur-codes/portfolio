import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export function TimelineSection() {
  return (
    <section id="education" className="py-28 md:py-36 px-[6vw] max-w-[1400px] mx-auto border-t border-[var(--border-line)]">
      <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[var(--accent-red)] uppercase mb-4">
        <span className="w-6 h-[1.5px] bg-[var(--accent-red)]" />
        <span>EDUCATION &amp; ACHIEVEMENTS</span>
      </div>

      <h2 className="font-display text-[clamp(40px,6.5vw,90px)] font-bold uppercase tracking-tight leading-[0.98] text-[var(--text-primary)] mb-16">
        Milestone Timeline
      </h2>

      <div className="relative max-w-3xl pl-6 sm:pl-8 border-l border-[var(--border-line-strong)] ml-3 sm:ml-4 flex flex-col gap-12 sm:gap-16">
        {TIMELINE_ITEMS.map((item) => {
          const isDegree = item.type === 'degree';
          const isAward = item.type === 'award';

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Bead */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  isDegree || isAward
                    ? 'border-[var(--accent-red)] bg-[var(--bg-main)] group-hover:scale-125'
                    : 'border-[var(--text-secondary)] bg-[var(--bg-main)] group-hover:border-[var(--accent-red)]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isDegree || isAward
                      ? 'bg-[var(--accent-red)]'
                      : 'bg-transparent group-hover:bg-[var(--accent-red)]'
                  }`}
                />
              </div>

              {/* Year label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs tracking-widest uppercase font-bold text-[var(--accent-red)]">
                  {item.year}
                </span>
                {isDegree && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[var(--accent-red)]/10 text-[var(--accent-red)] font-semibold">
                    In Progress
                  </span>
                )}
                {isAward && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                    Rank 1
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent-red)] transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-[var(--text-secondary)]">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
