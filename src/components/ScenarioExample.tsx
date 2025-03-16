
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';

interface ScenarioExampleProps {
  scenario: {
    title: string;
    context: string;
    content: string;
    vocabularyHighlighted: string[];
  };
}

const ScenarioExample = ({ scenario }: ScenarioExampleProps) => {
  // Function to highlight vocabulary words in the content
  const renderHighlightedContent = () => {
    let content = scenario.content;
    
    // Replace the markdown bold syntax with span elements
    // This is a simple approach - for production, use a proper markdown parser
    content = content.replace(/\*\*(.*?)\*\*/g, 
      '<span class="text-corporate-gold font-bold">$1</span>');
    
    return <div dangerouslySetInnerHTML={{ __html: content }} className="whitespace-pre-wrap" />;
  };
  
  return (
    <Card className="shadow-lg animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-corporate-navy flex items-center">
          <FileText className="h-5 w-5 mr-2 text-corporate-gold" />
          Business Scenario
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-corporate-navy mb-1">{scenario.title}</h3>
          <p className="text-sm text-gray-600 italic mb-4">{scenario.context}</p>
          
          <div className="prose text-gray-700 text-base">
            {renderHighlightedContent()}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-corporate-navy mb-2">Vocabulary Used:</h4>
            <div className="flex flex-wrap gap-2">
              {scenario.vocabularyHighlighted.map((word, index) => (
                <div key={index} className="px-3 py-1 bg-gray-100 text-corporate-navy rounded-full text-sm">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScenarioExample;
