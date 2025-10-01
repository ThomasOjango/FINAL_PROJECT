import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface FoodListing {
  id: string;
  provider_name: string;
  provider_contact: string;
  food_type: string;
  quantity: string;
  location: string;
  description: string;
  is_available: boolean;
  created_at: string;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  donation_type: 'food' | 'money';
  amount: string;
  payment_method: string;
  message: string;
  created_at: string;
}
