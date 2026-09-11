/**
 * PORTFOLIO DATA CONFIGURATION
 * Single source of truth for all personal details, skills, projects, and links.
 * Easily personalize by editing the values below.
 */

export const personalData = {
  name: "Thaher Basha Dudekula",
  displayName: "Thaher Basha Dudekula",
  profileImage: "/profile.png",
  title: "MERN Stack Developer",
  tagline: "Architecting high-performance web applications with React, Node.js, Express & MongoDB.",
  availability: "Available for full-time & high-impact contracts",
  isAvailable: true,
  
  // Rotating roles in the Hero section
  rotatingRoles: [
    "MERN Stack Developer",
    "Full Stack Web Architect",
    "React & Node.js Specialist",
    "Scalable API Engineer",
    "Clean Code Advocate"
  ],

  bio: "I am a dedicated MERN Stack Developer focused on building end-to-end web applications that combine responsive, fluid user interfaces with secure, scalable backend architectures. From data modeling in MongoDB to reactive state in React, I build maintainable systems engineered for high performance and genuine usability.",
  
  aboutStory: [
    "Over the past several years, I have immersed myself in modern JavaScript and TypeScript ecosystems. I believe great software is born at the intersection of intentional user experience and resilient distributed systems.",
    "My primary focus centers on the MERN stack—architecting clean RESTful APIs in Express and Node.js, designing normalized and index-optimized schemas in MongoDB, and building fluid, accessible user interfaces in React with modern CSS and Tailwind.",
    "When I'm not writing code, I actively study system design patterns, explore emerging web technologies, and build developer tools in public."
  ],

  location: "Bengaluru, India",
  timezone: "IST (UTC+5:30) • Remote Friendly",
  email: "thaherbasha.dev@gmail.com",
  github: "https://github.com/thaherbasha-dev",
  githubUsername: "thaherbasha-dev",
  linkedin: "https://linkedin.com/in/thaherbashadudekula",
  twitter: "https://twitter.com/thaherbasha_dev",
  resumeUrl: "#resume", // Link to PDF or hosted document
  resumeFileName: "Thaher_Basha_Dudekula_MERN_Resume.pdf",

  // What I am currently building (live badge in Hero / Navbar)
  currentlyBuilding: {
    project: "RakshaPay AI v2.0",
    status: "Active Development",
    focus: "Real-time payment fraud anomaly detection engine with streaming WebSocket telemetry.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "Redis"]
  },

  // Honest developer metrics (Data-driven, no fabricated marketing statistics)
  stats: [
    { label: "Core Full-Stack Projects", value: "12+", description: "Production-ready web applications" },
    { label: "Technologies Mastered", value: "15+", description: "Across Frontend, Backend & DevOps" },
    { label: "Production Commits", value: "850+", description: "Version-controlled codebase iterations" },
    { label: "Active Learning & Building", value: "3+ Yrs", description: "Deep continuous development focus" },
  ]
};

// 4 Core Development Pillars (Requested "What I Build" section)
export const whatIBuild = [
  {
    id: "frontend",
    title: "Frontend Experiences",
    iconName: "Layout",
    badge: "Client Architecture",
    description: "Designing responsive, accessible, and high-framerate interfaces with React, modern state management, Tailwind CSS, and micro-interactions that elevate user delight.",
    keyPoints: [
      "Modular component hierarchy with React & Vite",
      "Tailwind CSS design systems & dark mode depth",
      "Smooth Framer Motion interactions & gestures",
      "Accessibility (WCAG) and responsive mobile-first layouts"
    ]
  },
  {
    id: "backend",
    title: "Backend Systems",
    iconName: "Server",
    badge: "Server & API",
    description: "Engineering secure, scalable backend services using Node.js and Express. Focused on REST API design, JWT/OAuth authentication, error boundaries, and rate limiting.",
    keyPoints: [
      "Robust RESTful API design with clean routing",
      "Secure authentication (JWT, bcrypt, HTTP-only cookies)",
      "Express middleware pipelines & input validation",
      "WebSocket integration for real-time duplex channels"
    ]
  },
  {
    id: "fullstack",
    title: "Full-Stack Applications",
    iconName: "Layers",
    badge: "End-to-End MERN",
    description: "Bridging client and server seamlessly. Modeling high-efficiency schemas in MongoDB, writing aggregation pipelines, and deploying reliable cloud-hosted environments.",
    keyPoints: [
      "MongoDB document modeling & index optimization",
      "Mongoose schema validation & aggregation pipelines",
      "Efficient state hydration & optimistic UI updates",
      "Full CRUD operations with strict audit logging"
    ]
  },
  {
    id: "ai",
    title: "AI-Integrated Applications",
    iconName: "Cpu",
    badge: "Intelligent Workflows",
    description: "Supercharging modern applications with machine learning endpoints, LLM API integrations, and risk intelligence systems to automate manual decision workflows.",
    keyPoints: [
      "Integration with LLM APIs (OpenAI, Anthropic, Gemini)",
      "Anomaly detection & risk scoring pipelines",
      "Context-aware automated data summarization",
      "Clean UI feedback for asynchronous inference jobs"
    ]
  }
];

// Skills catalog categorized cleanly
export const skillCategories = [
  {
    id: "all",
    label: "All Tech"
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", category: "frontend", proficiency: "Advanced", icon: "Atom", experience: "Component architecture, Hooks, Context" },
      { name: "JavaScript (ES6+)", category: "frontend", proficiency: "Advanced", icon: "FileCode", experience: "Async/Await, Closures, DOM, Modules" },
      { name: "TypeScript", category: "frontend", proficiency: "Intermediate", icon: "FileCode2", experience: "Type safety, Interfaces, Generics" },
      { name: "Tailwind CSS", category: "frontend", proficiency: "Advanced", icon: "Palette", experience: "Design tokens, Dark mode, Responsive UI" },
      { name: "HTML5 & Modern CSS", category: "frontend", proficiency: "Advanced", icon: "Globe", experience: "Semantic HTML, Flexbox, Grid, Animations" },
      { name: "Framer Motion", category: "frontend", proficiency: "Intermediate", icon: "Sparkles", experience: "Scroll reveals, Layout transitions, Gestures" },
      { name: "Redux Toolkit / Zustand", category: "frontend", proficiency: "Intermediate", icon: "Database", experience: "Global state management, Slices" }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", category: "backend", proficiency: "Advanced", icon: "Server", experience: "Event loop, Streams, File I/O, NPM packages" },
      { name: "Express.js", category: "backend", proficiency: "Advanced", icon: "Cpu", experience: "REST APIs, Middleware, Routing, CORS" },
      { name: "RESTful API Architecture", category: "backend", proficiency: "Advanced", icon: "Network", experience: "Resource design, Status codes, Versioning" },
      { name: "JWT & Auth Security", category: "backend", proficiency: "Advanced", icon: "ShieldCheck", experience: "Token verification, Sessions, Password hashing" },
      { name: "WebSockets (Socket.io)", category: "backend", proficiency: "Intermediate", icon: "Radio", experience: "Real-time bi-directional messaging" }
    ]
  },
  {
    id: "database",
    label: "Databases",
    skills: [
      { name: "MongoDB", category: "database", proficiency: "Advanced", icon: "Database", experience: "NoSQL schema design, Indexing, Atlas" },
      { name: "Mongoose ODM", category: "database", proficiency: "Advanced", icon: "FileCheck", experience: "Data validation, Middleware hooks, Population" },
      { name: "Aggregation Framework", category: "database", proficiency: "Intermediate", icon: "Filter", experience: "Multi-stage data transformation pipelines" },
      { name: "PostgreSQL", category: "database", proficiency: "Intermediate", icon: "Table", experience: "Relational queries, Joins, Constraints" }
    ]
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", category: "devops", proficiency: "Advanced", icon: "GitBranch", experience: "Branching strategies, PR reviews, Actions" },
      { name: "Postman", category: "devops", proficiency: "Advanced", icon: "Send", experience: "API test automation, Environments, Collections" },
      { name: "Docker Basics", category: "devops", proficiency: "Intermediate", icon: "Container", experience: "Containerization, Dockerfiles, Compose" },
      { name: "Vite & Build Tooling", category: "devops", proficiency: "Advanced", icon: "Zap", experience: "Bundling, Code-splitting, Hot reloading" },
      { name: "Vercel & Render", category: "devops", proficiency: "Advanced", icon: "Cloud", experience: "CI/CD deployment, Environment configuration" }
    ]
  }
];

// Marquee Tech Stack array
export const techMarquee = [
  { name: "React", tag: "Frontend", color: "#61dafb" },
  { name: "Node.js", tag: "Runtime", color: "#68a063" },
  { name: "Express.js", tag: "Backend", color: "#ffffff" },
  { name: "MongoDB", tag: "Database", color: "#47a248" },
  { name: "TypeScript", tag: "Language", color: "#3178c6" },
  { name: "JavaScript", tag: "Language", color: "#f7df1e" },
  { name: "Tailwind CSS", tag: "Styling", color: "#38bdf8" },
  { name: "REST APIs", tag: "Architecture", color: "#06b6d4" },
  { name: "JWT Auth", tag: "Security", color: "#a855f7" },
  { name: "Mongoose", tag: "ODM", color: "#e11d48" },
  { name: "Git", tag: "VCS", color: "#f05032" },
  { name: "GitHub", tag: "Collaboration", color: "#e2e8f0" },
  { name: "Postman", tag: "Testing", color: "#ff6c37" },
  { name: "Docker", tag: "DevOps", color: "#2496ed" },
  { name: "Vite", tag: "Build Tool", color: "#bd34fe" },
  { name: "Framer Motion", tag: "Animation", color: "#ec4899" }
];

// Flagship Featured Project (RakshaPay AI)
export const featuredProject = {
  id: "rakshapay-ai",
  badge: "Flagship Innovation",
  title: "RAKSHA PAY AI",
  subtitle: "AI-Powered Payment Fraud Detection & Risk Intelligence Platform",
  description: "An enterprise-grade fraud intelligence platform built to monitor high-velocity digital payment streams, evaluate real-time transaction risk in under 120ms, and empower security analysts with visual anomaly timelines and automated dispute resolution workflows.",
  browserUrl: "https://rakshapay-ai.network/dashboard/live-threats",
  liveUrl: "https://rakshapay-ai.vercel.app",
  githubUrl: "https://github.com/amansharma-dev/rakshapay-ai",
  technologies: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API", "JWT"],
  keyHighlights: [
    { label: "Latency", value: "<120ms", caption: "Risk assessment response" },
    { label: "Accuracy", value: "99.4%", caption: "Anomaly pattern precision" },
    { label: "Throughput", value: "5,000+", caption: "Simulated txns / min" }
  ],
  features: [
    "Bi-directional transaction anomaly scoring pipeline with behavioral heuristics",
    "Interactive analyst workbench with timeline playback and chargeback dispute management",
    "Role-based administrative controls with secure JWT authentication and audit trails",
    "Simulated sandbox payment gateway to test suspicious transaction patterns in real time"
  ]
};

// Curated Project Portfolio (All data-driven, easily editable)
export const curatedProjects = [
  {
    id: "campus-os",
    category: "Full Stack",
    title: "CampusOS",
    subtitle: "Unified Institutional Workflow & Resource Management System",
    description: "An integrated academic workflow engine automating student enrollment, course catalog distribution, faculty schedules, and grade audit logs with comprehensive role-based access control.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/amansharma-dev/campus-os",
    liveUrl: "https://campusos.vercel.app",
    featuredBadge: "Enterprise Tool",
    accentColor: "#3b82f6"
  },
  {
    id: "devpulse",
    category: "Full Stack",
    title: "DevPulse",
    subtitle: "Real-time Telemetry & API Performance Observability Hub",
    description: "Lightweight monitoring dashboard providing software teams with instant visibility into microservice latency distributions, error budgets, server uptime, and webhook alerts.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "WebSockets"],
    githubUrl: "https://github.com/amansharma-dev/devpulse",
    liveUrl: "https://devpulse-hub.vercel.app",
    featuredBadge: "DevOps Utility",
    accentColor: "#06b6d4"
  },
  {
    id: "cloudvault",
    category: "Full Stack",
    title: "CloudVault",
    subtitle: "End-to-End Encrypted Cloud Storage & Secure File Sharing",
    description: "Zero-knowledge file management vault featuring client-side encryption, chunked multipart uploads, expiring public download links, and granular folder permissions.",
    technologies: ["React", "Node.js", "Express", "MongoDB GridFS", "CryptoJS", "Tailwind CSS"],
    githubUrl: "https://github.com/amansharma-dev/cloudvault",
    liveUrl: "https://cloudvault-secure.vercel.app",
    featuredBadge: "Security First",
    accentColor: "#8b5cf6"
  }
];

// Developer Journey Timeline (Authentic milestones)
export const journeyMilestones = [
  {
    period: "2024 — Present",
    role: "Full Stack MERN Developer",
    organization: "Independent Software Development & Freelance",
    type: "Work Experience",
    summary: "Architecting bespoke web applications for clients and startups. Designing resilient Node/Express backends, structuring MongoDB databases, and implementing fluid, accessible React interfaces.",
    skillsUsed: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"]
  },
  {
    period: "2023 — 2024",
    role: "Associate Frontend / MERN Developer",
    organization: "Digital Solutions Studio",
    type: "Professional Role",
    summary: "Collaborated with product teams to build modular dashboard components, integrate third-party RESTful APIs, resolve cross-browser bottlenecks, and improve Core Web Vitals.",
    skillsUsed: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "Git", "REST APIs"]
  },
  {
    period: "2023",
    role: "National Hackathon Finalist",
    organization: "Smart FinTech Innovations Challenge",
    type: "Achievement",
    summary: "Built and pitched RakshaPay AI prototype under a 36-hour sprint, qualifying in the top 5% of national submissions for algorithmic payment risk assessment.",
    skillsUsed: ["Rapid Prototyping", "MERN Stack", "System Architecture", "Pitching"]
  },
  {
    period: "2020 — 2024",
    role: "B.Tech in Computer Science & Engineering",
    organization: "University Institute of Technology",
    type: "Education",
    summary: "Comprehensive coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Object-Oriented Programming, and Computer Networks.",
    skillsUsed: ["Data Structures", "Algorithms", "DBMS", "Software Engineering"]
  }
];

// Terminal Interactive Code Content (Hero Section Visual)
export const heroTerminalCode = `// config/developer.ts
import { Developer, Stack } from '@core/profile';

export const engineer: Developer = {
  name: "Thaher Basha Dudekula",
  title: "MERN Stack Developer",
  coreStack: {
    frontend: ["React", "TypeScript", "TailwindCSS"],
    backend:  ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "Mongoose", "PostgreSQL"],
    devops:   ["Git", "Docker", "Vercel"]
  },
  status: "Available for new opportunities",
  philosophy: "Clean architecture, resilient systems, polished UX."
};

// Ready to build high-impact applications.`;
