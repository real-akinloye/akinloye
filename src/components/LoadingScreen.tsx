import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'terminal' | 'complete'>('terminal');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const terminalCommands = [
    { text: '> Initializing system...', color: 'text-terminal-green' },
    { text: '> Loading neural networks...', color: 'text-terminal-cyan' },
    { text: '> Establishing secure connection...', color: 'text-terminal-amber' },
    { text: '> Decrypting data packets...', color: 'text-terminal-purple' },
    { text: '> ACCESS GRANTED', color: 'text-terminal-green' },
    { text: '> Welcome to akinloyenuel.me', color: 'text-secondary' },
  ];

  useEffect(() => {
    let lineIndex = 0;
    const commands = [...terminalCommands];
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
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--terminal-green)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--terminal-green)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Terminal phase */}
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
