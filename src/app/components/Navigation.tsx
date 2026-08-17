import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav ref={mobileMenuRef} className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-fira-code bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all font-bold"
          >
            JLE
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href='https://drive.google.com/uc?export=download&id=1Z7kGzd-P6aOLX8f9uoEKPr_cf3lH3cwD' target='_blank' className="cursor-pointer px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              {t('nav.downloadCV')}
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-center py-2 text-sm transition-all ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href='https://drive.google.com/uc?export=download&id=1Z7kGzd-P6aOLX8f9uoEKPr_cf3lH3cwD' target='_blank' className="cursor-pointer w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 mt-5 flex items-center justify-center text-center">
              <span>
                {t('nav.downloadCV')}
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
