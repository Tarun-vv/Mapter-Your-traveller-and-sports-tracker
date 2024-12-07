import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSport as addSportApi } from "./data-service";
import toast from "react-hot-toast";

export function useAddSport() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: addSport } = useMutation({
    mutationFn: (newCity) => addSportApi(newCity),
    onSuccess: () => {
      toast.success("City was added");
      queryClient.invalidateQueries({
        queryKey: ["sports"],
      });
    },
    onError: () => prompt("City could not be added"),
  });

  return { isLoading, addSport };
}
