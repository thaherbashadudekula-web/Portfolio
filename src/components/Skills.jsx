import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCode,
  FileCode2,
  Terminal,
  Atom,
  Palette,
  Sparkles,
  Globe,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Radio,
  Brain,
  Database,
  FileCheck,
  Table,
  GitBranch,
  Container,
  Send,
  Zap,
  Layers,
  CheckCircle2,
  Flame,
  Compass,
  X,
  ArrowRight,
  Network as NetworkIcon,
  LayoutGrid,
  Info,
  Sparkle
} from 'lucide-react';
import {
  TECH_CATEGORIES,
  TECH_NODES,
  TECH_EDGES,
  CORE_MERN_IDS
} from '../data/techStackData';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Icon resolver for Lucide icons
const ICON_COMPONENTS = {
  FileCode,
  FileCode2,
  Terminal,
  Atom,
  Palette,
  Sparkles,
  Globe,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Radio,
  Brain,
  Database,
  FileCheck,
  Table,
  GitBranch,
  Container,
  Send,
  Zap
};

export default function Skills() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState('react');
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);
  const [isCenterSelected, setIsCenterSelected] = useState(false);
  const [viewMode, setViewMode] = useState('graph'); // 'graph' | 'matrix'
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Pause animations when section is outside viewport for 60fps battery-saving performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility: ESC to dismiss inspector
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedNodeId(null);
        setIsCenterSelected(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Quick lookup dictionary for nodes by ID
  const nodeMap = useMemo(() => {
    const map = new Map();
    TECH_NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  // Filtered nodes based on active category
  const filteredNodes = useMemo(() => {
    if (selectedCategory === 'all') return TECH_NODES;
    return TECH_NODES.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  // Determine which node is currently active (hover takes precedence for live preview, selected stays persistent)
  const activeNodeId = hoveredNodeId || selectedNodeId;
  const activeNode = activeNodeId ? nodeMap.get(activeNodeId) : null;

  // Set of related IDs for active node
  const activeRelatedSet = useMemo(() => {
    if (isHoveringCenter || isCenterSelected) {
      return new Set(CORE_MERN_IDS);
    }
    if (!activeNode) return new Set();
    return new Set(activeNode.related);
  }, [activeNode, isHoveringCenter, isCenterSelected]);

  // Handle selecting a node
  const handleSelectNode = useCallback((nodeId) => {
    setIsCenterSelected(false);
    setSelectedNodeId((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  // Handle selecting the center MERN nucleus
  const handleSelectCenter = useCallback(() => {
    setSelectedNodeId(null);
    setIsCenterSelected((prev) => !prev);
  }, []);

  // Helper to render status badge
  const renderStatusBadge = (statusType, statusLabel) => {
    if (statusType === 'daily') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {statusLabel}
        </span>
      );
    }
    if (statusType === 'production') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
          <Flame className="w-3.5 h-3.5" />
          {statusLabel}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/25">
        <Compass className="w-3.5 h-3.5" />
        {statusLabel}
      </span>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-dark-950"
      aria-label="Technical Skills and Interactive Architecture Graph"
    >
      {/* Background ambient radial glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-accent-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/[0.06] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/25 text-xs font-mono text-accent-cyan mb-3">
              <Sparkle className="w-3 h-3 text-accent-cyan" />
              <span>03 // ARCHITECTURE & TECH STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Interactive Tech Ecosystem
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Explore how my core MERN stack, specialized tools, and architectures interconnect.
              Every node represents genuine production experience verified in real applications.
            </p>
          </div>

          {/* Desktop/Tablet View Switcher & Keyboard hint */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-white/10 text-xs font-medium text-slate-400">
              <button
                type="button"
                onClick={() => setViewMode('graph')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'graph'
                    ? 'bg-accent-cyan/15 text-accent-cyan font-semibold shadow-sm border border-accent-cyan/30'
                    : 'hover:text-slate-200'
                }`}
                aria-pressed={viewMode === 'graph'}
              >
                <NetworkIcon className="w-3.5 h-3.5" />
                <span>Constellation Graph</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'matrix'
                    ? 'bg-accent-cyan/15 text-accent-cyan font-semibold shadow-sm border border-accent-cyan/30'
                    : 'hover:text-slate-200'
                }`}
                aria-pressed={viewMode === 'matrix'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Card Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/[0.04]">
          {TECH_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            const count = category.id === 'all'
              ? TECH_NODES.length
              : TECH_NODES.filter((n) => n.category === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'text-white bg-white/[0.08] border border-white/20 shadow-lg shadow-black/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                {category.color && (
                  <span
                    className="w-2 h-2 rounded-full transition-transform"
                    style={{ backgroundColor: category.color }}
                  />
                )}
                <span>{category.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white/[0.05] text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET CONSTELLATION GRAPH VIEW                                 */}
        {/* ========================================================================= */}
        <div className={`hidden md:block ${viewMode === 'matrix' ? 'hidden md:hidden' : ''}`}>
          <div className="relative rounded-2xl glass-panel p-4 sm:p-6 border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40">
            {/* Top Toolbar / Interactive Controls Helper */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Architectural Mesh • {TECH_NODES.length} Technologies • {TECH_EDGES.length} Verified Links</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-500">
                <span>Hover to trace connections</span>
                <span>•</span>
                <span>Click node to inspect</span>
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="relative w-full aspect-[16/10] max-h-[640px] select-none">
              <svg
                viewBox="0 0 960 620"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  {/* Glowing Filter Definition */}
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Linear Gradients for Category Connections */}
                  <linearGradient id="grad-mern" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>

                {/* Subtle orbital concentric guides */}
                <ellipse cx="480" cy="310" rx="190" ry="130" fill="none" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 4" />
                <ellipse cx="480" cy="310" rx="310" ry="210" fill="none" stroke="rgba(255,255,255,0.025)" strokeDasharray="4 6" />
                <ellipse cx="480" cy="310" rx="420" ry="275" fill="none" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 8" />

                {/* Spoke lines from center to Core MERN nodes */}
                {CORE_MERN_IDS.map((coreId) => {
                  const node = nodeMap.get(coreId);
                  if (!node) return null;
                  const isSpokeActive = isHoveringCenter || isCenterSelected || activeNodeId === coreId;
                  return (
                    <line
                      key={`center-${coreId}`}
                      x1="480"
                      y1="310"
                      x2={node.x}
                      y2={node.y}
                      stroke={isSpokeActive ? 'url(#grad-mern)' : 'rgba(255,255,255,0.08)'}
                      strokeWidth={isSpokeActive ? 2.5 : 1}
                      strokeDasharray={isSpokeActive ? '5,5' : '2,3'}
                      className={isSpokeActive && !prefersReducedMotion && isSectionVisible ? 'animate-tech-dash' : ''}
                      strokeOpacity={isSpokeActive ? 0.9 : 0.25}
                    />
                  );
                })}

                {/* Relationship Connection Lines */}
                {TECH_EDGES.map((edge) => {
                  const source = nodeMap.get(edge.source);
                  const target = nodeMap.get(edge.target);
                  if (!source || !target) return null;

                  // Active state evaluation
                  const isConnectedToActive =
                    activeNodeId === edge.source || activeNodeId === edge.target;
                  const isConnectedToCenter =
                    (isHoveringCenter || isCenterSelected) &&
                    CORE_MERN_IDS.includes(edge.source) &&
                    CORE_MERN_IDS.includes(edge.target);

                  const isActive = isConnectedToActive || isConnectedToCenter;

                  // Check category filter opacity
                  const matchesCategory =
                    selectedCategory === 'all' ||
                    source.category === selectedCategory ||
                    target.category === selectedCategory;

                  let strokeColor = 'rgba(148, 163, 184, 0.15)';
                  let strokeWidth = 1;
                  let strokeOpacity = matchesCategory ? 0.15 : 0.04;
                  let isDashed = true;

                  if (isActive) {
                    const activeColor = activeNode?.categoryColor || '#06b6d4';
                    strokeColor = activeColor;
                    strokeWidth = 2.5;
                    strokeOpacity = 0.95;
                    isDashed = true;
                  } else if (activeNodeId || isHoveringCenter || isCenterSelected) {
                    strokeOpacity = 0.03;
                  }

                  return (
                    <line
                      key={`${edge.source}-${edge.target}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeOpacity={strokeOpacity}
                      strokeDasharray={isDashed ? '4,4' : undefined}
                      className={isActive && !prefersReducedMotion && isSectionVisible ? 'animate-tech-dash' : ''}
                      filter={isActive ? 'url(#glow)' : undefined}
                      style={{ transition: 'stroke-opacity 0.3s ease, stroke-width 0.3s ease' }}
                    />
                  );
                })}

                {/* Central Nucleus (SVG representation with interactive foreignObject) */}
                <g className="cursor-pointer">
                  {/* Pulsing ambient halo */}
                  <circle
                    cx="480"
                    cy="310"
                    r="58"
                    fill="rgba(6, 182, 212, 0.08)"
                    className={!prefersReducedMotion && isSectionVisible ? 'animate-core-pulse' : ''}
                  />
                  <circle
                    cx="480"
                    cy="310"
                    r="48"
                    fill="rgba(12, 16, 29, 0.9)"
                    stroke={isHoveringCenter || isCenterSelected ? '#06b6d4' : 'rgba(255, 255, 255, 0.15)'}
                    strokeWidth={isHoveringCenter || isCenterSelected ? 2.5 : 1.5}
                    filter="url(#glow)"
                  />
                </g>

                {/* ForeignObject overlay for native button interactions */}
                <foreignObject x="420" y="250" width="120" height="120">
                  <button
                    type="button"
                    onClick={handleSelectCenter}
                    onMouseEnter={() => setIsHoveringCenter(true)}
                    onMouseLeave={() => setIsHoveringCenter(false)}
                    aria-label="Inspect Core MERN Architecture Engine"
                    className="w-full h-full flex flex-col items-center justify-center rounded-full text-center group focus-visible:ring-2 focus-visible:ring-accent-cyan outline-none transition-transform active:scale-95"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/20 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:border-accent-cyan transition-all shadow-inner">
                      <Layers className="w-5 h-5 text-accent-cyan group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-extrabold tracking-wider text-slate-100 uppercase group-hover:text-accent-cyan transition-colors">
                      MERN Engine
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      Core Stack
                    </span>
                  </button>
                </foreignObject>

                {/* Technology Nodes inside ForeignObject */}
                {TECH_NODES.map((node, index) => {
                  const Icon = ICON_COMPONENTS[node.icon] || Cpu;
                  const isHovered = hoveredNodeId === node.id;
                  const isSelected = selectedNodeId === node.id;
                  const isRelated = activeRelatedSet.has(node.id);
                  const isMatchCategory =
                    selectedCategory === 'all' || node.category === selectedCategory;

                  // Dimming logic
                  let nodeOpacity = 1;
                  if (!isMatchCategory) {
                    nodeOpacity = 0.22;
                  } else if (activeNodeId || isHoveringCenter || isCenterSelected) {
                    if (isHovered || isSelected || isRelated) {
                      nodeOpacity = 1;
                    } else {
                      nodeOpacity = 0.3;
                    }
                  }

                  // Assign subtle floating animation index
                  const floatClass =
                    !prefersReducedMotion && isSectionVisible && !hoveredNodeId && !selectedNodeId
                      ? `animate-float-node-${(index % 4) + 1}`
                      : '';

                  return (
                    <foreignObject
                      key={node.id}
                      x={node.x - 55}
                      y={node.y - 35}
                      width="110"
                      height="70"
                      className="overflow-visible"
                    >
                      <div className={`w-full h-full flex items-center justify-center ${floatClass}`}>
                        <button
                          type="button"
                          onClick={() => handleSelectNode(node.id)}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          onFocus={() => setHoveredNodeId(node.id)}
                          onBlur={() => setHoveredNodeId(null)}
                          aria-label={`Inspect ${node.name} (${node.categoryLabel}) - Status: ${node.status}`}
                          aria-pressed={isSelected}
                          style={{ opacity: nodeOpacity }}
                          className={`relative flex flex-col items-center gap-1 group outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-2xl p-1 transition-all duration-300 ${
                            isSelected || isHovered
                              ? 'scale-110 z-30'
                              : isRelated
                              ? 'scale-105 z-20'
                              : 'scale-100 z-10'
                          }`}
                        >
                          {/* Node Icon Capsule */}
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                              isSelected
                                ? 'border-2 ring-4 ring-white/10 shadow-lg'
                                : isHovered
                                ? 'border-2 scale-105 shadow-glow-cyan'
                                : isRelated
                                ? 'border-2'
                                : 'glass-panel border-white/10 hover:border-white/25'
                            }`}
                            style={{
                              backgroundColor: isSelected || isHovered || isRelated
                                ? 'rgba(12, 16, 29, 0.95)'
                                : 'rgba(12, 16, 29, 0.7)',
                              borderColor: isSelected || isHovered || isRelated
                                ? node.categoryColor
                                : 'rgba(255, 255, 255, 0.12)',
                              boxShadow: isSelected || isHovered
                                ? `0 0 20px -2px ${node.categoryColor}80`
                                : isRelated
                                ? `0 0 12px -2px ${node.categoryColor}40`
                                : undefined
                            }}
                          >
                            <Icon
                              className="w-5 h-5 transition-transform group-hover:scale-110"
                              style={{
                                color: isSelected || isHovered || isRelated
                                  ? node.categoryColor
                                  : '#cbd5e1'
                              }}
                            />
                          </div>

                          {/* Node Label Chip */}
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-dark-900/90 border border-white/10 shadow-sm backdrop-blur-sm whitespace-nowrap">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: node.categoryColor }}
                            />
                            <span className="text-[11px] font-medium text-slate-200 group-hover:text-white transition-colors">
                              {node.shortName}
                            </span>
                          </div>
                        </button>
                      </div>
                    </foreignObject>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD MATRIX VIEW (Desktop alternative & Tablet toggle)                     */}
        {/* ========================================================================= */}
        <div className={viewMode === 'matrix' ? 'block' : 'hidden md:hidden'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredNodes.map((node) => {
              const Icon = ICON_COMPONENTS[node.icon] || Cpu;
              const isSelected = selectedNodeId === node.id;

              return (
                <div
                  key={`matrix-${node.id}`}
                  onClick={() => handleSelectNode(node.id)}
                  className={`glass-panel p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-accent-cyan bg-dark-850 shadow-lg shadow-accent-cyan/10'
                      : 'border-white/[0.08] hover:border-white/20 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-all shadow-md"
                        style={{ backgroundColor: `${node.categoryColor}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: node.categoryColor }} />
                      </div>
                      {renderStatusBadge(node.statusType, node.status)}
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-accent-cyan transition-colors">
                      {node.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mt-0.5">
                      {node.categoryLabel}
                    </span>

                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
                      {node.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">
                      {node.projects.length} Verified Projects
                    </span>
                    <span className="text-accent-cyan font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (<768px): Touch-optimized Horizontally Scrollable & Grid View   */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <div className="mb-4 flex items-center justify-between px-1">
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredNodes.length} Technologies
            </span>
            <span className="text-xs font-mono text-accent-cyan">
              Tap card to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredNodes.map((node) => {
              const Icon = ICON_COMPONENTS[node.icon] || Cpu;
              const isSelected = selectedNodeId === node.id;

              return (
                <div
                  key={`mobile-${node.id}`}
                  onClick={() => handleSelectNode(node.id)}
                  className={`p-4 rounded-2xl glass-panel border transition-all active:scale-[0.99] ${
                    isSelected
                      ? 'border-accent-cyan bg-dark-850 shadow-md shadow-accent-cyan/15'
                      : 'border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${node.categoryColor}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: node.categoryColor }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-100">
                          {node.name}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {node.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {node.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    {renderStatusBadge(node.statusType, node.status)}
                    <span className="text-xs text-accent-cyan font-medium flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE INSPECTOR HUD (Appears on Node or Center Click)                */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {(activeNode || isCenterSelected) && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mt-8 rounded-2xl glass-panel p-6 sm:p-8 border-white/[0.12] shadow-2xl shadow-black/60 relative overflow-hidden bg-gradient-to-br from-dark-900/95 via-dark-850/95 to-dark-900/95 backdrop-blur-xl"
              role="region"
              aria-live="polite"
              aria-label="Technology Deep-Dive Inspector"
            >
              {/* Top Accent Gradient Border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{
                  backgroundColor: isCenterSelected
                    ? '#06b6d4'
                    : activeNode?.categoryColor || '#06b6d4'
                }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedNodeId(null);
                  setIsCenterSelected(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label="Close Technology Inspector"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Inspector Content: Center MERN Nucleus OR Selected Technology */}
              {isCenterSelected ? (
                // CENTER MERN ARCHITECTURE HUD
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                      <Layers className="w-3.5 h-3.5" />
                      Core Full-Stack Engine
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      MERN Architecture Backbone
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                    MERN Stack Ecosystem & Engineering Architecture
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                    My development workflow centers on the MERN stack (React 19, Node.js, Express, and MongoDB).
                    This unified JavaScript/TypeScript foundation enables seamless end-to-end type safety,
                    efficient state synchronization, low-latency REST & WebSocket communications, and robust
                    data modeling across all flagship projects like <strong className="text-slate-100">RakshaPay AI</strong> and{' '}
                    <strong className="text-slate-100">CampusOS</strong>.
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CORE_MERN_IDS.map((coreId) => {
                      const coreNode = nodeMap.get(coreId);
                      if (!coreNode) return null;
                      const Icon = ICON_COMPONENTS[coreNode.icon] || Cpu;

                      return (
                        <button
                          key={coreId}
                          type="button"
                          onClick={() => handleSelectNode(coreId)}
                          className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-accent-cyan/40 transition-all text-left flex items-start gap-3 group"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 shrink-0"
                            style={{ backgroundColor: `${coreNode.categoryColor}20` }}
                          >
                            <Icon className="w-4 h-4" style={{ color: coreNode.categoryColor }} />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-200 group-hover:text-accent-cyan transition-colors block">
                              {coreNode.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {coreNode.status}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                // SPECIFIC TECHNOLOGY NODE HUD
                <div>
                  {/* Category & Status Bar */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                      style={{
                        backgroundColor: `${activeNode.categoryColor}15`,
                        color: activeNode.categoryColor,
                        borderColor: `${activeNode.categoryColor}35`
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: activeNode.categoryColor }}
                      />
                      {activeNode.categoryLabel}
                    </span>

                    {renderStatusBadge(activeNode.statusType, activeNode.status)}

                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      • Verified in Production
                    </span>
                  </div>

                  {/* Title & Concise Summary */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/15 shrink-0 shadow-lg"
                      style={{
                        backgroundColor: `${activeNode.categoryColor}20`,
                        boxShadow: `0 0 20px -5px ${activeNode.categoryColor}60`
                      }}
                    >
                      {React.createElement(ICON_COMPONENTS[activeNode.icon] || Cpu, {
                        className: 'w-6 h-6',
                        style: { color: activeNode.categoryColor }
                      })}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                        {activeNode.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-400 mt-1">
                        {activeNode.summary}
                      </p>
                    </div>
                  </div>

                  {/* Deep Dive: How I Use It */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                      <Info className="w-3.5 h-3.5 text-accent-cyan" />
                      How I Engineer With This Technology:
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                      {activeNode.howIUseIt}
                    </p>
                  </div>

                  {/* Verified Projects & Connected Architecture */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-white/[0.08]">
                    {/* Projects Used In */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Featured Production Projects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeNode.projects.map((proj) => (
                          <span
                            key={proj}
                            className="px-3 py-1.5 rounded-xl text-xs font-medium bg-dark-800 border border-white/10 text-slate-200 shadow-sm"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Connected Architecture (Clickable to switch node!) */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Architecturally Connected Technologies (Click to inspect):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeNode.related.map((relId) => {
                          const relNode = nodeMap.get(relId);
                          if (!relNode) return null;
                          return (
                            <button
                              key={relId}
                              type="button"
                              onClick={() => handleSelectNode(relId)}
                              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 hover:border-accent-cyan/40 transition-all flex items-center gap-1.5 group"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: relNode.categoryColor }}
                              />
                              <span>{relNode.shortName}</span>
                              <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-accent-cyan" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Bottom Quality Guarantee */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-dark-900/60 border border-white/[0.06] text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span>Honest Engineering Metrics • Zero Fabricated Percentage Bars</span>
          </div>
          <div className="text-slate-500">
            Categorized by genuine daily drivers, production codebases & continuous learning
          </div>
        </div>
      </div>
    </section>
  );
}
