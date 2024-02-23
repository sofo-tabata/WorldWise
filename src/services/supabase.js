import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jnnmkjildnfszpwpnujj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impubm1ramlsZG5mc3pwd3BudWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2OTI3OTEsImV4cCI6MjAyNDI2ODc5MX0.hsg33m_IdMVrOFe7QSfCYU8SRCVLmSeZ5QYUnoh8y5Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
