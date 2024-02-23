import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/apiCities";

export function useCity(id) {
  const {
    isLoading,
    data: city,
    error,
  } = useQuery({
    queryKey: ["city"],
    queryFn: () => getCity(id),
  });

  return { isLoading, city, error };
}
