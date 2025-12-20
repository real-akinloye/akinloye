import { Globe, MessageSquare, Scale, Users, TrendingUp, Megaphone } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Digital Democracy: Promise and Peril',
    excerpt: 'How technology is reshaping political participation and the challenges it presents to traditional governance structures.',
    date: 'Dec 2024',
    category: 'Democracy',
    readTime: '8 min',
  },
  {
    id: 2,
    title: 'Social Media as a Tool for Activism',
    excerpt: 'Examining the effectiveness of digital platforms in mobilizing social movements and driving policy change.',
    date: 'Nov 2024',
    category: 'Activism',
    readTime: '6 min',
  },
  {
    id: 3,
    title: 'The Digital Divide in Africa',
    excerpt: 'Analyzing the socioeconomic implications of unequal access to technology across the continent.',
    date: 'Oct 2024',
    category: 'Equity',
    readTime: '10 min',
  },
  {
    id: 4,
    title: 'Youth Engagement in Nigerian Politics',
    excerpt: 'The role of young Nigerians in shaping the political landscape through technology and grassroots organizing.',
    date: 'Sep 2024',
    category: 'Politics',
    readTime: '7 min',
  },
];

const topics = [
  { icon: Globe, label: 'Digital Rights', count: 12 },
  { icon: Scale, label: 'Policy Analysis', count: 8 },
  { icon: Users, label: 'Social Justice', count: 15 },
  { icon: TrendingUp, label: 'Development', count: 10 },
  { icon: Megaphone, label: 'Activism', count: 9 },
  { icon: MessageSquare, label: 'Commentary', count: 20 },
];

const Sociopolitics = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-terminal-cyan">&gt;</span> cat /views/sociopolitics.md
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sociopolitics <span className="text-terminal-cyan">Views</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Commentary and analysis on the intersection of technology, society, and politics. 
            Exploring how digital innovation shapes our world and governance.
          </p>
        </div>

        {/* Topics Overview */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {topics.map((topic) => (
            <div
              key={topic.label}
              className="bg-card border border-border p-4 text-center hover:border-terminal-cyan transition-colors group cursor-pointer"
            >
              <topic.icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground group-hover:text-terminal-cyan transition-colors" />
              <div className="font-mono text-sm text-foreground">{topic.label}</div>
              <div className="text-xs text-terminal-cyan">{topic.count} posts</div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="mb-16 border-l-4 border-terminal-cyan pl-6 py-4 bg-card/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <blockquote className="text-xl md:text-2xl font-light italic text-foreground mb-4">
            "Technology is not neutral. The decisions we make in building digital systems 
            have profound implications for society, democracy, and human rights."
          </blockquote>
          <cite className="text-muted-foreground font-mono text-sm">— Akinloye Nuel</cite>
        </div>

        {/* Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-terminal-cyan">//</span> Latest Articles
          </h2>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="card-terminal group hover:border-terminal-cyan transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-terminal-cyan/10 text-terminal-cyan font-mono text-xs">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground text-sm">{article.date}</span>
                      <span className="text-muted-foreground text-sm">• {article.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-terminal-cyan transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="font-mono text-terminal-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    [READ →]
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card border border-border p-8 animate-fade-in-up">
          <div className="font-mono text-sm mb-6">
            <span className="text-terminal-cyan">[values]$</span>
            <span className="text-muted-foreground"> cat core_beliefs.txt</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-terminal-cyan mb-2">Transparency</h4>
              <p className="text-muted-foreground text-sm">
                Advocating for open governance and accountability in both public and private sectors.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-terminal-cyan mb-2">Equity</h4>
              <p className="text-muted-foreground text-sm">
                Fighting for equal access to technology and its benefits across all communities.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-terminal-cyan mb-2">Empowerment</h4>
              <p className="text-muted-foreground text-sm">
                Using technology to amplify voices and enable meaningful civic participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sociopolitics;
