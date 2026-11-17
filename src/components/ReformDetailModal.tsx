import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReformDetail, STATUS_BADGE_CLASSES, STATUS_LABELS } from '@/data/reforms';
import { Shield, Sparkles, History, Cpu, CheckCircle2, Copy, Check, AlertTriangle } from 'lucide-react';

interface ReformDetailModalProps {
  reform: ReformDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReformDetailModal: React.FC<ReformDetailModalProps> = ({
  reform,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!reform) return null;

  const badgeStyle = STATUS_BADGE_CLASSES[reform.status];

  const handleCopy = () => {
    const textToCopy = `[Reform #${reform.n}] ${reform.title}\nPillar: ${reform.pillarTitle}\nOverview: ${reform.overview || reform.desc}\nAuthor: Akinloye Ogbon (equical.tech)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isNationalTokenization = reform.n === "21" || reform.title.toLowerCase().includes("tokenization");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 border-border bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl">
        <DialogHeader className="space-y-3 text-left border-b border-border/60 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                REFORM #{reform.n}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {reform.pillarTitle}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {reform.featured && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <Sparkles className="w-3 h-3" /> Flagship
                </span>
              )}
              <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badgeStyle.bg}`}>
                {STATUS_LABELS[reform.status]}
              </span>
            </div>
          </div>

          <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-snug">
            {reform.title}
          </DialogTitle>

          <p className="text-base text-muted-foreground leading-relaxed">
            {reform.desc}
          </p>

          {reform.keyQuoteOrMetric && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary">
              <Shield className="w-3.5 h-3.5" />
              <span>{reform.keyQuoteOrMetric}</span>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-6 pt-4 text-foreground text-sm leading-relaxed">
          {/* Main Overview */}
          {reform.overview && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Comprehensive Reform Overview
              </h4>
              <div className="bg-background/60 rounded-xl p-4 border border-border/80 text-foreground/90 leading-relaxed whitespace-pre-line text-sm md:text-[15px]">
                {reform.overview}
              </div>
            </div>
          )}

          {/* Historical Context / Sanctions Resistance (Special emphasis) */}
          {(reform.historicalContext || isNationalTokenization) && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
                <History className="w-4 h-4" /> Historical Context & Sanctions Resilience
              </h4>
              <div className="rounded-xl p-4.5 bg-amber-500/10 border border-amber-500/30 space-y-3">
                {isNationalTokenization ? (
                  <>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground text-sm">
                          The Abacha Era Lesson: Sovereign Immunity Against Financial Weaponisation
                        </p>
                        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                          During Nigeria's 1990s Abacha regime, international sanctions and severed correspondent banking relationships paralyzed Nigeria's ability to settle cross-border commerce, freezing offshore accounts and trapping sovereign reserves. Today, the weaponisation of SWIFT and Western clearinghouses poses the same existential risk.
                        </p>
                        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                          <strong>National Tokenization Rail</strong> solves this permanently. By tokenizing real physical commodities (crude oil, gas, solid minerals, agricultural yields) into cryptographic trade units on a sovereign ledger, Nigeria can settle bilateral trade peer-to-peer 24/7 across the African Union, BRICS, Asia, and European partners with zero dependence on foreign correspondent banks or SWIFT. <span className="text-primary font-medium">Whoever owns the settlement rail owns the trade.</span>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                    {reform.historicalContext}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Core Mechanism */}
          {reform.coreMechanism && reform.coreMechanism.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Operational Architecture & Mechanics
              </h4>
              <ul className="grid gap-2.5">
                {reform.coreMechanism.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-background/50 rounded-lg p-3 border border-border/70 text-xs md:text-sm">
                    <span className="font-mono text-xs font-bold text-primary mt-0.5">0{idx + 1}</span>
                    <span className="text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Strategic Sovereign Impact */}
          {reform.strategicImpact && reform.strategicImpact.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Sovereign Impact & Deliverables
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {reform.strategicImpact.map((impact, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/60">
            <span className="text-xs text-muted-foreground">
              Authored by <strong>Akinloye Ogbon</strong> · Technocratic Reformist
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Reference'}
              </button>
              <button
                onClick={onClose}
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
