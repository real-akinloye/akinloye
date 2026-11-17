import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, ChevronRight, ArrowUpRight, Shield, Award } from 'lucide-react';
import { ReformDetailModal } from '@/components/ReformDetailModal';
import { REFORMS_DATA, ReformDetail, STATUS_BADGE_CLASSES, STATUS_LABELS } from '@/data/reforms';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS/Sass', 'SQL'],
  frameworks: ['React', 'Node.js', 'Django', 'Flask', 'Express'],
  tools: ['Git', 'Docker', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Jest', 'Tailwind CSS'],
  devSkills: ['Full-Stack Delivery', 'System Architecture', 'Data Modeling', 'Product Strategy', 'Technical Communication', 'Stakeholder Collaboration'],
};

const workExperience = [
  {
    title: 'Policy Research & Macroeconomic Strategy',
    company: 'National Economic Summit Group (NESG)',
    role: 'Volunteer / Contributor',
    period: 'Present',
    description: 'Contributing as a present volunteer to national economic policy formulation, private-public sector advocacy, and institutional reform frameworks aimed at sustainable economic transformation in Nigeria.',
    achievements: [
      'Engaging in research and dialogue on structural economic reforms and sovereign fiscal resilience',
      'Contributing technocratic frameworks for production-oriented economic policies, domestic capability, and trade modernization',
      'Collaborating on public-private mechanisms to de-risk investment and spur industrialization across sub-national regions',
    ],
  },
  {
    title: 'EquiCal',
    company: 'Founder & Lead Engineer',
    role: 'Equity Infrastructure Platform',
    period: 'Jan 2025 - Present',
    description: 'Building an equity management and capital infrastructure platform for founders, investors, and employees in emerging markets. Leading product design, backend engineering, data modeling, and operational strategy.',
    achievements: [
      'Designed a three-sided acquisition model for founders, investors, and employees',
      'Built secure payment and verification flows using Paystack and Flutterwave',
      'Developed equity analytics, cap table management, and compliance tooling',
    ],
  },
  {
    title: 'Kreativstorm',
    company: 'Backend Developer',
    role: 'Educational Platform',
    period: 'Dec 2022 - Nov 2023',
    description: 'Implemented backend services and database systems for a course delivery platform. Focused on reliable content delivery, student progress tracking, and user engagement features.',
    achievements: [
      'Built a notification system to improve student retention',
      'Designed PostgreSQL schemas for course content and progress tracking',
      'Delivered backend endpoints used by the frontend and analytics team',
    ],
  },
  {
    title: 'Quotapath',
    company: 'Software Engineer Intern',
    role: 'Commission Tracking',
    period: 'Jan 2024 - Jul 2024',
    description: 'Contributed to the development of dashboards and APIs for financial workflows. Worked closely with product and design teams to ship user-facing improvements.',
    achievements: [
      'Developed React components and TypeScript interfaces for dashboards',
      'Extended RESTful APIs and supported frontend integration',
      'Produced documentation and handover resources for the team',
    ],
  },
];

const projects = [
  {
    title: 'QR Code-Based Recharge Voucher System',
    status: 'Completed',
    description: 'Developed a secure recharge voucher system using QR codes for telecom credit distribution. Delivered a backend workflow and admin tooling for operations while protecting proprietary details.',
    features: [
      'Secure QR code generation and redemption flows',
      'Integration with telecom billing and merchant APIs',
      'Operational dashboard for voucher issuance and analytics',
    ],
  },
  {
    title: 'Ownership Systems Research',
    status: 'Ongoing',
    description: 'Produced independent frameworks on economic policy and market infrastructure, including sovereign risk and system sanitation models.',
    features: [
      'Research-led conceptual models for governance and liquidity',
      'Practical implementation guidance for startups and policy teams',
      'Alignment with emerging market realities and local constraints',
    ],
  },
];

const testimonials = [
  {
    name: 'Ibrahim Hayek',
    role: 'Lead Software Manager, Telus',
    quote: "Simeon's work on internal tools was exceptional; his commitment to quality and clarity helped our team move faster with confidence.",
  },
  {
    name: 'Adewale Akintunde',
    role: 'Product Manager, Kreativstorm',
    quote: "Simeon's backend design and documentation made integrations more predictable and reduced implementation risk for the team.",
  },
  {
    name: 'Graham David',
    role: 'Head of Partnership, Quotapath',
    quote: "His combination of React, TypeScript, and systems thinking strengthened our commission product and improved the developer experience.",
  },
];

const journals = [
  {
    title: 'Threat Modeling for R',
    url: 'https://drive.google.com/file/d/1lSHUSPoOTC1aAqSXtH7JTgn9Cy_3jnpj/view?usp=drive_link',
  },
  {
    title: 'EquiCal Reform Playbook',
    url: 'https://drive.google.com/file/d/1sKJiWx6ydLlrt3T68lcXq2Tj1hXBGkpM/view?usp=sharing',
  },
  {
    title: 'Smart Glasses for Visually Impaired People',
    url: 'https://drive.google.com/file/d/1SJEIburcmJcipiqqBSiKsuE9xFq5BG0C/view?usp=drivesdk',
  },
  {
    title: "Nuel's Prophecy for AI vs Tech (Humanity)",
    url: 'https://drive.google.com/file/d/1SCm1AipmU7-EHjkxwOMqEnZYQIW_Rxvv/view?usp=drivesdk',
  },
];

// Highlighted Flagship Reforms
const FLAGSHIP_REFORMS = REFORMS_DATA.flatMap((p) => p.reforms).filter((r) => r.featured);

const Portfolio = () => {
  const [selectedReform, setSelectedReform] = useState<ReformDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReform = (reform: ReformDetail) => {
    setSelectedReform(reform);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl space-y-20">
        
        {/* ============================================================ */}
        {/* HERO SECTION                                                 */}
        {/* ============================================================ */}
        <section className="animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">
                  Professional Portfolio
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Shield className="w-3 h-3" /> NESG Volunteer
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Technical leadership, product delivery, and market infrastructure built for emerging markets.
              </h1>
              
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                I design and ship systems that span product engineering, backend architecture, and strategic policy research. Founder & Lead Engineer at <strong>EquiCal</strong> and present volunteer at the <strong>National Economic Summit Group (NESG)</strong>.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/technocracy" className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20">
                  <Sparkles className="w-4 h-4" /> View Technocracy Reforms (83+)
                </Link>
                <a href="#experience" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
                  View Experience
                </a>
                <a href="#projects" className="inline-flex items-center rounded-full border border-muted-foreground px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-accent hover:text-accent">
                  View Projects
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Current roles</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">Founder & Lead Engineer, EquiCal</p>
                  <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Present Volunteer, National Economic Summit Group (NESG)
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Primary focus</p>
                  <p className="mt-2 text-base text-muted-foreground">Equity Infrastructure · Sovereign Tokenization · Macroeconomic Architecture</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Core strengths</p>
                  <div className="mt-3 grid gap-2.5">
                    {['Product strategy & architecture', 'Sovereign sanctions-resistant rails', 'Equity systems & cap tables', 'Macro policy design'].map((item) => (
                      <span key={item} className="inline-flex rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* TECHNOCRACY REFORMS PREVIEW                                  */}
        {/* ============================================================ */}
        <section className="rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-md p-6 md:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-border pb-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Under Technocracy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The Productive Nigerian State
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                83+ structural reforms across 18 pillars authored for Nigeria's long-term economic transformation. Click any flagship card below to view its strategic overview, or open the full library in Technocracy.
              </p>
            </div>

            <Link
              to="/technocracy"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition"
            >
              <span>Explore All in Technocracy</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Flagship Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FLAGSHIP_REFORMS.slice(0, 6).map((reform) => {
              const badge = STATUS_BADGE_CLASSES[reform.status];
              const isNationalTokenization = reform.n === "21";

              return (
                <article
                  key={reform.id}
                  onClick={() => handleOpenReform(reform)}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-card p-6 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    isNationalTokenization
                      ? 'border-primary ring-1 ring-primary/40 bg-gradient-to-b from-primary/10 via-card to-card'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/15 text-primary">
                        #{reform.n}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {isNationalTokenization && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            Sanctions Resilience
                          </span>
                        )}
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.bg}`}>
                          {STATUS_LABELS[reform.status]}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {reform.title}
                    </h3>

                    <p className="mt-2 text-xs md:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {reform.desc}
                    </p>

                    {reform.keyQuoteOrMetric && (
                      <div className="mt-3 text-[11px] font-mono text-primary/90 bg-primary/5 px-2.5 py-1 rounded border border-primary/15">
                        {reform.keyQuoteOrMetric}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-primary font-medium">
                    <span>View Overview & Context</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/technocracy"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Browse Complete 18 Pillars & 83 Reforms in Technocracy
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WORK EXPERIENCE (INCLUDING NESG)                             */}
        {/* ============================================================ */}
        <section id="experience" className="animate-fade-in-up">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-primary">Experience</p>
              <h2 className="mt-4 text-4xl font-bold text-foreground">Track record</h2>
            </div>
            <p className="max-w-xl text-muted-foreground leading-relaxed">
              Leadership and technical delivery across product systems, macroeconomic policy advocacy, and startup engineering.
            </p>
          </div>
          
          <div className="space-y-6">
            {workExperience.map((work) => (
              <div key={work.company} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm uppercase tracking-[0.24em] text-primary font-bold">{work.company}</p>
                      {work.period === 'Present' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{work.role}</h3>
                    <p className="mt-1 text-muted-foreground">{work.title}</p>
                  </div>
                  <span className="rounded-full bg-background border border-border px-4 py-2 text-sm text-foreground font-medium">
                    {work.period}
                  </span>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">{work.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
                  {work.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* PROJECTS SECTION                                             */}
        {/* ============================================================ */}
        <section id="projects" className="animate-fade-in-up">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-primary">Projects</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Selected builds</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.26em] text-primary">{project.status}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-accent" />
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">{project.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* TESTIMONIALS                                                 */}
        {/* ============================================================ */}
        <section className="animate-fade-in-up">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-primary">Testimonials</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Professional feedback</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-border bg-background/80 p-6">
                <p className="text-muted-foreground italic">"{item.quote}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-accent">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* DOCUMENTATION & PUBLICATIONS                                 */}
        {/* ============================================================ */}
        <section className="animate-fade-in-up">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.26em] text-primary">Documentation</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Published work</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {journals.map((journal) => (
              <a key={journal.title} href={journal.url} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-border bg-card p-6 transition hover:border-accent">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">Research Journal</p>
                <p className="mt-3 text-lg font-semibold text-foreground">{journal.title}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONTACT CALL TO ACTION                                       */}
        {/* ============================================================ */}
        <section className="text-center animate-fade-in-up">
          <a href="mailto:akinloyeemmanuel06@gmail.com" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition hover:bg-accent/90">
            Talk to me
          </a>
        </section>

        {/* Modal for detail view */}
        <ReformDetailModal
          reform={selectedReform}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Portfolio;
