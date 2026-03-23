import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types matching your PostgreSQL schema
export type Project = {
  id: string;
  title: string;
  description: string;
  github_url: string;
  live_url: string;
  tech_stack: string[];
  status: 'Live' | 'Coming Soon' | 'Developing';
  image_url: string;
  is_featured: boolean;
  created_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  status: 'Live' | 'Coming Soon' | 'Developing';
  users_count: number;
  server_status: 'Online' | 'Offline' | 'Maintenance';
  created_at: string;
};
