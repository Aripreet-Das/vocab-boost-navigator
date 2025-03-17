
import React from 'react';
import { FileText } from 'lucide-react';

interface ScenarioExampleProps {
  scenario: {
    title: string;
    context?: string;
    content: string;
    vocabularyHighlighted: string[];
  };
  context?: string;
}

const ScenarioExample = ({ scenario, context }: ScenarioExampleProps) => {
  // Function to highlight vocabulary words in the content
  const renderHighlightedContent = () => {
    let content = scenario.content;
    
    // Replace each vocabulary word with a highlighted span
    scenario.vocabularyHighlighted.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      content = content.replace(regex, `<span class="text-corporate-gold font-bold">${word}</span>`);
    });
    
    return <div dangerouslySetInnerHTML={{ __html: content }} className="whitespace-pre-wrap" />;
  };
  
  return (
    <div className="text-left">
      <div className="flex items-start mb-3">
        <FileText className="h-5 w-5 mr-2 text-corporate-gold mt-1" />
        <h3 className="text-lg font-bold text-white">Business Scenario</h3>
      </div>
      
      <div className="bg-corporate-darkgray p-5 rounded-md border border-corporate-navy mb-4">
        <h3 className="text-lg font-bold text-white mb-1">{scenario.title}</h3>
        <p className="text-sm text-gray-400 italic mb-4">{context || scenario.context}</p>
        
        <div className="text-gray-300 text-base leading-relaxed">
          {renderHighlightedContent()}
        </div>
      </div>
      
      <div className="pt-4 border-t border-corporate-navy">
        <h4 className="font-medium text-white mb-2">Vocabulary Used:</h4>
        <div className="flex flex-wrap gap-2">
          {scenario.vocabularyHighlighted.map((word, index) => (
            <div key={index} className="px-3 py-1 bg-corporate-navy text-gray-300 rounded-full text-sm">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenarioExample;
