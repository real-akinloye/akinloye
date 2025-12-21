import { Terminal, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-terminal-green" />
              <span className="font-mono text-terminal-green">akinloye_nuel</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Researcher • Activist • Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-terminal-green text-sm uppercase tracking-wider">
              &gt; Navigate
            </h4>
            <div className="space-y-2">
              {['Research', 'Awareness', 'Sociopolitics', 'Portfolio'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-terminal-green transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-mono text-terminal-green text-sm uppercase tracking-wider">
              &gt; Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://x.com/SNR_AKINLOYE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/real-akinloye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akinloye-ogbon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:akinloyeemmanuel06@gmail.com"
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-terminal-green">&gt;</span> {currentYear} Akinloye Nuel. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-mono">
              <span className="text-terminal-green">STATUS:</span> ONLINE
              <span className="inline-block w-2 h-2 bg-terminal-green rounded-full ml-2 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
