
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, CreditCard, ShoppingCart } from 'lucide-react';
import { toast } from "sonner";

export interface CartItem {
  id: string;
  title: string;
  price: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onRemoveItem, onCheckout }: CartProps) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveItem = (id: string, title: string) => {
    onRemoveItem(id);
    toast.error(`${title} removed from cart`, {
      icon: <X className="h-4 w-4" />,
    });
  };

  return (
    <Card className="shadow-md dark:bg-corporate-navy/90">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center text-corporate-navy dark:text-white">
          <ShoppingCart className="mr-2 h-5 w-5 text-corporate-gold" />
          Your Cart
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground dark:text-gray-300">Your cart is empty</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Add premium modules to continue your learning journey</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-corporate-darkblue/60 rounded-md">
                <div>
                  <h3 className="font-medium text-corporate-navy dark:text-white">{item.title}</h3>
                  <p className="text-corporate-gold font-bold">${item.price.toFixed(2)}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveItem(item.id, item.title)}
                  className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            <div className="pt-4 border-t mt-4 dark:border-corporate-navy/50">
              <div className="flex justify-between font-medium text-corporate-navy dark:text-white">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onCheckout}
          className="w-full bg-corporate-gold hover:bg-corporate-gold/90 text-white"
          disabled={items.length === 0}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cart;
