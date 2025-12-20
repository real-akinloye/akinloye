import { useState } from 'react';
import { ExternalLink, Github, Folder, Star, GitBranch, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SecureVote Platform',
    description: 'A blockchain-based voting system designed for transparent and tamper-proof electoral processes.',
    technologies: ['React', 'Solidity', 'Node.js', 'Web3.js'],
    category: 'Blockchain',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'CyberAware Dashboard',
    description: 'Real-time cybersecurity threat monitoring and awareness platform for organizations.',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Security',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Digital Rights Toolkit',
    description: 'Open-source toolkit for activists and journalists to protect their digital privacy.',
    technologies: ['TypeScript', 'Electron', 'Node.js'],
    category: 'Privacy',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Youth Engagement Portal',
    description: 'Platform connecting young Nigerians with civic engagement opportunities and political education.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    category: 'Civic Tech',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Threat Intelligence Bot',
    description: 'Automated system for collecting and analyzing cybersecurity threat data from various sources.',
    technologies: ['Python', 'TensorFlow', 'MongoDB'],
    category: 'AI/ML',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Policy Analysis Tool',
    description: 'NLP-powered tool for analyzing and summarizing government policy documents.',
    technologies: ['Python', 'spaCy', 'React', 'Flask'],
    category: 'AI/ML',
    github: '#',
    live: '#',
    featured: false,
  },
];

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Solidity', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'Flask', 'PostgreSQL'] },
  { category: 'Security', items: ['Penetration Testing', 'Network Security', 'Cryptography'] },
  { category: 'Other', items: ['Git', 'Docker', 'AWS', 'Machine Learning'] },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-terminal-purple">&gt;</span> ls ~/portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-terminal-purple">Portfolio</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects showcasing my work in cybersecurity, blockchain, 
            civic technology, and software development.
          </p>
        </div>

        {/* Skills Terminal */}
        <div className="mb-16 bg-card border border-border p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="font-mono text-sm mb-4">
            <span className="text-terminal-purple">[skills]$</span>
            <span className="text-muted-foreground"> cat technologies.json</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-mono text-terminal-green text-sm mb-2">{skillGroup.category}/</h4>
                <div className="space-y-1">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="text-muted-foreground text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="mb-12 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-mono text-terminal-purple text-sm">category:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 font-mono text-sm border transition-all duration-300
                ${filter === category 
                  ? 'border-terminal-purple text-terminal-purple bg-terminal-purple/10' 
                  : 'border-muted text-muted-foreground hover:border-terminal-purple hover:text-terminal-purple'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-terminal group hover:border-terminal-purple transition-all duration-300 animate-fade-in-up
                ${project.featured ? 'md:col-span-1' : ''}
              `}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Folder className="w-6 h-6 text-terminal-purple" />
                  {project.featured && (
                    <Star className="w-4 h-4 text-terminal-amber fill-terminal-amber" />
                  )}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-terminal-purple transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-terminal-purple transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-terminal-purple transition-colors">
                {project.title}
              </h3>
              
              <span className="inline-block px-2 py-0.5 bg-terminal-purple/10 text-terminal-purple font-mono text-xs mb-3">
                {project.category}
              </span>
              
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-muted text-muted-foreground text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="bg-card border border-border p-8 text-center animate-fade-in-up">
          <div className="font-mono text-sm mb-6">
            <span className="text-terminal-purple">[github]$</span>
            <span className="text-muted-foreground"> git log --oneline | head -n 5</span>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <GitBranch className="w-6 h-6 mx-auto mb-2 text-terminal-purple" />
              <div className="text-2xl font-bold text-terminal-purple">50+</div>
              <div className="text-xs text-muted-foreground font-mono">Repositories</div>
            </div>
            <div>
              <Code className="w-6 h-6 mx-auto mb-2 text-terminal-green" />
              <div className="text-2xl font-bold text-terminal-green">1000+</div>
              <div className="text-xs text-muted-foreground font-mono">Commits</div>
            </div>
            <div>
              <Star className="w-6 h-6 mx-auto mb-2 text-terminal-amber" />
              <div className="text-2xl font-bold text-terminal-amber">100+</div>
              <div className="text-xs text-muted-foreground font-mono">Stars</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
