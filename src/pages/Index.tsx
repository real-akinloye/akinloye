import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Globe, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import TerminalCode from '@/components/TerminalCode';

const Index = () => {
  const [showCode, setShowCode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Researcher • Activist • Developer";

  useEffect(() => {
    // Start code animation after mount
    const codeTimer = setTimeout(() => setShowCode(true), 500);
    
    // Typing animation
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
      description: 'Exploring cybersecurity, technology, and digital innovation through rigorous academic research.',
      link: '/research',
      color: 'text-terminal-green',
    },
    {
      icon: Globe,
      title: 'Awareness & Dangers',
      description: 'Educating the public about digital threats, online safety, and cybersecurity awareness.',
      link: '/awareness',
      color: 'text-terminal-amber',
    },
    {
      icon: Code,
      title: 'Sociopolitics',
      description: 'Analysis and commentary on the intersection of technology, society, and politics.',
      link: '/sociopolitics',
      color: 'text-terminal-cyan',
    },
    {
      icon: Briefcase,
      title: 'Portfolio',
      description: 'A showcase of projects, achievements, and professional endeavors.',
      link: '/portfolio',
      color: 'text-terminal-purple',
    },
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
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-terminal-green/30" />
                <div className="absolute -inset-8 border border-terminal-green/20" />
                
                {/* Glowing corners */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-terminal-green" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-terminal-green" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-terminal-green" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-terminal-green" />
                
                <img
                  src={profileImage}
                  alt="Akinloye Nuel - Researcher, Activist, Developer"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 border-glow"
                />
                
                {/* Status indicator */}
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
                Passionate about leveraging technology for positive change. Combining research, 
                activism, and development to address critical issues in our digital world.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="btn-terminal"
                >
                  View Portfolio
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

      {/* Sections Grid */}
      <section className="py-20 bg-card/50">
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

      {/* Terminal Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border p-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-terminal-green">[root@akinloye ~]$</span>
              <span className="text-muted-foreground"> cat stats.txt</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '10+', label: 'Research Papers' },
                { value: '20+', label: 'Projects' },
                { value: '5K+', label: 'Impact Reach' },
                { value: '3+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-terminal-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
