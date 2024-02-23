import supabase from "./supabase";

export async function getCities() {
  let { data: cities, error } = await supabase.from("cities").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cities could not be loaded");
  }
  cities.forEach((city) => {
    console.log("City:", city);
  });

  return cities;
}

export async function getCity(id) {
  const { data: city, error } = await supabase
    .from("cities")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("City not found");
  }

  return city;
}

export async function createCity(newCity) {
  console.log(newCity);
  const { data, error } = await supabase
    .from("cities")
    .insert(newCity)
    .select();

  if (error) {
    console.error(error);
    throw new Error("City couldn't be created");
  }

  return data;
}

export async function deleteCity(id) {
  const { data, error } = await supabase.from("cities").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("City couldn't be deleted");
  }

  return data;
}
