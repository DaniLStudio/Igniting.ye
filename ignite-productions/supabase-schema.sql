-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create users table
create table users (
  id uuid references auth.users on delete cascade primary key,
  email varchar(255) unique not null,
  full_name varchar(255) not null,
  phone varchar(20),
  avatar_url text,
  role varchar(20) default 'customer' check (role in ('customer', 'admin', 'manager')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create venues table
create table venues (
  id uuid default gen_random_uuid() primary key,
  name varchar(255) not null,
  address text not null,
  city varchar(100) not null,
  state varchar(50) not null,
  zip_code varchar(10) not null,
  capacity integer not null,
  description text,
  amenities jsonb,
  google_maps_url text,
  image_urls text[],
  contact_email varchar(255),
  contact_phone varchar(20),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create events table
create table events (
  id uuid default gen_random_uuid() primary key,
  title varchar(255) not null,
  slug varchar(255) unique not null,
  description text not null,
  short_description text,
  event_date timestamp with time zone not null,
  end_date timestamp with time zone,
  venue_id uuid references venues(id),
  category varchar(50) not null check (category in ('concert', 'workshop', 'formal', 'conference', 'service')),
  status varchar(20) default 'draft' check (status in ('draft', 'published', 'cancelled', 'completed')),
  featured_image_url text,
  gallery_urls text[],
  max_capacity integer not null,
  dress_code varchar(100),
  age_restriction integer,
  special_instructions text,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create ticket types table
create table ticket_types (
  id uuid default gen_random_uuid() primary key,
  event_id uuid references events(id) on delete cascade not null,
  name varchar(100) not null,
  description text,
  price decimal(10,2) not null,
  early_bird_price decimal(10,2),
  early_bird_until timestamp with time zone,
  quantity_available integer not null,
  quantity_sold integer default 0,
  max_per_order integer default 10,
  min_per_order integer default 1,
  is_active boolean default true,
  sort_order integer default 0,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create promo codes table
create table promo_codes (
  id uuid default gen_random_uuid() primary key,
  code varchar(50) unique not null,
  description text,
  discount_type varchar(20) not null check (discount_type in ('percentage', 'fixed')),
  discount_value decimal(10,2) not null,
  event_id uuid references events(id) on delete cascade,
  max_uses integer,
  used_count integer default 0,
  min_order_amount decimal(10,2),
  valid_from timestamp with time zone default timezone('utc'::text, now()),
  valid_until timestamp with time zone not null,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create orders table
create table orders (
  id uuid default gen_random_uuid() primary key,
  order_number varchar(50) unique not null,
  user_id uuid references users(id),
  event_id uuid references events(id) not null,
  status varchar(20) default 'pending' check (status in ('pending', 'processing', 'paid', 'cancelled', 'refunded')),
  subtotal decimal(10,2) not null,
  discount_amount decimal(10,2) default 0,
  tax_amount decimal(10,2) default 0,
  fees_amount decimal(10,2) default 0,
  total_amount decimal(10,2) not null,
  currency varchar(3) default 'USD',
  promo_code_id uuid references promo_codes(id),
  payment_intent_id varchar(255),
  payment_method varchar(50),
  billing_email varchar(255) not null,
  billing_name varchar(255) not null,
  billing_phone varchar(20),
  billing_address jsonb,
  special_requests text,
  expires_at timestamp with time zone,
  paid_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create order items table
create table order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references orders(id) on delete cascade not null,
  ticket_type_id uuid references ticket_types(id) not null,
  quantity integer not null,
  unit_price decimal(10,2) not null,
  total_price decimal(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create tickets table
create table tickets (
  id uuid default gen_random_uuid() primary key,
  ticket_number varchar(50) unique not null,
  order_id uuid references orders(id) on delete cascade not null,
  ticket_type_id uuid references ticket_types(id) not null,
  qr_code varchar(255) unique not null,
  status varchar(20) default 'valid' check (status in ('valid', 'used', 'cancelled', 'transferred')),
  attendee_name varchar(255) not null,
  attendee_email varchar(255) not null,
  attendee_phone varchar(20),
  transferred_to_email varchar(255),
  used_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table users enable row level security;
alter table venues enable row level security;
alter table events enable row level security;
alter table ticket_types enable row level security;
alter table promo_codes enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table tickets enable row level security;

-- Create RLS policies

-- Users policies
create policy "Users can view own profile" on users for select using (auth.uid() = id);
create policy "Users can update own profile" on users for update using (auth.uid() = id);
create policy "Users can insert own profile" on users for insert with check (auth.uid() = id);

-- Venues policies
create policy "Anyone can view venues" on venues for select using (true);

-- Events policies
create policy "Anyone can view published events" on events for select using (status = 'published');
create policy "Admins can manage all events" on events for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Ticket types policies
create policy "Anyone can view active ticket types for published events" on ticket_types for select using (
  is_active = true and 
  exists (select 1 from events where events.id = ticket_types.event_id and events.status = 'published')
);
create policy "Admins can manage ticket types" on ticket_types for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Promo codes policies
create policy "Anyone can view active promo codes" on promo_codes for select using (is_active = true);
create policy "Admins can manage promo codes" on promo_codes for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Orders policies
create policy "Users can view own orders" on orders for select using (auth.uid() = user_id);
create policy "Users can create orders" on orders for insert with check (auth.uid() = user_id or user_id is null);
create policy "Users can update own orders" on orders for update using (auth.uid() = user_id);
create policy "Admins can manage all orders" on orders for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Order items policies
create policy "Users can view order items for own orders" on order_items for select using (
  exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);
create policy "Users can create order items for own orders" on order_items for insert with check (
  exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);
create policy "Admins can manage all order items" on order_items for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Tickets policies
create policy "Users can view own tickets" on tickets for select using (
  exists (select 1 from orders where orders.id = tickets.order_id and orders.user_id = auth.uid())
);
create policy "Users can create tickets for own orders" on tickets for insert with check (
  exists (select 1 from orders where orders.id = tickets.order_id and orders.user_id = auth.uid())
);
create policy "Users can update own tickets" on tickets for update using (
  exists (select 1 from orders where orders.id = tickets.order_id and orders.user_id = auth.uid())
);
create policy "Admins can manage all tickets" on tickets for all using (
  exists (select 1 from users where users.id = auth.uid() and users.role in ('admin', 'manager'))
);

-- Create indexes for better performance
create index idx_events_status on events(status);
create index idx_events_event_date on events(event_date);
create index idx_events_slug on events(slug);
create index idx_ticket_types_event_id on ticket_types(event_id);
create index idx_ticket_types_is_active on ticket_types(is_active);
create index idx_orders_user_id on orders(user_id);
create index idx_orders_event_id on orders(event_id);
create index idx_orders_status on orders(status);
create index idx_orders_order_number on orders(order_number);
create index idx_order_items_order_id on order_items(order_id);
create index idx_tickets_order_id on tickets(order_id);
create index idx_tickets_ticket_number on tickets(ticket_number);
create index idx_tickets_qr_code on tickets(qr_code);
create index idx_promo_codes_code on promo_codes(code);
create index idx_promo_codes_is_active on promo_codes(is_active);

-- Create functions for automatic updates
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at columns
create trigger update_users_updated_at before update on users
  for each row execute function update_updated_at_column();

create trigger update_events_updated_at before update on events
  for each row execute function update_updated_at_column();

create trigger update_orders_updated_at before update on orders
  for each row execute function update_updated_at_column();

-- Function to generate order numbers
create or replace function generate_order_number()
returns text as $$
declare
  new_number text;
  counter integer;
begin
  -- Get current date in YYYYMMDD format
  new_number := to_char(now(), 'YYYYMMDD');
  
  -- Get count of orders for today
  select count(*) + 1 into counter
  from orders
  where date(created_at) = current_date;
  
  -- Pad counter with zeros to 4 digits
  new_number := new_number || lpad(counter::text, 4, '0');
  
  return new_number;
end;
$$ language plpgsql;

-- Function to generate ticket numbers
create or replace function generate_ticket_number()
returns text as $$
declare
  new_number text;
  counter integer;
begin
  -- Get current date in YYYYMMDD format
  new_number := to_char(now(), 'YYYYMMDD');
  
  -- Get count of tickets for today
  select count(*) + 1 into counter
  from tickets
  where date(created_at) = current_date;
  
  -- Pad counter with zeros to 6 digits
  new_number := new_number || lpad(counter::text, 6, '0');
  
  return new_number;
end;
$$ language plpgsql;