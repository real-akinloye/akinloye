import { useState } from 'react';
import { BookOpen, ExternalLink, FileText, Calendar } from 'lucide-react';

interface ResearchPaper {
  id: number;
  title: string;
  abstract: string;
  date: string;
  category: string;
  tags: string[];
}

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "The R's Threats: ASI Danger",
    abstract: 'An exploration of Artificial Superintelligence risks and existential threats posed by unaligned AI systems. Examines the race dynamics, recursive self-improvement, and the urgent need for alignment research.',
    date: '2025',
    category: 'AI Safety',
    tags: ['ASI', 'Existential Risk', 'AI Alignment', 'Superintelligence'],
  },
  {
    id: 2,
    title: 'Cybersecurity Threats in Emerging Markets',
    abstract: 'An in-depth analysis of evolving cybersecurity threats facing developing economies and proposed mitigation strategies.',
    date: '2024',
    category: 'Cybersecurity',
    tags: ['Security', 'Emerging Markets', 'Threats'],
  },
  {
    id: 3,
    title: 'Digital Privacy in the Age of Surveillance',
    abstract: 'Examining the balance between national security and individual privacy rights in the digital era.',
    date: '2024',
    category: 'Privacy',
    tags: ['Privacy', 'Surveillance', 'Rights'],
  },
  {
    id: 4,
    title: 'Social Engineering: The Human Factor',
    abstract: 'Research on psychological manipulation techniques used in cyber attacks and defense mechanisms.',
    date: '2023',
    category: 'Social Engineering',
    tags: ['Psychology', 'Security', 'Human Factor'],
  },
  {
    id: 5,
    title: 'Blockchain for Secure Voting Systems',
    abstract: 'Exploring the potential of blockchain technology in creating transparent and secure electoral processes.',
    date: '2023',
    category: 'Blockchain',
    tags: ['Blockchain', 'Democracy', 'Security'],
  },
];

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(researchPapers.map(p => p.category))];
  
  const filteredPapers = selectedCategory === 'All' 
    ? researchPapers 
    : researchPapers.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-terminal-green">&gt;</span> cd /research
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="text-terminal-green">Works</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Academic research and publications focusing on cybersecurity, digital privacy, 
            and the intersection of technology with society.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="font-mono text-terminal-green text-sm">filter:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-mono text-sm border transition-all duration-300
                ${selectedCategory === category 
                  ? 'border-terminal-green text-terminal-green bg-terminal-green/10' 
                  : 'border-muted text-muted-foreground hover:border-terminal-green hover:text-terminal-green'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Research Papers Grid */}
        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="card-terminal group hover:border-terminal-green transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 border border-terminal-green/30 flex items-center justify-center group-hover:border-terminal-green transition-colors">
                    <BookOpen className="w-8 h-8 text-terminal-green" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="px-2 py-1 bg-terminal-green/10 text-terminal-green font-mono text-xs">
                      {paper.category}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {paper.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-terminal-green transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {paper.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border border-muted text-muted-foreground text-xs font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button className="text-terminal-green font-mono text-sm flex items-center gap-2 hover:underline">
                      <FileText className="w-4 h-4" />
                      Read Paper
                    </button>
                    <button className="text-muted-foreground font-mono text-sm flex items-center gap-2 hover:text-terminal-green transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-16 font-mono text-sm text-muted-foreground animate-fade-in-up">
          <span className="text-terminal-green">[research]$</span> Total papers: {filteredPapers.length}
          <span className="terminal-cursor ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Research;
