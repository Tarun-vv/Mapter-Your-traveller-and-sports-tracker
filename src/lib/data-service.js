import { supabase } from "./supabase";

// sports mode

export async function getSports() {
  const { data, error } = await supabase.from("sports-mode").select("*");

  if (error) throw new Error("Sports could not be loaded");

  return data;
}

export async function addSport(newSport) {
  const { data, error } = await supabase
    .from("sports-mode")
    .insert([newSport])
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

// explorer mode
export async function getCities() {
  const { data, error } = await supabase.from("explorer").select("*");

  if (error) throw new Error("Cities could not be loaded");

  return data;
}

export async function addCity(newCity) {
  const { data, error } = await supabase
    .from("explorer")
    .insert([newCity])
    .select();

  if (error) throw new Error("City could not be added");

  return data;
}
