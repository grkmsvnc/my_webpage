import React from 'react';
import { Building2, Brain, Code, Database } from 'lucide-react';

const experiences = [
  {
    company: 'Huawei R&D Center',
    role: 'AI Research Engineering Intern',
    period: 'Nov 2023 - Aug 2024',
    location: 'Ankara, Turkey',
    icon: Brain,
    description: [
      'LLM Efficiency: Reduced GPU memory requirements of large language models',
      'CUDA and PyTorch optimization',
      'AI Red-Teaming and security enhancement',
      'Hallucination Detection and Reduction',
      'Synthetic Data Generation',
      'Problem Solving and Innovation'
    ]
  },
  {
    company: 'TUBITAK Software Technologies',
    role: 'Artificial Intelligence Consultant',
    period: 'Oct 2023 - Nov 2023',
    location: 'Ankara, Turkey',
    icon: Code,
    description: [
      'Business process analysis and AI integration',
      'Data management and automation solutions'
    ]
  },
  {
    company: 'TUBITAK BILGEM',
    role: 'AI and NLP Researcher Intern',
    period: 'Jul 2023 - Sep 2023',
    location: 'Ankara, Turkey',
    icon: Database,
    description: [
      'Transformer Architecture analysis for Turkish language models',
      'Advanced Modeling Techniques implementation',
      'Model Evaluation metrics development'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 neural-bg opacity-10"></div>
      
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="animate-gradient">
          Professional Journey
        </span>
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all card-hover backdrop-blur-sm"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-500/20 rounded-lg">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
                  <p className="text-xl text-purple-400 mb-1">{exp.role}</p>
                  <p className="text-gray-500 mb-6">{exp.period} | {exp.location}</p>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;