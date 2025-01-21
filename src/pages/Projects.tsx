import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Testing Suite',
      description:
        'I performed manual testing for an e-commerce website, ensuring functionality and reporting bugs',
      tech: ['Smoke Test', 'Sanity Test', 'Re-Testing', 'Regression Testing'],
      metrics: 'Reduced regression testing time by 70%',
    },
    {
      title: 'API Testing Framework',
      description:
        'REST API testing framework with validation and performance testing capabilities.',
      tech: ['Postman'],
      metrics: '100% API coverage with 200 test cases',
    },
    {
      title: 'Social Media Web App Testing',
      description:
        'End-to-end test automation framework for a major Social Media platform for iOS and Android applications using Cypress.',
      tech: ['Cypress', 'Mocha', 'JavaScript', 'Jenkins'],
      metrics: '90% test automation coverage',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-12">Test Projects</h1>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-green-400">{project.metrics}</p>
                <button className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
