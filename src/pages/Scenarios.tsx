
import React from 'react';
import Layout from '@/components/Layout';
import ScenarioExample from '@/components/ScenarioExample';
import { getBusinessScenario } from '@/data/vocabularyData';
import { Card, CardContent } from "@/components/ui/card";
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
      scenario: businessScenario
    },
    {
      id: 'scenario-2',
      title: 'Marketing Presentation',
      type: 'presentation',
      icon: <Presentation className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Marketing Presentation',
        context: 'You are presenting a new marketing strategy to the executive team.'
      }
    },
    {
      id: 'scenario-3',
      title: 'Client Email Communication',
      type: 'email',
      icon: <Mail className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Client Email Communication',
        context: 'You are drafting an email to an important client about project updates.'
      }
    },
    {
      id: 'scenario-4',
      title: 'Annual Report Summary',
      type: 'report',
      icon: <FileText className="h-5 w-5" />,
      scenario: {
        ...businessScenario,
        title: 'Annual Report Summary',
        context: 'You are writing an executive summary for the annual financial report.'
      }
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">
            Business Scenarios
          </h1>
          <p className="text-lg text-gray-600">
            See vocabulary in action with real-world business examples
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Scenarios</TabsTrigger>
            <TabsTrigger value="meeting">Meetings</TabsTrigger>
            <TabsTrigger value="presentation">Presentations</TabsTrigger>
            <TabsTrigger value="email">Emails</TabsTrigger>
            <TabsTrigger value="report">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 gap-6">
              {scenarios.map(item => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-5 border-b flex items-center">
                      <div className="bg-corporate-navy rounded-full p-2 mr-3 text-white">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-corporate-navy">{item.title}</h3>
                    </div>
                    <div className="p-5">
                      <ScenarioExample scenario={item.scenario} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {['meeting', 'presentation', 'email', 'report'].map(type => (
            <TabsContent key={type} value={type} className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {scenarios.filter(item => item.type === type).map(item => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-5 border-b flex items-center">
                        <div className="bg-corporate-navy rounded-full p-2 mr-3 text-white">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-corporate-navy">{item.title}</h3>
                      </div>
                      <div className="p-5">
                        <ScenarioExample scenario={item.scenario} />
                      </div>
                    </CardContent>
                  </Card>
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
