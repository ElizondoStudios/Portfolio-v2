import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Maindsoft',
      location: 'Aguascalientes, MX.',
      period: '2023 - Present',
      description: 'Maindsoft is a Mexico-based software development company focused on building custom digital solutions, including enterprise systems, web and mobile applications.',
      achievements: [
        'Developed and maintained enterprise web applications using Angular , following scalable and modular architecture patterns.',
        'Implemented mobile features using React Native , ensuring cross-platform compatibility and improved user experience.',
        'Collaborated with backend teams to integrate .NET APIs and SQL Server databases into frontend applications.',
        'Optimized UI performance and responsiveness, reducing load times and improving usability in high-traffic systems.',
        'Participated in requirements analysis and technical design for banking and enterprise-level software solutions.',
        'Worked closely with multidisciplinary teams to deliver features aligned with business needs and deadlines.'
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
                    <p className="text-gray-300">{exp.company}</p>
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
