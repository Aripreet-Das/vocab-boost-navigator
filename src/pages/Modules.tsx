
import React from 'react';
import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';
import { moduleData } from '@/data/vocabularyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock } from 'lucide-react';

const Modules = () => {
  const freeModules = moduleData.filter(module => !module.isPremium);
  const premiumModules = moduleData.filter(module => module.isPremium);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">
            Learning Modules
          </h1>
          <p className="text-lg text-gray-600">
            Master professional vocabulary organized by business domains
          </p>
        </div>
        
        {freeModules.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-corporate-navy mb-4">Free Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeModules.map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-4 flex items-center">
          <h2 className="text-xl font-bold text-corporate-navy">Premium Modules</h2>
          <div className="ml-3 bg-corporate-navy text-white text-xs py-1 px-2 rounded-full flex items-center">
            <Lock className="h-3 w-3 mr-1" />
            Premium
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Premium</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="not-started">Not Started</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="in-progress" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.filter(module => module.progress > 0 && module.progress < module.totalWords).map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
              {premiumModules.filter(module => module.progress > 0 && module.progress < module.totalWords).length === 0 && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-semibold text-corporate-navy mb-2">No modules in progress</h3>
                  <p className="text-gray-600">Purchase a module to begin learning premium content!</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="not-started" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.filter(module => module.progress === 0).map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Modules;
