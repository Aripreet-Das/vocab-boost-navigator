
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import WordOfTheDay from '@/components/WordOfTheDay';
import ModuleCard from '@/components/ModuleCard';
import ProgressStats from '@/components/ProgressStats';
import ScenarioExample from '@/components/ScenarioExample';
import { getWordOfTheDay, moduleData, getUserProgress, getBusinessScenario } from '@/data/vocabularyData';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

const Index = () => {
  const wordOfTheDay = getWordOfTheDay();
  const userProgress = getUserProgress();
  const businessScenario = getBusinessScenario();
  const { theme } = useTheme();
  
  // Get cart items from localStorage
  const [cartItems, setCartItems] = useState<string[]>(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        return parsedCart.map((item: any) => item.id);
      }
      return [];
    } catch (error) {
      return [];
    }
  });

  // Select the first 4 modules to display (2 free + 2 premium or purchased)
  const freeModules = moduleData.filter(module => !module.isPremium).slice(0, 2);
  const purchasedModules = moduleData.filter(module => 
    module.isPremium && cartItems.includes(module.id)
  );
  
  const handleAddToCart = (moduleId: string) => {
    const module = moduleData.find(m => m.id === moduleId);
    if (module && module.isPremium && module.price) {
      if (!cartItems.includes(moduleId)) {
        const newCartItems = [...cartItems, moduleId];
        setCartItems(newCartItems);
        
        // Update localStorage
        const cartData = moduleData
          .filter(m => newCartItems.includes(m.id))
          .map(m => ({ id: m.id, title: m.title, price: m.price || 0 }));
        
        localStorage.setItem('cart', JSON.stringify(cartData));
        // Only show toast for successfully adding module to cart
        toast.success(`${module.title} added to cart`);
      } else {
        // Don't show toast for already-in-cart notification
        console.log("This module is already in your cart");
      }
    }
  };
  
  return (
    <Layout>
      <div className="w-full mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-corporate-navy'} mb-2`}>
            Build Your Professional Vocabulary
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
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
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-corporate-navy'}`}>Learning Modules</h2>
            <Link to="/modules" className={`${theme === 'dark' ? 'text-corporate-lightgold hover:text-corporate-gold' : 'text-corporate-navy hover:text-corporate-gold'} font-medium text-sm transition-colors`}>
              View All Modules →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* First show the free modules */}
            {freeModules.map(module => (
              <ModuleCard key={module.id} module={module} />
            ))}
            
            {/* Then show the purchased modules */}
            {purchasedModules.slice(0, 2).map(module => (
              <ModuleCard key={module.id} module={module} onAddToCart={handleAddToCart} />
            ))}
            
            {/* If we have less than 4 modules total, add more premium modules */}
            {(freeModules.length + purchasedModules.slice(0, 2).length < 4) && 
              moduleData
                .filter(module => module.isPremium && !cartItems.includes(module.id))
                .slice(0, 4 - (freeModules.length + purchasedModules.slice(0, 2).length))
                .map(module => (
                  <ModuleCard key={module.id} module={module} onAddToCart={handleAddToCart} />
                ))
            }
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-corporate-navy'} mb-6`}>Vocabulary in Context</h2>
          <ScenarioExample scenario={businessScenario} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
