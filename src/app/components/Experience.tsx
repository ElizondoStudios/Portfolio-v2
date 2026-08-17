import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Co-Founder & Team Lead (Part-Time)',
      company: 'Pardos Inc',
      location: 'Aguascalientes, MX',
      period: 'Jan 2026 - Present',
      link: 'https://pardos-inc.com',
      description: 'Pardos Inc is a software development agency specializing in intelligent systems and custom web/mobile solutions.',
      achievements: [
        'Steered technical direction and custom software development, architecting database models and managing production deployments leveraging Agile methodologies.',
        'Deployed a comprehensive ERP for clinical laboratories, automating operations for 3 facilities, resulting in a 60% reduction in operation time.',
        'Integrated AI agents and MCP servers to provide intelligent capabilities to CRMs, dashboards, and mobile applications, increasing response time by 80%.'
      ]
    },
    {
      title: 'Fullstack Web Developer (Full-Time)',
      company: 'Maindsoft',
      location: 'Aguascalientes, MX.',
      period: 'June 2023 - Present',
      link: 'https://maindsoft.net/',
      description: 'Maindsoft is a Mexico-based software development company focused on building custom digital solutions, including enterprise systems, web and mobile applications.',
      achievements: [
        'Engineered scalable, high-concurrency enterprise web applications with Angular and React.',
        'Integrated RESTful C#/.NET APIs within a microservices architecture, leveraging Role-Based Access Control (RBAC) validation and SQL databases to secure data for 200+ concurrent users.',
        'Optimized internal processes and CI/CD pipelines using Git, Claude Code, and Replit, reducing testing and deployment time by 40%.',
        'Delivered cross-platform mobile features using React Native, improving user engagement by 24%.',
        'Directed requirements analysis and technical design for corporate and banking sector solutions.'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey building impactful solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gray-800/30 border border-gray-700 rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-blue-400 mb-2">{exp.title}</h3>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-gray-300">{exp.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-purple-400 text-sm">Key Achievements:</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
