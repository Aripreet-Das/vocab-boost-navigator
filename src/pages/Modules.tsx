
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';
import { moduleData } from '@/data/vocabularyData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

const Modules = () => {
  const freeModules = moduleData.filter(module => !module.isPremium);
  const premiumModules = moduleData.filter(module => module.isPremium);
  
  // State for cart items
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
        // Show toast for adding module to cart
        toast.success(`${module.title} added to cart`, {
          icon: <CheckCircle className="h-4 w-4" />,
        });
      } else {
        // Don't show toast for already-in-cart notification
        console.log("This module is already in your cart");
      }
    }
  };

  return (
    <Layout>
      <div className="w-full mx-auto px-4 py-8">
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
            <TabsTrigger value="in-cart">In Cart</TabsTrigger>
            <TabsTrigger value="not-started">Not Started</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.map(module => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="in-progress" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.filter(module => module.progress > 0 && module.progress < module.totalWords).map(module => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  onAddToCart={handleAddToCart}
                />
              ))}
              {premiumModules.filter(module => module.progress > 0 && module.progress < module.totalWords).length === 0 && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-semibold text-corporate-navy mb-2">No modules in progress</h3>
                  <p className="text-gray-600">Purchase a module to begin learning premium content!</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="in-cart" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules.filter(module => cartItems.includes(module.id)).map(module => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  onAddToCart={handleAddToCart}
                />
              ))}
              {premiumModules.filter(module => cartItems.includes(module.id)).length === 0 && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-semibold text-corporate-navy mb-2">No modules in cart</h3>
                  <p className="text-gray-600">Add modules to your cart to see them here!</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="not-started" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumModules
                .filter(module => module.progress === 0 && !cartItems.includes(module.id))
                .map(module => (
                  <ModuleCard 
                    key={module.id} 
                    module={module} 
                    onAddToCart={handleAddToCart}
                  />
              ))}
              {premiumModules.filter(module => module.progress === 0 && !cartItems.includes(module.id)).length === 0 && (
                <div className="col-span-full text-center py-16">
                  <h3 className="text-xl font-semibold text-corporate-navy mb-2">No modules available</h3>
                  <p className="text-gray-600">You've added all available modules to your cart!</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Modules;
