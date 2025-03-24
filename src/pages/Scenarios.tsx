
import React from 'react';
import Layout from '@/components/Layout';
import ScenarioExample from '@/components/ScenarioExample';
import { getBusinessScenario } from '@/data/vocabularyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Presentation, Mail, FileText } from 'lucide-react';

const Scenarios = () => {
  const businessScenario = getBusinessScenario();
  
  // Create multiple scenarios from the same data for demo purposes
  const scenarios = [
    {
      id: 'scenario-1',
      title: 'Quarterly Strategy Meeting',
      type: 'meeting',
      icon: <Briefcase className="h-5 w-5" />,
      scenario: businessScenario,
      context: 'You are leading a quarterly strategy meeting with department heads.'
    },
    {
      id: 'scenario-2',
      title: 'Marketing Presentation',
      type: 'presentation',
      icon: <Presentation className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Marketing Presentation',
      },
      context: 'You are presenting a new marketing strategy to the executive team.'
    },
    {
      id: 'scenario-3',
      title: 'Client Email Communication',
      type: 'email',
      icon: <Mail className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Client Email Communication',
      },
      context: 'You are drafting an email to an important client about project updates.'
    },
    {
      id: 'scenario-4',
      title: 'Annual Report Summary',
      type: 'report',
      icon: <FileText className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Annual Report Summary',
      },
      context: 'You are writing an executive summary for the annual financial report.'
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Business Scenarios
          </h1>
          <p className="text-gray-200">
            See vocabulary in action with real-world business examples
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6 bg-corporate-darkblue border border-corporate-navy">
            <TabsTrigger value="all" className="data-[state=active]:bg-corporate-navy data-[state=active]:text-white text-gray-200">All Scenarios</TabsTrigger>
            <TabsTrigger value="meeting" className="data-[state=active]:bg-corporate-navy data-[state=active]:text-white text-gray-200">Meetings</TabsTrigger>
            <TabsTrigger value="presentation" className="data-[state=active]:bg-corporate-navy data-[state=active]:text-white text-gray-200">Presentations</TabsTrigger>
            <TabsTrigger value="email" className="data-[state=active]:bg-corporate-navy data-[state=active]:text-white text-gray-200">Emails</TabsTrigger>
            <TabsTrigger value="report" className="data-[state=active]:bg-corporate-navy data-[state=active]:text-white text-gray-200">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-6">
              {scenarios.map(item => (
                <div key={item.id} className="bg-corporate-darkblue bg-opacity-90 rounded-lg overflow-hidden border border-corporate-navy">
                  <div className="p-5 border-b border-corporate-navy flex items-center">
                    <div className="bg-corporate-navy rounded-full p-2 mr-3 text-white">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="p-5">
                    <ScenarioExample scenario={item.scenario} context={item.context} />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {['meeting', 'presentation', 'email', 'report'].map(type => (
            <TabsContent key={type} value={type} className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {scenarios.filter(item => item.type === type).map(item => (
                  <div key={item.id} className="bg-corporate-darkblue bg-opacity-90 rounded-lg overflow-hidden border border-corporate-navy">
                    <div className="p-5 border-b border-corporate-navy flex items-center">
                      <div className="bg-corporate-navy rounded-full p-2 mr-3 text-white">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                    <div className="p-5">
                      <ScenarioExample scenario={item.scenario} context={item.context} />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Scenarios;
