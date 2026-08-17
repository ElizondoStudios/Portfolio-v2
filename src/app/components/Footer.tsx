import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              José Luis Elizondo
            </h4>
            <p className="text-gray-400 text-sm">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-gray-300 mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {[
                { id: 'about', label: t('nav.about') },
                { id: 'skills', label: t('nav.skills') },
                { id: 'experience', label: t('nav.experience') },
                { id: 'education', label: t('nav.education') },
                { id: 'projects', label: t('nav.projects') },
                { id: 'contact', label: t('nav.contact') }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-gray-400 text-sm hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gray-300 mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com/ElizondoStudios" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jos%C3%A9-luis-elizondo-figueroa-562398231/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:joseluis.elizondof11@outlook.com" 
                className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-gray-800 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} José Luis Elizondo Figueroa. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
