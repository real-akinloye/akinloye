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
    abstract: 'An exploration of Artificial Superintelligence risks and existential threats posed by unaligned AI systems. Examines race dynamics, recursive self-improvement, and the need for alignment research.',
    date: '2025',
    category: 'AI Safety',
    tags: ['ASI', 'Existential Risk', 'AI Alignment', 'Superintelligence'],
  },
  {
    id: 2,
    title: 'Cybersecurity Threats in Emerging Markets',
    abstract: 'An analysis of evolving cybersecurity threats facing developing economies and proposed mitigation strategies.',
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
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Insights and analysis on cybersecurity, digital privacy, and systems resilience in emerging markets.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${selectedCategory === category ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-border bg-background">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{paper.category}</p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">{paper.title}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">{paper.date}</span>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">{paper.abstract}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tag}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20">
                  <FileText className="w-4 h-4" />
                  Read Paper
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                  View Source
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          Research papers available: {filteredPapers.length}
        </div>
      </div>
    </div>
  );
};

export default Research;
