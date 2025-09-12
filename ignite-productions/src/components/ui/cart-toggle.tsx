'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { ShoppingCart as ShoppingCartComponent } from '@/components/features/shopping-cart';
import { cn } from '@/lib/utils';

export function CartToggle() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <>
      <motion.button
        onClick={() => setIsCartOpen(true)}
        className={cn(
          'relative p-3 rounded-full transition-all duration-300',
          'bg-white/10 backdrop-blur-sm border border-white/20',
          'hover:bg-white/20 hover:scale-105',
          'focus:outline-none focus:ring-2 focus:ring-primary-300/50'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open shopping cart"
      >
        <ShoppingCart className="w-5 h-5 text-white" />
        
        {/* Item Count Badge */}
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-primary-300 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {itemCount > 99 ? '99+' : itemCount}
          </motion.div>
        )}
      </motion.button>

      <ShoppingCartComponent 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}