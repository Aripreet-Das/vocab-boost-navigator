
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, LineChart, Megaphone, HandshakeIcon, ClipboardList, Users } from 'lucide-react';
import { Module } from '@/data/vocabularyData';
import { Progress } from "@/components/ui/progress";

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  // Helper function to render the correct icon
  const renderIcon = () => {
    switch(module.imageIcon) {
      case 'briefcase':
        return <Briefcase className="h-6 w-6 text-white" />;
      case 'line-chart':
        return <LineChart className="h-6 w-6 text-white" />;
      case 'megaphone':
        return <Megaphone className="h-6 w-6 text-white" />;
      case 'handshake':
        return <div className="h-6 w-6 text-white flex items-center justify-center">🤝</div>; // Using emoji as HandshakeIcon isn't in lucide-react
      case 'clipboard-list':
        return <ClipboardList className="h-6 w-6 text-white" />;
      case 'users':
        return <Users className="h-6 w-6 text-white" />;
      default:
        return <Briefcase className="h-6 w-6 text-white" />;
    }
  };

  const progressPercentage = (module.progress / module.totalWords) * 100;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none">
      <div className={`${module.color} p-4 flex items-center`}>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
          {renderIcon()}
        </div>
        <h3 className="text-white font-semibold">{module.title}</h3>
      </div>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-600 mb-4">{module.description}</p>
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span className="font-medium">
            {module.progress} / {module.totalWords} words
          </span>
        </div>
        <Progress 
          value={progressPercentage} 
          className="h-2" 
          style={{'--progress-width': `${progressPercentage}%`} as React.CSSProperties} 
        />
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-3">
        <button className="text-corporate-navy hover:text-corporate-gold font-medium text-sm transition-colors">
          Continue Learning →
        </button>
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
