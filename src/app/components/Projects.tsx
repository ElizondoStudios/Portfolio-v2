import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.pardos.title'),
      description: t('projects.pardos.desc'),
      link: 'https://pardos-inc.com',
      tech: ['React']
    },
    {
      title: t('projects.healthpro.title'),
      description: t('projects.healthpro.desc'),
      link: 'https://healthproags.com',
      tech: ['React']
    },
    {
      title: t('projects.cinemas.title'),
      description: t('projects.cinemas.desc'),
      link: 'https://ckweb.maindsoft.net',
      tech: ['Angular', '.NET', 'SQL Server']
    },
    {
      title: t('projects.granjenito.title'),
      description: t('projects.granjenito.desc'),
      link: 'https://granjenito.com',
      tech: ['Angular', '.NET', 'SQL Server']
    },
    {
      title: t('projects.logia.title'),
      description: t('projects.logia.desc'),
      link: 'https://granlogiaags.com/',
      tech: ['React', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 text-3xl font-bold">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gray-800/30 border border-gray-700 rounded-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col h-full flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg text-gray-200 font-medium">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                    >
                      <span>{t('projects.viewProject')}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
