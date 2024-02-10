import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://cmmnwxfnonpnqpsrhicb.supabase.co", import.meta.env.VITE_SUPABASE || "");