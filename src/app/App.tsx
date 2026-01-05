import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="dark min-h-screen bg-gray-900 text-white">
      <Toaster position="bottom-right" richColors />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
