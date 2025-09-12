import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper functions for common operations
export const getPublishedEvents = async () => {
  const { data, error } = await supabase
    .from('events')
    .select(`
      *,
      venues (*),
      ticket_types (*)
    `)
    .eq('status', 'published')
    .order('event_date', { ascending: true });
    
  if (error) throw error;
  return data;
};

export const getEventBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('events')
    .select(`
      *,
      venues (*),
      ticket_types (*)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
    
  if (error) throw error;
  return data;
};

export const checkTicketAvailability = async (ticketTypeId: string, quantity: number) => {
  const { data, error } = await supabase
    .from('ticket_types')
    .select('quantity_available, quantity_sold')
    .eq('id', ticketTypeId)
    .single();
    
  if (error) throw error;
  
  const available = data.quantity_available - data.quantity_sold;
  return available >= quantity;
};

export const getTicketTypesForEvent = async (eventId: string) => {
  const { data, error } = await supabase
    .from('ticket_types')
    .select('*')
    .eq('event_id', eventId)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });
    
  if (error) throw error;
  return data;
};

export const validatePromoCode = async (code: string, eventId?: string) => {
  const { data, error } = await supabase
    .from('promo_codes')
    .select('*')
    .eq('code', code.toUpperCase())
    .eq('is_active', true)
    .single();

  if (error || !data) {
    return { isValid: false, error: 'Invalid promo code' };
  }

  // Check if promo code is for a specific event
  if (data.event_id && eventId && data.event_id !== eventId) {
    return { isValid: false, error: 'This promo code is not valid for this event' };
  }

  // Check validity dates
  const now = new Date();
  const validFrom = new Date(data.valid_from);
  const validUntil = new Date(data.valid_until);

  if (now < validFrom) {
    return { isValid: false, error: 'This promo code is not yet active' };
  }

  if (now > validUntil) {
    return { isValid: false, error: 'This promo code has expired' };
  }

  // Check usage limits
  if (data.max_uses && data.used_count >= data.max_uses) {
    return { isValid: false, error: 'This promo code has reached its usage limit' };
  }

  return { isValid: true, promoCode: data };
};

export const createOrder = async (orderData: Database['public']['Tables']['orders']['Insert']) => {
  const { data, error } = await supabase
    .from('orders')
    .insert(orderData)
    .select()
    .single();
    
  if (error) throw error;
  return data;
};

export const createOrderItems = async (orderItems: Database['public']['Tables']['order_items']['Insert'][]) => {
  const { data, error } = await supabase
    .from('order_items')
    .insert(orderItems)
    .select();
    
  if (error) throw error;
  return data;
};

export const createTickets = async (tickets: Database['public']['Tables']['tickets']['Insert'][]) => {
  const { data, error } = await supabase
    .from('tickets')
    .insert(tickets)
    .select();
    
  if (error) throw error;
  return data;
};

export const updateOrderStatus = async (orderId: string, status: Database['public']['Tables']['orders']['Row']['status']) => {
  const { data, error } = await supabase
    .from('orders')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', orderId)
    .select()
    .single();
    
  if (error) throw error;
  return data;
};

export const getUserOrders = async (userId: string) => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      events (*),
      order_items (
        *,
        ticket_types (*)
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data;
};

export const getOrderByNumber = async (orderNumber: string) => {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      events (*),
      order_items (
        *,
        ticket_types (*)
      ),
      tickets (*)
    `)
    .eq('order_number', orderNumber)
    .single();
    
  if (error) throw error;
  return data;
};