import { useState, useEffect, useCallback } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'name' | 'scatter' | 'terminal' | 'complete'>('name');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const name = "AKINLOYE NUEL";

  const terminalCommands = [
    { text: '> Initializing system...', color: 'text-terminal-green' },
    { text: '> Loading neural networks...', color: 'text-terminal-cyan' },
    { text: '> Establishing secure connection...', color: 'text-terminal-amber' },
    { text: '> Decrypting data packets...', color: 'text-terminal-purple' },
    { text: '> ACCESS GRANTED', color: 'text-terminal-green' },
    { text: '> Welcome to akinloyenuel.me', color: 'text-secondary' },
  ];

  useEffect(() => {
    // Phase 1: Show name
    const scatterTimer = setTimeout(() => setPhase('scatter'), 1500);
    
    // Phase 2: Scatter animation
    const terminalTimer = setTimeout(() => setPhase('terminal'), 2300);
    
    return () => {
      clearTimeout(scatterTimer);
      clearTimeout(terminalTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === 'terminal') {
      let lineIndex = 0;
      const commands = [...terminalCommands]; // Create stable copy
      const interval = setInterval(() => {
        if (lineIndex < commands.length) {
          const command = commands[lineIndex];
          if (command) {
            setTerminalLines(prev => [...prev, command.text]);
          }
          lineIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setPhase('complete');
            onComplete();
          }, 500);
        }
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [phase, onComplete]);

  const getLetterStyle = useCallback((index: number) => {
    if (phase === 'scatter') {
      const angle = (index / name.length) * Math.PI * 2;
      const distance = 300 + Math.random() * 200;
      return {
        '--tx': `${Math.cos(angle) * distance}px`,
        '--ty': `${Math.sin(angle) * distance}px`,
      } as React.CSSProperties;
    }
    return {};
  }, [phase]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-50" />
      
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-green font-mono text-xs animate-code-fall"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>{String.fromCharCode(0x30A0 + Math.random() * 96)}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Name phase */}
        {(phase === 'name' || phase === 'scatter') && (
          <div className="flex justify-center">
            {name.split('').map((letter, index) => (
              <span
                key={index}
                className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider inline-block
                  ${index < 8 ? 'text-terminal-green' : index === 8 ? 'text-secondary' : 'text-terminal-green'}
                  ${phase === 'scatter' ? 'animate-scatter' : 'animate-pulse-glow'}
                `}
                style={{
                  ...getLetterStyle(index),
                  animationDelay: phase === 'scatter' ? `${index * 0.05}s` : '0s',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        )}

        {/* Terminal phase */}
        {phase === 'terminal' && (
          <div className="font-mono text-lg md:text-xl space-y-2 px-4">
            {terminalLines.map((line, index) => (
              <div
                key={index}
                className={`${terminalCommands[index]?.color || 'text-terminal-green'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {line}
                {index === terminalLines.length - 1 && (
                  <span className="terminal-cursor ml-1" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-terminal-green" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-terminal-green" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-terminal-green" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terminal-green" />
    </div>
  );
};

export default LoadingScreen;
