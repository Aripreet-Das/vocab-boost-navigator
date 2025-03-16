
import React from 'react';
import Layout from '@/components/Layout';
import WordOfTheDay from '@/components/WordOfTheDay';
import ModuleCard from '@/components/ModuleCard';
import ProgressStats from '@/components/ProgressStats';
import ScenarioExample from '@/components/ScenarioExample';
import { getWordOfTheDay, moduleData, getUserProgress, getBusinessScenario } from '@/data/vocabularyData';

const Index = () => {
  const wordOfTheDay = getWordOfTheDay();
  const userProgress = getUserProgress();
  const businessScenario = getBusinessScenario();
  
  // Select the first 4 modules to display
  const featuredModules = moduleData.slice(0, 4);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-2">
            Build Your Professional Vocabulary
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your business communication skills one word at a time
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <WordOfTheDay word={wordOfTheDay} />
          </div>
          <div>
            <ProgressStats stats={userProgress} />
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-corporate-navy">Learning Modules</h2>
            <a href="/modules" className="text-corporate-navy hover:text-corporate-gold font-medium text-sm transition-colors">
              View All Modules →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModules.map(module => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-corporate-navy mb-6">Vocabulary in Context</h2>
          <ScenarioExample scenario={businessScenario} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
