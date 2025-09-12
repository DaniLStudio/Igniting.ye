'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  X, 
  Clock, 
  Tag, 
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const {
    items,
    subtotal,
    discount,
    fees,
    taxes,
    total,
    promoCode,
    isLoading,
    expiresAt,
    updateQuantity,
    removeItem,
    clearCart,
    applyPromoCode,
    removePromoCode,
    getItemCount,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);

  const handleApplyPromo = async () => {
    if (!promoInput.trim()) return;
    
    setIsApplyingPromo(true);
    await applyPromoCode(promoInput.trim());
    setPromoInput('');
    setIsApplyingPromo(false);
  };

  const formatTime = (date: Date) => {
    const diff = date.getTime() - Date.now();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const cartVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        damping: 40,
        stiffness: 300,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 40,
        stiffness: 300,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 300,
      transition: { duration: 0.2 }
    },
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <motion.div
        variants={cartVariants}
        initial="closed"
        animate="open"
        exit="closed"
        className="fixed top-0 right-0 h-full w-full max-w-lg bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-300/10 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-primary-300" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">Shopping Cart</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {getItemCount()} item{getItemCount() !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timer */}
        {expiresAt && items.length > 0 && (
          <div className="px-6 py-3 bg-orange-50 dark:bg-orange-900/20 border-b border-orange-200 dark:border-orange-800">
            <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">
                Cart expires in {formatTime(expiresAt)}
              </span>
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-4">
                <ShoppingCart className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Add some tickets to get started
              </p>
              <Link
                href="/events"
                onClick={onClose}
                className="btn-primary"
              >
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="luxury-card p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base mb-1">
                          {item.eventTitle}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                          {item.ticketTypeName}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {new Date(item.eventDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        {item.isEarlyBird && (
                          <div className="inline-flex items-center mt-2">
                            <Tag className="w-3 h-3 text-green-500 mr-1" />
                            <span className="text-xs text-green-500 font-medium">
                              Early Bird Price
                            </span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-l-lg transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, Math.min(item.maxQuantity, item.quantity + 1))}
                            className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-r-lg transition-colors"
                            disabled={item.quantity >= item.maxQuantity}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        {item.quantity >= item.maxQuantity && (
                          <div className="flex items-center text-xs text-orange-500">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            <span>Max reached</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right">
                        <div className="font-semibold">
                          ${item.totalPrice.toFixed(2)}
                        </div>
                        {item.isEarlyBird && item.earlyBirdPrice && (
                          <div className="text-xs text-neutral-400 line-through">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Promo Code Section */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 dark:border-neutral-700 p-6">
            {promoCode ? (
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">
                    {promoCode.code}
                  </span>
                </div>
                <button
                  onClick={removePromoCode}
                  className="text-green-600 hover:text-green-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium">Promo Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-1 form-input text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleApplyPromo()}
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!promoInput.trim() || isApplyingPromo}
                    className="btn-secondary px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isApplyingPromo ? 'Applying...' : 'Apply'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Order Summary */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 dark:border-neutral-700 p-6 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Service Fee</span>
                <span>${fees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/checkout"
                onClick={onClose}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Checkout</span>
              </Link>
              
              <button
                onClick={clearCart}
                className="w-full text-sm text-neutral-600 dark:text-neutral-400 hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}