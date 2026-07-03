import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Briefcase, Code, Target, Layers, Shield, Database } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Founder · Systems Strategist · Market Infrastructure Leader';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((current) => {
        const nextLength = current.length + 1;
        return nextLength <= fullText.length ? fullText.slice(0, nextLength) : current;
      });
    }, 40);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const sections = [
    {
      icon: BookOpen,
      title: 'Research & Strategy',
      description: 'Frameworks for capital design, governance, and technology policy across emerging markets.',
      link: '/research',
    },
    {
      icon: Globe,
      title: 'Research & Policy',
      description: 'Assessments of surveillance, platform ecosystems, and infrastructure resilience.',
      link: '/research',
    },
    {
      icon: Code,
      title: 'Technocracy',
      description: 'Bridging technology, policy, and governance to shape resilient digital systems.',
      link: '/technocracy',
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurial Builds',
      description: 'SaaS and financial infrastructure built for founders, investors, and regulated markets.',
      link: '/portfolio',
    },
  ];

  const outcomes = [
    {
      icon: Target,
      title: 'Equity Infrastructure',
      subtitle: 'Cap tables, liquidity models, governance controls.',
    },
    {
      icon: Layers,
      title: 'Scalable Product Delivery',
      subtitle: 'End-to-end systems designed for constrained environments.',
    },
    {
      icon: Shield,
      title: 'Operational Resilience',
      subtitle: 'Security-minded platforms with real-world adoption signals.',
    },
    {
      icon: Database,
      title: 'Data & Compliance',
      subtitle: 'Transparent systems for financial recordkeeping and reporting.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Founder, Systems Engineer, Equity Infrastructure
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
                  I build resilient systems for ownership, governance, and market infrastructure.
                </h1>

                <div className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Delivering product-led engineering and strategic research for emerging market founders and investors. My work focuses on equity infrastructure, compliance, and operational resilience.
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20">
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/research" className="inline-flex items-center gap-2 rounded-full border border-muted-foreground px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary hover:text-primary">
                  Read Research
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border border-border bg-card p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Current focus</p>
                  <p className="mt-4 text-2xl font-semibold text-foreground">EquiCal</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Region</p>
                  <p className="mt-4 text-2xl font-semibold text-foreground">Africa + Emerging Markets</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Approach</p>
                  <p className="mt-4 text-2xl font-semibold text-foreground">Product & Systems</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Style</p>
                  <p className="mt-4 text-2xl font-semibold text-foreground">Technical, Strategic, Practical</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] bg-accent/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-2xl shadow-primary/10">
                <img src={profileImage} alt="Akinloye Nuel" className="h-full w-full rounded-[1.75rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <div key={index} className="rounded-3xl border border-border bg-background/70 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">{item.title}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 xl:grid-cols-[1.3fr_0.9fr] items-start">
            <div>
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.26em] text-primary">What I work on</p>
                <h2 className="mt-4 text-4xl font-bold text-foreground">Professional focus areas</h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <Link
                    key={index}
                    to={section.link}
                    className="group rounded-3xl border border-border bg-card p-6 transition hover:border-primary"
                  >
                    <div className="flex items-center gap-3 text-primary">
                      <section.icon className="h-5 w-5" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em]">{section.title}</p>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{section.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
                      Explore
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-10">
              <p className="text-sm uppercase tracking-[0.26em] text-primary">Mission</p>
              <h3 className="mt-4 text-3xl font-bold text-foreground">Build durable digital infrastructure for founders and markets that are often overlooked.</h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I combine product discipline with engineering rigor to ship platforms that work under uncertainty. The focus is not on the next feature, but on systems that can support equity, compliance, and liquidity for the next generation of companies.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  'Product architecture for capital and ownership systems',
                  'Operationally resilient backend and database design',
                  'Research-driven frameworks for policy and governance',
                ].map((item, index) => (
                  <div key={index} className="rounded-3xl border border-border bg-background/70 p-4">
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.26em] text-primary">Get in touch</p>
          <h2 className="mt-4 text-4xl font-bold text-foreground">Ready to partner on ambitious builds.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you are looking for product leadership, founder-led engineering, or systems thinking for equity and governance, I’m available for conversations and collaborations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portfolio" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition hover:bg-accent/90">
              View Portfolio
            </Link>
            <a href="mailto:akinloyeemmanuel06@gmail.com" className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-muted-foreground transition hover:border-accent hover:text-accent">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
