import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-10 gap-12 items-center">
        <div className="space-y-6 md:col-span-7">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400">Fullstack Software Engineer</span>
          </div>
          <h1 className="text-fira-code bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-7xl">
            José Luis Elizondo
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-lg">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Aguascalientes, MX</span>
          </div>
          <p className="text-gray-400 text-lg max-w-xl">
            Results-driven Fullstack Software Engineer driving real business value through the design and development of scalable enterprise solutions. Architecting complex ERPs, CRMs, and intuitive mobile applications, transforming architectural blueprints into robust, high-impact products leveraging Agile methodologies.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-blue-400 mb-2">Languages & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Angular', 'React', 'React Native', '.NET', 'Node.js', 'Python', 'SQL', 'AWS'].map((lang) => (
                  <span 
                    key={lang}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/ElizondoStudios" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jos%C3%A9-luis-elizondo-figueroa-562398231/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:joseluis.elizondofl1@outlook.com" 
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end md:col-span-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src="/presentation-photo.jpg"
              alt="Profile"
              className="relative w-80 h-80 object-cover rounded-2xl border-2 border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
