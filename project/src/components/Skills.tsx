import React from 'react';
import { Brain, Code, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    skills: [
      'Deep Learning',
      'Natural Language Processing',
      'Large Language Models',
      'Computer Vision',
      'Reinforcement Learning',
      'PyTorch & TensorFlow'
    ]
  },
  {
    title: 'Software Development',
    icon: Code,
    skills: [
      'Python',
      'SQL',
      'Data Structures',
      'Algorithms',
      'Git',
      'Docker'
    ]
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      'Penetration Testing',
      'Cryptography',
      'LLM Jailbreaking',
      'AI Red Teaming',
      'Cloud Security',
      'Malware Analysis'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Technical Skills
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;