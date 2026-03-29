/**
 * Frontend Supabase Client
 * Used for OAuth flows (Google sign-in) directly from the browser.
 * The same Supabase project credentials as the backend.
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kepjfstsavspgscwxlii.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcGpmc3RzYXZzcGdzY3d4bGlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NTkwMjAsImV4cCI6MjA5MDMzNTAyMH0.kCpKWwfYW9DPu4IY7Zpuv9eZ-m-CrqZgFXZX0PFVo3k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
