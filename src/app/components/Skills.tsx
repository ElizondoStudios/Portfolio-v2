import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: ["React", "React Native", "Angular", "HTML/CSS/Javascript", "Typescript", "UI/UX Design", "Figma"],
      color: "blue"
    },
    {
      title: t('skills.backend'),
      skills: ["Node.js", "Express.js", ".NET (C#)", "RESTful APIs", "Microservices", "Python"],
      color: "purple"
    },
    {
      title: t('skills.databases'),
      skills: ["Postgres", "SQL Server", "MySQL", "SQLite", "MongoDB"],
      color: "blue"
    },
    {
      title: t('skills.devops'),
      skills: ["AWS", "Docker", "AI Engineering", "Git", "CI/CD", "Agile", "GitHub Copilot", "Claude Code"],
      color: "purple"
    }
  ];

  const certificationsAndLanguages = [
    { name: t('skills.cert.toefl'), type: t('skills.type.cert') },
    { name: t('skills.cert.spanish'), type: t('skills.type.native') },
    { name: t('skills.cert.english'), type: t('skills.type.fluent') },
    { name: t('skills.cert.french'), type: t('skills.type.beginner') },
  ];

  const softSkills = [
    t('skills.soft.problemSolving'),
    t('skills.soft.teamCollab'),
    t('skills.soft.communication'),
    t('skills.soft.timeMgmt'),
    t('skills.soft.adaptability'),
    t('skills.soft.assertiveness'),
    t('skills.soft.leadership'),
    t('skills.soft.responsibility'),
    t('skills.soft.learningDisp'),
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/50">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className={`text-${category.color}-400 text-lg font-medium border-b border-gray-700/50 pb-2`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-${category.color}-500/50 hover:bg-gray-800 transition-all duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full space-y-6 mt-16">
          <h3 className="text-blue-400 text-lg font-medium border-b border-gray-700/50 pb-2">{t('skills.softSkills')}</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <div 
                key={skill}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500/30 transition-all text-sm text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-6 mt-12">
          <h3 className="text-purple-400 text-lg font-medium border-b border-gray-700/50 pb-2">{t('skills.certifications')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificationsAndLanguages.map((item) => (
              <div 
                key={item.name}
                className="px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-500/30 transition-all text-center flex flex-col justify-center min-h-[90px]"
              >
                <span className="font-medium text-sm md:text-base">{item.name}</span>
                <span className="text-purple-400/80 text-xs mt-1">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
