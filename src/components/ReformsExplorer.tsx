import React, { useState, useMemo } from 'react';
import { REFORMS_DATA, ReformDetail, ReformStatus, STATUS_BADGE_CLASSES, STATUS_LABELS } from '@/data/reforms';
import { ReformDetailModal } from '@/components/ReformDetailModal';
import { Search, Sparkles, Filter, AlertCircle, ChevronRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface ReformsExplorerProps {
  initialSearch?: string;
  initialFilter?: string;
  compact?: boolean;
}

export const ReformsExplorer: React.FC<ReformsExplorerProps> = ({
  initialSearch = '',
  initialFilter = 'all',
  compact = false,
}) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedPillarId, setSelectedPillarId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>(initialFilter);
  const [selectedReform, setSelectedReform] = useState<ReformDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Flatten all reforms with pillar details
  const allReforms = useMemo(() => {
    return REFORMS_DATA.flatMap((p) => p.reforms);
  }, []);

  // Stats calculation
  const stats = useMemo(() => {
    let drafted = 0;
    let submitted = 0;
    allReforms.forEach((r) => {
      if (r.status === 'drafted' || r.status === 'submitted') drafted++;
      if (r.status === 'submitted') submitted++;
    });
    return {
      total: allReforms.length,
      drafted,
      submitted,
      ambition: '1,000',
    };
  }, [allReforms]);

  // Filtered list
  const filteredPillars = useMemo(() => {
    const q = search.trim().toLowerCase();

    return REFORMS_DATA.map((p) => {
      // If pillar selected, filter out others
      if (selectedPillarId !== 'all' && p.id !== selectedPillarId) {
        return { ...p, reforms: [] };
      }

      const matchingReforms = p.reforms.filter((r) => {
        // Status filter
        if (statusFilter === 'flagship' && !r.featured) return false;
        if (statusFilter !== 'all' && statusFilter !== 'flagship' && r.status !== statusFilter) return false;

        // Search text
        if (!q) return true;
        return (
          r.title.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q) ||
          r.n.includes(q) ||
          p.pillar.toLowerCase().includes(q) ||
          (r.overview && r.overview.toLowerCase().includes(q))
        );
      });

      return {
        ...p,
        reforms: matchingReforms,
      };
    }).filter((p) => p.reforms.length > 0);
  }, [search, selectedPillarId, statusFilter]);

  const totalMatching = useMemo(() => {
    return filteredPillars.reduce((acc, p) => acc + p.reforms.length, 0);
  }, [filteredPillars]);

  const handleCardClick = (reform: ReformDetail) => {
    setSelectedReform(reform);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full space-y-8">
      {/* Overview Stat Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Total Reforms</p>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-primary font-mono">{stats.total}</p>
          <p className="text-xs text-muted-foreground mt-1">Across 18 Core Pillars</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Drafted / Built</p>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-500 font-mono">{stats.drafted}</p>
          <p className="text-xs text-muted-foreground mt-1">Fully formulated policies</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Formally Submitted</p>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-amber-500 font-mono">{stats.submitted}</p>
          <p className="text-xs text-muted-foreground mt-1">First bill Oct 2026</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">4-Year Ambition</p>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-foreground font-mono">{stats.ambition}</p>
          <p className="text-xs text-muted-foreground mt-1">Institutional target</p>
        </div>
      </div>

      {/* Featured Callout Banner for National Tokenization Rail */}
      <div 
        onClick={() => {
          const natTok = allReforms.find(r => r.n === "21");
          if (natTok) handleCardClick(natTok);
        }}
        className="group relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-card to-background p-6 md:p-8 cursor-pointer transition-all hover:border-primary hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                REFORM #21 · FLAGSHIP
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Sovereign Sanctions Resistance
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              National Tokenization Rail: Sanctions-Proof Trade Settlement
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When international sanctions or banking corridors are weaponised, Nigeria moves value through sovereign commodity tokenization. Learn how this solves the fatal vulnerabilities of the 1990s Abacha-era sanctions and SWIFT weaponisation.
            </p>
          </div>
          <button className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm group-hover:bg-primary/90 transition-all">
            <span>Explore Overview</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-card/60 backdrop-blur-sm p-4 rounded-2xl border border-border">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reforms (e.g. tokenization, sanctions, CFAR, energy, FAAC, tax)..."
            className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              statusFilter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            All ({allReforms.length})
          </button>
          <button
            onClick={() => setStatusFilter('flagship')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              statusFilter === 'flagship'
                ? 'bg-blue-600 text-white'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            <Sparkles className="w-3 h-3" /> Flagship
          </button>
          <button
            onClick={() => setStatusFilter('drafted')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              statusFilter === 'drafted'
                ? 'bg-emerald-600 text-white'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            Drafted
          </button>
          <button
            onClick={() => setStatusFilter('submitted')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              statusFilter === 'submitted'
                ? 'bg-amber-600 text-white'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            Submitted
          </button>
        </div>
      </div>

      {/* Pillar Selector Tabs / Dropdown */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedPillarId('all')}
          className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition ${
            selectedPillarId === 'all'
              ? 'border-primary bg-primary/10 text-primary font-semibold'
              : 'border-border bg-card text-muted-foreground hover:text-foreground'
          }`}
        >
          All 18 Pillars
        </button>
        {REFORMS_DATA.map((p, idx) => {
          const isSelected = selectedPillarId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPillarId(p.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition ${
                isSelected
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="font-mono opacity-60 mr-1.5">P{String(idx + 1).padStart(2, '0')}</span>
              {p.pillar.split('&')[0].trim()} ({p.reforms.length})
            </button>
          );
        })}
      </div>

      {/* Results Count & Helper */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <span>Showing <strong>{totalMatching}</strong> reform{totalMatching !== 1 ? 's' : ''}</span>
        <span className="italic flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" /> Click any card to read detailed overview & operational design
        </span>
      </div>

      {/* Reforms Grid grouped by Pillars */}
      {filteredPillars.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border p-8">
          <AlertCircle className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-foreground">No matching reforms found</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Try adjusting your search keywords or resetting the pillar and status filters.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedPillarId('all');
              setStatusFilter('all');
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredPillars.map((p) => (
            <section key={p.id} id={p.id} className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {p.id.toUpperCase()}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {p.pillar}
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {p.reforms.length} {p.reforms.length === 1 ? 'reform' : 'reforms'}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.reforms.map((reform) => {
                  const badge = STATUS_BADGE_CLASSES[reform.status];
                  return (
                    <article
                      key={reform.id}
                      onClick={() => handleCardClick(reform)}
                      className={`group relative flex flex-col justify-between rounded-2xl border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer ${
                        reform.featured
                          ? 'border-primary/40 hover:border-primary'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      <div>
                        {/* Top bar */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                            #{reform.n}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {reform.featured && (
                              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                                Flagship
                              </span>
                            )}
                            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.bg}`}>
                              {STATUS_LABELS[reform.status]}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {reform.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-2.5 text-xs md:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {reform.desc}
                        </p>
                      </div>

                      {/* Footer highlight & CTA */}
                      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                        <span className="text-primary font-medium group-hover:underline flex items-center gap-1">
                          View Overview & Context
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Modal Popup */}
      <ReformDetailModal
        reform={selectedReform}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
