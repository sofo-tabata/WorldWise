import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCity as createCityApi } from "../services/apiCities";
import toast from "react-hot-toast";

export function useCreateCity() {
  const queryClient = useQueryClient();

  const { mutate: createCity, isLoading: isCreating } = useMutation({
    mutationFn: createCityApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      toast.success("New city added");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCity, isCreating };
}
