import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cwshfazswuakcbtxexjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3c2hmYXpzd3Vha2NidHhleGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMzkwODQsImV4cCI6MjA1NTcxNTA4NH0.ruX1vNHVyKCAKKKPou7cWgasN9SVpn2A9IPfA3INamg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
