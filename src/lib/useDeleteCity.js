import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "./data-service";
import toast from "react-hot-toast";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { mutate: deleteCity, isLoading } = useMutation({
    mutationFn: (id) => deleteCityApi(id),
    onSuccess: () => {
      toast.success("City successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: () => {
      toast.error("City could not be deleted");
    },
  });

  return { deleteCity, isLoading };
}
