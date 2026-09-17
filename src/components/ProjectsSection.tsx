import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-28 md:py-36 px-[6vw] max-w-[1400px] mx-auto border-t border-[var(--border-line)]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[var(--accent-red)] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[var(--accent-red)]" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="font-display text-[clamp(44px,7.5vw,110px)] font-bold uppercase tracking-tight leading-[0.96] text-[var(--text-primary)]">
            Featured <br className="hidden sm:block" />
            Projects
          </h2>
        </div>

        <p className="text-sm md:text-base text-[var(--text-secondary)] font-body max-w-xs md:text-right leading-relaxed">
          Four projects spanning full-stack platforms, programming fundamentals, and creative technology.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col">
        {PROJECTS.map((project, index) => {
          const isReverse = index % 2 === 1;

          return (
            <article
              key={project.id}
              className="py-16 md:py-24 border-t border-[var(--border-line)] last:border-b grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
            >
              {/* Media card preview */}
              <div
                className={`lg:col-span-6 cursor-pointer ${
                  isReverse ? 'lg:order-2' : 'lg:order-1'
                }`}
                onClick={() => setActiveProject(project)}
                data-cursor-view
                data-hoverable
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--text-charcoal)] border border-[var(--border-line-strong)] group-hover:border-[var(--accent-red)] transition-all duration-500 shadow-md">
                  {/* Subtle graphical background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/80 flex items-center justify-center p-8">
                    {/* Big stylized glyph watermark */}
                    <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white/80 tracking-tighter select-none transform transition-transform duration-700 ease-out group-hover:scale-105">
                      {project.glyph}
                    </span>
                  </div>

                  {/* Corner tag */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
                      {project.tag}
                    </span>
                    <span className="text-xs font-display font-semibold text-white/90 uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project <ArrowUpRight size={14} />
                    </span>
                  </div>

                  {/* Red gradient hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-red)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Project information */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${
                  isReverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Meta bar */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-sm font-bold text-[var(--accent-red)] tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    {project.num}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-secondary)] opacity-60">
                    • {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setActiveProject(project)}
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)] mb-5 cursor-pointer hover:text-[var(--accent-red)] transition-colors inline-flex items-center gap-3"
                  data-hoverable
                >
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={24}
                    className="text-[var(--accent-red)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </h3>

                {/* Description */}
                <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider border border-[var(--border-line-strong)] text-[var(--text-secondary)] bg-[var(--bg-paper)]/40 group-hover:border-[var(--accent-red)]/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Detail button */}
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest uppercase text-[var(--accent-red)] border-b border-[var(--accent-red)] pb-1 hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                    data-hoverable
                  >
                    <span>EXPLORE ARCHITECTURE & DETAILS</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Project Modal details */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
