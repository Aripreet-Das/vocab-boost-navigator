
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Briefcase, LineChart, Megaphone, Lock, ClipboardList, Users, ShoppingCart, ArrowRight } from 'lucide-react';
import { Module } from '@/data/vocabularyData';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTheme } from "next-themes";

interface ModuleCardProps {
  module: Module;
  onAddToCart?: (moduleId: string) => void;
}

const ModuleCard = ({ module, onAddToCart }: ModuleCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(module.id);
    } else {
      toast.success(`${module.title} added to cart!`, {
        description: `Price: $${module.price?.toFixed(2)}`,
      });
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-none module-card ${module.isPremium ? 'relative' : ''} ${isDark ? 'bg-corporate-darkblue' : ''}`}>
      {module.isPremium && (
        <div className="absolute top-2 right-2 bg-corporate-navy text-white text-xs py-1 px-2 rounded-full flex items-center font-medium z-10">
          <Lock className="h-3 w-3 mr-1" />
          Premium
        </div>
      )}
      <div className={`${module.color} p-4 flex items-center module-header`}>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
          {renderIcon()}
        </div>
        <h3 className="text-white font-semibold">{module.title}</h3>
      </div>
      <CardContent className="pt-4">
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{module.description}</p>
        <div className="flex justify-between text-sm mb-2">
          <span className={isDark ? 'text-gray-300' : ''}>Progress</span>
          <span className={`font-medium ${isDark ? 'text-gray-300' : ''}`}>
            {module.progress} / {module.totalWords} words
          </span>
        </div>
        <Progress 
          value={progressPercentage} 
          className="h-2" 
        />
        {module.isPremium && (
          <div className="mt-4 flex items-center justify-between font-bold">
            <span className={isDark ? 'text-corporate-gold' : 'text-corporate-navy'}>${module.price?.toFixed(2)}</span>
            {module.progress > 0 && <span className="text-xs text-gray-500">Progress will be saved</span>}
          </div>
        )}
      </CardContent>
      <CardFooter className={`${isDark ? 'bg-corporate-darkgray' : 'bg-gray-50'} px-4 py-3`}>
        {module.isPremium ? (
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-corporate-gold hover:bg-corporate-gold/90 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <Button 
            onClick={handleContinueLearning}
            variant="ghost" 
            className={`${isDark ? 'text-white hover:text-corporate-gold' : 'text-corporate-navy hover:text-corporate-gold'} font-medium text-sm transition-colors`}
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
