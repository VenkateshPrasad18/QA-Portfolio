import React from 'react';
import { Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10 flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
              alt="Venkatesh Prasad"
              className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-xl mb-4"
            />
          </div>
          <div className="flex-1 animate-fadeIn text-center md:text-left">
            <h1 className="text-5xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Venkatesh Prasad Gowd G R
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4">
              QA Engineer & Test Automation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Passionate about delivering high-quality software through
              innovative testing solutions. Specialized in test automation with
              cypress and quality assurance with a proven track record in agile
              environments.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="border border-gray-500 hover:border-blue-400 transition-colors px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </header>
  );
}
