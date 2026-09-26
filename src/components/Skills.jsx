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
  CONSTELLATION_NODES,
  CONSTELLATION_EDGES,
  CORE_MERN_IDS,
  CATEGORY_COLORS
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
  Zap,
  Layers,
  Sparkle,
  Compass
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

  // Pause animations when section is outside viewport for performance
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

  // Quick lookup dictionary for all 26 nodes by ID
  const nodeMap = useMemo(() => {
    const map = new Map();
    TECH_NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  // Constellation Graph Node List (curated 14 nodes, non-overlapping orbital coordinates)
  const constellationNodes = useMemo(() => {
    return CONSTELLATION_NODES.map((pos) => {
      const fullData = nodeMap.get(pos.id);
      if (!fullData) return null;
      return {
        ...fullData,
        x: pos.x,
        y: pos.y,
        orbit: pos.orbit
      };
    }).filter(Boolean);
  }, [nodeMap]);

  // Lookup map specifically for constellation coordinates
  const constellationCoordMap = useMemo(() => {
    const map = new Map();
    constellationNodes.forEach((node) => map.set(node.id, node));
    return map;
  }, [constellationNodes]);

  // Filtered nodes based on active category (for matrix & mobile view)
  const filteredNodes = useMemo(() => {
    if (selectedCategory === 'all') return TECH_NODES;
    return TECH_NODES.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  // Determine which node is currently active
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
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {statusLabel}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-50 text-sky-700 border border-sky-200">
        <Flame className="w-3.5 h-3.5 text-sky-600" />
        {statusLabel}
      </span>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Technical Skills and System Architecture"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-sky-100/50 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[320px] bg-blue-100/40 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 text-sky-800 border border-sky-200 mb-3 shadow-xs">
              <NetworkIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>Full-Stack Ecosystem & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Technical Competencies & Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore how my core MERN stack, database architectures, and engineering tools interconnect.
              Every node represents genuine production experience verified in real applications.
            </p>
          </div>

          {/* Desktop/Tablet View Switcher */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-sky-50/80 border border-sky-200 text-xs font-medium text-slate-600 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode('graph')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  viewMode === 'graph'
                    ? 'bg-white text-sky-700 font-semibold shadow-sm border border-sky-200'
                    : 'hover:text-sky-700'
                }`}
                aria-pressed={viewMode === 'graph'}
              >
                <NetworkIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>Constellation Graph</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  viewMode === 'matrix'
                    ? 'bg-white text-sky-700 font-semibold shadow-sm border border-sky-200'
                    : 'hover:text-sky-700'
                }`}
                aria-pressed={viewMode === 'matrix'}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
                <span>Card Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Bar (Fixes Screenshot 2: Clear, high-contrast, theme-matched) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-sky-100">
          {TECH_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            const count =
              category.id === 'all'
                ? TECH_NODES.length
                : TECH_NODES.filter((n) => n.category === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 shadow-xs ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/20 border border-sky-500'
                    : 'bg-white/90 text-slate-700 hover:text-sky-700 hover:bg-sky-50/80 border border-sky-200/80'
                }`}
              >
                {category.color && (
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform shadow-xs"
                    style={{
                      backgroundColor: isSelected ? '#ffffff' : category.color,
                      border: isSelected ? '1px solid rgba(255,255,255,0.4)' : undefined
                    }}
                  />
                )}
                <span>{category.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-white/25 text-white font-bold'
                      : 'bg-sky-50 text-sky-800 border border-sky-100 font-semibold'
                  }`}
                >
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
          <div className="relative rounded-2xl bg-white/90 backdrop-blur-md p-4 sm:p-6 border border-sky-200/80 overflow-hidden shadow-xl shadow-sky-100/50">
            {/* Top Toolbar / Interactive Controls Helper */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 mb-2 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
                <span className="font-medium text-slate-700">
                  Interactive Constellation Mesh • MERN Engine Nucleus
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-slate-500">
                <span>Hover node to trace links</span>
                <span>•</span>
                <span>Click node to inspect</span>
              </div>
            </div>

            {/* SVG Interactive Canvas: Clean 760x400 Compact & Non-Overlapping */}
            <div className="relative w-full aspect-[16/9] max-h-[420px] select-none">
              <svg
                viewBox="0 0 760 400"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  {/* Subtle Glowing Filter */}
                  <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Linear Gradient for Core MERN Spokes */}
                  <linearGradient id="grad-mern-spoke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>

                {/* Subtle Concentric Orbital Guides */}
                <ellipse
                  cx="380"
                  cy="200"
                  rx="100"
                  ry="100"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.2)"
                  strokeDasharray="3 4"
                />
                <ellipse
                  cx="380"
                  cy="200"
                  rx="175"
                  ry="175"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.14)"
                  strokeDasharray="4 6"
                />

                {/* Center Spoke Lines to the 4 Core MERN nodes */}
                {CORE_MERN_IDS.map((coreId) => {
                  const node = constellationCoordMap.get(coreId);
                  if (!node) return null;
                  const isSpokeActive =
                    isHoveringCenter || isCenterSelected || activeNodeId === coreId;
                  return (
                    <line
                      key={`center-${coreId}`}
                      x1="380"
                      y1="200"
                      x2={node.x}
                      y2={node.y}
                      stroke={isSpokeActive ? 'url(#grad-mern-spoke)' : 'rgba(14, 165, 233, 0.25)'}
                      strokeWidth={isSpokeActive ? 2.5 : 1.2}
                      strokeDasharray={isSpokeActive ? '4,4' : '2,3'}
                      strokeOpacity={isSpokeActive ? 1 : 0.4}
                      className={
                        isSpokeActive && !prefersReducedMotion && isSectionVisible
                          ? 'animate-tech-dash'
                          : ''
                      }
                      style={{ transition: 'stroke-opacity 0.3s ease, stroke-width 0.3s ease' }}
                    />
                  );
                })}

                {/* Constellation Connecting Edges */}
                {CONSTELLATION_EDGES.map((edge) => {
                  const source = constellationCoordMap.get(edge.source);
                  const target = constellationCoordMap.get(edge.target);
                  if (!source || !target) return null;

                  const isConnectedToActive =
                    activeNodeId === edge.source || activeNodeId === edge.target;
                  const isConnectedToCenter =
                    (isHoveringCenter || isCenterSelected) &&
                    CORE_MERN_IDS.includes(edge.source) &&
                    CORE_MERN_IDS.includes(edge.target);

                  const isActive = isConnectedToActive || isConnectedToCenter;

                  const matchesCategory =
                    selectedCategory === 'all' ||
                    source.category === selectedCategory ||
                    target.category === selectedCategory;

                  let strokeColor = 'rgba(14, 165, 233, 0.25)';
                  let strokeWidth = 1.2;
                  let strokeOpacity = matchesCategory ? 0.4 : 0.12;

                  if (isActive) {
                    strokeColor = activeNode?.categoryColor || '#0284c7';
                    strokeWidth = 2.5;
                    strokeOpacity = 0.95;
                  } else if (activeNodeId || isHoveringCenter || isCenterSelected) {
                    strokeOpacity = 0.08;
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
                      strokeDasharray={isActive ? '4,4' : '3,3'}
                      filter={isActive ? 'url(#cyanGlow)' : undefined}
                      className={
                        isActive && !prefersReducedMotion && isSectionVisible
                          ? 'animate-tech-dash'
                          : ''
                      }
                      style={{ transition: 'stroke-opacity 0.3s ease, stroke-width 0.3s ease' }}
                    />
                  );
                })}

                {/* Central MERN Nucleus (SVG representation) */}
                <g className="cursor-pointer">
                  {/* Outer Pulsing Halo */}
                  <circle
                    cx="380"
                    cy="200"
                    r="46"
                    fill="rgba(14, 165, 233, 0.12)"
                    className={
                      !prefersReducedMotion && isSectionVisible ? 'animate-core-pulse' : ''
                    }
                  />
                  {/* Core Base Circle */}
                  <circle
                    cx="380"
                    cy="200"
                    r="36"
                    fill={isHoveringCenter || isCenterSelected ? '#0284c7' : '#0369a1'}
                    stroke={isHoveringCenter || isCenterSelected ? '#38bdf8' : '#7dd3fc'}
                    strokeWidth={isHoveringCenter || isCenterSelected ? 2.5 : 1.5}
                    filter="url(#coreGlow)"
                    style={{ transition: 'all 0.3s ease' }}
                  />
                </g>

                {/* ForeignObject overlay for native button on central nucleus */}
                <foreignObject x="340" y="160" width="80" height="80">
                  <button
                    type="button"
                    onClick={handleSelectCenter}
                    onMouseEnter={() => setIsHoveringCenter(true)}
                    onMouseLeave={() => setIsHoveringCenter(false)}
                    aria-label="Inspect Core MERN Architecture Engine"
                    className="w-full h-full flex flex-col items-center justify-center rounded-full text-center group focus-visible:ring-2 focus-visible:ring-sky-500 outline-none transition-transform active:scale-95"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider text-white uppercase leading-none">
                      MERN
                    </span>
                    <span className="text-[8px] font-mono text-sky-200 mt-0.5">
                      Core Stack
                    </span>
                  </button>
                </foreignObject>

                {/* Technology Nodes inside ForeignObject (Zero Overlap with 80x50 capsules) */}
                {constellationNodes.map((node) => {
                  const Icon = ICON_COMPONENTS[node.icon] || Cpu;
                  const isHovered = hoveredNodeId === node.id;
                  const isSelected = selectedNodeId === node.id;
                  const isRelated = activeRelatedSet.has(node.id);
                  const isMatchCategory =
                    selectedCategory === 'all' || node.category === selectedCategory;

                  let nodeOpacity = 1;
                  if (!isMatchCategory) {
                    nodeOpacity = 0.25;
                  } else if (activeNodeId || isHoveringCenter || isCenterSelected) {
                    if (isHovered || isSelected || isRelated) {
                      nodeOpacity = 1;
                    } else {
                      nodeOpacity = 0.3;
                    }
                  }

                  return (
                    <foreignObject
                      key={node.id}
                      x={node.x - 40}
                      y={node.y - 25}
                      width="80"
                      height="50"
                      className="overflow-visible"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => handleSelectNode(node.id)}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          onFocus={() => setHoveredNodeId(node.id)}
                          onBlur={() => setHoveredNodeId(null)}
                          aria-label={`Inspect ${node.name} (${node.categoryLabel}) - Status: ${node.status}`}
                          aria-pressed={isSelected}
                          style={{
                            opacity: nodeOpacity,
                            transition: 'opacity 0.25s ease, transform 0.25s ease'
                          }}
                          className={`relative flex flex-col items-center gap-1 group outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-0.5 transition-all duration-200 ${
                            isSelected || isHovered
                              ? 'scale-110 z-30'
                              : isRelated
                              ? 'scale-105 z-20'
                              : 'scale-100 z-10'
                          }`}
                        >
                          {/* Node Icon Circle */}
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 bg-white shadow-sm ${
                              isSelected
                                ? 'ring-3 ring-sky-300 shadow-md'
                                : isHovered
                                ? 'scale-105 shadow-md'
                                : ''
                            }`}
                            style={{
                              border: `2px solid ${node.categoryColor}`,
                              boxShadow:
                                isSelected || isHovered
                                  ? `0 2px 12px -1px ${node.categoryColor}70`
                                  : undefined
                            }}
                          >
                            <Icon
                              className="w-4 h-4 transition-transform group-hover:scale-110"
                              style={{ color: node.categoryColor }}
                            />
                          </div>

                          {/* Node Label Chip */}
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/95 border border-sky-200/80 shadow-xs whitespace-nowrap">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: node.categoryColor }}
                            />
                            <span className="text-[10px] font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">
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
        {/* CARD MATRIX VIEW (Desktop alternative & Full 26-node inventory)           */}
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
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group bg-white/90 backdrop-blur-md shadow-xs ${
                    isSelected
                      ? 'border-sky-500 ring-2 ring-sky-200 shadow-md shadow-sky-100'
                      : 'border-sky-200/80 hover:border-sky-400 hover:shadow-md hover:shadow-sky-100/70 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform shadow-xs"
                        style={{ backgroundColor: `${node.categoryColor}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: node.categoryColor }} />
                      </div>
                      {renderStatusBadge(node.statusType, node.status)}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {node.name}
                    </h3>
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider block mt-0.5 font-bold"
                      style={{ color: node.categoryColor }}
                    >
                      {node.categoryLabel}
                    </span>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
                      {node.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-500">
                      {node.projects.length} Verified Projects
                    </span>
                    <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (<768px): Touch-friendly Cards                                */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <div className="mb-4 flex items-center justify-between px-1">
            <span className="text-xs font-mono text-slate-600 font-medium">
              Showing {filteredNodes.length} Technologies
            </span>
            <span className="text-xs font-mono text-sky-600 font-semibold">
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
                  className={`p-4 rounded-2xl border transition-all active:scale-[0.99] bg-white shadow-xs ${
                    isSelected
                      ? 'border-sky-500 ring-2 ring-sky-200 shadow-md shadow-sky-100'
                      : 'border-sky-200/80 hover:border-sky-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-sky-100 shrink-0"
                        style={{ backgroundColor: `${node.categoryColor}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: node.categoryColor }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {node.name}
                        </h3>
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider block font-bold"
                          style={{ color: node.categoryColor }}
                        >
                          {node.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {node.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-sky-100">
                    {renderStatusBadge(node.statusType, node.status)}
                    <span className="text-xs text-sky-600 font-semibold flex items-center gap-1">
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
              className="mt-8 rounded-2xl p-6 sm:p-8 border border-sky-200/90 shadow-2xl shadow-sky-100/80 relative overflow-hidden bg-white/95 backdrop-blur-xl"
              role="region"
              aria-live="polite"
              aria-label="Technology Deep-Dive Inspector"
            >
              {/* Top Accent Gradient Border */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500"
                style={{
                  backgroundColor: isCenterSelected
                    ? '#0284c7'
                    : activeNode?.categoryColor || '#0284c7'
                }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setSelectedNodeId(null);
                  setIsCenterSelected(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-slate-600 hover:text-slate-900 transition-colors border border-sky-200 focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs"
                aria-label="Close Technology Inspector"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Inspector Content: Center MERN Nucleus OR Selected Technology */}
              {isCenterSelected ? (
                // CENTER MERN ARCHITECTURE HUD
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 text-sky-800 border border-sky-300">
                      <Layers className="w-3.5 h-3.5 text-sky-600" />
                      Core Full-Stack Engine
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      MERN Architecture Backbone
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    MERN Stack Ecosystem & Engineering Architecture
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                    My engineering workflow centers on the MERN stack (React.js, Node.js, Express, and MongoDB).
                    This unified JavaScript/TypeScript foundation enables seamless end-to-end type safety,
                    efficient state synchronization, low-latency REST & WebSocket communications, and robust
                    data modeling across all flagship projects like <strong className="text-slate-900">ResQAI</strong>,{' '}
                    <strong className="text-slate-900">BhoomiVerify AI</strong>, and{' '}
                    <strong className="text-slate-900">CampusOS</strong>.
                  </p>

                  <div className="mt-6 pt-6 border-t border-sky-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CORE_MERN_IDS.map((coreId) => {
                      const coreNode = nodeMap.get(coreId);
                      if (!coreNode) return null;
                      const Icon = ICON_COMPONENTS[coreNode.icon] || Cpu;

                      return (
                        <button
                          key={coreId}
                          type="button"
                          onClick={() => handleSelectNode(coreId)}
                          className="p-3.5 rounded-xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-200/80 hover:border-sky-400 transition-all text-left flex items-start gap-3 group shadow-xs"
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center border border-sky-200 bg-white shrink-0 shadow-xs"
                          >
                            <Icon className="w-4 h-4" style={{ color: coreNode.categoryColor }} />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors block">
                              {coreNode.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border shadow-xs"
                      style={{
                        backgroundColor: `${activeNode.categoryColor}15`,
                        color: activeNode.categoryColor,
                        borderColor: `${activeNode.categoryColor}40`
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
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-white shrink-0 shadow-md"
                      style={{
                        borderColor: `${activeNode.categoryColor}40`,
                        boxShadow: `0 4px 14px -2px ${activeNode.categoryColor}30`
                      }}
                    >
                      {React.createElement(ICON_COMPONENTS[activeNode.icon] || Cpu, {
                        className: 'w-6 h-6',
                        style: { color: activeNode.categoryColor }
                      })}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {activeNode.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 mt-1">
                        {activeNode.summary}
                      </p>
                    </div>
                  </div>

                  {/* Deep Dive: How I Use It */}
                  <div className="mt-6 pt-5 border-t border-sky-100">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-2 flex items-center gap-2">
                      <Info className="w-3.5 h-3.5 text-sky-600" />
                      How I Engineer With This Technology:
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
                      {activeNode.howIUseIt}
                    </p>
                  </div>

                  {/* Verified Projects & Connected Architecture */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-sky-100">
                    {/* Projects Used In */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-3">
                        Featured Production Projects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeNode.projects.map((proj) => (
                          <span
                            key={proj}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-sky-50 border border-sky-200 text-sky-900 shadow-xs"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Connected Architecture (Clickable to switch node) */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-3">
                        Architecturally Connected Technologies:
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
                              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-sky-200/80 hover:border-sky-300 transition-all flex items-center gap-1.5 group shadow-xs"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: relNode.categoryColor }}
                              />
                              <span>{relNode.shortName}</span>
                              <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-sky-600" />
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
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/80 border border-sky-200/70 text-xs font-mono text-slate-600 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-xs" />
            <span className="font-medium text-slate-800">
              Honest Engineering Metrics • Zero Fabricated Percentage Bars
            </span>
          </div>
          <div className="text-slate-500">
            Categorized by genuine daily drivers, production codebases & continuous learning
          </div>
        </div>
      </div>
    </section>
  );
}
