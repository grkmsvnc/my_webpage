import React from 'react';
import { Brain, Users, Code } from 'lucide-react';

const researchGroups = [
  {
    name: 'Cohere For AI',
    role: 'Volunteer Prompt Engineer',
    icon: Brain
  },
  {
    name: 'T3 AI\'LE',
    role: 'Volunteer AI Researcher and Developer',
    icon: Code
  },
  {
    name: 'METU Computer Engineering',
    role: 'Applied Natural Language Processing Group',
    icon: Users
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Research Groups
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {researchGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{group.name}</h3>
              <p className="text-gray-400">{group.role}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Research;