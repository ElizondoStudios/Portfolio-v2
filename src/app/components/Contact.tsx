import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  // EmailJS initialization
  useEffect(() => {
    emailjs.init("YgezbUoP_Om7PvM9u");
  }, []);
  // Email form state
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitEmailForm = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send("service_nt7ix0d","template_2g48fsf",{
      title: `New message from ${emailForm.name}`,
      name: emailForm.name,
      time: new Date().toLocaleString(),
      message: emailForm.message,
      email: emailForm.email,
    });
    setEmailForm({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-blue-500/30 transition-all">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:joseluis.elizondof11@outlook.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      joseluis.elizondof11@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-purple-500/30 transition-all">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/in/jos%C3%A9-luis-elizondo-figueroa-562398231" className="text-gray-300 hover:text-purple-400 transition-colors">
                      José Luis Elizondo Figueroa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-blue-500/30 transition-all">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-300">Aguascalientes, MX.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
              <h4 className="text-gray-300 mb-2">Open to Opportunities</h4>
              <p className="text-gray-400 text-sm">
                Available for freelance projects and full-time positions. Let's build something amazing together!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-purple-400 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={onSubmitEmailForm}>
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500/50 text-gray-300 transition-all"
                  placeholder="John Doe"
                  value={emailForm.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                  Your Email
                </label>
                <input 
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500/50 text-gray-300 transition-all"
                  placeholder="john@example.com"
                  value={emailForm.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500/50 text-gray-300 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  value={emailForm.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
