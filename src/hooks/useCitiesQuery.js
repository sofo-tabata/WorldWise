import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/apiCities";

export function useCitiesQuery() {
  const {
    isLoading: isFetchingCities,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  return { isFetchingCities, cities, error };
}
