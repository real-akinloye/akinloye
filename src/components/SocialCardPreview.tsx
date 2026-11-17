import React, { useState } from 'react';
import { Copy, Check, Share2, Sparkles, Shield, Download, ExternalLink } from 'lucide-react';

export const SocialCardPreview: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShareOrCopy = () => {
    const shareUrl = "https://akinloyenuel.me";
    navigator.clipboard.writeText(`${shareUrl} — The Dynamicist: Akinloye Nuel (Founder, EquiCal · NESG Volunteer)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4">
      {/* ── CHARCOAL CODE EDITOR SOCIAL CARD (1200x630 proportion) ── */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-[#30343e] bg-[#121418] text-[#e6ebf5] shadow-2xl font-mono">
        {/* Editor Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#181a20] border-b border-[#30343e]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />
            <div className="ml-3 px-3 py-1 bg-[#20232b] rounded-t border-t-2 border-[#10b981] border-x border-[#30343e] text-xs font-semibold text-white flex items-center gap-1.5">
              <span>the-dynamicist.ts</span>
            </div>
          </div>
          <span className="text-xs text-[#788091] hidden sm:inline-block">portfolio/social-card (1200×630) — zsh</span>
        </div>

        {/* Charcoal Editor Body */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] items-center gap-8 p-6 sm:p-10 lg:p-12 min-h-[400px] bg-gradient-to-b from-[#14161a] to-[#0f1012]">
          {/* Subtle editor background grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

          {/* LEFT COLUMN: "The Dynamicist" in bold */}
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6 font-sans">
            <div className="space-y-4">
              {/* Eyebrow Code Comment */}
              <div className="flex items-center gap-2 font-mono text-xs text-[#34d399] tracking-wider font-semibold">
                <span>// SYSTEMS STRATEGIST & TECHNOCRATIC REFORMIST</span>
              </div>

              {/* Bold Display: "The Dynamicist" */}
              <div className="space-y-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Syne',sans-serif] leading-tight">
                  The Dynamicist
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-[#10b981] font-['Space_Grotesk',sans-serif]">
                  Akinloye Nuel
                </p>
              </div>

              {/* Bio & Affiliations */}
              <div className="text-sm sm:text-base text-[#d7deb] leading-relaxed space-y-1 font-['DM_Sans',sans-serif]">
                <p>Founder & Lead Engineer at <strong>EquiCal</strong>.</p>
                <p>Present Volunteer at <strong>National Economic Summit Group (NESG)</strong>.</p>
                <p className="text-[#a0acc3]">Author of <em>The Productive Nigerian State</em> (83+ structural reforms).</p>
              </div>
            </div>

            {/* Charcoal Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded bg-[#1c1f26] border border-[#323844] text-[#cbd5e1]">
                  Sovereign Tokenization
                </span>
                <span className="px-3 py-1 rounded bg-[#1c1f26] border border-[#323844] text-[#cbd5e1]">
                  Equity Infrastructure
                </span>
                <span className="px-3 py-1 rounded bg-[#1c1f26] border border-[#323844] text-[#34d399] font-semibold">
                  NESG Volunteer
                </span>
                <span className="px-3 py-1 rounded bg-[#1c1f26] border border-[#323844] text-[#cbd5e1]">
                  18 Pillars
                </span>
              </div>

              {/* Terminal command bar */}
              <div className="rounded-lg bg-[#0e1014] border border-[#2a303a] px-3.5 py-2.5 font-mono text-xs flex items-center gap-2 text-gray-300">
                <span className="text-[#34d399] font-bold">$</span>
                <span className="text-white">curl https://akinloyenuel.me/technocracy</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Picture framed in Charcoal Editor Theme */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end">
            <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
              {/* Outer Charcoal Frame */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#3c4452] bg-[#0c0d10] p-1.5 shadow-2xl">
                <img
                  src="/og-image.jpg"
                  alt="Akinloye Nuel — The Dynamicist"
                  className="w-full h-auto rounded-xl object-cover filter contrast-[1.03]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('dynamicist-profile.jpg')) {
                      target.src = '/dynamicist-profile.jpg';
                    }
                  }}
                />
              </div>

              <div className="absolute -bottom-3 inset-x-4 rounded-xl bg-[#0e1014]/90 backdrop-blur-md border border-[#373e4b] px-3.5 py-2 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white uppercase tracking-wider">Akinloye Nuel</span>
                <span className="text-[#34d399] font-semibold">The Dynamicist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="px-6 py-3 bg-[#181a20] border-t border-[#30343e] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#788091]">
            <Share2 className="w-3.5 h-3.5 text-[#10b981]" />
            <span>OpenGraph Social Preview · Generated as 1200×630 charcoal editor card</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/og-image.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#222630] hover:bg-[#2b303c] text-white transition font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Raw Image</span>
            </a>
            <button
              onClick={handleShareOrCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10b981] hover:bg-[#059669] text-black font-bold transition"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Link!' : 'Share Portfolio'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
