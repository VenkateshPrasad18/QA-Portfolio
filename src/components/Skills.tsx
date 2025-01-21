import React from 'react';
import { Workflow, Microscope, GitBranch } from 'lucide-react';

export function Skills() {
  const categories = [
    { icon: <Workflow className="w-6 h-6" />, title: "Test Automation", skills: [ "Cypress", "Playwright"] },
    { icon: <Microscope className="w-6 h-6" />, title: "Manual Testing", skills: ["Functional", "UI/UX", "Performance", "Security"] },
    { icon: <GitBranch className="w-6 h-6" />, title: "CI/CD", skills: ["Jenkins", "GitHub Actions"] },
  ];

  return (
    <section className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}