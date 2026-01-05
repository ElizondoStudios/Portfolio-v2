export function Skills() {
  const hardSkills = [
    { name: 'React & React Native', level: 90 },
    { name: 'Angular', level: 88 },
    { name: 'TypeScript', level: 95 },
    { name: 'HTML / JS / CSS', level: 95 },
    { name: '.NET / C#', level: 85 },
    { name: 'SQL (Server, PostgreSQL)', level: 75 },
    { name: 'Python (Django, FastAPI)', level: 70 },
    { name: 'Bootstrap', level: 100 },
    { name: 'Tailwind', level: 75 },
    { name: 'Artificial Intelligence', level: 90 },
    { name: 'AWS', level: 70 },
    { name: 'Figma', level: 80 },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Assertiveness',
    'Leadership',
    'Responsibility',
    'Learning Disposition',
  ];

  const languages = [
    { name: "English", level: "C1 TOEFL Certified"},
    { name: "Spanish", level: "Native"},
    { name: "French", level: "Basic"},
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and interpersonal strengths
          </p>
        </div>
        <div className="w-full space-y-6">
          <h3 className="text-blue-400 mb-6">Hard Skills</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {hardSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full space-y-6 mt-10">
          <h3 className="text-purple-400 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {softSkills.map((skill) => (
                <div 
                  key={skill}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-500/30 transition-all text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
        </div>
        <div className="w-full space-y-6 mt-10">
          <h3 className="text-blue-400 mb-6">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {languages.map((language) => (
                <div 
                  key={language.name}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-500/30 transition-all text-center flex flex-col"
                >
                  <span>{language.name}</span>
                  <span className="text-muted-foreground text-sm">{language.level}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
