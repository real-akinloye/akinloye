import React, { useState, useMemo, useEffect } from 'react';
import './Technocracy.css';
import { REFORMS_DATA, ReformDetail, STATUS_LABELS } from '@/data/reforms';
import { ReformDetailModal } from '@/components/ReformDetailModal';
import { ChevronRight } from 'lucide-react';

const statusBadgeClass: Record<string, string> = {
  drafted: "pns-badge-drafted",
  submitted: "pns-badge-submitted",
  pending: "pns-badge-pending",
  "needs-recovery": "pns-badge-recover",
};

const Technocracy: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activePillar, setActivePillar] = useState('p1');
  const [selectedReform, setSelectedReform] = useState<ReformDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate totals
  const { total, drafted, submitted } = useMemo(() => {
    let t = 0, d = 0, s = 0;
    REFORMS_DATA.forEach(p => p.reforms.forEach(r => {
      t++;
      if (r.status === 'drafted' || r.status === 'submitted') d++;
      if (r.status === 'submitted') s++;
    }));
    return { total: t, drafted: d, submitted: s };
  }, []);

  // Filtered pillars based on search
  const filteredPillars = useMemo(() => {
    const q = search.trim().toLowerCase();
    return REFORMS_DATA.map(p => {
      const matching = p.reforms.filter(r =>
        !q ||
        r.title.toLowerCase().includes(q) ||
        (r.desc || '').toLowerCase().includes(q) ||
        p.pillar.toLowerCase().includes(q) ||
        r.n.includes(q) ||
        (r.overview && r.overview.toLowerCase().includes(q))
      );
      return { ...p, reforms: matching };
    }).filter(p => p.reforms.length > 0);
  }, [search]);

  // Scroll spy for sidebar active indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.pns-pillar-section');
      const scrollPos = window.scrollY + 180;
      sections.forEach(sec => {
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActivePillar(sec.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPillar = (id: string) => {
    setActivePillar(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (reform: ReformDetail) => {
    setSelectedReform(reform);
    setIsModalOpen(true);
  };

  // Structured JSON-LD for AI Agents and Search Crawlers
  const jsonLdData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "The Productive Nigerian State — Technocratic Policy & Economic Architecture",
      "headline": "Not an election manifesto. A long-term productive state.",
      "description": "A personally authored compendium of 83+ structural reforms across 18 pillars addressing monetary resilience, sanctions-resistant tokenization rails, energy sovereignty, and decentralized governance.",
      "author": {
        "@type": "Person",
        "name": "Akinloye Ogbon",
        "alternateName": "Akinloye Nuel",
        "jobTitle": "Founder & Lead Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "EquiCal",
          "url": "https://equical.tech"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "National Economic Summit Group (NESG)",
          "description": "Volunteer Contributor"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": total,
        "itemListElement": REFORMS_DATA.flatMap((p, pIndex) =>
          p.reforms.map((r, rIndex) => ({
            "@type": "Legislation",
            "position": pIndex * 100 + rIndex + 1,
            "name": `${r.n}: ${r.title}`,
            "legislationIdentifier": `PNS-${r.n}`,
            "description": r.overview || r.desc,
            "legislationType": r.status === "submitted" ? "Submitted Bill" : "Policy Reform Proposal",
            "keywords": [
              p.pillar,
              r.featured ? "Flagship Reform" : "Structural Reform",
              r.n === "21" ? "National Tokenization Rail, Sanctions Resistance, Abacha Era Sanctions, SWIFT Alternative" : ""
            ].filter(Boolean)
          }))
        )
      }
    };
  }, [total]);

  return (
    <div className="pns-root pt-16" itemScope itemType="https://schema.org/CollectionPage">
      {/* Machine-readable JSON-LD Schema for AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* HEADER */}
      <header className="pns-site-header" role="banner">
        <div className="pns-header-brand">
          <div className="pns-dot"></div>
          <h1 itemProp="name">The Productive Nigerian State</h1>
        </div>
        <div className="pns-header-meta">
          <span>Akinloye Ogbon · equical.tech</span>
          <span className="pns-stat-pill">{total} reforms</span>
        </div>
      </header>

      <div className="pns-layout">
        {/* SIDEBAR */}
        <nav className="pns-sidebar" id="sidebar" aria-label="18 Strategic Pillars Navigation">
          <div className="pns-sidebar-label">Pillars</div>
          {REFORMS_DATA.map((p, i) => {
            const isActive = activePillar === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={`pns-pillar-link ${isActive ? 'active' : ''}`}
                onClick={() => scrollToPillar(p.id)}
                aria-label={`Jump to Pillar ${i + 1}: ${p.pillar}`}
              >
                <span className="pnum">P{String(i + 1).padStart(2, '0')}</span>
                <span className="truncate">{p.pillar}</span>
                <span className="pcount">{p.reforms.length}</span>
              </button>
            );
          })}
        </nav>

        {/* MAIN CONTENT */}
        <main className="pns-main" role="main" id="main-content">
          <div className="pns-intro">
            <h2>Not an election manifesto.<br />A long-term productive state.</h2>
            <p itemProp="description">
              A personally authored, evolving library of 83+ structural reforms across 18 pillars — from monetary architecture to electoral design, energy sovereignty to constitutional governance. Each reform patches one structural leak in the Nigerian state. Principles → policy areas → legislation → implementation → performance indicators.
            </p>
            <div className="pns-stats-row" aria-label="Reform Inventory Statistics">
              <div className="pns-stat-box">
                <div className="n">{total}</div>
                <div className="l">Total reforms</div>
              </div>
              <div className="pns-stat-box">
                <div className="n">{drafted}</div>
                <div className="l">Drafted / built</div>
              </div>
              <div className="pns-stat-box">
                <div className="n">{submitted}</div>
                <div className="l">Submitted</div>
              </div>
              <div className="pns-stat-box">
                <div className="n">1,000</div>
                <div className="l">4-year ambition</div>
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="pns-search-wrap">
            <span className="pns-search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reforms, pillars, keywords (e.g. tokenization, sanctions, crude, electricity, FAAC)..."
              autoComplete="off"
              aria-label="Search all reforms and pillars"
            />
          </div>

          {/* PILLARS & REFORMS CONTAINER */}
          <div id="pillars-container">
            {filteredPillars.map((p) => {
              const originalIndex = REFORMS_DATA.findIndex(orig => orig.id === p.id);
              return (
                <section
                  key={p.id}
                  id={p.id}
                  className="pns-pillar-section"
                  itemScope
                  itemType="https://schema.org/ItemList"
                  aria-labelledby={`heading-${p.id}`}
                >
                  <div className="pns-pillar-stripe" aria-hidden="true"></div>
                  <div className="pns-pillar-header">
                    <span className="pns-pillar-num">P{String(originalIndex + 1).padStart(2, '0')}</span>
                    <div className="pns-pillar-title" id={`heading-${p.id}`} itemProp="name">
                      {p.pillar}
                      <span>{p.reforms.length} reform{p.reforms.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  <div className="pns-reform-grid" role="list">
                    {p.reforms.map((r) => {
                      const isNationalTokenization = r.n === "21";

                      return (
                        <article
                          key={r.id}
                          onClick={() => handleCardClick(r)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleCardClick(r);
                            }
                          }}
                          tabIndex={0}
                          role="button"
                          aria-haspopup="dialog"
                          aria-label={`View detailed overview for Reform ${r.n}: ${r.title}`}
                          className={`pns-reform-card status-${r.status}`}
                          itemScope
                          itemType="https://schema.org/Legislation"
                        >
                          <div>
                            <div className="pns-card-top">
                              <span className="pns-card-num" itemProp="legislationIdentifier">#{r.n}</span>
                              <div className="pns-card-badges">
                                {r.featured && (
                                  <span className="pns-badge pns-badge-featured">Flagship</span>
                                )}
                                {isNationalTokenization && (
                                  <span className="pns-badge pns-badge-submitted">Sanctions Resistant</span>
                                )}
                                <span className={`pns-badge ${statusBadgeClass[r.status]}`}>
                                  {STATUS_LABELS[r.status]}
                                </span>
                              </div>
                            </div>
                            <h3 className="pns-card-title" itemProp="name">{r.title}</h3>
                            {r.desc && (
                              <p className="pns-card-desc" itemProp="description">{r.desc}</p>
                            )}
                          </div>

                          <div className="pns-card-click-hint" aria-hidden="true">
                            <span>Click for detailed overview</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {filteredPillars.length === 0 && (
            <div className="pns-no-results" role="status">
              No reforms match that search. Try another keyword.
            </div>
          )}

          {/* AUTHOR FOOTER */}
          <footer className="pns-author-footer" role="contentinfo">
            <strong>Akinloye Ogbon</strong> · Technocratic reformist · Present Volunteer, National Economic Summit Group (NESG) · Founder, EquiCal (equical.tech) · Badagry, Lagos, Nigeria<br />
            Authorship principle: proposals are personally authored for the national interest. Contributors receive credit. Authorship of proposals, not ownership of their eventual implementation.<br />
            <em>Consolidated inventory · November 2026</em>
          </footer>
        </main>
      </div>

      {/* Interactive Detail Modal on Card Click */}
      <ReformDetailModal
        reform={selectedReform}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Technocracy;
