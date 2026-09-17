import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_CATEGORIES.map((c) => c.title.toUpperCase())];

  const filtered = selectedCategory === 'ALL'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title.toUpperCase() === selectedCategory);

  return (
    <section id="skills" className="py-28 md:py-36 px-[6vw] max-w-[1400px] mx-auto border-t border-[var(--border-line)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[var(--accent-red)] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[var(--accent-red)]" />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="font-display text-[clamp(40px,6.5vw,90px)] font-bold uppercase tracking-tight leading-[0.98] text-[var(--text-primary)]">
            Skills &amp; Tools
          </h2>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-red)] text-white font-semibold'
                  : 'bg-[var(--bg-paper)] text-[var(--text-secondary)] border border-[var(--border-line)] hover:border-[var(--accent-red)]'
              }`}
              data-hoverable
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border-line)]">
        {filtered.map((cat) => (
          <div
            key={cat.title}
            className="p-8 sm:p-10 border-r border-b border-[var(--border-line)] flex flex-col justify-between group hover:bg-[var(--bg-paper)]/40 transition-colors duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xs font-bold tracking-widest text-[var(--accent-red)] uppercase">
                  {cat.title}
                </h3>
                <span className="text-[11px] font-mono text-[var(--text-secondary)] opacity-60">
                  {cat.skills.length} items
                </span>
              </div>

              <ul className="flex flex-col divide-y divide-[var(--border-line)]">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-3 font-display text-base sm:text-lg font-medium text-[var(--text-primary)] flex items-center justify-between group/item"
                  >
                    <span className="group-hover/item:translate-x-1.5 transition-transform duration-200">
                      {skill}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
