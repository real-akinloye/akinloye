import { useEffect, useState, useRef } from 'react';

interface TerminalCodeProps {
  isVisible: boolean;
}

const codeSnippets = [
  { code: 'const identity = "Akinloye Nuel";', color: 'text-terminal-cyan' },
  { code: 'function initializeProfile() {', color: 'text-terminal-amber' },
  { code: '  return { researcher: true,', color: 'text-terminal-green' },
  { code: '    activist: true,', color: 'text-terminal-green' },
  { code: '    developer: true };', color: 'text-terminal-green' },
  { code: '}', color: 'text-terminal-amber' },
  { code: 'await loadExperience();', color: 'text-terminal-purple' },
  { code: '// Connecting to database...', color: 'text-muted-foreground' },
  { code: 'SELECT * FROM achievements;', color: 'text-terminal-cyan' },
  { code: '> 15 research papers', color: 'text-terminal-green' },
  { code: '> 20+ projects completed', color: 'text-terminal-green' },
  { code: 'npm install --save passion', color: 'text-terminal-amber' },
  { code: 'git commit -m "Building future"', color: 'text-terminal-purple' },
];

const TerminalCode = ({ isVisible }: TerminalCodeProps) => {
  const [displayedLines, setDisplayedLines] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setDisplayedLines(prev => {
        if (prev.length >= codeSnippets.length) {
          return prev;
        }
        return [...prev, prev.length];
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-30"
    >
      <div className="absolute left-4 top-20 font-mono text-xs md:text-sm space-y-1">
        {displayedLines.map((lineIndex) => (
          <div
            key={lineIndex}
            className={`${codeSnippets[lineIndex]?.color} animate-fade-in`}
            style={{ animationDelay: `${lineIndex * 0.1}s` }}
          >
            {codeSnippets[lineIndex]?.code}
          </div>
        ))}
      </div>

      <div className="absolute right-4 bottom-20 font-mono text-xs md:text-sm space-y-1 text-right">
        {displayedLines.slice(0, 6).map((lineIndex) => (
          <div
            key={`right-${lineIndex}`}
            className="text-terminal-green-dim animate-fade-in"
            style={{ animationDelay: `${lineIndex * 0.15}s` }}
          >
            {`0x${Math.random().toString(16).slice(2, 10).toUpperCase()}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalCode;
