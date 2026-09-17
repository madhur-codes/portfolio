import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  const focusAreas = [
    { num: '01', title: 'Computer Science', detail: 'Algorithms, Data Structures & Systems' },
    { num: '02', title: 'Web Development', detail: 'Full-stack architectures, Node & APIs' },
    { num: '03', title: 'UI / UX', detail: 'Visual hierarchy, typography & ergonomics' },
    { num: '04', title: 'Creative Technology', detail: 'Interaction, animation & kinetic interfaces' },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-[6vw] max-w-[1400px] mx-auto border-t border-[var(--border-line)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Pillars */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[var(--accent-red)] uppercase mb-6">
            <span className="w-6 h-[1.5px] bg-[var(--accent-red)]" />
            <span>ABOUT</span>
          </div>

          <h2 className="font-display text-[clamp(36px,5.5vw,80px)] font-bold uppercase tracking-tight leading-[0.98] text-[var(--text-primary)] mb-10">
            <span className="block">A DEVELOPER</span>
            <span className="block">WHO LIKES TO</span>
            <span className="block italic font-normal text-[var(--accent-red)] font-serif">
              Build Things.
            </span>
          </h2>

          <div className="border-t border-[var(--border-line)] mt-12">
            {focusAreas.map((area) => (
              <div
                key={area.num}
                className="py-5 border-b border-[var(--border-line)] flex items-baseline justify-between gap-6 group hover:bg-[var(--bg-paper)]/50 px-2 transition-colors duration-200"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-sm font-bold text-[var(--accent-red)] tracking-wider">
                    {area.num}
                  </span>
                  <span className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-200">
                    {area.title}
                  </span>
                </div>
                <span className="hidden sm:block text-xs tracking-wider text-[var(--text-secondary)] font-mono">
                  {area.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative Copy */}
        <div className="lg:col-span-5 lg:pt-16 flex flex-col gap-6">
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-body">
            {PERSONAL_INFO.detailedBio1}
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-body">
            {PERSONAL_INFO.detailedBio2}
          </p>

          <div className="mt-6 p-6 rounded-xl border border-[var(--border-line)] bg-[var(--bg-paper)]/60 flex flex-col gap-3">
            <div className="text-xs uppercase tracking-widest font-bold text-[var(--accent-red)]">
              ACADEMIC FOCUS
            </div>
            <p className="text-sm text-[var(--text-primary)] font-medium">
              B.Sc. Computer Science • 2026 Cohort
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              {PERSONAL_INFO.college}, {PERSONAL_INFO.location}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
