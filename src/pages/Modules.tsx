
import React from 'react';
import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';
import { moduleData } from '@/data/vocabularyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Modules = () => {
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
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Modules</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="not-started">Not Started</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleData.map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="in-progress" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleData.filter(module => module.progress > 0 && module.progress < module.totalWords).map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleData.filter(module => module.progress === module.totalWords).map(module => (
                <ModuleCard key={module.id} module={module} />
              ))}
              {moduleData.filter(module => module.progress === module.totalWords).length === 0 && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-semibold text-corporate-navy mb-2">No completed modules yet</h3>
                  <p className="text-gray-600">Continue learning to complete your first module!</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="not-started" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleData.filter(module => module.progress === 0).map(module => (
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
