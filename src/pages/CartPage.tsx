
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Cart, { CartItem } from '@/components/Cart';
import { moduleData } from '@/data/vocabularyData';
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle } from 'lucide-react';

const CartPage = () => {
  // In a real app, this would come from a global state or context
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    // We're now showing the toast in the Cart component
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Purchase completed successfully!", {
        icon: <CheckCircle className="h-4 w-4" />,
      });
      setCartItems([]);
    }
    // In a real application, this would redirect to a payment processor
  };

  // Get recommended modules that are not in the cart
  const recommendedModules = moduleData
    .filter(module => module.isPremium && !cartItems.some(item => item.id === module.id))
    .slice(0, 3);

  const handleAddToCart = (moduleId: string) => {
    const module = moduleData.find(m => m.id === moduleId);
    if (module && module.isPremium && module.price) {
      if (!cartItems.some(item => item.id === moduleId)) {
        setCartItems(prev => [...prev, { 
          id: module.id, 
          title: module.title, 
          price: module.price || 0 
        }]);
        toast.success(`${module.title} added to cart`, {
          icon: <CheckCircle className="h-4 w-4" />,
        });
      } else {
        console.log("This module is already in your cart");
      }
    }
  };

  return (
    <Layout>
      <div className="w-full mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Purchase premium modules to accelerate your career vocabulary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Cart 
              items={cartItems} 
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-corporate-navy/5 dark:bg-corporate-navy/20 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-corporate-navy dark:text-white mb-4">Recommended Modules</h2>
              {recommendedModules.length > 0 ? (
                <div className="space-y-4">
                  {recommendedModules.map(module => (
                    <div key={module.id} className="p-3 bg-white dark:bg-corporate-darkblue/80 rounded-md shadow-sm">
                      <h3 className="font-medium dark:text-white">{module.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-corporate-gold font-bold">${module.price?.toFixed(2)}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleAddToCart(module.id)}
                          className="text-corporate-navy border-corporate-navy hover:bg-corporate-navy hover:text-white dark:border-corporate-gold dark:text-corporate-gold dark:hover:bg-corporate-gold dark:hover:text-corporate-navy"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">No more premium modules available</p>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link to="/modules">
                  <Button 
                    variant="ghost" 
                    className="w-full text-corporate-navy dark:text-white hover:bg-corporate-navy/10 dark:hover:bg-white/10"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Browse All Modules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
