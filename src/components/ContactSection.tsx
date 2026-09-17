import { useState, useRef } from 'react';
import { Copy, Check, ArrowUpRight, Mail, Phone, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const magneticRef = useRef<HTMLAnchorElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = magneticRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setMagneticOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0E0D0C] text-[#F7F5F1] relative overflow-hidden">
      <div className="px-[6vw] max-w-[1400px] mx-auto">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#B3231C] uppercase mb-6">
          <span className="w-6 h-[1.5px] bg-[#B3231C]" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-[clamp(44px,8.5vw,140px)] font-bold uppercase tracking-tight leading-[0.95] text-[#F7F5F1] mb-16 md:mb-24">
          <span className="block">Let's Build</span>
          <span className="block -mt-1 sm:-mt-3">
            Something{' '}
            <span className="italic font-normal text-[#B3231C] font-serif">
              Useful.
            </span>
          </span>
        </h2>

        {/* Contact info grid & Magnetic Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 sm:gap-16 pt-12 border-t border-white/15">
          
          {/* Contact Details Columns */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            
            {/* Email Block */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                DIRECT EMAIL
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display text-xl sm:text-2xl font-medium text-white hover:text-[#B3231C] border-b border-white/20 hover:border-[#B3231C] pb-1 transition-colors"
                  data-hoverable
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  title="Copy email to clipboard"
                  className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-[#B3231C] transition-colors"
                  data-hoverable
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[11px] font-mono text-emerald-400 animate-fadeIn">
                  ✓ Copied to clipboard
                </span>
              )}
            </div>

            {/* GitHub Block */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                GITHUB REPOSITORY
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl sm:text-2xl font-medium text-white hover:text-[#B3231C] border-b border-white/20 hover:border-[#B3231C] pb-1 transition-colors inline-flex items-center gap-2"
                data-hoverable
              >
                <span>github.com/madhur-codes</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Phone Block */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                MOBILE
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-display text-xl sm:text-2xl font-medium text-white hover:text-[#B3231C] border-b border-white/20 hover:border-[#B3231C] pb-1 transition-colors"
                  data-hoverable
                >
                  {PERSONAL_INFO.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  title="Copy phone to clipboard"
                  className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-[#B3231C] transition-colors"
                  data-hoverable
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

          </div>

          {/* Magnetic Circular CTA */}
          <div className="flex justify-start lg:justify-end">
            <a
              ref={magneticRef}
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `translate3d(${magneticOffset.x}px, ${magneticOffset.y}px, 0)`,
                transition: magneticOffset.x === 0 ? 'transform 0.5s cubic-bezier(0.16, 0.84, 0.24, 1)' : 'none'
              }}
              className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#B3231C] text-white flex flex-col items-center justify-center text-center p-6 font-display font-bold text-sm sm:text-base tracking-wider uppercase leading-tight shadow-2xl hover:bg-[#9c1d17] hover:scale-105 transition-all duration-300 group"
              data-hoverable
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight
                size={22}
                className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
