import { Link } from 'react-router-dom';
import { AlertTriangle, Shield, Lock, Eye, Wifi, Mail, ArrowRight } from 'lucide-react';

const dangers = [
  {
    icon: AlertTriangle,
    title: 'Phishing Attacks',
    description: 'Deceptive emails and websites designed to steal personal information and credentials.',
    severity: 'High',
    color: 'text-terminal-red',
  },
  {
    icon: Lock,
    title: 'Ransomware',
    description: 'Malicious software that encrypts your data and demands payment for its release.',
    severity: 'Critical',
    color: 'text-terminal-red',
  },
  {
    icon: Eye,
    title: 'Identity Theft',
    description: 'Criminals stealing personal information to commit fraud or other crimes in your name.',
    severity: 'High',
    color: 'text-terminal-amber',
  },
  {
    icon: Wifi,
    title: 'Unsecured Networks',
    description: 'Public Wi-Fi networks that expose your data to potential interception.',
    severity: 'Medium',
    color: 'text-terminal-amber',
  },
  {
    icon: Mail,
    title: 'Social Engineering',
    description: 'Psychological manipulation tactics used to trick people into revealing sensitive information.',
    severity: 'High',
    color: 'text-terminal-amber',
  },
  {
    icon: Shield,
    title: 'Data Breaches',
    description: 'Unauthorized access to organizational databases exposing personal information.',
    severity: 'Critical',
    color: 'text-terminal-red',
  },
];

const protectionTips = [
  'Use strong, unique passwords for each account',
  'Enable two-factor authentication wherever possible',
  'Keep software and systems updated',
  'Be cautious of unsolicited emails and links',
  'Use a VPN on public networks',
  'Regularly backup important data',
  'Monitor your accounts for suspicious activity',
  'Educate yourself on latest threats',
];

const Awareness = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-terminal-amber">&gt;</span> cat /dangers/README.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Awareness & <span className="text-terminal-amber">Dangers</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Understanding digital threats is the first step to protection. Learn about common 
            cybersecurity dangers and how to safeguard yourself.
          </p>
        </div>

        {/* Alert Banner */}
        <div className="mb-12 bg-terminal-amber/10 border border-terminal-amber p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-terminal-amber flex-shrink-0" />
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Security Advisory</h3>
              <p className="text-muted-foreground text-sm">
                The digital landscape is constantly evolving. Stay informed about the latest threats 
                and vulnerabilities to protect yourself and your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Dangers Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-terminal-red">//</span> Common Threats
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dangers.map((danger, index) => (
              <div
                key={danger.title}
                className="card-terminal hover:border-terminal-amber transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 border border-current ${danger.color}`}>
                    <danger.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold">{danger.title}</h3>
                      <span className={`px-2 py-0.5 text-xs font-mono ${danger.color} bg-current/10`}>
                        {danger.severity}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {danger.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Tips */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-terminal-green">//</span> Protection Tips
          </h2>
          <div className="bg-card border border-border p-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-terminal-green">[security]$</span>
              <span className="text-muted-foreground"> ./protection_guide.sh</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {protectionTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground animate-fade-in-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <span className="text-terminal-green font-mono">[{String(index + 1).padStart(2, '0')}]</span>
                  <span className="text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-terminal-green p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">
            Want to Learn More?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Explore my research papers on cybersecurity threats and defensive strategies.
          </p>
          <Link
            to="/research"
            className="btn-terminal inline-flex items-center"
          >
            View Research
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
