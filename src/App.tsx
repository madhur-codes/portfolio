/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HorizontalPhilosophy } from './components/HorizontalPhilosophy';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { StatementSection } from './components/StatementSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-[var(--accent-red)] selection:text-white">
      {/* Scroll Progress Indicator */}
      <ProgressBar />

      {/* Smooth Cursor Follower with interactive states */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <HorizontalPhilosophy />
        <SkillsSection />
        <TimelineSection />
        <StatementSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
