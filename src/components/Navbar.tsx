import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/awareness', label: 'Awareness' },
    { path: '/sociopolitics', label: 'Sociopolitics' },
    { path: '/portfolio', label: 'Portfolio' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-terminal-green group-hover:animate-pulse" />
            <span className="font-mono text-terminal-green text-lg tracking-wider">
              akinloye<span className="text-secondary">_</span>nuel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link font-mono text-sm uppercase tracking-wider transition-all duration-300
                  ${isActive(link.path) ? 'text-terminal-green' : 'text-muted-foreground hover:text-terminal-green'}
                `}
              >
                {isActive(link.path) && <span className="mr-1">&gt;</span>}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-terminal-green p-2 hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-mono text-sm uppercase tracking-wider py-2 transition-colors
                  ${isActive(link.path) ? 'text-terminal-green' : 'text-muted-foreground'}
                `}
              >
                <span className="text-terminal-green mr-2">&gt;</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
