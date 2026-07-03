import { useEffect, useState, useRef } from 'react';

interface TerminalCodeProps {
  isVisible: boolean;
}

const codeSnippets = [
  'Intentional product strategy',
  'Market infrastructure design',
  'Equity and governance systems',
  'Operational resilience frameworks',
  'Collaborative delivery for founders',
  'Research-informed decisioning',
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
      <div className="absolute left-4 top-20 text-xs md:text-sm space-y-1">
        {displayedLines.map((lineIndex) => (
          <div
            key={lineIndex}
            className="text-muted-foreground animate-fade-in"
            style={{ animationDelay: `${lineIndex * 0.1}s` }}
          >
            {codeSnippets[lineIndex]}
          </div>
        ))}
      </div>

      <div className="absolute right-4 bottom-20 text-xs md:text-sm space-y-1 text-right">
        {displayedLines.slice(0, 6).map((lineIndex) => (
          <div
            key={`right-${lineIndex}`}
            className="text-muted-foreground animate-fade-in"
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
