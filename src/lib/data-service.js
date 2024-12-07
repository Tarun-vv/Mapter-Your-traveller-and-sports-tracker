import { supabase } from "./supabase";

export async function getSports() {
  const { data, error } = await supabase.from("sports-mode").select("*");

  if (error) throw new Error("Sports could not be loaded");

  return data;
}

export async function addSport(newCity) {
  const { data, error } = await supabase
    .from("sports-mode")
    .insert([newCity])
    .select();

  if (error) throw new Error("Could not add city");

  return data;
}

export async function deleteSport(id) {
  const { data, error } = await supabase
    .from("sports-mode")
    .delete()
    .eq("id", id);

  if (error) throw new Error("Sport could not be added");

  return data;
}
