import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0E0D0C] text-white/60 py-16 px-[6vw] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        
        {/* Top block */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <span className="font-display text-xl font-bold tracking-widest text-white uppercase">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs sm:text-sm text-white/60 mt-1 font-body">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-white/40 mt-1">
              {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              data-hoverable
            >
              GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-white/70 hover:text-white transition-colors"
              data-hoverable
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-white/40">
          <p>© 2026 MADHUR TIWARI • ALL RIGHTS RESERVED</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#B3231C] uppercase font-bold tracking-widest transition-colors group"
            data-hoverable
          >
            <span>BACK TO TOP</span>
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>

      </div>
    </footer>
  );
}
