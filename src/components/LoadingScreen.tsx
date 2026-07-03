import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading');
  const [lines, setLines] = useState<string[]>([]);

  const loadingMessages = [
    'Preparing experience...',
    'Loading assets...',
    'Finishing up...',
    'Welcome to the portfolio',
  ];

  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < loadingMessages.length) {
        setLines(prev => [...prev, loadingMessages[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase('complete');
          onComplete();
        }, 500);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      <div className="relative z-10">
        <div className="text-lg md:text-xl space-y-3 px-4 text-foreground">
          {lines.map((line, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
