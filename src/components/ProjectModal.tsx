import { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-main)] text-[var(--text-primary)] rounded-2xl border border-[var(--border-line-strong)] shadow-2xl p-6 sm:p-10 flex flex-col gap-8 no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-line)] pb-6">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest font-mono text-[var(--accent-red)] mb-2 uppercase">
              <span>{project.num}</span>
              <span>•</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2
              id="modal-project-title"
              className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)]"
            >
              {project.title}
            </h2>
            <p className="text-sm font-semibold tracking-wider text-[var(--text-secondary)] mt-1 uppercase">
              {project.tag}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="w-10 h-10 rounded-full border border-[var(--border-line)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-red)] transition-colors"
            data-hoverable
          >
            <X size={18} />
          </button>
        </div>

        {/* Narrative / Description */}
        <div className="flex flex-col gap-4">
          <p className="text-base sm:text-lg font-body leading-relaxed text-[var(--text-primary)]">
            {project.description}
          </p>
          <p className="text-sm sm:text-base font-body leading-relaxed text-[var(--text-secondary)]">
            {project.longDescription}
          </p>
        </div>

        {/* Features list */}
        {project.features && project.features.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--accent-red)]">
              KEY CAPABILITIES & HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--bg-paper)]/70 border border-[var(--border-line)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-[var(--accent-red)] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--accent-red)] flex items-center gap-2">
              <Layers size={14} />
              SYSTEM ARCHITECTURE
            </h3>
            <div className="flex flex-col gap-2 p-4 rounded-xl border border-[var(--border-line)] bg-[var(--bg-paper)]/40">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="text-xs sm:text-sm text-[var(--text-secondary)] font-mono">
                  → {arch}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--accent-red)]">
            TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider border border-[var(--border-line-strong)] text-[var(--text-primary)] bg-[var(--bg-paper)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border-line)]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-main)] text-xs font-display font-bold tracking-wider hover:opacity-90 transition-opacity"
                data-hoverable
              >
                <Github size={14} />
                <span>GITHUB REPO</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-red)] text-white text-xs font-display font-bold tracking-wider hover:bg-[var(--accent-red-hover)] transition-colors"
                data-hoverable
              >
                <ExternalLink size={14} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-display font-semibold tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase"
            data-hoverable
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
