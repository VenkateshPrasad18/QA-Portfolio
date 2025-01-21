import React from 'react';
import { Header } from '../components/Header';
import { Bio } from '../components/Bio';
import { Stats } from '../components/Stats';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Bio />
      <Stats />
      <Skills />
      <Footer />
    </div>
  );
}