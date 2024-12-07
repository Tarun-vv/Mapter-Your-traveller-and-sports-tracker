import { supabase } from "./supabase";

export async function getSports() {
  const { data, error } = await supabase.from("sports-mode").select("*");

  if (error) throw new Error("Sports could not be loaded");

  return data;
}
