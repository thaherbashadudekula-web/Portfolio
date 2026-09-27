/**
 * PORTFOLIO DATA CONFIGURATION
 * Single source of truth for all personal details, skills, projects, and links.
 * Strictly aligned with Thaher Basha Dudekula's verified resume.
 */

export const personalData = {
  name: "Thaher Basha Dudekula",
  displayName: "Thaher Basha Dudekula",
  profileImage: "/profile.png",
  title: "Full-Stack / MERN Developer",
  tagline: "Computer Science & Engineering (AI) student building modern web applications, robust REST APIs & AI-enabled backend systems.",
  availability: "Open for Software Development / MERN Internships",
  isAvailable: true,
  
  // Rotating roles in the Hero section
  rotatingRoles: [
    "Full-Stack / MERN Developer",
    "AI & RAG Systems Developer",
    "Backend & REST API Engineer",
    "React & Node.js Developer",
    "CSE (Artificial Intelligence) Student"
  ],

  bio: "Computer Science and Engineering (AI) student and aspiring Full-Stack Developer with hands-on experience building web applications and AI-enabled backend systems. Skilled in JavaScript, React, Node.js, Express.js, MongoDB, REST APIs, authentication, Git/GitHub, and modern web development. Experienced in hackathon projects across frontend, authentication, and AI development. Seeking a software development / MERN stack internship.",
  
  aboutStory: [
    "I am a Computer Science and Engineering (Artificial Intelligence) student at Malla Reddy Vishwavidhyapeeth with a current CGPA of 8.7/10, passionate about developing high-performance full-stack web applications and AI-driven backends.",
    "My development focus centers on the MERN stack—architecting clean RESTful APIs in Node.js and Express.js, designing robust databases with MongoDB and PostgreSQL (Prisma), and implementing responsive, accessible user interfaces with React.js and Tailwind CSS.",
    "Beyond traditional web development, I have hands-on experience engineering advanced Retrieval-Augmented Generation (RAG) platforms like ResQAI—incorporating multi-agent systems, semantic chunking, Qdrant vector retrieval, reciprocal rank fusion (RRF), and real-time Socket.IO streaming.",
    "I have actively contributed to competitive hackathons, including frontend and authentication for ILRDVS at Smart India Hackathon (SIH), authentication and AI modules for RazorAI at the Razorpay Hackathon, and participating in HackIT x MRDU'26."
  ],

  location: "Hyderabad, India",
  timezone: "IST (UTC+5:30) • Open to On-site & Remote",
  phone: "+91 93900 83058",
  phoneTel: "+919390083058",
  email: "thaherbashadudekula@gmail.com",
  github: "https://github.com/thaherbashadudekula-web",
  githubUsername: "thaherbashadudekula-web",
  linkedin: "https://www.linkedin.com/in/thaher-basha-dudekula-82369a366/",
  resumeUrl: "/Thaher_Basha_Dudekula_Resume.pdf",
  resumeFileName: "Thaher_Basha_Dudekula_Resume.pdf",
  portfolioLiveUrl: "https://portfolio-coral-psi-7pbltgt9ay.vercel.app",

  // What I am currently building (live badge in Hero / Navbar)
  currentlyBuilding: {
    project: "ResQAI Platform",
    status: "Autonomous Multi-Agent RAG",
    focus: "Production-oriented multi-agent RAG backend for disaster intelligence, hybrid retrieval, and real-time Socket.IO streaming.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Qdrant", "Redis", "BullMQ"]
  },

  // Honest developer metrics (Directly from verified resume)
  stats: [
    { label: "B.Tech CGPA", value: "8.7/10", description: "CSE (Artificial Intelligence)" },
    { label: "Hackathons", value: "3+", description: "SIH, Razorpay & HackIT MRDU" },
    { label: "Intermediate", value: "91.8%", description: "Narayana Junior College" },
    { label: "SSC Board", value: "9.3/10", description: "New Era High School" },
  ]
};

// 4 Core Development Pillars
export const whatIBuild = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Layout",
    badge: "Client Architecture",
    description: "Developing modern, responsive, and component-based user interfaces with React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
    keyPoints: [
      "Modular component hierarchy with React.js & Vite",
      "Tailwind CSS responsive layouts and modern design aesthetics",
      "Semantic HTML5, CSS3, and accessible DOM structures",
      "Hackathon-proven frontend delivery (SIH - ILRDVS)"
    ]
  },
  {
    id: "backend",
    title: "Backend & REST APIs",
    iconName: "Server",
    badge: "Server & Security",
    description: "Engineering secure, scalable backend services using Node.js and Express.js with robust RESTful APIs, JWT/Bcrypt authentication, and real-time protocols.",
    keyPoints: [
      "Clean RESTful API routing, controllers, and middleware pipelines",
      "Authentication and security with JWT, HTTP-only cookies, and Bcrypt",
      "Real-time bi-directional streaming via Socket.IO",
      "Asynchronous background task processing with BullMQ & Redis"
    ]
  },
  {
    id: "database",
    title: "Databases & Data Modeling",
    iconName: "Layers",
    badge: "NoSQL & SQL",
    description: "Designing schema structures and query pipelines across MongoDB, PostgreSQL with Prisma ORM, and Qdrant vector databases.",
    keyPoints: [
      "MongoDB document modeling, schema design, and query optimization",
      "PostgreSQL relational modeling and database migrations with Prisma",
      "Qdrant vector database indexing for semantic similarity search",
      "Redis in-memory caching for low-latency session and data access"
    ]
  },
  {
    id: "ai",
    title: "AI & Multi-Agent RAG Systems",
    iconName: "Cpu",
    badge: "Intelligent Systems",
    description: "Building autonomous multi-agent Retrieval-Augmented Generation (RAG) platforms grounded in private knowledge sources.",
    keyPoints: [
      "Autonomous multi-agent architecture (Disaster, Gov, Health, Volunteer)",
      "Semantic chunking, dense vector embeddings, and similarity search",
      "Hybrid retrieval with Reciprocal Rank Fusion (RRF) & reranking",
      "Real-time token streaming with Socket.IO and dynamic prompt assembly"
    ]
  }
];

// Skills catalog categorized according to verified resume
export const skillCategories = [
  {
    id: "all",
    label: "All Tech"
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", category: "languages", proficiency: "Advanced", icon: "FileCode", experience: "Async/await, ES6+, DOM manipulation, modular architecture" },
      { name: "C++", category: "languages", proficiency: "Intermediate", icon: "FileCode2", experience: "Data structures, algorithms, object-oriented programming" },
      { name: "Python", category: "languages", proficiency: "Intermediate", icon: "Terminal", experience: "Scripting, AI pipelines, data processing" },
      { name: "SQL", category: "languages", proficiency: "Intermediate", icon: "Table", experience: "Relational queries, joins, constraints, schema design" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", category: "frontend", proficiency: "Advanced", icon: "Atom", experience: "Component architecture, hooks, state management, SPA" },
      { name: "Tailwind CSS", category: "frontend", proficiency: "Advanced", icon: "Palette", experience: "Utility-first design tokens, responsive layouts, dark mode" },
      { name: "HTML5", category: "frontend", proficiency: "Advanced", icon: "Globe", experience: "Semantic markup, accessibility, SEO structure" },
      { name: "CSS3", category: "frontend", proficiency: "Advanced", icon: "Palette", experience: "Flexbox, CSS Grid, responsive design, animations" },
      { name: "Vite", category: "frontend", proficiency: "Advanced", icon: "Zap", experience: "Fast development tooling, bundling, hot module replacement" }
    ]
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", category: "backend", proficiency: "Advanced", icon: "Server", experience: "Event-driven runtime, asynchronous I/O, backend APIs" },
      { name: "Express.js", category: "backend", proficiency: "Advanced", icon: "Cpu", experience: "REST API endpoints, middleware routing, error handling" },
      { name: "REST APIs", category: "backend", proficiency: "Advanced", icon: "Network", experience: "API design, HTTP methods, status codes, payload validation" },
      { name: "JWT & Bcrypt", category: "backend", proficiency: "Advanced", icon: "ShieldCheck", experience: "Token authentication, password hashing, route authorization" },
      { name: "Socket.IO", category: "backend", proficiency: "Intermediate", icon: "Radio", experience: "Real-time bidirectional event streaming and token delivery" }
    ]
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", category: "database", proficiency: "Advanced", icon: "Database", experience: "NoSQL document collections, schema modeling, CRUD operations" },
      { name: "PostgreSQL", category: "database", proficiency: "Intermediate", icon: "Table", experience: "Relational integrity, tables, indexes, ACID compliance" },
      { name: "Prisma ORM", category: "database", proficiency: "Intermediate", icon: "FileCheck", experience: "Type-safe database client, schema migrations, relationships" },
      { name: "Redis", category: "database", proficiency: "Intermediate", icon: "Zap", experience: "In-memory caching, message broker, BullMQ queuing" },
      { name: "Qdrant", category: "database", proficiency: "Intermediate", icon: "Layers", experience: "Vector database indexing and similarity search for RAG" }
    ]
  },
  {
    id: "airag",
    label: "AI / RAG",
    skills: [
      { name: "RAG Architecture", category: "airag", proficiency: "Advanced", icon: "Brain", experience: "End-to-end Retrieval-Augmented Generation pipelines" },
      { name: "Embeddings", category: "airag", proficiency: "Advanced", icon: "Layers", experience: "Dense vector embeddings for document representation" },
      { name: "Hybrid Retrieval", category: "airag", proficiency: "Advanced", icon: "Filter", experience: "Combining dense vector similarity with sparse keyword search" },
      { name: "Reranking & RRF", category: "airag", proficiency: "Advanced", icon: "Sparkles", experience: "Reciprocal Rank Fusion and reranking for grounded answers" }
    ]
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", category: "tools", proficiency: "Advanced", icon: "GitBranch", experience: "Version control, branching, pull requests, collaboration" },
      { name: "npm", category: "tools", proficiency: "Advanced", icon: "Send", experience: "Package management, dependency resolution, scripts" },
      { name: "BullMQ", category: "tools", proficiency: "Intermediate", icon: "Radio", experience: "Distributed background job queue management with Redis" },
      { name: "Docker", category: "tools", proficiency: "Intermediate", icon: "Container", experience: "Containerization, environment consistency, Dockerfile" }
    ]
  }
];

// Marquee Tech Stack array directly matching verified resume (Light Blue & White theme)
export const techMarquee = [
  { name: "React.js", tag: "Frontend", color: "#38bdf8" },
  { name: "Node.js", tag: "Runtime", color: "#60a5fa" },
  { name: "Express.js", tag: "Backend", color: "#ffffff" },
  { name: "MongoDB", tag: "Database", color: "#7dd3fc" },
  { name: "PostgreSQL", tag: "Database", color: "#93c5fd" },
  { name: "Prisma", tag: "ORM", color: "#bae6fd" },
  { name: "JavaScript", tag: "Language", color: "#38bdf8" },
  { name: "C++", tag: "Language", color: "#60a5fa" },
  { name: "Python", tag: "Language", color: "#7dd3fc" },
  { name: "SQL", tag: "Query", color: "#ffffff" },
  { name: "Tailwind CSS", tag: "Styling", color: "#38bdf8" },
  { name: "RAG", tag: "AI", color: "#bae6fd" },
  { name: "Qdrant", tag: "Vector DB", color: "#7dd3fc" },
  { name: "Redis", tag: "Cache/Queue", color: "#60a5fa" },
  { name: "Socket.IO", tag: "Real-Time", color: "#ffffff" },
  { name: "BullMQ", tag: "Queues", color: "#93c5fd" },
  { name: "JWT & Bcrypt", tag: "Auth Security", color: "#38bdf8" },
  { name: "Docker", tag: "DevOps", color: "#60a5fa" },
  { name: "Git & GitHub", tag: "VCS", color: "#ffffff" }
];

// Flagship Featured Project: ResQAI (From verified resume)
export const featuredProject = {
  id: "resqai",
  badge: "Autonomous Multi-Agent AI Platform",
  title: "ResQAI",
  subtitle: "Autonomous Multi-Agent Disaster Intelligence Platform",
  description: "A production-oriented multi-agent RAG backend engineered for querying private disaster, government, health, education, and volunteer knowledge sources. Implemented semantic chunking, vector embeddings, hybrid retrieval, reciprocal rank fusion (RRF), reranking, dynamic prompt assembly, authentication, document ingestion, real-time token streaming with Socket.IO, BullMQ background processing, Redis caching, and monitoring endpoints.",
  browserUrl: "https://resqai.network/intelligence/disaster-agents",
  liveUrl: "https://github.com/thaherbashadudekula-web",
  githubUrl: "https://github.com/thaherbashadudekula-web",
  technologies: [
    "Node.js",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Qdrant",
    "Redis",
    "BullMQ",
    "Socket.IO",
    "JWT",
    "Bcrypt",
    "S3"
  ],
  keyHighlights: [
    { label: "Architecture", value: "Multi-Agent", caption: "Specialized domain agents" },
    { label: "Retrieval", value: "Hybrid + RRF", caption: "Reciprocal rank fusion & rerank" },
    { label: "Streaming", value: "Socket.IO", caption: "Real-time token delivery" }
  ],
  features: [
    "Production-oriented multi-agent RAG backend for disaster, government, health, education, and volunteer knowledge sources",
    "Semantic chunking, dense vector embeddings, hybrid retrieval, reciprocal rank fusion (RRF), and dynamic prompt assembly",
    "Authentication, document ingestion pipelines, search/chat APIs, and real-time token streaming with Socket.IO",
    "Background task processing with BullMQ, Redis caching, PostgreSQL with Prisma ORM, and AWS S3 storage"
  ]
};

// Curated Project Portfolio (With verified live deployment links)
export const curatedProjects = [
  {
    id: "pulse-dashboard",
    category: "Team Workspace & Dashboard",
    title: "Pulse — Team Dashboard",
    subtitle: "High-Velocity Task & Project Management Workspace",
    description: "Responsive team operations dashboard engineered with vanilla HTML5, CSS3, and modern JavaScript. Features client-side multi-view routing (Overview, Tasks, Projects, Team, Reports, Settings), full-screen authentication & session persistence, animated KPI stat cards, interactive task management with filters, CSV report export, and WCAG AA accessibility.",
    technologies: ["JavaScript (ES6+)", "HTML5 Semantic", "CSS3 Grid & Flexbox", "Client-Side Routing", "Session Auth", "WCAG AA"],
    githubUrl: "https://github.com/thaherbashadudekula-web/Pulse",
    liveUrl: "https://merry-syrniki-331675.netlify.app/",
    featuredBadge: "Live Web App",
    accentColor: "#38bdf8"
  },
  {
    id: "sih-ilrdvs",
    category: "Hackathon Project",
    title: "BhoomiVerify AI (SIH — ILRDVS)",
    subtitle: "Land Record Command Center & Validation System",
    description: "AI-powered land record digitization and validation system built for Smart India Hackathon. Features an interactive command center dashboard, GIS map verification, and secure officer authentication workflows.",
    technologies: ["React", "JavaScript", "GIS Mapping", "AI Verification", "Authentication", "Tailwind CSS"],
    githubUrl: "https://github.com/thaherbashadudekula-web",
    liveUrl: "https://land-ai-sih.vercel.app/",
    featuredBadge: "Smart India Hackathon",
    accentColor: "#38bdf8"
  },
  {
    id: "razor-ai",
    category: "AI & Fintech Hackathon",
    title: "RazorAI",
    subtitle: "Agentic Commerce & Payment Infrastructure",
    description: "Intelligent agentic commerce and automated payment platform developed for Razorpay Hackathon. Features authentication, AI-driven purchase agents, and Razorpay checkout integration.",
    technologies: ["AI Development", "Razorpay Checkout", "Authentication", "Node.js", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/thaherbashadudekula-web",
    liveUrl: "https://razorpay-hakthon.vercel.app/",
    featuredBadge: "Razorpay Hackathon",
    accentColor: "#7dd3fc"
  },
  {
    id: "suzi-petcare",
    category: "Full-Stack Web App",
    title: "SUZI Pet Care",
    subtitle: "Premium Pet Care, Spa Booking & E-Commerce Platform",
    description: "Full-featured pet care platform providing pet food, accessories, adoption listings, and professional grooming & pet spa service appointment booking.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Spa Booking", "E-Commerce", "Responsive UI"],
    githubUrl: "https://github.com/thaherbashadudekula-web",
    liveUrl: "https://suzi-mu.vercel.app/",
    featuredBadge: "Live Production App",
    accentColor: "#60a5fa"
  },
  {
    id: "developer-portfolio",
    category: "Frontend Web App",
    title: "Developer Portfolio",
    subtitle: "Component-Based React + Vite Architecture",
    description: "Modern, responsive developer portfolio web application built using React 19 and Vite with a sleek light-blue glassmorphic UI, interactive tech constellation graph, and multi-agent telemetry simulation.",
    technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    githubUrl: "https://github.com/thaherbashadudekula-web",
    liveUrl: "https://portfolio-coral-psi-7pbltgt9ay.vercel.app/",
    featuredBadge: "React + Vite",
    accentColor: "#ffffff"
  }
];

// Developer Journey Timeline (Directly from verified resume)
export const journeyMilestones = [
  {
    period: "2025 — 2028",
    role: "B.Tech — Computer Science & Engineering (Artificial Intelligence)",
    organization: "Malla Reddy Vishwavidhyapeeth",
    type: "Education",
    summary: "Pursuing B.Tech in CSE with specialization in Artificial Intelligence. Maintaining an academic record of CGPA: 8.7/10 with strong focus on AI architectures, full-stack systems, data structures, and algorithms.",
    skillsUsed: ["Artificial Intelligence", "MERN Stack", "C++", "Python", "Data Structures", "SQL"]
  },
  {
    period: "August 2026",
    role: "Certificate of Appreciation — HackIT x MRDU'26",
    organization: "24-Hour National Level Hackathon • Unifesto",
    type: "Achievement",
    summary: "Participated in the 24-Hour National Level Hackathon held August 22–23, 2026 at Malla Reddy (MR) Deemed to be University. Awarded Certificate of Appreciation (Certificate ID: UF-HAKITX-0666).",
    skillsUsed: ["Rapid Prototyping", "Full Stack Development", "Problem Solving", "Hackathon Sprint"]
  },
  {
    period: "2025 — 2026",
    role: "Hackathon Contributor — SIH & Razorpay Hackathons",
    organization: "Smart India Hackathon (ILRDVS) & RazorAI",
    type: "Hackathon Experience",
    summary: "Contributed to frontend implementation and authentication for ILRDVS (Smart India Hackathon) and delivered authentication and AI development for RazorAI (Razorpay Hackathon).",
    skillsUsed: ["Frontend", "Authentication", "AI Development", "React.js", "Node.js", "REST APIs"]
  },
  {
    period: "Intermediate",
    role: "Higher Secondary Certificate (Intermediate)",
    organization: "Narayana Junior College",
    type: "Education",
    summary: "Completed higher secondary education in Mathematics, Physics, and Chemistry (MPC) with an outstanding score of 91.8%.",
    skillsUsed: ["Mathematics", "Physics", "Chemistry", "Analytical Problem Solving"]
  },
  {
    period: "Secondary (SSC)",
    role: "Secondary School Certificate (SSC)",
    organization: "New Era High School",
    type: "Education",
    summary: "Completed Secondary School Certificate education with an academic score of CGPA: 9.3/10.",
    skillsUsed: ["Academic Excellence", "Science", "Mathematics", "Foundational Studies"]
  }
];

// Terminal Interactive Code Content (Hero Section Visual)
export const heroTerminalCode = `// config/developer.ts
import { Developer } from '@core/profile';

export const engineer: Developer = {
  name: "${personalData.displayName}",
  title: "Full-Stack / MERN Developer",
  education: {
    degree: "B.Tech CSE (Artificial Intelligence)",
    institution: "Malla Reddy Vishwavidhyapeeth",
    cgpa: "8.7 / 10"
  },
  coreStack: {
    languages: ["JavaScript", "C++", "Python", "SQL"],
    frontend:  ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend:   ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
    database:  ["MongoDB", "PostgreSQL", "Prisma", "Redis", "Qdrant"],
    ai_rag:    ["RAG", "Embeddings", "Hybrid Retrieval", "RRF"]
  },
  flagshipProject: "ResQAI (Multi-Agent Disaster Intelligence)",
  status: "Seeking Software Development / MERN Internships"
};

// Ready to build high-impact web and AI applications.`;
