import React from 'react';
import { Target, Zap, Trophy } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold">400+</h3>
            </div>
            <p className="text-gray-400">Test Cases Automated</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">500+</h3>
            </div>
            <p className="text-gray-400">Defects Reported and Tracked</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all transform hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-semibold">5+</h3>
            </div>
            <p className="text-gray-400">Team Collaborations per Sprint</p>
          </div>
        </div>
      </div>
    </section>
  );
}
