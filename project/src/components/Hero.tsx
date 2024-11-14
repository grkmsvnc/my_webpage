import React from 'react';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="matrix-bg"></div>
      <div className="neural-nodes"></div>
      <div className="power-lines"></div>
      
      <div className="max-w-5xl mx-auto px-4 py-32 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-8 inline-block">
            <Brain className="w-20 h-20 text-indigo-500 animate-pulse" />
          </div>
          
          <h1 className="text-7xl font-bold mb-6 text-glow">
            <span className="gradient-text">
              Gorkem Sevinc
            </span>
          </h1>
          
          <h2 className="text-3xl text-indigo-300 mb-12 font-semibold">
            AI Research Engineer
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              As a student in the Mathematics department, I have a deep interest in Artificial Intelligence (AI) and Natural Language Processing (NLP). I closely follow the latest innovations in AI and specialize in Large Language Models (LLM). My career goal is to become a leading professional in AI-focused projects, applying my expertise to expand my knowledge.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Additionally, I possess strong skills in cybersecurity. I am knowledgeable in penetration testing, network, cloud security, data analysis, and cryptography. I am actively involved in my university's artificial intelligence and cybersecurity clubs. In these clubs, I lead technical teams, ensuring the optimal use of my teammates' abilities and guiding projects to successful completion. Furthermore, by participating in various AI research groups, I have enhanced my knowledge and experience in this field.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="mailto:gorkemsevinc.00@gmail.com"
              className="p-4 bg-indigo-900/30 rounded-none hover:bg-indigo-800/40 transition-all transform hover:-translate-y-1 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-8 h-8 text-indigo-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%B6rkem-sevin%C3%A7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-indigo-900/30 rounded-none hover:bg-indigo-800/40 transition-all transform hover:-translate-y-1 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-indigo-400" />
            </a>
            <a
              href="https://github.com/grkmsvnc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-indigo-900/30 rounded-none hover:bg-indigo-800/40 transition-all transform hover:-translate-y-1 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-indigo-400" />
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-indigo-400">Education</h3>
          <div className="inline-block bg-indigo-900/30 px-8 py-6 border-l-4 border-indigo-600">
            <h4 className="text-xl font-semibold mb-2">Middle East Technical University – METU</h4>
            <p className="text-gray-300 mb-1">Bachelor's in Mathematics</p>
            <p className="text-gray-400">Sep 2019 - Present | Ankara, Turkey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;