import { Calendar, GraduationCap, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('edu.uaa.degree'),
      institution: 'Universidad Autónoma de Aguascalientes',
      period: 'August 2021 - June 2026',
      grade: '9.76/10',
      link: 'https://en.uaa.mx/portal/'
    },
    {
      degree: t('edu.ual.degree'),
      institution: 'Universidad de Almería',
      period: 'September 2024 - February 2025',
      grade: '9.5/10',
      link: 'https://www.ual.es/'
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900/50">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {t('education.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="relative p-6 bg-gray-800/30 border border-gray-700 rounded-xl hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg text-gray-200 font-medium">{edu.degree}</h3>
                </div>
                
                <div className="space-y-3 mt-auto">
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <LinkIcon className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </a>
                  ) : (
                    <p className="text-purple-400">{edu.institution}</p>
                  )}
                  
                  <div className="flex items-center justify-between mt-4 border-t border-gray-700/50 pt-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
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
