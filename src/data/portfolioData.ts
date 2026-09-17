import { Project, SkillCategory, TimelineItem, PhilosophyItem } from '../types';

export const PERSONAL_INFO = {
  name: "Madhur Tiwari",
  role: "Developer & Creative Technologist",
  degree: "B.Sc. Computer Science — 2026",
  college: "Janta College, Bakewar",
  location: "India",
  email: "madhurtiwari539@gmail.com",
  github: "https://github.com/madhur-codes",
  phone: "+91 7668137452",
  phoneDisplay: "+91 7668137452",
  bio: "B.Sc. Computer Science student focused on software development, web technologies, UI/UX, and creative technology.",
  detailedBio1: "Madhur is a B.Sc. Computer Science student building a practical foundation across software engineering, web development, and applied design. His work spans full-stack platforms — authentication, APIs, databases, and payments — built with the same care given to how an interface looks and feels.",
  detailedBio2: "Alongside coursework, he explores AI/ML fundamentals and creative technology: motion, interaction, and visual systems that make software feel considered rather than assembled. He is currently based in India, learning in public and shipping small, deliberate projects."
};

export const PROJECTS: Project[] = [
  {
    id: "veylo",
    num: "01",
    glyph: "VEYLO",
    title: "Veylo",
    tag: "CLOUD STORAGE PLATFORM",
    category: "PERSONAL PROJECT",
    year: "2025 – PRESENT",
    description: "A personal cloud storage platform inspired by modern cloud-drive experiences — built around fast uploads, clean file organisation, and secure sign-in.",
    longDescription: "Veylo is designed to deliver a desktop-grade file management experience on the web. It handles seamless multi-part file uploads, encrypted metadata storage, smart folder hierarchies, and granular sharing permissions through Google OAuth and Drive APIs.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Google OAuth", "Google Drive API", "Tailwind CSS"],
    features: [
      "Secure Google OAuth 2.0 user authentication and token refresh handling",
      "Fast multi-file uploading with progress tracking and MIME validation",
      "Prisma ORM schema with normalized relational models for folders & permissions",
      "Drive API synchronization enabling resilient backup storage and retrieval",
      "Responsive file explorer interface with instant search and category filtering"
    ],
    architecture: [
      "Client: Responsive SPA with preview modals and drag-and-drop file uploaders",
      "Server: Express REST API with modular routes, JWT middleware, and rate limiting",
      "Database: PostgreSQL managed via Prisma migrations with indexed search keys"
    ],
    githubUrl: "https://github.com/madhur-codes"
  },
  {
    id: "risx-portal",
    num: "02",
    glyph: "RISX",
    title: "Risx Portal",
    tag: "FULL-STACK WEB PLATFORM",
    category: "FULL-STACK PLATFORM",
    year: "2024 – 2025",
    description: "A full-stack web platform handling authentication, services, orders, and payments end-to-end — including REST APIs, database management, and secure JWT sessions.",
    longDescription: "Risx Portal serves as a complete digital service marketplace and management hub. It bridges client service discovery with back-office order fulfillment, automated invoicing, and role-based operational permissions.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "REST API", "Payment Gateway"],
    features: [
      "End-to-end transaction flow from catalog inquiry to payment verification",
      "Strict stateless JWT session validation with role-based access control",
      "Robust error handling and schema validation on all incoming payload routes",
      "Real-time order state progression tracking with timestamped audit logs",
      "Normalized transactional database schema ensuring financial accuracy"
    ],
    architecture: [
      "Backend: RESTful architecture adhering to resource-oriented design principles",
      "Security: Bcrypt password hashing, CSRF headers, and sanitize-html guards",
      "Persistence: PostgreSQL with relational constraints and cascade policies"
    ],
    githubUrl: "https://github.com/madhur-codes"
  },
  {
    id: "python-projects",
    num: "03",
    glyph: "PY",
    title: "Python Projects",
    tag: "PROGRAMMING FUNDAMENTALS",
    category: "PROJECT COLLECTION",
    year: "2024 – PRESENT",
    description: "A growing collection of Python projects built while developing programming fundamentals and problem-solving skills — from scripts to small applications.",
    longDescription: "A comprehensive repository of algorithmic problem solving, automated system utilities, data structure implementations, and practical automation scripts constructed to master core computing principles.",
    stack: ["Python", "Algorithms", "OOP", "File I/O", "CLI Tools", "Automation"],
    features: [
      "Data structure implementations including binary search trees, stacks, and hash maps",
      "Command-line automation utilities for file batching, renaming, and parsing",
      "Algorithmic challenges solved with clean time and space complexity optimizations",
      "Object-oriented programming patterns with clean test coverage and type hints"
    ],
    architecture: [
      "Modular Python packages with structured entry points and unit tests",
      "Clean adherence to PEP 8 standards and modern Python typing"
    ],
    githubUrl: "https://github.com/madhur-codes"
  },
  {
    id: "creative-tech",
    num: "04",
    glyph: "CT",
    title: "Creative Technology",
    tag: "MOTION & VISUAL DESIGN",
    category: "CREATIVE PRACTICE",
    year: "2024 – PRESENT",
    description: "2D animation, visual design, motion experiments, UI/UX exploration, and interactive digital concepts — a space for ideas that sit between design and code.",
    longDescription: "Bridging the gap between engineering rigor and aesthetic restraint. Experiments explore typography dynamics, physics-based UI responses, editorial page layouts, and micro-interactions that elevate software into memorable experiences.",
    stack: ["Motion Design", "UI/UX", "Interaction", "GSAP / Framer Motion", "Figma", "Photoshop"],
    features: [
      "Editorial typography pairing and high-contrast typographic layouts",
      "Physics-tuned spring interactions and kinetic scroll triggers",
      "Interactive prototypes crafted in Figma prior to code translation",
      "Accessible visual hierarchies conforming to WCAG AA contrast standards"
    ],
    architecture: [
      "Component-level animation orchestration with reduced-motion fallbacks",
      "Vector-optimized asset pipelines ensuring razor-sharp rendering on Retina displays"
    ],
    githubUrl: "https://github.com/madhur-codes"
  }
];

export const PHILOSOPHY_PANELS: PhilosophyItem[] = [
  {
    num: "01",
    title: "Web",
    highlight: "Architecture",
    description: "Full-stack applications, APIs, and databases — built to be fast, secure, and easy to maintain."
  },
  {
    num: "02",
    title: "Software",
    subtitle: "Engineering",
    highlight: "Fundamentals",
    description: "Programming fundamentals and problem-solving, practiced through Python, TypeScript, and everyday tooling."
  },
  {
    num: "03",
    title: "Design",
    highlight: "Restraint",
    description: "Interfaces shaped by hierarchy, spacing, and restraint — deliberate visual balance designed before being coded."
  },
  {
    num: "04",
    title: "Motion",
    highlight: "Choreography",
    description: "Scroll-driven storytelling and micro-interactions that give an interface a natural sense of rhythm."
  },
  {
    num: "05",
    title: "Creative Tech",
    highlight: "Synthesis",
    description: "The space where code, design, and animation meet — where the most exciting experimentation happens."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs", "JWT", "Google OAuth"]
  },
  {
    title: "Design",
    skills: ["Figma", "UI/UX", "Photoshop", "Typography Systems", "Wireframing"]
  },
  {
    title: "Motion",
    skills: ["Motion / Framer", "GSAP Animations", "Scroll Interactions", "Micro-interactions"]
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Microsoft Office Suite", "REST Clients"]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "degree",
    year: "CURRENTLY PURSUING",
    title: "B.Sc. Computer Science",
    subtitle: "Janta College, Bakewar",
    type: "degree"
  },
  {
    id: "class-12",
    year: "CLASS XII",
    title: "77.8%",
    subtitle: "Senior Secondary Education",
    type: "academic"
  },
  {
    id: "class-10",
    year: "CLASS X",
    title: "91%",
    subtitle: "Secondary Education — Academic Excellence",
    type: "academic"
  },
  {
    id: "nmms",
    year: "NMMS SCHOLARSHIP",
    title: "First Position",
    subtitle: "Etawah District — Merit Scholarship",
    type: "award"
  },
  {
    id: "ccc",
    year: "CERTIFICATION",
    title: "CCC Completed",
    subtitle: "Course on Computer Concepts (National Standard)",
    type: "certification"
  }
];
