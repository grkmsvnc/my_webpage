import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:gorkemsevinc.00@gmail.com"
            className="p-3 bg-white/10 rounded-none hover:bg-white/20 transition-all transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/g%C3%B6rkem-sevin%C3%A7/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-none hover:bg-white/20 transition-all transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://github.com/grkmsvnc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-none hover:bg-white/20 transition-all transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
        </div>
        <div className="text-gray-500">
          <p className="mb-2">Contact: gorkemsevinc.00@gmail.com</p>
          <p>© {new Date().getFullYear()} Gorkem Sevinc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;