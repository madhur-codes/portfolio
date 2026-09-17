import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'TIMELINE', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ease-out px-[6vw] flex items-center justify-between ${
          isScrolled
            ? 'py-4 bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-line)] shadow-sm'
            : 'py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="font-display text-sm md:text-base font-bold tracking-widest text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
          data-hoverable
        >
          MADHUR TIWARI
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-xs tracking-widest font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1 group"
              data-hoverable
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent-red)] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right action group */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full border border-[var(--border-line-strong)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-red)] hover:text-[var(--accent-red)] transition-all duration-200"
            data-hoverable
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[var(--accent-red)] text-white text-xs font-display font-semibold tracking-wider hover:bg-[var(--accent-red-hover)] transition-colors"
            data-hoverable
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[890] bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col justify-between px-[8vw] py-24 transition-transform duration-500 ease-[cubic-bezier(0.16,0.84,0.24,1)] md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-5 mt-4">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-4xl sm:text-5xl font-bold tracking-tight py-2 border-b border-[var(--border-line)] flex items-center justify-between text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-xs tracking-widest text-[var(--accent-red)] font-normal">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-[var(--border-line)] pt-6 flex flex-col gap-2">
          <p className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">
            India • Developer • Creative Technologist
          </p>
          <a
            href="mailto:madhurtiwari539@gmail.com"
            className="text-sm font-display font-medium text-[var(--accent-red)] flex items-center gap-1"
          >
            madhurtiwari539@gmail.com <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </>
  );
}
