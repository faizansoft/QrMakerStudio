import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || 'https://xzyysdzzysnkvzdgcszm.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6eXlzZHp6eXNua3Z6ZGdjc3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMzY4MTIsImV4cCI6MjA3MDkxMjgxMn0.uOnDDn-qfBP2p5rT-_Q_B-es29drLiJqYMh3dujeLv8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
