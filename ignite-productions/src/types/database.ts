export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          avatar_url: string | null;
          role: 'customer' | 'admin' | 'manager';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          phone?: string;
          avatar_url?: string;
          role?: 'customer' | 'admin' | 'manager';
        };
        Update: {
          full_name?: string;
          phone?: string;
          avatar_url?: string;
          role?: 'customer' | 'admin' | 'manager';
        };
      };
      venues: {
        Row: {
          id: string;
          name: string;
          address: string;
          city: string;
          state: string;
          zip_code: string;
          capacity: number;
          description: string | null;
          amenities: any | null;
          google_maps_url: string | null;
          image_urls: string[] | null;
          contact_email: string | null;
          contact_phone: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          address: string;
          city: string;
          state: string;
          zip_code: string;
          capacity: number;
          description?: string;
          amenities?: any;
          google_maps_url?: string;
          image_urls?: string[];
          contact_email?: string;
          contact_phone?: string;
        };
        Update: {
          name?: string;
          address?: string;
          city?: string;
          state?: string;
          zip_code?: string;
          capacity?: number;
          description?: string;
          amenities?: any;
          google_maps_url?: string;
          image_urls?: string[];
          contact_email?: string;
          contact_phone?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          short_description: string | null;
          event_date: string;
          end_date: string | null;
          venue_id: string | null;
          category: 'concert' | 'workshop' | 'formal' | 'conference' | 'service';
          status: 'draft' | 'published' | 'cancelled' | 'completed';
          featured_image_url: string | null;
          gallery_urls: string[] | null;
          max_capacity: number;
          dress_code: string | null;
          age_restriction: number | null;
          special_instructions: string | null;
          metadata: any | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          description: string;
          short_description?: string;
          event_date: string;
          end_date?: string;
          venue_id?: string;
          category: 'concert' | 'workshop' | 'formal' | 'conference' | 'service';
          status?: 'draft' | 'published' | 'cancelled' | 'completed';
          featured_image_url?: string;
          gallery_urls?: string[];
          max_capacity: number;
          dress_code?: string;
          age_restriction?: number;
          special_instructions?: string;
          metadata?: any;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string;
          short_description?: string;
          event_date?: string;
          end_date?: string;
          venue_id?: string;
          category?: 'concert' | 'workshop' | 'formal' | 'conference' | 'service';
          status?: 'draft' | 'published' | 'cancelled' | 'completed';
          featured_image_url?: string;
          gallery_urls?: string[];
          max_capacity?: number;
          dress_code?: string;
          age_restriction?: number;
          special_instructions?: string;
          metadata?: any;
        };
      };
      ticket_types: {
        Row: {
          id: string;
          event_id: string;
          name: string;
          description: string | null;
          price: number;
          early_bird_price: number | null;
          early_bird_until: string | null;
          quantity_available: number;
          quantity_sold: number;
          max_per_order: number;
          min_per_order: number;
          is_active: boolean;
          sort_order: number;
          metadata: any | null;
          created_at: string;
        };
        Insert: {
          event_id: string;
          name: string;
          description?: string;
          price: number;
          early_bird_price?: number;
          early_bird_until?: string;
          quantity_available: number;
          quantity_sold?: number;
          max_per_order?: number;
          min_per_order?: number;
          is_active?: boolean;
          sort_order?: number;
          metadata?: any;
        };
        Update: {
          name?: string;
          description?: string;
          price?: number;
          early_bird_price?: number;
          early_bird_until?: string;
          quantity_available?: number;
          quantity_sold?: number;
          max_per_order?: number;
          min_per_order?: number;
          is_active?: boolean;
          sort_order?: number;
          metadata?: any;
        };
      };
      promo_codes: {
        Row: {
          id: string;
          code: string;
          description: string | null;
          discount_type: 'percentage' | 'fixed';
          discount_value: number;
          event_id: string | null;
          max_uses: number | null;
          used_count: number;
          min_order_amount: number | null;
          valid_from: string;
          valid_until: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          code: string;
          description?: string;
          discount_type: 'percentage' | 'fixed';
          discount_value: number;
          event_id?: string;
          max_uses?: number;
          used_count?: number;
          min_order_amount?: number;
          valid_from?: string;
          valid_until: string;
          is_active?: boolean;
        };
        Update: {
          code?: string;
          description?: string;
          discount_type?: 'percentage' | 'fixed';
          discount_value?: number;
          event_id?: string;
          max_uses?: number;
          used_count?: number;
          min_order_amount?: number;
          valid_from?: string;
          valid_until?: string;
          is_active?: boolean;
        };
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          user_id: string | null;
          event_id: string;
          status: 'pending' | 'processing' | 'paid' | 'cancelled' | 'refunded';
          subtotal: number;
          discount_amount: number;
          tax_amount: number;
          fees_amount: number;
          total_amount: number;
          currency: string;
          promo_code_id: string | null;
          payment_intent_id: string | null;
          payment_method: string | null;
          billing_email: string;
          billing_name: string;
          billing_phone: string | null;
          billing_address: any | null;
          special_requests: string | null;
          expires_at: string | null;
          paid_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          order_number: string;
          user_id?: string;
          event_id: string;
          status?: 'pending' | 'processing' | 'paid' | 'cancelled' | 'refunded';
          subtotal: number;
          discount_amount?: number;
          tax_amount?: number;
          fees_amount?: number;
          total_amount: number;
          currency?: string;
          promo_code_id?: string;
          payment_intent_id?: string;
          payment_method?: string;
          billing_email: string;
          billing_name: string;
          billing_phone?: string;
          billing_address?: any;
          special_requests?: string;
          expires_at?: string;
          paid_at?: string;
        };
        Update: {
          order_number?: string;
          user_id?: string;
          event_id?: string;
          status?: 'pending' | 'processing' | 'paid' | 'cancelled' | 'refunded';
          subtotal?: number;
          discount_amount?: number;
          tax_amount?: number;
          fees_amount?: number;
          total_amount?: number;
          currency?: string;
          promo_code_id?: string;
          payment_intent_id?: string;
          payment_method?: string;
          billing_email?: string;
          billing_name?: string;
          billing_phone?: string;
          billing_address?: any;
          special_requests?: string;
          expires_at?: string;
          paid_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          ticket_type_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: {
          order_id: string;
          ticket_type_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
        };
        Update: {
          order_id?: string;
          ticket_type_id?: string;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
        };
      };
      tickets: {
        Row: {
          id: string;
          ticket_number: string;
          order_id: string;
          ticket_type_id: string;
          qr_code: string;
          status: 'valid' | 'used' | 'cancelled' | 'transferred';
          attendee_name: string;
          attendee_email: string;
          attendee_phone: string | null;
          transferred_to_email: string | null;
          used_at: string | null;
          created_at: string;
        };
        Insert: {
          ticket_number: string;
          order_id: string;
          ticket_type_id: string;
          qr_code: string;
          status?: 'valid' | 'used' | 'cancelled' | 'transferred';
          attendee_name: string;
          attendee_email: string;
          attendee_phone?: string;
          transferred_to_email?: string;
          used_at?: string;
        };
        Update: {
          ticket_number?: string;
          order_id?: string;
          ticket_type_id?: string;
          qr_code?: string;
          status?: 'valid' | 'used' | 'cancelled' | 'transferred';
          attendee_name?: string;
          attendee_email?: string;
          attendee_phone?: string;
          transferred_to_email?: string;
          used_at?: string;
        };
      };
    };
  };
}

// Additional utility types
export type Event = Database['public']['Tables']['events']['Row'];
export type EventInsert = Database['public']['Tables']['events']['Insert'];
export type EventUpdate = Database['public']['Tables']['events']['Update'];

export type TicketType = Database['public']['Tables']['ticket_types']['Row'];
export type TicketTypeInsert = Database['public']['Tables']['ticket_types']['Insert'];
export type TicketTypeUpdate = Database['public']['Tables']['ticket_types']['Update'];

export type Order = Database['public']['Tables']['orders']['Row'];
export type OrderInsert = Database['public']['Tables']['orders']['Insert'];
export type OrderUpdate = Database['public']['Tables']['orders']['Update'];

export type Ticket = Database['public']['Tables']['tickets']['Row'];
export type TicketInsert = Database['public']['Tables']['tickets']['Insert'];
export type TicketUpdate = Database['public']['Tables']['tickets']['Update'];

export type User = Database['public']['Tables']['users']['Row'];
export type UserInsert = Database['public']['Tables']['users']['Insert'];
export type UserUpdate = Database['public']['Tables']['users']['Update'];

export type Venue = Database['public']['Tables']['venues']['Row'];
export type VenueInsert = Database['public']['Tables']['venues']['Insert'];
export type VenueUpdate = Database['public']['Tables']['venues']['Update'];

export type PromoCode = Database['public']['Tables']['promo_codes']['Row'];
export type PromoCodeInsert = Database['public']['Tables']['promo_codes']['Insert'];
export type PromoCodeUpdate = Database['public']['Tables']['promo_codes']['Update'];

export type OrderItem = Database['public']['Tables']['order_items']['Row'];
export type OrderItemInsert = Database['public']['Tables']['order_items']['Insert'];
export type OrderItemUpdate = Database['public']['Tables']['order_items']['Update'];