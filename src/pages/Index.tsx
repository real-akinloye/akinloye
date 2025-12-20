import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Globe, Briefcase, Target, Layers, Shield, Database } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import TerminalCode from '@/components/TerminalCode';

const Index = () => {
  const [showCode, setShowCode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Builder • Systems Thinker • Ownership Architect";

  useEffect(() => {
    const codeTimer = setTimeout(() => setShowCode(true), 500);
    
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearTimeout(codeTimer);
      clearInterval(typingInterval);
    };
  }, []);

  const sections = [
    {
      icon: BookOpen,
      title: 'Research Works',
      description: 'Equity dilution, ownership models, liquidity systems, and governance in emerging markets.',
      link: '/research',
      color: 'text-terminal-green',
    },
    {
      icon: Globe,
      title: 'Awareness & Dangers',
      description: 'Security threats, digital surveillance, platform monopolies, and information warfare.',
      link: '/awareness',
      color: 'text-terminal-amber',
    },
    {
      icon: Code,
      title: 'Sociopolitics',
      description: 'Systems-based political analysis. Citizenship, leadership, and African progress.',
      link: '/sociopolitics',
      color: 'text-terminal-cyan',
    },
    {
      icon: Briefcase,
      title: 'Portfolio',
      description: 'Infrastructure projects: Equical, Pluto, BlackChat, and Universal Data Migrator.',
      link: '/portfolio',
      color: 'text-terminal-purple',
    },
  ];

  const coreProjects = [
    {
      icon: Target,
      name: 'Equical',
      tagline: 'BI-Powered Equity Management Platform',
      description: 'Cap tables, ESOP visibility, investor portfolios, deal desks, compliance, and equity analytics.',
    },
    {
      icon: Layers,
      name: 'Pluto',
      tagline: 'Ownership Liquidity Infrastructure',
      description: 'Tokenization as infrastructure, Open Market Strategy, early liquidity paths, governance-aware systems.',
    },
    {
      icon: Shield,
      name: 'BlackChat',
      tagline: 'Privacy-Conscious Communication',
      description: 'Data ownership, interoperability, platform migration, and control over digital identity.',
    },
    {
      icon: Database,
      name: 'UDM',
      tagline: 'Universal Data Migrator',
      description: 'Infrastructure for migrating data between platforms. Reduce switching costs, increase user leverage.',
    },
  ];

  const beliefs = [
    'Ownership determines power. Power determines outcomes.',
    'Liquidity, transparency, and participation should not be exclusive to exits.',
    'Systems must work even when leaders fail.',
    'Citizenship is responsibility, not validation.',
    'African progress will not come from copying Western systems blindly.',
  ];

  return (
    <div className="min-h-screen relative">
      <TerminalCode isVisible={showCode} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative order-1 lg:order-2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 border border-terminal-green/30" />
                <div className="absolute -inset-8 border border-terminal-green/20" />
                
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-terminal-green" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-terminal-green" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-terminal-green" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-terminal-green" />
                
                <img
                  src={profileImage}
                  alt="Akinloye Nuel - Builder, Systems Thinker, Ownership Architect"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 border-glow"
                />
                
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card px-4 py-1 border border-terminal-green">
                  <span className="font-mono text-xs text-terminal-green flex items-center gap-2">
                    <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="font-mono text-sm text-muted-foreground">
                  <span className="text-terminal-green">&gt;</span> initializing profile...
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-terminal-green">Akinloye</span>
                  <br />
                  <span className="text-secondary">Nuel</span>
                </h1>
                
                <div className="font-mono text-lg md:text-xl text-muted-foreground h-8">
                  {typedText}
                  <span className="terminal-cursor" />
                </div>
              </div>

              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Technologist, systems thinker, and independent researcher focused on ownership, equity, 
                governance, and power structures in emerging markets. Building infrastructure that helps 
                people understand, manage, and reclaim ownership—of companies, data, and power.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="btn-terminal"
                >
                  View Projects
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/research"
                  className="px-6 py-3 border border-muted-foreground text-muted-foreground font-mono uppercase tracking-wider hover:border-terminal-green hover:text-terminal-green transition-all duration-300"
                >
                  Explore Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="font-mono text-terminal-green text-sm mb-8">
              &gt; cat philosophy.md
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
              "Most systems fail not because of lack of talent, but because ownership and 
              incentives are <span className="text-terminal-green">poorly designed</span> or 
              <span className="text-secondary"> unfairly distributed</span>."
            </blockquote>

            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-terminal-green font-mono">→</span>
                  <span>{belief}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-terminal-amber/30 bg-terminal-amber/5">
              <h3 className="font-mono text-terminal-amber text-sm mb-4">SKEPTICAL OF:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-terminal-amber">×</span> Blind VC worship
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-amber">×</span> Imported Western startup models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-amber">×</span> 7–10 year value extraction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-terminal-amber">×</span> Elite-only liquidity networks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-mono text-terminal-green text-sm">
              &gt; ls -la /projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Core <span className="text-terminal-green">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreProjects.map((project, index) => (
              <div
                key={project.name}
                className="card-terminal hover:border-terminal-green transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-terminal-green text-terminal-green">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-terminal-cyan text-sm font-mono mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-mono text-terminal-green text-sm">
              &gt; ls -la /sections
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Explore My <span className="text-terminal-green">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Link
                key={section.title}
                to={section.link}
                className="group card-terminal hover:border-terminal-green transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 border border-current ${section.color}`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 group-hover:${section.color} transition-colors`}>
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {section.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-terminal-green group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Method of Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="font-mono text-terminal-green text-sm mb-8">
              &gt; cat method.txt
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Method of <span className="text-terminal-green">Work</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Problem-first, not tech-first',
                'Builds MVPs aggressively, iterates in production',
                'Comfortable with failure as a learning mechanism',
                'Prefers shipping over perfecting',
                'Designs for long-term optionality, not short-term hype',
                'Solo founder: architecture, backend, product, strategy',
              ].map((method, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 border border-border hover:border-terminal-green transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <span className="text-terminal-green font-mono text-lg">✓</span>
                  <span className="text-muted-foreground">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Direction */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-mono text-terminal-green text-sm mb-8">
              &gt; cat vision.md
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Long-Term <span className="text-terminal-green">Direction</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Not building a single company. Building infrastructure—technical, economic, and conceptual.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Ownership infrastructure across industries',
                'Alternative liquidity systems',
                'Governance tooling',
                'Pan-African economic coordination',
                'Technology-informed political participation',
              ].map((direction, index) => (
                <div 
                  key={index}
                  className="p-4 border border-terminal-green/30 text-muted-foreground text-sm animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {direction}
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border border-terminal-green bg-terminal-green/5">
              <p className="text-lg md:text-xl font-bold text-foreground">
                <span className="text-terminal-green">"</span>
                Akinloye Nuel builds systems that help people understand, manage, and reclaim 
                ownership—of companies, data, and power.
                <span className="text-terminal-green">"</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;