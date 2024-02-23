import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCity as deleteCityApi } from "../services/apiCities";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { mutate: deleteCity, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: () => {
      toast.success("city successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCity, isDeleting };
}
