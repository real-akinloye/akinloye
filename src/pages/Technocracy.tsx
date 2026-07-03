import { BookOpen, Shield, Globe, TrendingUp, PieChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const reforms = [
  {
    key: 'cfar',
    title: 'CFAR — Currency‑at‑Risk Pool',
    summary:
      'Sovereign FX insurance that writes floor protection for essential importers; tiered premiums fund protections for critical goods and recycle losses back into the pool.',
    bullets: [
      'Tiered protection for essentials (medicine, food, inputs)',
      'Self‑funding via premiums and sector credits',
      'Reduces FX-driven price shocks for hospitals and manufacturers',
    ],
    icon: BookOpen,
  },
  {
    key: 'faac',
    title: 'FAAC Reform & Direct Disbursement',
    summary:
      'Lock FAAC allocations to a floor exchange rate at point-of-earning and disburse directly to LGAs with a public real-time dashboard.',
    bullets: ['Floor rate at earning', 'Direct electronic LGA transfers', 'Public FAAC dashboard for transparency'],
    icon: Globe,
  },
  {
    key: 'revdiv',
    title: 'Revenue Diversification',
    summary:
      'Capture digital commerce and broaden the tax base through a Digital Economy Revenue Act and stronger large-taxpayer audits.',
    bullets: ['Digital Economy Revenue Act', 'Large-taxpayer digital audits', 'Presumptive tax simplification'],
    icon: PieChart,
  },
  {
    key: 'cbn',
    title: 'CBN Mandate Clarity',
    summary:
      'Refocus the central bank on price stability (5–8% band), strengthen independence, and replace short-term monetisation with long-term instruments.',
    bullets: ['Primary price-stability mandate', 'Independent MPC appointments', 'Convert Ways‑and‑Means to long-term bonds'],
    icon: Shield,
  },
  {
    key: 'state',
    title: 'State Fiscal Autonomy',
    summary:
      'A State Revenue Service linked to a Unified Tax Identity to improve subnational revenue collection and land-value capture.',
    bullets: ['Unified Tax Identity', 'State Revenue Service', 'Land value capture mechanisms'],
    icon: Users,
  },
  {
    key: 'finance',
    title: 'Infrastructure & SME Finance',
    summary:
      'Sovereign first‑loss guarantees and guarantee schemes to crowd in private capital for infrastructure and unlock SME credit.',
    bullets: ['First-loss guarantees', 'Pension allocation for infrastructure', 'Development finance guarantees for SMEs'],
    icon: TrendingUp,
  },
];

const Card = ({ title, summary, bullets, Icon }: any) => (
  <article className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{summary}</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
          {bullets.map((b: string) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

const Technocracy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <header className="mb-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Technocracy — EES Reform Summaries</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Implementable reform summaries from the Economic Ecological Sanitation compendium. Each card below explains the problem addressed and the proposed instrument.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://equical.tech"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background"
            >
              Full compendium
            </a>
          </div>
        </header>

        <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reforms.map((r) => (
            <Card
              key={r.key}
              title={r.title}
              summary={r.summary}
              bullets={r.bullets}
              Icon={r.icon}
            />
          ))}
        </main>

        <section className="mt-10 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6">
          <h4 className="text-xl font-semibold mb-3">Next steps</h4>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Prioritise CFAR pilot and FAAC direct disbursement in short-term pilots.</li>
            <li>Pass CBN Mandate Clarity and EES Act during a reserve-strength window.</li>
            <li>Design stress tests, dashboard prototypes, and legislative clauses for technical review.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Technocracy;
