
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, LineChart, Megaphone, Lock, ClipboardList, Users, ShoppingCart, ArrowRight } from 'lucide-react';
import { Module } from '@/data/vocabularyData';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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

  const handleContinueLearning = () => {
    if (module.isPremium) {
      toast("This is a premium module. Please purchase to continue.");
    } else {
      toast("Continuing with the free module!");
      // Continue learning logic would go here
    }
  };

  const handlePurchase = () => {
    toast.success(`Purchase initiated for ${module.title}!`, {
      description: `Price: $${module.price?.toFixed(2)}`,
    });
    // In a real app, this would open a payment modal or redirect to checkout
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-none ${module.isPremium ? 'relative' : ''}`}>
      {module.isPremium && (
        <div className="absolute top-2 right-2 bg-corporate-navy text-white text-xs py-1 px-2 rounded-full flex items-center font-medium z-10">
          <Lock className="h-3 w-3 mr-1" />
          Premium
        </div>
      )}
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
        />
        {module.isPremium && (
          <div className="mt-4 flex items-center justify-between text-corporate-navy font-bold">
            <span>${module.price?.toFixed(2)}</span>
            {module.progress > 0 && <span className="text-xs text-gray-500">Progress will be saved</span>}
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-3">
        {module.isPremium ? (
          <Button 
            onClick={handlePurchase}
            className="w-full bg-corporate-gold hover:bg-corporate-gold/90 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Purchase Module
          </Button>
        ) : (
          <Button 
            onClick={handleContinueLearning}
            variant="ghost" 
            className="text-corporate-navy hover:text-corporate-gold font-medium text-sm transition-colors"
          >
            Continue Learning
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
