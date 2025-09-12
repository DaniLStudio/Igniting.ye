'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export interface CartItem {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  ticketTypeId: string;
  ticketTypeName: string;
  quantity: number;
  unitPrice: number;
  earlyBirdPrice?: number;
  isEarlyBird: boolean;
  maxQuantity: number;
  totalPrice: number;
}

export interface PromoCode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderAmount?: number;
  isValid: boolean;
  errorMessage?: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  discount: number;
  fees: number;
  taxes: number;
  total: number;
  promoCode?: PromoCode;
  isLoading: boolean;
  expiresAt?: Date;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'id' | 'totalPrice'> }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_PROMO'; payload: PromoCode }
  | { type: 'REMOVE_PROMO' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RECALCULATE_TOTALS' }
  | { type: 'LOAD_FROM_STORAGE'; payload: CartState };

const CART_EXPIRY_MINUTES = 15;
const SERVICE_FEE_PERCENTAGE = 0.035; // 3.5%
const TAX_RATE = 0.08; // 8%

function calculateItemTotal(item: Omit<CartItem, 'totalPrice'>): number {
  const price = item.isEarlyBird && item.earlyBirdPrice ? item.earlyBirdPrice : item.unitPrice;
  return price * item.quantity;
}

function calculateTotals(items: CartItem[], promoCode?: PromoCode) {
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  
  let discount = 0;
  if (promoCode && promoCode.isValid) {
    if (promoCode.discountType === 'percentage') {
      discount = subtotal * (promoCode.discountValue / 100);
    } else {
      discount = promoCode.discountValue;
    }
    
    // Don't let discount exceed subtotal
    discount = Math.min(discount, subtotal);
  }
  
  const afterDiscount = subtotal - discount;
  const fees = afterDiscount * SERVICE_FEE_PERCENTAGE;
  const taxes = afterDiscount * TAX_RATE;
  const total = afterDiscount + fees + taxes;
  
  return { subtotal, discount, fees, taxes, total };
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  discount: 0,
  fees: 0,
  taxes: 0,
  total: 0,
  isLoading: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem: CartItem = {
        ...action.payload,
        id: `${action.payload.eventId}-${action.payload.ticketTypeId}-${Date.now()}`,
        totalPrice: calculateItemTotal(action.payload),
      };
      
      // Check if similar item exists and merge quantities
      const existingItemIndex = state.items.findIndex(
        item => item.eventId === newItem.eventId && item.ticketTypeId === newItem.ticketTypeId
      );
      
      let updatedItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        const newQuantity = existingItem.quantity + newItem.quantity;
        
        if (newQuantity > existingItem.maxQuantity) {
          toast.error(`Maximum ${existingItem.maxQuantity} tickets allowed for ${existingItem.ticketTypeName}`);
          return state;
        }
        
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: newQuantity, totalPrice: calculateItemTotal({ ...item, quantity: newQuantity }) }
            : item
        );
      } else {
        if (newItem.quantity > newItem.maxQuantity) {
          toast.error(`Maximum ${newItem.maxQuantity} tickets allowed for ${newItem.ticketTypeName}`);
          return state;
        }
        updatedItems = [...state.items, newItem];
      }
      
      const totals = calculateTotals(updatedItems, state.promoCode);
      
      return {
        ...state,
        items: updatedItems,
        ...totals,
        expiresAt: new Date(Date.now() + CART_EXPIRY_MINUTES * 60 * 1000),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.quantity > item.maxQuantity) {
            toast.error(`Maximum ${item.maxQuantity} tickets allowed for ${item.ticketTypeName}`);
            return item;
          }
          
          if (action.payload.quantity < 1) {
            return item;
          }
          
          return {
            ...item,
            quantity: action.payload.quantity,
            totalPrice: calculateItemTotal({ ...item, quantity: action.payload.quantity }),
          };
        }
        return item;
      });
      
      const totals = calculateTotals(updatedItems, state.promoCode);
      
      return {
        ...state,
        items: updatedItems,
        ...totals,
      };
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      const totals = calculateTotals(updatedItems, state.promoCode);
      
      return {
        ...state,
        items: updatedItems,
        ...totals,
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...initialState,
      };
    
    case 'APPLY_PROMO': {
      const totals = calculateTotals(state.items, action.payload);
      return {
        ...state,
        promoCode: action.payload,
        ...totals,
      };
    }
    
    case 'REMOVE_PROMO': {
      const totals = calculateTotals(state.items);
      return {
        ...state,
        promoCode: undefined,
        ...totals,
      };
    }
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case 'RECALCULATE_TOTALS': {
      const totals = calculateTotals(state.items, state.promoCode);
      return {
        ...state,
        ...totals,
      };
    }
    
    case 'LOAD_FROM_STORAGE':
      return action.payload;
    
    default:
      return state;
  }
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => Promise<void>;
  removePromoCode: () => void;
  getItemCount: () => number;
  getUniqueEventCount: () => number;
  checkTicketAvailability: (ticketTypeId: string, quantity: number) => Promise<boolean>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ignite-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Check if cart hasn't expired
        if (parsedCart.expiresAt && new Date(parsedCart.expiresAt) > new Date()) {
          dispatch({ type: 'LOAD_FROM_STORAGE', payload: parsedCart });
        } else {
          localStorage.removeItem('ignite-cart');
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        localStorage.removeItem('ignite-cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ignite-cart', JSON.stringify(state));
  }, [state]);

  // Auto-clear expired carts
  useEffect(() => {
    if (state.expiresAt) {
      const timeUntilExpiry = state.expiresAt.getTime() - Date.now();
      if (timeUntilExpiry > 0) {
        const timer = setTimeout(() => {
          dispatch({ type: 'CLEAR_CART' });
          toast.error('Your cart has expired. Please add items again.');
        }, timeUntilExpiry);
        
        return () => clearTimeout(timer);
      }
    }
  }, [state.expiresAt]);

  const addItem = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    toast.success(`Added ${item.quantity} ${item.ticketTypeName} ticket${item.quantity > 1 ? 's' : ''} to cart`);
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    const item = state.items.find(item => item.id === id);
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    if (item) {
      toast.success(`Removed ${item.ticketTypeName} from cart`);
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Cart cleared');
  };

  const applyPromoCode = async (code: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const { data: promoData, error } = await supabase
        .from('promo_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .eq('is_active', true)
        .single();

      if (error || !promoData) {
        toast.error('Invalid promo code');
        return;
      }

      // Validate promo code
      const now = new Date();
      const validFrom = new Date(promoData.valid_from);
      const validUntil = new Date(promoData.valid_until);

      if (now < validFrom || now > validUntil) {
        toast.error('This promo code has expired');
        return;
      }

      if (promoData.max_uses && promoData.used_count >= promoData.max_uses) {
        toast.error('This promo code has reached its usage limit');
        return;
      }

      if (promoData.min_order_amount && state.subtotal < promoData.min_order_amount) {
        toast.error(`Minimum order amount of $${promoData.min_order_amount} required for this promo code`);
        return;
      }

      const promoCode: PromoCode = {
        id: promoData.id,
        code: promoData.code,
        discountType: promoData.discount_type,
        discountValue: promoData.discount_value,
        minOrderAmount: promoData.min_order_amount,
        isValid: true,
      };

      dispatch({ type: 'APPLY_PROMO', payload: promoCode });
      toast.success(`Promo code "${code}" applied successfully!`);
    } catch (error) {
      console.error('Error applying promo code:', error);
      toast.error('Error applying promo code');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const removePromoCode = () => {
    dispatch({ type: 'REMOVE_PROMO' });
    toast.success('Promo code removed');
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getUniqueEventCount = () => {
    const uniqueEvents = new Set(state.items.map(item => item.eventId));
    return uniqueEvents.size;
  };

  const checkTicketAvailability = async (ticketTypeId: string, quantity: number): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .from('ticket_types')
        .select('quantity_available, quantity_sold')
        .eq('id', ticketTypeId)
        .single();

      if (error || !data) {
        return false;
      }

      const available = data.quantity_available - data.quantity_sold;
      return available >= quantity;
    } catch (error) {
      console.error('Error checking ticket availability:', error);
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        applyPromoCode,
        removePromoCode,
        getItemCount,
        getUniqueEventCount,
        checkTicketAvailability,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}