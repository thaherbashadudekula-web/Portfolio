/**
 * TECH STACK DATA CONFIGURATION
 * Comprehensive, honest data-driven technology graph.
 * Sleek Light Blue & White Theme with high-contrast, vibrant category colors.
 * Strictly reflects Thaher Basha Dudekula's verified resume and authentic project citations.
 */

export const CATEGORY_COLORS = {
  languages: '#2563eb', // Royal Blue
  frontend: '#0284c7',  // Sky Blue
  backend: '#059669',   // Emerald Green
  airag: '#7c3aed',     // Purple
  database: '#0d9488',  // Teal
  tools: '#d97706'      // Amber
};

export const TECH_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages', color: CATEGORY_COLORS.languages },
  { id: 'frontend', label: 'Frontend', color: CATEGORY_COLORS.frontend },
  { id: 'backend', label: 'Backend', color: CATEGORY_COLORS.backend },
  { id: 'airag', label: 'AI / RAG', color: CATEGORY_COLORS.airag },
  { id: 'database', label: 'Database', color: CATEGORY_COLORS.database },
  { id: 'tools', label: 'Tools', color: CATEGORY_COLORS.tools }
];

export const TECH_NODES = [
  // ==================== CORE LANGUAGES ====================
  {
    id: 'javascript',
    name: 'JavaScript',
    shortName: 'JavaScript',
    category: 'languages',
    categoryLabel: 'Languages',
    categoryColor: CATEGORY_COLORS.languages,
    icon: 'FileCode',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Asynchronous event loop, ES6+, functional paradigms & modern web architectures.',
    howIUseIt: 'My primary programming language across client and server. I use modern JavaScript for React components, Node.js/Express backend APIs, and real-time streaming architectures.',
    projects: ['Pulse (Team Dashboard)', 'ResQAI', 'Developer Portfolio', 'BhoomiVerify AI', 'RazorAI', 'SUZI Pet Care'],
    related: ['typescript', 'react', 'nodejs', 'express', 'htmlcss']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    shortName: 'TypeScript',
    category: 'languages',
    categoryLabel: 'Languages',
    categoryColor: CATEGORY_COLORS.languages,
    icon: 'FileCode2',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Static typing, interfaces, strict contracts & type-safe backend services.',
    howIUseIt: 'Utilized in the ResQAI backend architecture alongside Node.js and Prisma to ensure robust type contracts, eliminate runtime errors, and streamline data handling.',
    projects: ['ResQAI'],
    related: ['javascript', 'nodejs', 'express', 'prisma']
  },
  {
    id: 'cpp',
    name: 'C++',
    shortName: 'C++',
    category: 'languages',
    categoryLabel: 'Languages',
    categoryColor: CATEGORY_COLORS.languages,
    icon: 'FileCode2',
    status: 'Core Foundation',
    statusType: 'production',
    summary: 'Object-oriented programming, data structures, algorithm design & memory efficiency.',
    howIUseIt: 'Used for rigorous academic coursework and algorithmic problem solving in Computer Science, focusing on optimal time complexity and data structure implementation.',
    projects: ['Academic Coursework & DSA'],
    related: ['python', 'sql']
  },
  {
    id: 'python',
    name: 'Python',
    shortName: 'Python',
    category: 'languages',
    categoryLabel: 'Languages',
    categoryColor: CATEGORY_COLORS.languages,
    icon: 'Terminal',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Scripting, AI embeddings, RAG data ingestion pipelines & automation.',
    howIUseIt: 'Employed in AI coursework, data preprocessing, and prototyping RAG ingestion pipelines, vector embeddings, and chunking routines.',
    projects: ['AI / RAG Pipelines', 'Academic AI Projects'],
    related: ['airag', 'sql']
  },
  {
    id: 'sql',
    name: 'SQL',
    shortName: 'SQL',
    category: 'languages',
    categoryLabel: 'Languages',
    categoryColor: CATEGORY_COLORS.languages,
    icon: 'Table',
    status: 'Core Foundation',
    statusType: 'production',
    summary: 'Relational query design, joins, normalization, schema constraints & ACID.',
    howIUseIt: 'Writing and optimizing relational database queries, table constraints, and indexing strategies for PostgreSQL.',
    projects: ['ResQAI (PostgreSQL)', 'Relational Database Projects'],
    related: ['postgresql', 'prisma']
  },

  // ==================== FRONTEND ====================
  {
    id: 'react',
    name: 'React.js',
    shortName: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    categoryColor: CATEGORY_COLORS.frontend,
    icon: 'Atom',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Component-based architecture, hooks, responsive state & SPA development.',
    howIUseIt: 'Architecting modular UI components, managing reactive application state, and building smooth user interfaces with fast rendering and intuitive UX.',
    projects: ['Developer Portfolio', 'BhoomiVerify AI', 'RazorAI', 'SUZI Pet Care'],
    related: ['javascript', 'tailwind', 'htmlcss', 'vite']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    shortName: 'Tailwind',
    category: 'frontend',
    categoryLabel: 'Frontend',
    categoryColor: CATEGORY_COLORS.frontend,
    icon: 'Palette',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Utility-first styling, design systems & responsive layouts.',
    howIUseIt: 'My standard styling framework. I design clean responsive interfaces, sleek themes, and glassmorphic visual aesthetics without bulky CSS overhead.',
    projects: ['Developer Portfolio', 'BhoomiVerify AI', 'SUZI Pet Care'],
    related: ['react', 'htmlcss']
  },
  {
    id: 'htmlcss',
    name: 'HTML5 & CSS3',
    shortName: 'HTML / CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    categoryColor: CATEGORY_COLORS.frontend,
    icon: 'Sparkles',
    status: 'Core Foundation',
    statusType: 'daily',
    summary: 'Semantic web standards, CSS Grid/Flexbox, accessible markup & micro-animations.',
    howIUseIt: 'Ensuring accessible semantic hierarchy, mobile-friendly layouts, cross-browser consistency, and fluid responsive styling across all devices.',
    projects: ['Pulse (Team Dashboard)', 'All Web Projects'],
    related: ['react', 'tailwind']
  },

  // ==================== BACKEND ====================
  {
    id: 'nodejs',
    name: 'Node.js',
    shortName: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend',
    categoryColor: CATEGORY_COLORS.backend,
    icon: 'Server',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Non-blocking I/O event-driven server runtime for scalable backend services.',
    howIUseIt: 'Serving backend business logic, asynchronous task processing, middleware orchestration, and connecting services to databases.',
    projects: ['ResQAI', 'CampusOS', 'BhoomiVerify AI Backend', 'RazorAI'],
    related: ['express', 'mongodb', 'postgresql', 'socketio', 'redis', 'restapi']
  },
  {
    id: 'express',
    name: 'Express.js',
    shortName: 'Express.js',
    category: 'backend',
    categoryLabel: 'Backend',
    categoryColor: CATEGORY_COLORS.backend,
    icon: 'Cpu',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Minimalist web framework for routing, RESTful APIs, and middleware stacks.',
    howIUseIt: 'Structuring clean modular REST endpoints, route controllers, validation pipelines, error handling middlewares, and JWT authentication guards.',
    projects: ['ResQAI', 'CampusOS', 'BhoomiVerify AI Backend'],
    related: ['nodejs', 'mongodb', 'restapi', 'jwtauth']
  },
  {
    id: 'restapi',
    name: 'RESTful APIs',
    shortName: 'REST APIs',
    category: 'backend',
    categoryLabel: 'Backend',
    categoryColor: CATEGORY_COLORS.backend,
    icon: 'Network',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Stateless resource architectures, standard HTTP verbs, JSON payloads & pagination.',
    howIUseIt: 'Designing production-grade APIs with predictable response formatting, robust rate limiting, status code accuracy, and Swagger/OpenAPI documentation.',
    projects: ['ResQAI', 'CampusOS', 'RazorAI'],
    related: ['nodejs', 'express', 'jwtauth']
  },
  {
    id: 'jwtauth',
    name: 'JWT & Auth',
    shortName: 'JWT Auth',
    category: 'backend',
    categoryLabel: 'Backend',
    categoryColor: CATEGORY_COLORS.backend,
    icon: 'ShieldCheck',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Stateless token authentication, bcrypt hashing, RBAC & refresh token lifecycles.',
    howIUseIt: 'Securing user sessions with HTTP-only cookies, granular role-based route guards, and encrypted password storage.',
    projects: ['CampusOS', 'ResQAI'],
    related: ['nodejs', 'express', 'restapi']
  },
  {
    id: 'socketio',
    name: 'Socket.io',
    shortName: 'Socket.io',
    category: 'backend',
    categoryLabel: 'Backend',
    categoryColor: CATEGORY_COLORS.backend,
    icon: 'Radio',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Bi-directional low-latency event-based real-time communication.',
    howIUseIt: 'Powering live notification feeds, active user dispatching, and streaming data updates in real-time dashboards.',
    projects: ['CampusOS Real-Time Feed', 'ResQAI Live Alerting'],
    related: ['nodejs', 'express', 'redis']
  },

  // ==================== AI / RAG ====================
  {
    id: 'airag',
    name: 'RAG Architecture',
    shortName: 'AI / RAG',
    category: 'airag',
    categoryLabel: 'AI / RAG',
    categoryColor: CATEGORY_COLORS.airag,
    icon: 'Brain',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Retrieval-Augmented Generation, chunking, vector embeddings & LLM context grounding.',
    howIUseIt: 'Designed and implemented the core intelligence engine for ResQAI. Ingesting unstructured disaster manuals, generating dense vector embeddings, and retrieving grounded context.',
    projects: ['ResQAI'],
    related: ['retrieval', 'qdrant', 'python', 'nodejs']
  },
  {
    id: 'retrieval',
    name: 'Hybrid Search & Retrieval',
    shortName: 'Hybrid Search',
    category: 'airag',
    categoryLabel: 'AI / RAG',
    categoryColor: CATEGORY_COLORS.airag,
    icon: 'Sparkle',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Cosine similarity, semantic search, re-ranking & top-k context synthesis.',
    howIUseIt: 'Implementing dense retrieval pipelines with similarity score thresholds to ensure only high-fidelity reference chunks reach the LLM prompt window.',
    projects: ['ResQAI'],
    related: ['airag', 'qdrant']
  },

  // ==================== DATABASES ====================
  {
    id: 'mongodb',
    name: 'MongoDB',
    shortName: 'MongoDB',
    category: 'database',
    categoryLabel: 'Database',
    categoryColor: CATEGORY_COLORS.database,
    icon: 'Database',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Flexible document schema design, Mongoose modeling, aggregation pipelines & indexing.',
    howIUseIt: 'My go-to NoSQL database for rapid product iteration. Creating optimized schemas, compound indexes for fast queries, and complex aggregation stages.',
    projects: ['CampusOS', 'RazorAI', 'BhoomiVerify AI'],
    related: ['nodejs', 'express', 'prisma']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    shortName: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    categoryColor: CATEGORY_COLORS.database,
    icon: 'Table',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Relational integrity, foreign keys, ACID compliance, complex queries & migrations.',
    howIUseIt: 'Selected as the core relational persistence layer in ResQAI alongside Prisma ORM, handling structured data, user accounts, and audit logging with ACID guarantees.',
    projects: ['ResQAI'],
    related: ['prisma', 'sql', 'nodejs', 'docker']
  },
  {
    id: 'prisma',
    name: 'Prisma ORM',
    shortName: 'Prisma',
    category: 'database',
    categoryLabel: 'Database',
    categoryColor: CATEGORY_COLORS.database,
    icon: 'FileCheck',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Type-safe query building, declarative schema migrations & connection pooling.',
    howIUseIt: 'Defining relational database schemas declaratively, running automated migrations, and generating fully type-safe queries in TypeScript backend services.',
    projects: ['ResQAI'],
    related: ['postgresql', 'typescript', 'nodejs']
  },
  {
    id: 'redis',
    name: 'Redis',
    shortName: 'Redis',
    category: 'database',
    categoryLabel: 'Database',
    categoryColor: CATEGORY_COLORS.database,
    icon: 'Zap',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'In-memory caching, key-value stores, distributed pub/sub & rate limiting.',
    howIUseIt: 'Employed in ResQAI for caching frequent database queries, throttling burst traffic with sliding-window rate limiters, and managing task queue state with BullMQ.',
    projects: ['ResQAI'],
    related: ['bullmq', 'nodejs', 'docker']
  },
  {
    id: 'qdrant',
    name: 'Qdrant Vector DB',
    shortName: 'Qdrant',
    category: 'database',
    categoryLabel: 'Database',
    categoryColor: CATEGORY_COLORS.database,
    icon: 'Compass',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Vector indexing, approximate nearest neighbors (HNSW) & payload filtering.',
    howIUseIt: 'Used for storing high-dimensional text embeddings in ResQAI and executing low-latency vector similarity queries with metadata payload filtering.',
    projects: ['ResQAI'],
    related: ['airag', 'retrieval']
  },

  // ==================== TOOLS & INFRASTRUCTURE ====================
  {
    id: 'git',
    name: 'Git & GitHub',
    shortName: 'Git',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'GitBranch',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Branching models, atomic commits, pull request workflows & version control.',
    howIUseIt: 'Daily version control management, branching strategies (feature/bugfix), code reviews, and maintaining organized commit histories across all repos.',
    projects: ['All Repositories on GitHub'],
    related: ['docker', 'vscode']
  },
  {
    id: 'docker',
    name: 'Docker',
    shortName: 'Docker',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'Container',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Containerization, multi-stage Dockerfiles, Docker Compose & reproducible environments.',
    howIUseIt: 'Containerizing multi-service stacks (Node.js API, PostgreSQL, Redis) via Docker Compose for consistent local development and staging environments.',
    projects: ['ResQAI', 'CampusOS'],
    related: ['postgresql', 'redis', 'nodejs']
  },
  {
    id: 'postman',
    name: 'Postman',
    shortName: 'Postman',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'Send',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'API testing, collection runs, authentication token management & endpoint validation.',
    howIUseIt: 'Authoring API test suites, mocking server responses, and validating request/response headers before client-side integration.',
    projects: ['All Backend Projects'],
    related: ['restapi', 'express']
  },
  {
    id: 'vscode',
    name: 'VS Code',
    shortName: 'VS Code',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'Terminal',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Code workspace customization, linting, debugging & productivity extensions.',
    howIUseIt: 'My primary code editor with customized ESLint, Prettier, TypeScript tooling, and integrated terminal workflows.',
    projects: ['Daily Engineering Environment'],
    related: ['git']
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    shortName: 'BullMQ',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'Radio',
    status: 'Production Ready',
    statusType: 'production',
    summary: 'Distributed background job processing, retry policies & asynchronous task queues.',
    howIUseIt: 'Used in ResQAI for handling heavy document ingestion, semantic chunking pipelines, and vector indexing asynchronously without blocking API responses.',
    projects: ['ResQAI'],
    related: ['redis', 'nodejs']
  },
  {
    id: 'vite',
    name: 'Vite',
    shortName: 'Vite',
    category: 'tools',
    categoryLabel: 'Tools',
    categoryColor: CATEGORY_COLORS.tools,
    icon: 'Zap',
    status: 'Daily Driver',
    statusType: 'daily',
    summary: 'Lightning-fast ESM frontend tooling, hot module replacement & builds.',
    howIUseIt: 'My standard frontend build tool for React development. Providing instant hot-reloading feedback and highly optimized bundle output.',
    projects: ['Developer Portfolio'],
    related: ['react', 'javascript']
  }
];

// Central nucleus core pillars
export const CORE_MERN_IDS = ['react', 'nodejs', 'express', 'mongodb'];

/**
 * SIMPLIFIED, NON-OVERLAPPING CONSTELLATION GRAPH LAYOUT
 * Compact canvas: viewBox="0 0 760 400"
 * Center Nucleus: (380, 200)
 * 14 core nodes distributed across 2 clean concentric orbits with zero collision/overlap.
 */
export const CONSTELLATION_NODES = [
  // Inner Orbit: R = 100 (6 nodes)
  { id: 'react', x: 380, y: 100, orbit: 1 },
  { id: 'nodejs', x: 467, y: 150, orbit: 1 },
  { id: 'express', x: 467, y: 250, orbit: 1 },
  { id: 'mongodb', x: 380, y: 300, orbit: 1 },
  { id: 'postgresql', x: 293, y: 250, orbit: 1 },
  { id: 'typescript', x: 293, y: 150, orbit: 1 },

  // Outer Orbit: R = 175 (8 nodes)
  { id: 'javascript', x: 256, y: 76, orbit: 2 },
  { id: 'tailwind', x: 504, y: 76, orbit: 2 },
  { id: 'restapi', x: 555, y: 200, orbit: 2 },
  { id: 'socketio', x: 504, y: 324, orbit: 2 },
  { id: 'prisma', x: 380, y: 375, orbit: 2 },
  { id: 'redis', x: 256, y: 324, orbit: 2 },
  { id: 'airag', x: 205, y: 200, orbit: 2 },
  { id: 'docker', x: 170, y: 125, orbit: 2 }
];

export const CONSTELLATION_EDGES = [
  // Core MERN connections
  { source: 'react', target: 'nodejs' },
  { source: 'nodejs', target: 'express' },
  { source: 'express', target: 'mongodb' },
  { source: 'react', target: 'express' },
  // Orbit links
  { source: 'react', target: 'tailwind' },
  { source: 'react', target: 'javascript' },
  { source: 'typescript', target: 'javascript' },
  { source: 'typescript', target: 'nodejs' },
  { source: 'typescript', target: 'prisma' },
  { source: 'nodejs', target: 'restapi' },
  { source: 'nodejs', target: 'socketio' },
  { source: 'nodejs', target: 'redis' },
  { source: 'express', target: 'restapi' },
  { source: 'mongodb', target: 'prisma' },
  { source: 'postgresql', target: 'prisma' },
  { source: 'postgresql', target: 'nodejs' },
  { source: 'airag', target: 'nodejs' },
  { source: 'docker', target: 'nodejs' },
  { source: 'docker', target: 'postgresql' }
];

// Fallback all edges for matrix / lookup
export const TECH_EDGES = CONSTELLATION_EDGES;
