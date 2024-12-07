import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kjmomqjpdumjiiqwtkbd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqbW9tcWpwZHVtamlpcXd0a2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NDUxNDcsImV4cCI6MjA0OTEyMTE0N30.tpnfZlhTkoLZA08FHyaJQcejpCG6yxlW49J9RXK86cg";

export const supabase = createClient(supabaseUrl, supabaseKey);
