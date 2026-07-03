import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS/Sass', 'SQL'],
  frameworks: ['React', 'Node.js', 'Django', 'Flask', 'Express'],
  tools: ['Git', 'Docker', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Jest', 'Tailwind CSS'],
  devSkills: ['Full-Stack Delivery', 'System Architecture', 'Data Modeling', 'Product Strategy', 'Technical Communication', 'Stakeholder Collaboration'],
};

const workExperience = [
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

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <section className="mb-20 animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Professional Portfolio</p>
              <h1 className="mt-4 text-5xl font-bold text-foreground">Technical leadership, product delivery, and market infrastructure built for emerging markets.</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                I design and ship systems that span product, backend engineering, and strategic research. My work is focused on equity infrastructure, compliance-aware software, and resilient operations for founders and investors outside the usual venture geography.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#experience" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">View Experience</a>
                <a href="#projects" className="inline-flex items-center rounded-full border border-muted-foreground px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-accent hover:text-accent">View Projects</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Current role</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">Founder & Lead Engineer, EquiCal</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Primary markets</p>
                  <p className="mt-3 text-lg text-muted-foreground">Africa · MENA · Southeast Asia · Latin America</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Core strengths</p>
                  <div className="mt-3 grid gap-3">
                    {['Product strategy', 'Backend architecture', 'Equity systems', 'Data resilience'].map((item) => (
                      <span key={item} className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-20 animate-fade-in-up">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-primary">Experience</p>
              <h2 className="mt-4 text-4xl font-bold text-foreground">Track record</h2>
            </div>
            <p className="max-w-xl text-muted-foreground leading-relaxed">Roles and outcomes across product builds, backend engineering, and operational delivery in fast-moving environments.</p>
          </div>
          <div className="space-y-6">
            {workExperience.map((work) => (
              <div key={work.title} className="rounded-3xl border border-border bg-card p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">{work.company}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{work.role}</h3>
                    <p className="mt-2 text-muted-foreground">{work.title}</p>
                  </div>
                  <span className="rounded-full bg-background px-4 py-2 text-sm text-muted-foreground">{work.period}</span>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">{work.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
                  {work.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20 animate-fade-in-up">
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

        <section className="mb-20 animate-fade-in-up">
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

        <section className="mb-20 animate-fade-in-up">
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

        <section className="text-center animate-fade-in-up">
          <a href="mailto:akinloyeemmanuel06@gmail.com" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition hover:bg-accent/90">
            Talk to me
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
