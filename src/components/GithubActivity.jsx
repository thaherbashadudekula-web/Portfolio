import React from 'react';
import { 
  GitFork, 
  Star, 
  BookOpen, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import { useGitHubData } from '../hooks/useGitHubData';

export default function GithubActivity() {
  const { profile, repos, isLive } = useGitHubData(personalData.githubUsername);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              <span>07 // OPEN SOURCE & REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Building in Public
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-xl">
              Authentic version-controlled repositories and public code contributions on GitHub.
            </p>
          </div>

          {/* Live Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live GitHub API Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                <GithubIcon className="w-3.5 h-3.5" />
                @{personalData.githubUsername}
              </span>
            )}
          </div>
        </div>

        {/* Profile Card & Stats */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/[0.08] mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-dark-850 border border-white/15 flex items-center justify-center shadow-lg">
              <GithubIcon className="w-8 h-8 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-100">
                  {profile?.name || personalData.displayName}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  @{profile?.login || personalData.githubUsername}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {profile?.bio || 'MERN Stack Developer building scalable web applications and open source tools.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.08] w-full md:w-auto">
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-accent-cyan">
                {profile?.publicRepos ?? '12+'}
              </span>
              <span className="text-[11px] text-slate-400">Repositories</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-accent-blue">
                {profile?.followers ?? 'Active'}
              </span>
              <span className="text-[11px] text-slate-400">Followers</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-100 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 transition-colors"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-4 h-4 text-accent-cyan" />
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-accent-cyan transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-5 pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            ))
          ) : (
            // Authentic fallback repository cards
            [
              {
                name: "Pulse",
                desc: "High-velocity team operations and project management dashboard built with vanilla HTML5, CSS3, and modern ES6+ JavaScript.",
                lang: "JavaScript",
                url: "https://github.com/thaherbashadudekula-web/Pulse"
              },
              {
                name: "ResQAI",
                desc: "Autonomous multi-agent disaster intelligence RAG platform with hybrid retrieval, Qdrant vector search & Socket.IO token streaming.",
                lang: "TypeScript",
                url: personalData.github
              },
              {
                name: "developer-portfolio",
                desc: "Modern responsive developer portfolio built with React and Vite with a component-based frontend architecture.",
                lang: "React.js",
                url: personalData.github
              }
            ].map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen className="w-4 h-4 text-accent-cyan" />
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-accent-cyan transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-5 pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                    {repo.lang}
                  </span>
                  <span className="text-[11px] text-accent-cyan-light ml-auto">
                    View on GitHub &rarr;
                  </span>
                </div>
              </a>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
