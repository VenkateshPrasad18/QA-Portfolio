import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

export function Bio() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education Section */}
          <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <b>B.Tech in Electronics And Communications</b>
                <ul>
                  <li>
                    Annamacharya Institute Of Technologies And Sciences with
                    7.01 GPA - 2023
                  </li>
                </ul>
              </li>
              <li className="text-gray-300">
                <b>Intermediate</b> with 81% - 2019
              </li>
              <li className="text-gray-300">
                <b>SSC</b> with 70% - 2017
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          {/* <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-300">QA Engineer</li>
              <li className="text-gray-300">Manual Test Engineer</li>
            </ul>
          </div> */}

          {/* Skills Section (Replaces Achievements) */}
          <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Cypress Test Automation with Javascript
              </li>
              <li className="text-gray-300">Manual Testing & QA Process</li>
              <li className="text-gray-300">Agile Methodology</li>
              <li className="text-gray-300">Rally</li>
              <li className="text-gray-300">CI/CD with Jenkins</li>
              <li className="text-gray-300">Version Control (Git, GitHub)</li>
              <li className="text-gray-300">
                API Testing (Postman, Rest Assured)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
