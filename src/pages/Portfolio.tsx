import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

const skills = {
  languages: ['Python', 'JavaScript', 'Ruby', 'PHP', 'TypeScript', 'HTML', 'CSS/Sass', 'Java'],
  frameworks: ['React', 'Node.js', 'Vite', 'Django', 'Flask', 'Express'],
  tools: ['Git', 'Bash', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Jest'],
  devSkills: ['Full-Stack Development', 'Web Application Development', 'Database Management', 'UI/UX Design', 'Critical Thinking', 'Communication'],
};

const workExperience = [
  {
    title: 'Educational Platform',
    company: 'Kreativstorm',
    role: 'Backend Developer',
    period: 'Dec 2022 - Nov 2023',
    description: 'Built an educational platform that connects learners worldwide. Using Python and Django, I worked on making the course delivery system smooth and reliable. The highlight was designing a notification system that kept students engaged with their courses.',
    achievements: [
      'Built an educational Platform',
      'Documented APIs using Swagger for frontend team',
      'Used PostgreSQL for efficient data storage solutions',
    ],
  },
];

const projects = [
  {
    title: 'QR Code-Based Recharge Voucher System',
    status: 'Completed',
    description: 'Developed a system for generating and processing QR code-based recharge cards. This project is proprietary and cannot be shared on open-source platforms.',
    features: [
      'Implemented secure QR code generation and validation',
      'Integrated with telecom billing systems',
      'Developed an admin dashboard for managing card generation and usage analytics',
    ],
  },
];

const testimonials = [
  {
    name: 'Ibrahim Hayek',
    role: 'Lead Software Manager (Telus)',
    quote: "Simeon's work on our internal tools was exceptional. His ability to quickly learn and implement new technologies significantly improved our team's productivity.",
  },
  {
    name: 'Adewale Akintunde',
    role: 'Product Manager (Kreativstorm)',
    quote: "Simeon's contributions to our educational platform were invaluable. His backend solutions were robust and his documentation was top-notch, making it easy for the rest of the team to integrate his work.",
  },
  {
    name: 'Graham David',
    role: 'Head of Partnership (Quotapath)',
    quote: "Simeon's expertise in React and TypeScript greatly enhanced our commission tracking system. His user-friendly interfaces and clean code have been praised by both our team and clients.",
  },
];

const journals = [
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-4 text-terminal-cyan">
            AKINLOYE NUEL
          </h1>
          <p className="text-xl text-muted-foreground mb-6">Software Developer</p>
          <div className="flex items-center justify-center gap-2 text-terminal-cyan mb-8">
            <span className="text-5xl font-bold">6</span>
            <span className="text-xl">Years of Experience</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Experienced software developer skilled in building and maintaining web applications using Python, JavaScript, Database Management, and various frameworks. Passionate about solving complex technical challenges and continuously learning new technologies. Currently expanding knowledge in Science, Technology, Engineering, and Mathematics (STEM).
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/SNR_AKINLOYE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/real-akinloye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:akinloyeemmanuel06@gmail.com"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/akinloye-ogbon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-terminal-cyan transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-center text-terminal-cyan mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Programming Languages</h3>
              <ul className="space-y-2">
                {skills.languages.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terminal-cyan rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Frameworks & Libraries</h3>
              <ul className="space-y-2">
                {skills.frameworks.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terminal-cyan rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Tools & Technologies</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terminal-cyan rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Software Development Skills</h3>
              <ul className="space-y-2">
                {skills.devSkills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-terminal-cyan rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-center text-terminal-cyan mb-12">Work Experience</h2>
          {workExperience.map((work, index) => (
            <div key={index} className="bg-card border border-border p-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{work.title}</h3>
                  <p className="text-terminal-cyan">{work.company} | {work.role}</p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">{work.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">{work.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Achievements:</h4>
                <ul className="space-y-1">
                  {work.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-terminal-green rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-center text-terminal-cyan mb-12">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-border p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <span className="px-3 py-1 bg-terminal-green/20 text-terminal-green text-xs font-mono">
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features / Plans:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-terminal-cyan rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-center text-terminal-cyan mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border p-6">
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-terminal-cyan text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Journals */}
        <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold text-center text-terminal-cyan mb-12">My Journals (STEM related)</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {journals.map((journal, index) => (
              <a
                key={index}
                href={journal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-terminal-cyan transition-colors text-muted-foreground hover:text-terminal-cyan"
              >
                <ExternalLink className="w-4 h-4" />
                {journal.title}
              </a>
            ))}
          </div>
        </section>

        {/* Resume CTA */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-terminal-cyan text-background font-semibold hover:bg-terminal-cyan/80 transition-colors"
          >
            View My Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;